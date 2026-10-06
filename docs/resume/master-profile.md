# Master Profile — Aman Nikumb

> Factual career data store in the Resume Tailor plugin format. NOT a formatted resume.
> Every statement below is traceable to one of: `public/Aman_Nikumb_Resume.pdf` (CUR), `public/Aman_Nikumb_Resume_old.pdf` (OLD), `src/lib/content.ts` (SITE), the candidate's answers on 2026-09-14 (USER-1), his corrections and additions on 2026-10-02 (USER-2), the live hirebeacon.in /about page read 2026-10-03 (LIVE), or the LinkedIn profile export `Profile.pdf` read 2026-10-05 (LI).
> Anything not listed here must NOT appear in a tailored resume.

## Contact
- Name: Aman Nikumb
- Location: Gurugram, India (CUR)
- Phone: +91 85140 87234 (CUR)
- Email: amannikumbh73@gmail.com (CUR)
- LinkedIn: https://www.linkedin.com/in/aman-nikumb-6922a6216/ — display as linkedin.com/in/aman-nikumb (CUR, SITE)
- GitHub: https://github.com/aman0981 (CUR, SITE)
- LeetCode: https://leetcode.com/u/aman_147/ (SITE) — optional
- HackerRank: https://www.hackerrank.com/profile/amannikumbh73 (SITE) — optional

## Career Narrative (raw)
Joined Engineo Solutions Pvt Ltd (Gurugram) in Nov 2024 straight after a B.Tech in Computer Science (2020–2024), starting as **Associate Technical Consultant (Nov–Dec 2024, ~2 months)** on ERP deployment work, then moving into **Associate Software Engineer – Data** (LI — see the date conflict in Notes). Through Mar 2026: backend and data-extraction work on client projects — development of the in-house data-extraction framework; a distributed data-extraction platform for a US travel-domain client (Django, FastAPI, Celery, RabbitMQ, Redis, MongoDB, PostgreSQL); participation in an airline crawling bot service; an ETL pipeline for travel airline data; a database automation pipeline for a schema-less platform at a Big-4 consulting firm (Excel→JSON→PostgreSQL via APIs, ~70% manual-effort reduction, dynamic parent-child relational mapping, foreign-key resolution); Redis caching and rate limiting (40%+ fewer redundant API calls); a layered API security stack (API-key, IP allow-listing, JWT, CORS, bad-user-agent flagging); AWS S3 storage and AWS OpenSearch indexing; Celery + RabbitMQ distributed task pipelines; and early Databricks ETL contribution (OLD).

Promoted to **Software Engineer – Data in Apr 2026**. Current work spans two tracks. **Backend / extraction track (USER-2):** end-to-end backend development of a client travel-aggregator web portal deployed on AWS (working knowledge of ECR, EKS, CloudWatch, S3); data-extraction services for two hotel websites fronted by enterprise bot-management platforms (Kasada, Akamai), collecting publicly available data within terms of service and polite rate limits; an upgrade of the data-extraction framework to multi-browser-engine support; and some services written in Golang. **Data track (CUR, SITE, USER-1):** a code-first ETL pipeline on Databricks with PySpark through a bronze→silver→gold medallion architecture (Delta Lake tables, Databricks Workflows/Jobs, cloud object-storage landing zone) loading curated output into Elasticsearch; a streaming API delivering data to clients in chunks with Elasticsearch queries built dynamically from each client's filter payload; and an in-progress centralized API integrating an external data endpoint, a parse service that normalizes responses, and a DocumentDB sink.

Total professional experience as of Oct 2026: ~1 year 11 months (present as "2 years", per USER-1: "approximately 2 years").

Side projects (solo, 2026): XBRL Intelligence Engine (async multi-source financial-data ETL) and HireBeacon (job-intelligence web platform crawling private-sector ATS career pages plus government exam notices).

## Visibility Schema
- `always` — include in every variant
- `variant-specific` — include only for listed Variants
- Known variants: `web-scraping` (Web Scraping / Web Data Extraction / Crawler Engineer), `data-engineer` (Junior/Data Engineer, ETL / Data Platform Engineer)

## Roles

### Engineo Solutions Pvt Ltd — IT services / data-engineering consultancy, Gurugram, India
Visibility: always

#### Software Engineer – Data | Apr 2026 – Present (promotion) (CUR, SITE, USER-2)
Technologies: Python, Golang, FastAPI, AWS (ECR, EKS, CloudWatch, S3), browser automation (multi-engine), Databricks, PySpark, Delta Lake, Databricks Workflows/Jobs, medallion architecture, Elasticsearch, DocumentDB

**Backend & extraction track — Variants: `web-scraping` (also usable in `data-engineer` for cloud/backend credit)**
- Developed the end-to-end backend system for a client travel-aggregator web portal and deployed it on AWS. Working knowledge of ECR, EKS, CloudWatch and S3. (USER-2)
- Built data-extraction services for two hotel websites fronted by enterprise bot-management platforms (**Kasada**, **Akamai**). (USER-2)
  - **Authorization context, stated by the candidate (USER-2): publicly available data, collected within the sites' terms of service and at polite rate limits.** Describe the engineering problem and the compliance posture. NEVER write bypass, evade, defeat, break, circumvent, crack or "anti-bot bypass".
- Upgraded the in-house data-extraction framework with **multi-browser-engine support**. (USER-2)
- Wrote some backend services in **Golang**. (USER-2)

**Data track — Variants: `data-engineer` (also usable in `web-scraping` as a one-line ETL credit)**
- Build a code-first ETL pipeline on Databricks with PySpark, transforming data through a bronze → silver → gold medallion architecture and loading the curated output into Elasticsearch. (CUR, SITE)
- Medallion layers stored as Delta Lake tables; runs orchestrated with Databricks Workflows/Jobs; raw data lands in cloud object storage before the bronze layer. (USER-1 — cloud provider for this workspace still not stated; do NOT name AWS/Azure/GCP for the Databricks landing zone)
- Expose a streaming API that delivers data to clients in chunks, with Elasticsearch queries built dynamically from each client request's filter payload. (CUR, SITE)
- Scaling toward a centralized API integrating an external data endpoint, a parse service to normalize responses, and a DocumentDB sink. (CUR, SITE — in progress; phrase as "designing/scaling", not "delivered")

Metrics: none verified for this role. Do not invent volumes, latencies, uptimes or row counts.

#### Associate Software Engineer – Data | Nov 2024 – Mar 2026 (CUR, OLD, SITE, USER-2)
Technologies: Python, Django, DRF, FastAPI, Celery, RabbitMQ, Redis, MongoDB, PostgreSQL, AWS S3, AWS OpenSearch, Playwright, SeleniumBase, Requests, BeautifulSoup, Pandas, Pydantic, SQLAlchemy, Pytest, Docker, Databricks (early exposure)
Achievements / responsibilities:
- Worked on development of the in-house **data-extraction framework**. (USER-2)
- Built a distributed data-extraction platform for a US travel-domain client (Django, FastAPI, Celery, RabbitMQ, Redis, MongoDB, PostgreSQL) for scalable data aggregation and monitoring. (CUR, OLD, SITE)
- Participated in development of an **airline crawling bot service**. (USER-2)
- Developed an **ETL pipeline for travel airline data**. (USER-2)
- Built a **database automation pipeline for a schema-less platform** at a Big-4 consulting firm. Same engagement as the Excel → JSON → PostgreSQL ingestion work: transforms Excel datasets into JSON payloads and loads them into PostgreSQL through APIs, with dynamic parent-child relational mapping and foreign-key resolution for multi-table loads; cut manual effort ~70%. (USER-2 + CUR, OLD, SITE — one project, two framings; never list as two separate achievements)
- Extraction stack actually used: Playwright (browser automation for JavaScript-rendered pages), Requests + BeautifulSoup (HTTP extraction and HTML parsing), retry/backoff with header and session rotation for request failures, rate limits and access restrictions. (USER-1)
- Designed distributed task-processing pipelines using Celery + RabbitMQ to automate background operations. (OLD, SITE)
- **The backend is described by the candidate himself as a `microservice` architecture**, built with Django and FastAPI, handling a high volume of client requests and **supporting automated web crawlers**. (LI — his own LinkedIn wording; "high volume" is unquantified, so never attach a number to it)
- **Integrated an event-driven webhook system for real-time alerts and job updates**, improving client responsiveness. (LI — new material, not present in either resume; no scale figure available)
- Implemented Redis caching and rate limiting, reducing redundant API calls by 40%+. (CUR, OLD, SITE)
- Developed a layered API security stack: API-key, IP allow-listing, JWT, CORS and bad-user-agent flagging. (CUR, OLD, SITE)
- Integrated AWS S3 for storage and AWS OpenSearch for indexing and fast retrieval. (CUR, OLD, SITE)
- Contributed to ETL pipeline development using Databricks, gaining exposure to distributed data processing and transformation workflows. (OLD)

Metrics: ~70% manual-effort reduction; 40%+ fewer redundant API calls.

#### Associate Technical Consultant | Nov 2024 – Dec 2024 (~2 months) (LI)
> **New role, discovered in the LinkedIn export on 2026-10-05. It appears in neither resume.** It is the first
> role at Engineo and the reason company tenure starts in Nov 2024 while the engineering role starts later.
Technologies: Frappe/ERPNext, Nginx, cloud server administration, HRMS module configuration
- Installed Frappe ERPNext on an Ace Cloud server. (LI)
- Set up Nginx as the public web server for routing. (LI)
- Configured the HRMS interface to the company's requirements. (LI)

Metrics: none. The candidate's own LinkedIn wording claims "enhancing operational efficiency", "improving system
accessibility" and "streamlining HR processes" — all unquantified and unverifiable. Do NOT reproduce those phrases;
they are the kind of unsupported impact claim this profile exists to prevent.

**Positioning note:** this is ERP/infrastructure consulting, not software engineering. Keep it to a single line in
any document so it cannot compete with the engineering narrative. Its real resume value is (a) unbroken tenure from
Nov 2024 and (b) a small, genuine Linux/Nginx/deployment credit.

## Projects (solo builds, 2026) — Visibility: always (ordering varies by variant)

### HireBeacon — live job-intelligence web platform — **hirebeacon.in** (CUR, SITE, USER-2, LIVE)
Live at https://hirebeacon.in · source at github.com/aman0981/HireBeacon
Stack: Python, Supabase (PostgreSQL 17, pgvector, pg_trgm), Next.js 15, TypeScript, Tailwind v4, GitHub Actions, Groq / Gemini, MiniLM embeddings

**Canonical one-line description (USER-2):** a live web platform that surfaces private-sector job openings crawled
from applicant-tracking-system career pages covering **approximately 4,959 companies**, alongside exam and
recruitment notices crawled from **central and state government recruiting bodies**.

**Scale metrics read from the live site's /about page on 2026-10-03 (LIVE — verified, not estimated):**
- **4,959** company career pages tracked
- **69,318** live private-sector jobs
- **203** open government (Sarkari) jobs
- Listings "updated continuously from official sources"; private roles come directly from companies' own career
  pages and applicant-tracking systems, government roles from the official recruiting bodies.

> These are the first verified **scale** numbers for Aman's crawling work and they close the biggest gap the
> earlier ATS review flagged. Use them in the scraping resume.

- **Keep project copy concise (USER-2).** Do NOT list ATS vendors (Greenhouse, Lever, Ashby, Workable, Recruitee, SmartRecruiters, Workday, SuccessFactors, Oracle Cloud, iCIMS, Zoho, Keka, greytHR), the "13 sources / 4-of-5 enterprise ATS" framing, or the adapter-contract / `parse()`-vs-`fetch()` detail. These remain true and are recorded here for interviews only.
- Reverse-engineered keyless/undocumented ATS APIs via live network inspection, with anti-bot handling. (SITE)
- Idempotent, self-healing ingestion: upserts keyed on (company_id, source_id); a soft close-out gate skips deletion when a source returns < 50% of baseline, so a partial or failed crawl never deletes live inventory; per-company and per-item failure isolation.
- Scheduled GitHub Actions: daily crawl, weekly digest, weekly apply-URL verification sweep; runs entirely on free-tier infrastructure.
- Semantic résumé→job matching: PDF → LLM skill extraction → MiniLM 384-dim embeddings → pgvector cosine top-25 via a Postgres RPC → fallback-chained LLM rationale; row-level security on every table.
- Verified metrics: 4,959 company career pages crawled; 69,318 live private-sector listings; 203 open government listings; 336 tests (251 + 85); 384-dim embeddings; 50% close-out threshold.
- Other live features (context for interviews, not resume copy): resume match scoring with a top-25 ranked list, an "Ask Beam" explainer grounded only on the computed match, weekly search digests, deadline reminders and calendar for government roles, transparent salary filters, official apply links only.

### XBRL Intelligence Engine — github.com/aman0981/XBRL_Engine (CUR, SITE)
Stack: Python, FastAPI, async SQLAlchemy 2.0, asyncpg, PostgreSQL 16, Alembic, structlog, Pydantic, Arelle, Docker, Jinja2 + HTMX UI
- Async, multi-source ETL ingesting XBRL/iXBRL from SEC EDGAR (company-facts API + source iXBRL), EU ESEF, and direct upload into one canonical financial model.
- Verified metrics: 24,852 facts ingested (Apple), 71 filings, 552 canonical line items, 135 automated tests (unit + isolated-Postgres integration).
- Canonical mapping with regulator-aware fallback chains; cross-source reconciliation (value, precision, only-in-one discrepancies); bitemporal restatement detection; statement reconstruction from the presentation linkbase.
- Hardened non-root multi-stage Docker image with healthchecks and persistent volumes.

## Education — Visibility: always
- B.Tech, Computer Science — GITA Autonomous College, 2020 – 2024, GPA 8.54 (CUR, OLD)

## Certifications
Two different sets exist and they barely overlap. Reconcile before publishing either document.

**Listed on the resumes (CUR, OLD):**
- Become a Django Developer — LinkedIn Learning
- 100 Days of Code: The Complete Python Pro Bootcamp — Udemy

**Listed on LinkedIn (LI), in profile order:**
- Java Programming Masterclass (updated to Java 17) — *off-positioning*
- **Build REST APIs with FastAPI** — on-positioning, and absent from both resumes
- Android Development — *off-positioning*
- Django Essential Training — probably a component of the LinkedIn Learning "Become a Django Developer" path
- **SQL Basic** — likely the HackerRank SQL Basic badge; the word "Basic" reads as a negative signal next to a
  claimed SQL skill, so weigh whether it earns its place

Neither resume cert appears on LinkedIn, and three LinkedIn certs appear on neither resume. Needs verification.

## Achievements
- 200+ problems solved on LeetCode and HackerRank (CUR, OLD)
- LeetCode 50-Days badge and Top SQL 50 badge (CUR, OLD)

## Skills Inventory (comprehensive; tag = evidence level)
Legend: **U** = used in work or a project (bullet evidence exists) · **L** = listed on the candidate's own resume · **C** = confirmed by the candidate as a real skill (USER-2), presented as capability/tooling familiarity rather than as a project outcome

**Languages:** Python (U), SQL (U), Golang (U — services written in the current role, USER-2)

**Web scraping & browser automation:** Playwright (U), SeleniumBase (L, OLD skills list), Requests (U), BeautifulSoup (U), multi-browser-engine automation (U — framework upgrade, USER-2), HTML/CSS selectors (U), pagination and crawl scheduling (U), keyless/undocumented API extraction (U — HireBeacon), data parsing and cleaning (U)

**Anti-bot mitigation & scraper reliability (all C unless noted):** reverse engineering (U — undocumented ATS APIs), TLS fingerprinting, proxy rotation, CAPTCHA solvers, header and session rotation (U), retries with exponential backoff (U), rate-limit and HTTP 403/429 handling (U), idempotent upserts (U), partial-crawl safeguards (U), responsible/terms-of-service-aware scraping (U), working against enterprise bot-management platforms including Kasada and Akamai (U — USER-2)

**Network analysis & web protocols:** Wireshark (C), browser DevTools DOM/Network inspection (U), network analysis (C), HTTP/HTTPS (U), TLS/SSL (C), headers, cookies, sessions (U), REST (U), JSON (U)

**Data processing & ETL:** PySpark (U), Databricks (U), Delta Lake (U), Databricks Workflows/Jobs (U), medallion architecture (U), travel-airline-data ETL (U — USER-2), Pandas (U), Excel→JSON→PostgreSQL ingestion (U), schema-less platform DB automation (U — USER-2), parent-child mapping / FK resolution (U), idempotent upserts (U), async ETL (U — XBRL), data validation and reconciliation (U — XBRL)

**Backend & APIs:** FastAPI (U), Django (U), DRF (U), Celery (U), Pydantic (U), SQLAlchemy (L/U), REST (U), streaming/chunked APIs (U), JWT / API-key security (U), CORS (U), IP allow-listing (U), rate limiting (U)

**Datastores & search:** PostgreSQL (U), MongoDB (U), Redis (U), Elasticsearch (U), AWS OpenSearch (U), pgvector (U), DocumentDB (U — in-progress design), AWS S3 (U), Supabase (U)

**Async & messaging:** asyncio (U), async SQLAlchemy 2.0 / asyncpg (U), RabbitMQ (U), Celery (U)

**Cloud, infra & tooling:** AWS — ECR, EKS, CloudWatch, S3, OpenSearch (U/C — deployment of the travel-aggregator portal, USER-2), Docker (U), GitHub Actions (U), Git/GitHub (U), Pytest (U — 135 + 336 tests), Alembic (U), structlog (U), Postman (L), JMeter (L), pgAdmin (L), VS Code (L)

**Still NOT claimable (no evidence as of 2026-10-02):** Airflow, dbt, Fivetran, Azure Data Factory, Kafka, Snowflake, BigQuery, Redshift, Spark SQL / Databricks SQL, Unity Catalog, Delta Live Tables, Spark performance tuning, Scrapy, httpx, XPath, Terraform, Azure, GCP, Kubernetes as an operator (EKS is deployment-level working knowledge only, not cluster administration).

## Languages
- English (working language of all documents; proficiency not stated — omit from resume)

## Notes
- Promotion: Associate Software Engineer – Data → Software Engineer – Data, Apr 2026 (USER-1, CUR).
- **Date correction (USER-2):** Associate role ran Nov 2024 – **Mar 2026**. Earlier drafts said Apr 2026.
- **UNRESOLVED DATE CONFLICT (LI, 2026-10-05) — blocking.** LinkedIn dates Associate Software Engineer – Data as
  **Dec 2024 – Mar 2026**, with Associate Technical Consultant covering **Nov – Dec 2024**. Both resumes say the
  Associate Software Engineer role ran **Nov 2024** – Mar 2026, which silently absorbs the two ERP months into the
  engineering role. Company tenure (Nov 2024) is not in dispute; the role boundary is. A recruiter who opens the
  resume and the profile side by side sees the discrepancy. **Ask the candidate which is correct, then fix the
  losing document.** Until then, do not restate either date as settled fact.
- **Title conflict (LI):** LinkedIn lists the current title as plain **"Software Engineer"**; both resumes and SITE
  say **"Software Engineer – Data"**. Needs verification. The LinkedIn Recruiter *Title* filter reads this field, so
  the word "Data" being present or absent changes which searches he appears in.
- **Frontend exposure (LI):** his LinkedIn summary claims "knowledge of HTML5, CSS, JavaScript". Knowledge-level
  only, self-declared, no project evidence. Do not list these as skills on a backend/data profile — they dilute.
- Experience framing: "2 years" (USER-1).
- Data-engineering depth: intermediate (USER-1). Do not present as senior or advanced.
- **Variant split (USER-2):** the backend/extraction track of the current role anchors the `web-scraping` resume; the Databricks/PySpark track anchors the `data-engineer` resume. Both are real, concurrent work in the same role — foregrounding one per resume is emphasis, not omission of the other's existence.
- No employment gaps; no date overlaps.
- Still missing, and worth capturing for future versions: scraping scale for the travel client (sites or pages per day, run cadence) and what data was extracted; the cloud provider behind the Databricks workspace and its data volumes; whether Spark SQL is used; any real job description to re-tailor against.
