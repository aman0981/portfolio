#!/usr/bin/env bash
# Compile a resume .tex with the LaTeX Document Skill's compile_latex.sh inside the derived
# TeX Live Docker image (aman-resume-tex, see Dockerfile). No LaTeX install on the host needed.
#
# Usage (Git Bash, from repo root):
#   bash docs/resume/tools/compile.sh docs/resume/latex/<file>.tex [extra compile_latex.sh flags]
#
# The docs/resume folder is mounted at /work. The PDF is moved to docs/resume/out/ and a
# page PNG preview (pdftoppm, via the skill's --preview flag) is written there as <file>-1.png.
set -euo pipefail

TEX_PATH="${1:?usage: compile.sh docs/resume/latex/<file>.tex [flags]}"; shift || true
IMAGE="${RESUME_TEX_IMAGE:-aman-resume-tex:latest}"
SKILL_DIR="${LATEX_SKILL_DIR:-$HOME/.claude/skills/latex-document}"

tex_dir="$(cd "$(dirname "$TEX_PATH")" && pwd)"          # .../docs/resume/latex
resume_root="$(dirname "$tex_dir")"                       # .../docs/resume
rel_dir="$(basename "$tex_dir")"                          # latex  (or design-preview)
tex_file="$(basename "$TEX_PATH")"
base="${tex_file%.tex}"
mkdir -p "$resume_root/out"

# Convert Git Bash /c/... paths to C:/... so Docker Desktop can bind-mount them.
to_win() { local p="$1"; if [[ "$p" =~ ^/([a-zA-Z])/(.*)$ ]]; then echo "${BASH_REMATCH[1]^^}:/${BASH_REMATCH[2]}"; else echo "$p"; fi; }
skill_win="$(to_win "$(cd "$SKILL_DIR" && pwd)")"
work_win="$(to_win "$resume_root")"

MSYS_NO_PATHCONV=1 docker run --rm \
  -v "${skill_win}:/skill:ro" \
  -v "${work_win}:/work" \
  -w "/work/${rel_dir}" \
  -e TEXINPUTS="/work/latex:" \
  "$IMAGE" \
  bash /skill/scripts/compile_latex.sh "$tex_file" --engine pdflatex --preview --preview-dir /work/out --scale 1654 "$@"

mv -f "$tex_dir/$base.pdf" "$resume_root/out/$base.pdf"
echo "PDF : $resume_root/out/$base.pdf"
ls "$resume_root/out/$base"-*.png 2>/dev/null | sed 's/^/PNG : /' || true
