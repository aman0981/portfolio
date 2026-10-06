# Design previews

The design direction is **Editorial Serif**, chosen by Aman on 2026-10-02 from three original directions.
It is implemented in [`../latex/amanresume.sty`](../latex/amanresume.sty) and used by both resumes.

Every file here carries identical Resume A content, so each preview isolates one styling decision.
Compile any of them with:

```bash
bash docs/resume/tools/compile.sh docs/resume/design-preview/accent-navy.tex
```

| Preview | Change | Status |
|---|---|---|
| `accent-teal-selected.tex` | Deep teal `RGB(10,92,84)` | **In use** |
| `accent-navy.tex` | Deep navy `RGB(22,45,80)` | Alternative |
| `accent-bronze.tex` | Muted bronze `RGB(124,86,42)` | Alternative |
| `fallback-sans.tex` | Source Sans 3 instead of XCharter | Fallback |

Switching is one keyword: `\usepackage[navy]{amanresume}`, `[bronze]`, or `[teal,sans]`.

## What makes the design read as premium

No graphics are involved. The effect comes entirely from typography and spacing:

- **XCharter** as the body face. A transitional serif drawn to hold its shape at small sizes, so it stays
  crisp on screen and sharp in print, where a default LaTeX face looks academic.
- **Letterspaced display capitals** for the name, set at 180/1000 and centred, with the role line beneath
  it in letterspaced small capitals.
- **A double rule** closing the masthead: 0.9pt over 0.4pt, separated by 2.2pt. A long-standing editorial
  device that costs almost no vertical space.
- **Section headings** as letterspaced capitals in the accent, sitting on a full-width hairline, with
  asymmetric space above and below so each section reads as a block.
- **Small capitals for employer names**, which separates company from role without another weight or colour.
- A **small accent bullet** instead of a full-size dot, and a muted grey reserved strictly for secondary
  information: dates, locations, technology stacks.

## ATS position

Single column, `article` class, contact details in the document body, standard section headings, `itemize`
bullets, all fonts embedded, no graphics, no tables used for layout, no sidebars, no icons, no photo, no
skill bars. This follows the LaTeX Document Skill's `references/resume-ats-guide.md` in full.

**One verified caveat.** `pdftotext -layout` sometimes renders a letterspaced heading as `E DUCAT ION`.
That is the column-reconstruction heuristic in that one tool, not a defect in the PDF: it occurs at zero
letterspacing too, and both `pdftotext -raw` and **pypdf** read the headings intact. pypdf walks the content
stream the way the Java parsers behind most applicant tracking systems (PDFBox, Tika) do, so
[`../tools/pdf_check.py`](../tools/pdf_check.py) validates headings against pypdf and reports the pdftotext
behaviour as a note rather than a failure.
