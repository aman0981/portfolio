# JD Research — hybrid target: Junior Data Engineer + Python / FastAPI Backend Engineer

Resume B is deliberately dual-purpose (requested 2026-10-03). It must survive keyword screens for three role
families at once:

1. Junior Data Engineer / Data Engineer / ETL Engineer
2. Python Developer / Python Engineer (backend)
3. FastAPI Developer / Backend Engineer (Python)

Data-engineering requirements are already catalogued in [`data-engineer.md`](data-engineer.md). This file adds the
backend and application-development side, gathered 2026-10-03, and records how the two sets are balanced.

## Sources (backend / application development)
- Glassdoor and Indeed India aggregates for "python fastapi developer" and "FastAPI backend" (Jul–Sep 2026):
  Python 3.x with Django / Flask / FastAPI; REST API development; PostgreSQL; ORM libraries and integrating
  multiple data sources; asynchronous programming in Python; event-driven architecture and messaging
  (Kafka, RabbitMQ); API development, automation and data processing. Experience bands of 1–2 years (junior)
  and 2–4 years are both common.
- Orevida LLC — Backend Engineer (Python / FastAPI), freehire: design, build and maintain RESTful APIs with
  Python and FastAPI; Redis, Celery or equivalent task-queue and caching systems; microservices architecture
  and API design patterns; Docker and containerized deployments; "strong testing discipline: unit, integration
  and end-to-end"; CI/CD pipelines.
- builtin.com — Python Developer (FastAPI, microservices, cloud deployment, CI/CD, containerization).
- Widely-circulated 2026 Python backend roadmap used by recruiters as a de-facto checklist: Python fundamentals,
  OOP, Git/GitHub, SQL, FastAPI/Django, REST API design, authentication (JWT/OAuth), Redis and caching,
  background jobs (Celery/RQ), Docker, message queues.

## Combined keyword set and coverage

### Backend / application development
| Requirement | Candidate coverage | Status |
|---|---|---|
| Python 3.x | Every role and project | Match |
| FastAPI | Skills, current role, XBRL project | Match |
| Django, DRF | Skills, Associate role | Match |
| REST API design | Skills, both roles | Match |
| Asynchronous programming | asyncio, async SQLAlchemy 2.0, asyncpg, XBRL async pipeline | Match |
| Microservices architecture | On the candidate's own prior resume as domain expertise; distributed platform work | Match |
| Celery, background jobs, task queues | Skills, Associate role | Match |
| RabbitMQ, message queues, event-driven | Skills, Associate role | Match |
| Redis and caching | Associate role, 40%+ fewer redundant calls | Match |
| PostgreSQL + ORM | PostgreSQL, SQLAlchemy, Alembic migrations | Match |
| Authentication (JWT) | Layered API security stack bullet | Match |
| OAuth | Not used | Gap (not claimed) |
| Docker, containerized deployment | Skills, both projects | Match |
| CI/CD | GitHub Actions on both projects | Match |
| Testing: unit and integration | Pytest, 135 unit + Postgres integration tests, 336 tests | Match (strong) |
| Cloud deployment | AWS ECR, EKS, CloudWatch, S3 | Match |
| Git / GitHub | Skills | Match |
| Pydantic / validation | Skills, XBRL | Match |
| Kafka | Not used | Gap (not claimed) |
| WebSockets | Not used | Gap (not claimed) |
| Flask | Not used | Gap (not claimed) |

### Data engineering (carried over, unchanged)
PySpark, Databricks, Delta Lake, medallion architecture, ETL/ELT, batch ingestion, data validation and
reconciliation, idempotent upserts, cloud object storage, SQL, orchestration. Full table in
[`data-engineer.md`](data-engineer.md). Still absent and unclaimed: Airflow, dbt, Spark SQL, Unity Catalog,
Azure, Snowflake, Redshift, BigQuery, Spark performance tuning.

## Balancing rules applied to Resume B

- **Headline carries both exact phrases.** "Python Backend & Data Engineer" matches title searches for
  *Python*, *Backend Engineer* and *Data Engineer*; "FastAPI" and "PySpark ETL" sit beside it.
- **Skills groups alternate.** Backend and APIs comes second, Data Engineering and ETL third, so neither
  discipline is buried and a scanner sees both within the first third of the page.
- **Experience bullets alternate by discipline** inside each role rather than clustering, so a recruiter
  skimming either role sees evidence for their own keyword set.
- **Projects serve both.** XBRL Intelligence Engine is an async FastAPI service *and* a multi-source ETL
  pipeline, which is why it leads. HireBeacon supplies pipeline scale.
- **Nothing is invented to balance.** Where a backend keyword has no evidence (OAuth, Kafka, WebSockets,
  Flask), it is simply absent.

## Honest trade-off

A dual-purpose resume is weaker than a dedicated one against any single posting. A specialist Data Engineer
resume would spend the whole skills block on the lakehouse; a specialist FastAPI resume would spend it on API
design, auth and testing. This version gives roughly 45% of its surface to backend, 45% to data and 10% to
shared engineering practice. That is the right call when applying across all three families from one file, and
the wrong call when a specific posting is worth tailoring for. For a role that matters, re-tailor.
