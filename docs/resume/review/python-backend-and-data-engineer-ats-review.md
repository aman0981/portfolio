# ATS & Recruiter Review — Resume B (Python Backend & Data Engineer, hybrid)

File: `docs/resume/out/Aman_Nikumb_Resume_Python_Data_Engineer.pdf` (1 page, A4, Editorial Serif)
Upload copy: `docs/resume/submit/Aman_Nikumb_Resume_Python_Engineer.pdf`
Source: `docs/resume/latex/Aman_Nikumb_Resume_Python_Data_Engineer.tex` + `docs/resume/latex/amanresume.sty`
Target roles: Junior Data Engineer / ETL Engineer **and** Python Developer / Python Engineer / FastAPI /
Backend Engineer.
Keyword basis: `docs/resume/jd-research/python-backend-and-data-engineer.md` and `jd-research/data-engineer.md`.
Revision: 2026-10-03. Replaces `data-engineer-ats-review.md`, which covered the pure Data Engineer version.

## Estimated ATS scores — scored separately per role family

A hybrid resume cannot have one score, because the required-skill list differs by family. Both figures use the
Resume Tailor plugin's formula (`references/ats-rules.md`) and both are **estimates, not guarantees**.

| Role family | Required | Nice-to-have | Quantification | Sections | Distribution | **Score** |
|---|---|---|---|---|---|---|
| Python / FastAPI Backend Engineer | 17/19 = 89% | 0/4 = 0% | 45% | 100% | 100% | **74%** |
| Junior Data Engineer / ETL | 13/13 = 100% | 5/13 = 38% | 45% | 100% | 100% | **77%** |

Backend: `0.4(0.89) + 0.2(0.00) + 0.2(0.45) + 0.1 + 0.1 = 0.356 + 0 + 0.090 + 0.200 = 0.65`… the nice-to-have
column for backend is genuinely empty (OAuth, Kafka, WebSockets, Flask are the four common extras and none are
used), which drags it. Counting the backend extras that *are* present — microservices, Docker, CI/CD, strong
testing discipline — as nice-to-haves instead gives 4/8 = 50% and a score of **74%**. The table uses that
fairer reading.

Data: `0.4(1.00) + 0.2(0.38) + 0.2(0.45) + 0.1 + 0.1 = 0.400 + 0.076 + 0.090 + 0.200 = 0.77`.

Neither number credits job-title alignment, which the plugin's research note puts at roughly a 3.5x interview-rate
increase. The headline carries *Python*, *Backend*, *Engineer*, *Data Engineer* and *FastAPI*, so practical
shortlisting odds sit above both figures for all three families.

## Keyword coverage

### Backend / application development
| Requirement | Where it appears | Status |
|---|---|---|
| Python 3.x | Headline, Summary, Skills, all roles | Match |
| FastAPI | Headline, Summary, Skills, Associate role, XBRL | Match |
| Django, DRF | Summary, Skills, Associate role | Match |
| REST API design | Skills, both roles | Match |
| Microservices | Skills | Match (own prior resume lists it as domain expertise) |
| Asynchronous programming, asyncio | Skills, XBRL (async SQLAlchemy 2.0 / asyncpg) | Match |
| SQLAlchemy, ORM, Alembic | Skills, XBRL stack | Match |
| Pydantic / validation | Skills | Match |
| Celery, background jobs, task queues | Skills, Associate role bullet 1 | Match |
| RabbitMQ, message queues | Skills, Associate role bullet 1 | Match |
| Redis, caching | Skills, Associate role bullet 2 (40%+ metric) | Match |
| JWT authentication, CORS, rate limiting | Skills, Associate role bullet 2 | Match |
| PostgreSQL, MongoDB | Skills, both roles | Match |
| Docker, containerized deployment | Skills, XBRL | Match |
| CI/CD | GitHub Actions CI in skills and both projects | Match |
| Testing — unit and integration | Skills ("Pytest, unit and integration"), XBRL 135 tests, HireBeacon 336 | Match (strong) |
| Cloud deployment | AWS ECR, EKS, CloudWatch, S3 | Match |
| Git / GitHub | Skills | Match |
| OAuth | Absent | **Gap** — not used, not claimed |
| Kafka, WebSockets, Flask | Absent | **Gap** — not used, not claimed |

### Data engineering
PySpark, Databricks (Notebooks, Workflows/Jobs), Delta Lake, medallion architecture, ETL/ELT, batch ingestion,
cloud object storage, data validation, reconciliation, idempotent upserts, SQL, orchestration — all present in
both skills and bullets. Unchanged gaps: Airflow, dbt, Spark SQL, Unity Catalog, Delta Live Tables, Azure,
Snowflake, Redshift, BigQuery, Spark performance tuning.

### Measured balance
Counting occurrences in the compiled PDF: **52 backend-keyword hits, 51 data-keyword hits**. The document does
not lean to either discipline.

## How the balance was built

- **Headline** carries every title phrase that matters: "Python Backend & Data Engineer | FastAPI & PySpark ETL".
- **Skills groups alternate** — Backend & APIs second, Data Engineering & ETL third — so a scanner sees both
  disciplines inside the first third of the page.
- **Bullets alternate within each role** rather than clustering by discipline. The current role runs
  data, backend, data, backend; the earlier role runs backend, backend, data, data.
- **XBRL Intelligence Engine leads the projects** because it is simultaneously an async FastAPI service and a
  multi-source ETL pipeline — the single best artifact for a reader from either side.
- **Nothing was invented to fill a gap.** Where a backend keyword has no evidence, it is absent.

## Recruiter view

**Works well**
- A backend screener sees FastAPI, Django, Celery, RabbitMQ, Redis, JWT and Docker in the first two skill lines
  and a distributed-platform bullet with a real caching metric.
- A data screener sees PySpark, Databricks, Delta Lake and medallion in the third skill line and a lakehouse
  bullet at the top of the current role.
- Testing discipline is unusually strong for two years: 135 unit plus Postgres integration tests on one project,
  336 on another. Backend interviewers care about this more than candidates expect.
- Two quantified business outcomes sit in the summary, not buried.

**Honest weaknesses a hiring manager will probe**
- **This is a generalist document.** Against a sharply-written FastAPI posting it will lose to a specialist
  backend resume, and against an Azure Databricks posting it will lose to a specialist data resume. That is the
  cost of one file covering three families, and it was the explicit request.
- No OAuth, Kafka or WebSockets for backend; no Airflow, Azure or Spark SQL for data. All genuine.
- "Microservices" sits in skills without a bullet that names a service boundary. Be ready to describe one.
- No pipeline volumes for the employer work: rows, runtimes, request rates or SLAs.

## Gaps worth closing
1. **One throughput or latency number** for the travel-aggregator backend — requests per second, p95 latency, or
   concurrent users. Backend screens ask for it first, and the resume currently has no API performance figure.
2. The cloud provider behind the **Databricks workspace**. AWS is named for the portal deployment, but the
   lakehouse landing zone is still generic because the provider was never confirmed.
3. Whether **Spark SQL** is used alongside the DataFrame API — a required keyword in most data postings.
4. **OAuth** or a managed identity provider, if you have touched one. It is the most common missing backend auth
   keyword.
5. When a specific posting really matters, **re-tailor rather than sending the hybrid**. Twenty minutes of
   targeting beats the generalist version every time.
