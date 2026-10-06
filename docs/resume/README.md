# Resumes — build and provenance

Two role-targeted, single-column, ATS-safe resumes set in an original **Editorial Serif** LaTeX style, plus the
factual data store they are written from.

## Deliverables

| File | What it is |
|---|---|
| `out/Aman_Nikumb_Resume_Backend_Web_Scraping.pdf` | Resume A — Backend Engineer + Web Scraping, hybrid (1 page) |
| `out/Aman_Nikumb_Resume_Python_Data_Engineer.pdf` | Resume B — Python Backend & Data Engineer, hybrid (1 page) |
| `submit/` | Upload-ready copies with ATS-friendly file names |
| `out/*-1.png` | Page previews rendered by `pdftoppm` during compilation |
| `latex/*.tex`, `latex/amanresume.sty` | Sources. The style file is shared; each resume file is content only |
| `master-profile.md` | Every verified fact, with its source and evidence level. Nothing enters a resume unless it is here |
| `jd-research/*.md` | Representative job descriptions per role and the derived keyword sets |
| `review/*.md` | Per-resume ATS keyword coverage, estimated score and recruiter critique |
| `design-preview/` | Accent and typeface variants of the chosen design, and why it was chosen |
| `tools/` | Docker image definition, compile wrapper, PDF validator |

## Rebuild

Requires Docker Desktop. No LaTeX installation on the host.

```bash
docker build -t aman-resume-tex:latest docs/resume/tools          # once
bash docs/resume/tools/compile.sh docs/resume/latex/Aman_Nikumb_Resume_Backend_Web_Scraping.tex
bash docs/resume/tools/compile.sh docs/resume/latex/Aman_Nikumb_Resume_Python_Data_Engineer.tex
python docs/resume/tools/pdf_check.py docs/resume/out/Aman_Nikumb_Resume_Python_Data_Engineer.pdf --expect-pages 1
```

`compile.sh` runs the LaTeX Document Skill's own `scripts/compile_latex.sh` inside the container, mounting the
skill read-only at `/skill` and this folder at `/work`. The PDF and PNG previews land in `out/`.

## The design

**Editorial Serif**, chosen by Aman on 2026-10-02 from three original directions. The premium quality comes from
typography alone — no graphics are involved: XCharter body text, letterspaced display capitals for the name, a
double rule closing the centred masthead, letterspaced capitals on hairlines for section headings, small capitals
for employer names, and a muted grey reserved for dates, locations and technology stacks. Accent is one keyword
away from changing: `\usepackage[navy]{amanresume}` or `[bronze]`, with `[teal,sans]` as a sans fallback. See
[`design-preview/README.md`](design-preview/README.md).

ATS contract: single column, `article` class, contact details in the document body, standard section headings,
`itemize` bullets, all fonts embedded, no graphics, tables-for-layout, sidebars, icons, photos or skill bars.
One verified caveat is documented in the design README: `pdftotext -layout` can split a letterspaced heading
(`E DUCAT ION`), but that is a heuristic in that one tool — `pdftotext -raw` and pypdf, which parse the way the
Java libraries behind most ATS do, read the headings intact.

## Tooling provenance

- **LaTeX Document Skill** (github.com/ndpvt-web/latex-document-skill, MIT) — cloned and installed to
  `~/.claude/skills/latex-document`. Its `compile_latex.sh` performs every compilation here (engine detection,
  multi-pass, error analysis, `pdftoppm` previews). Its `references/resume-ats-guide.md` set the ATS rules the
  style file follows, and `assets/templates/resume-modern-professional.tex` was the structural starting point
  before the Editorial Serif rewrite. Script line endings had to be converted from CRLF to LF to run under bash.
- **Resume Tailor Plugin** (github.com/olegvg/resume-tailor-plugin, MIT) — cloned and installed to
  `~/.claude/plugins/resume-tailor-plugin`. Its workflow was applied by hand: the master-profile format and
  visibility schema, the ATS rules and scoring formula, the summary, skills-grouping and achievement-bullet
  templates, and the EN/US conventions. Its final output stage (HTML plus weasyprint, or pandoc DOCX) was
  replaced by LaTeX. The `/resume-tailor` slash command becomes available after restarting Claude Code.
- **TeX Live** — `texlive/texlive:latest-medium` plus `titlesec`, `sourcesans`, `xcharter`, `fira`, `roboto`,
  `fontawesome5`, `fontaxes` and `poppler-utils` (see `tools/Dockerfile`).

## Rules that govern content

1. Every claim traces to `master-profile.md`, which cites the source resume, the portfolio content file, the
   live hirebeacon.in site, or Aman's own confirmation.
2. Tools never used and tools not confirmed are excluded. The current exclusion list is in the master profile.
3. No invented metrics. Scale figures for HireBeacon were read from the live site on 2026-10-03.
4. Scraping work is described as anti-bot mitigation, access-restriction handling, responsible scraping and
   scraper reliability — never as bypassing, evasion or hacking. The compiled PDFs are scanned for this.
5. **Both resumes are backend-led hybrids** that foreground different real work from the same role. Resume A
   pairs Backend Engineer with web scraping and data extraction; Resume B pairs it with data engineering
   (Databricks, PySpark, Delta Lake). Data-engineering terms stay out of Resume A, and scraping terms stay
   secondary in Resume B, so neither competes with itself.
6. Resume A led with "Web Scraping Engineer" until 2026-10-05. It was changed because
   `job-search/2026-10-04-job-shortlist.md` found that NCR roles carrying that title pay ₹18–30k/month, while
   well-paid scraping work sits inside backend roles at product companies. No scraping content was removed —
   the scraping ATS score is unchanged at an estimated 83%.
7. A hybrid is weaker than a dedicated resume against any single posting. Both reviews state the trade-off and
   name the gaps; for a role that genuinely matters, re-tailor rather than sending the hybrid.
