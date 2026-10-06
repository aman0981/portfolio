# Upload-ready copies

Applicant tracking systems index the file name. The LaTeX skill's ATS guide asks for
`FirstName_LastName_Resume.pdf` and warns against extra tokens, so these are the copies to upload.

| Upload this | Content | Use for |
|---|---|---|
| `Aman_Nikumb_Resume.pdf` | Resume A — Backend Engineer + Web Scraping (hybrid) | Backend Engineer, Python Developer/Engineer, SDE, **and** Web Scraping / Crawler / Data Extraction / Automation roles. |
| `Aman_Nikumb_Resume_Python_Engineer.pdf` | Resume B — Python Backend & Data Engineer (hybrid) | Junior Data Engineer / ETL, **and** Python Developer / FastAPI / Backend Engineer. |

## Which one to send

Both are backend-led; they differ in the second discipline.

- **Anything touching scraping, crawling, extraction, browser automation or anti-bot work → Resume A.**
  It is also the better general Backend/SDE resume, because it carries Golang and the AWS deployment early.
- **Anything touching ETL, pipelines, Spark, Databricks or a data platform → Resume B.**
- **A plain Python/FastAPI backend role with neither emphasis → Resume A**, unless the posting mentions data
  pipelines.

Apply for one role family at a time and upload only that file. Regenerate after any edit:

```bash
bash docs/resume/tools/compile.sh docs/resume/latex/Aman_Nikumb_Resume_Backend_Web_Scraping.tex
cp docs/resume/out/Aman_Nikumb_Resume_Backend_Web_Scraping.pdf docs/resume/submit/Aman_Nikumb_Resume.pdf

bash docs/resume/tools/compile.sh docs/resume/latex/Aman_Nikumb_Resume_Python_Data_Engineer.tex
cp docs/resume/out/Aman_Nikumb_Resume_Python_Data_Engineer.pdf docs/resume/submit/Aman_Nikumb_Resume_Python_Engineer.pdf
```
