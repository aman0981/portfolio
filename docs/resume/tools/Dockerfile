# Derived TeX Live image for compiling the resumes with the LaTeX Document Skill's compile_latex.sh.
# texlive/texlive:latest-medium lacks titlesec, the Source Sans / XCharter / Fira / Roboto / FontAwesome5
# packages, and poppler-utils (pdftoppm, needed by compile_latex.sh --preview; pdffonts for validation).
# Build:  docker build -t aman-resume-tex:latest docs/resume/tools
FROM texlive/texlive:latest-medium
RUN apt-get update && apt-get install -y --no-install-recommends poppler-utils && rm -rf /var/lib/apt/lists/*
RUN tlmgr install titlesec sourcesans xcharter fira roboto fontawesome5 fontaxes
RUN kpsewhich titlesec.sty sourcesans.sty XCharter.sty FiraSans.sty roboto.sty fontawesome5.sty fontaxes.sty && pdftoppm -v 2>&1 | head -1
