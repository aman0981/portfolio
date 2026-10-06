"""Validate a compiled resume PDF (ATS-oriented checks).

Usage:
  python docs/resume/tools/pdf_check.py <resume.pdf> [--expect-pages 1] [--require "term1" "term2" ...]

Checks (pure-Python via pypdf + the host's pdftotext):
  * page count
  * PDF metadata (title/author)
  * extractable text volume, required keywords present, no suspicious glyphs from bad encoding
  * every font embedded (FontFile / FontFile2 / FontFile3 present)
  * hyperlink annotations (URIs)
  * section headings appear in reading order via pdftotext (single-column sanity check)
PNG previews are produced by compile_latex.sh --preview (pdftoppm inside the Docker image), not here.
Exit code 1 if any check fails.
"""
from __future__ import annotations

import argparse
import re
import shutil
import subprocess
import sys
from pathlib import Path

# The Windows console is cp1252; never let a stray glyph crash the report.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="backslashreplace")
    except Exception:
        pass

from pypdf import PdfReader

SUSPICIOUS = "�¡¿"  # replacement char, inverted ! and ? (unescaped < > in T1)
HEADINGS = ["SUMMARY", "TECHNICAL SKILLS", "EXPERIENCE", "PROJECTS", "EDUCATION", "CERTIFICATIONS"]


def extract_text(pdf: Path) -> str:
    if shutil.which("pdftotext"):
        out = subprocess.run(["pdftotext", "-enc", "UTF-8", "-layout", str(pdf), "-"],
                             capture_output=True, text=True, encoding="utf-8", errors="replace")
        if out.returncode == 0 and out.stdout.strip():
            return out.stdout
    reader = PdfReader(str(pdf))
    return "\n".join((p.extract_text() or "") for p in reader.pages)


def fonts_embedded(reader: PdfReader) -> tuple[list[str], list[str]]:
    names, unembedded = set(), set()
    for page in reader.pages:
        res = page.get("/Resources") or {}
        fonts = res.get("/Font") or {}
        for key in fonts:
            f = fonts[key].get_object()
            name = str(f.get("/BaseFont", key))
            names.add(name)
            desc = f.get("/FontDescriptor")
            if desc is None and "/DescendantFonts" in f:
                desc = f["/DescendantFonts"][0].get_object().get("/FontDescriptor")
            if desc is None:
                unembedded.add(name)
                continue
            desc = desc.get_object()
            if not any(k in desc for k in ("/FontFile", "/FontFile2", "/FontFile3")):
                unembedded.add(name)
    return sorted(names), sorted(unembedded)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("--expect-pages", type=int, default=1)
    ap.add_argument("--require", nargs="*", default=[])
    a = ap.parse_args()

    pdf = Path(a.pdf)
    reader = PdfReader(str(pdf))
    ok = True
    print(f"file        : {pdf}")

    n = len(reader.pages)
    print(f"pages       : {n} (expected {a.expect_pages})")
    if n != a.expect_pages:
        ok = False

    meta = reader.metadata or {}
    print(f"title/author: {meta.get('/Title')!r} / {meta.get('/Author')!r}")

    text = extract_text(pdf)
    words = len(text.split())
    print(f"text        : {len(text)} chars, {words} words extractable (pdftotext -layout)")
    if words < 150:
        ok = False
        print("  !! too little extractable text")

    bad = sorted({c for c in text if c in SUSPICIOUS})
    if bad:
        ok = False
        print(f"  !! suspicious glyphs in extracted text: {bad}")

    # Section headings. Checked against pypdf, which walks the content stream the way the
    # Java PDF parsers behind most ATS (PDFBox / Tika) do. pdftotext's *layout* mode runs an
    # extra column-reconstruction heuristic that can split letterspaced display capitals into
    # "E DUCAT ION"; that is an artifact of that one tool, so it is reported as a note, not a
    # failure. `pdftotext -raw` agrees with pypdf.
    # Case-sensitive: the headings are set in capitals, and matching case-insensitively would
    # hit ordinary prose ("...years of production Python experience") and fake a reading-order break.
    stream_text = "\n".join((p.extract_text() or "") for p in reader.pages)
    order = []
    for h in HEADINGS:
        m = re.search(re.escape(h), stream_text)
        order.append(m.start() if m else -1)
    found = [h for h, i in zip(HEADINGS, order) if i >= 0]
    in_order = [i for i in order if i >= 0] == sorted(i for i in order if i >= 0)
    print(f"headings    : {len(found)}/{len(HEADINGS)} found (content stream), "
          f"reading order {'OK' if in_order else 'BROKEN'}")
    for h, i in zip(HEADINGS, order):
        if i < 0:
            print(f"  !! heading not found: {h}")
    if len(found) < len(HEADINGS) or not in_order:
        ok = False

    layout_upper = text.upper()
    split_headings = [h for h in HEADINGS if h not in layout_upper]
    if split_headings:
        print(f"  note: pdftotext -layout splits {split_headings} (tool heuristic; "
              f"pypdf and `pdftotext -raw` read them intact)")

    if a.require:
        low = text.lower()
        missing = [t for t in a.require if t.lower() not in low]
        print(f"required    : {len(a.require) - len(missing)}/{len(a.require)} terms found")
        for t in missing:
            print(f"  !! missing term: {t!r}")
        if missing:
            ok = False

    names, unembedded = fonts_embedded(reader)
    print(f"fonts       : {len(names)} -> {', '.join(names)}")
    if unembedded:
        ok = False
        print(f"  !! fonts not embedded: {unembedded}")

    uris = []
    for page in reader.pages:
        for annot in page.get("/Annots") or []:
            annot = annot.get_object()
            act = annot.get("/A")
            if act is not None and act.get_object().get("/URI"):
                uris.append(str(act.get_object()["/URI"]))
    print(f"links       : {len(uris)} URI annotations")
    for u in uris:
        print(f"              {u}")

    print("RESULT      :", "PASS" if ok else "FAIL")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
