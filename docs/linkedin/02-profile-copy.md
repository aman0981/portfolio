# Copy-Paste Profile Content (§4 – §11)

Everything in a fenced block below is ready to paste into LinkedIn **as-is**. Everything outside the blocks is
explanation you do not paste.

**Two formatting rules that matter:**

- LinkedIn's About and Experience fields are **plain text**. Markdown does not render. The blocks below use
  capitals for sub-headings and `•` for bullets, both of which display correctly.
- Character counts are stated and have been verified, not estimated. Limits: headline **220**, About **2,600**,
  each experience description **2,000**.

> This content is the **post-red-team version**. See [`06-red-team-review.md`](06-red-team-review.md) for what
> the adversarial pass caught and which lines changed because of it.

---

# §4 — Recommended positioning

> **Python and Golang software engineer building backend systems and production data-extraction pipelines —
> REST APIs on FastAPI and Django, distributed processing with Celery and RabbitMQ, and crawlers that stay
> reliable against bot-protected sites, deployed on AWS.**

Why this one and not something narrower: your shortlist of 36 target openings splits roughly evenly between
Python/Go backend roles and scraping roles, and the backend roles pay better in NCR while the scraping roles fit
you more precisely. A positioning that abandons either one costs you half your market. The statement above leads
with the broad, high-volume identity (**software engineer, backend, Python/Golang**) and makes the narrow,
hard-to-copy one (**extraction against bot-protected sites**) the proof rather than the headline claim.

Data engineering sits deliberately in third place. It is real, it is on the profile, and it will not be what a
recruiter remembers you for.

---

# §5 — Headline: five options

### Version 1 — Best overall ✅ **RECOMMENDED**

```
Software Engineer | Python & Golang Backend Engineer | FastAPI · Django · REST APIs | Web Scraping & Data Extraction | ETL & Data Pipelines | AWS · Celery · PostgreSQL
```
**167 / 220 characters**

- **Target roles:** Software Engineer, SDE, Backend Engineer, Python Engineer, Web Scraping Engineer, Data Engineer
- **Key terms gained vs today:** Backend Engineer, Golang, Web Scraping, AWS, PostgreSQL, REST APIs
- **Why it performs:** covers all four of your target families with the two highest-volume title strings
  (*Software Engineer*, *Backend Engineer*) at the front, where weight is highest. Drops ~40 characters of
  employer name and spends every one of them on a searchable term.
- **Downside:** six segments is dense. It reads as a keyword line rather than a personality line. That is the
  correct trade for an active search; revisit it once you are employed and optimising for network rather than
  recruiters.

### Version 2 — Software engineering / backend focus

```
Python & Golang Software Engineer | Backend & API Development | FastAPI, Django, REST, Microservices | Celery · RabbitMQ · Redis · PostgreSQL | AWS, Docker, CI/CD
```
**162 / 220 characters**

- **Target roles:** Backend Engineer, Python Developer, SDE I/II, API Developer
- **Key terms:** Microservices, CI/CD, RabbitMQ, Docker
- **Why it performs:** the deepest backend keyword stack of the five, and the best match for Ottimate, Anaplan,
  Level AI, Statiq and NextDimension from your shortlist.
- **Downside:** surrenders the scraping differentiator entirely. You become a strong generic backend candidate
  rather than a distinctive one.

### Version 3 — Data engineering focus

```
Data Engineer | Python · PySpark · SQL | Databricks, Delta Lake & Medallion ETL | Data Pipelines, Ingestion & Extraction at Scale | PostgreSQL · MongoDB · Elasticsearch · AWS
```
**174 / 220 characters**

- **Target roles:** Data Engineer, ETL Engineer, Data Platform Engineer
- **Key terms:** PySpark, Databricks, Delta Lake, medallion, ingestion
- **Why it performs:** exact title match for data roles, and "Databricks" plus "Delta Lake" are narrow enough to
  rank you well in a small pool.
- **Downside:** **the weakest of the five for you.** Your data work is intermediate by your own assessment, has
  no verified volumes, and is missing Airflow, dbt, Spark SQL and a named cloud. It would attract screens you are
  likely to fail on depth. Use only if you decide to pivot fully.

### Version 4 — Web data / scraping focus

```
Web Scraping & Data Extraction Engineer | Python · Playwright · Golang | Anti-Bot Mitigation & Crawler Reliability | 4,959 Sources · 69,318 Listings Refreshed Daily | AWS
```
**170 / 220 characters**

- **Target roles:** Web Scraping Engineer, Crawler Engineer, Data Extraction Engineer, Automation Engineer
- **Key terms:** anti-bot mitigation, crawler reliability, Playwright, plus two verified scale numbers
- **Why it performs:** the only version carrying numbers, and numbers in a headline are rare enough to stop a
  scan. Strongest possible match for GobbleCube, YipitData, Searchlook, Wynd Labs and Real.
- **Downside:** your own shortlist found that NCR roles titled "web scraping" are mostly low-paid
  (₹18–30k/month), and that well-paid scraping work sits inside backend roles at product companies. This headline
  optimises for the lower-paying half of your market.

### Version 5 — Premium personal brand

```
I build crawlers that don't break and APIs that don't fall over | Python & Golang Software Engineer | Web Scraping, Backend, ETL | 69,318 listings refreshed daily at hirebeacon.in
```
**179 / 220 characters**

- **Target roles:** same as Version 1, reached differently
- **Key terms:** fewer, but the live domain is a keyword in its own right
- **Why it performs:** memorable, specific, and states an engineering value (reliability) rather than a tool
  list. It will out-convert the others for any human who reads it.
- **Downside:** the first 63 characters contain no searchable keyword, and that is the highest-weighted region
  of the highest-weighted field. You trade measurable ranking for unmeasurable memorability. Reasonable once you
  are already being found; wrong while you are not.

### ✅ Final recommendation: **Version 1**

You are not currently being found. Version 1 maximises the number of searches you appear in while keeping the
scraping differentiator visible, and it covers the backend market where your shortlist shows the money is.
Revisit Version 5 after you land a role.

---

# §6 — About section

**2,504 / 2,600 characters** (96 to spare). Paste exactly as shown, including the line breaks.

```
I build backend systems and the data pipelines that feed them — in Python, and in Golang.

Two years at Engineo Solutions, across both sides. I built the end-to-end backend for a client travel-aggregator portal and deployed it on AWS using ECR, EKS, CloudWatch and S3. I build data-extraction services for sites fronted by enterprise bot-management platforms such as Kasada and Akamai, collecting publicly available data within each site's terms of service and at polite rate limits. And I build code-first ETL on Databricks with PySpark, moving data through bronze, silver and gold Delta Lake layers into Elasticsearch.

WHAT I WORK WITH
Python, Golang, SQL • FastAPI, Django, DRF, REST API design, microservices • Celery, RabbitMQ, Redis, asyncio • PostgreSQL, MongoDB, Elasticsearch/OpenSearch • Playwright, SeleniumBase, Requests, BeautifulSoup • PySpark, Databricks, Delta Lake, Pandas • AWS (ECR, EKS, CloudWatch, S3), Docker, GitHub Actions, Pytest

SOME THINGS I HAVE SHIPPED
• A database automation pipeline for a schema-less platform at a Big-4 consulting firm — Excel to JSON to PostgreSQL through APIs, with dynamic parent-child relational mapping and foreign-key resolution. Cut manual effort by about 70%.
• Redis caching and rate limiting that removed 40%+ of redundant API calls, behind a layered API security stack: API keys, IP allow-listing, JWT and CORS.
• An upgrade of our in-house extraction framework to multi-browser-engine support, so collectors pick a rendering engine per target.

OUTSIDE WORK
hirebeacon.in is mine — a live job-intelligence platform whose crawler covers 4,959 company career pages plus central and state government recruiting bodies, keeping 69,318 listings refreshed. Ingestion is idempotent and self-healing: a close-out gate blocks deletions when a crawl returns under half its baseline, so a partial failure never wipes live data. 336 tests.

XBRL Intelligence Engine (github.com/aman0981/XBRL_Engine) is an async FastAPI service ingesting filings from SEC EDGAR and EU ESEF into one canonical financial model — 24,852 facts across 71 filings — with cross-source reconciliation and restatement detection. 135 tests.

WHAT INTERESTS ME
Backend and Python engineering, web scraping and data extraction, and data pipelines — problems where reliability matters more than feature throughput. Based in Gurugram, and set up to work remote.

Always up for a conversation about backend systems or extraction at scale.
amannikumbh73@gmail.com • github.com/aman0981
```

**How this satisfies the ten requirements you set:**

| Requirement | Where |
|---|---|
| Establishes identity immediately | Line 1, in nine words, before any "see more" cut |
| Communicates specialisation | Paragraph 2 — three concrete systems, not adjectives |
| Explains what you build | Backend, extraction services, ETL pipelines |
| Demonstrates technologies | "WHAT I WORK WITH", grouped so it scans, not a flat list |
| Highlights impact | 70%, 40%+, 4,959, 69,318, 336, 24,852, 71, 135 — eight verified numbers |
| Mentions experience and projects | Both roles implied, both projects named with live link |
| Shows breadth without looking unfocused | Breadth is in the tool groups; the narrative stays on backend + extraction |
| Includes recruiter keywords naturally | ~45 searchable terms, every one inside a real sentence |
| Shows what problems you solve | Reliability under adversarial conditions, scale, automation of manual work |
| Professional CTA | Closing block states domain interests, location and remote availability, plus a direct contact line |

**Deliberately avoided:** "passionate", "results-driven", "dynamic", "seasoned", "enthusiast", "ninja",
"rockstar", "10x", "ever-evolving", "eager to learn", VS Code, Postman, "knowledge of HTML5/CSS/JavaScript".

---

# §7 — Experience

> ### ⚠️ Resolve this before you paste
> LinkedIn currently dates your Associate Software Engineer – Data role as **Dec 2024 – Mar 2026**. Both resumes
> in `docs/resume/` say **Nov 2024 – Mar 2026**. The Associate Technical Consultant role explains the gap, but a
> recruiter comparing the two documents sees a contradiction. **Tell me which is right and I will fix the losing
> document.** The blocks below keep LinkedIn's existing dates — change them only if the resume is the correct one.

## Role 1 — current

**Recommended title change:** `Software Engineer` → **`Software Engineer – Data`**

This matters mechanically, not cosmetically. LinkedIn Recruiter's *Title* filter reads this field rather than
your headline, so the word "Data" being present decides whether you surface in data-role title searches. It also
matches both resumes and your portfolio site, removing a second resume-vs-profile discrepancy.

**Company:** Engineo Solutions Pvt Ltd · **Dates:** April 2026 – Present · **Location:** Gurugram, Haryana, India

```
Promoted from Associate Software Engineer – Data in April 2026.

• Developed the end-to-end backend for a client travel-aggregator web portal and deployed it on AWS across ECR, EKS, CloudWatch and S3.
• Build data-extraction services for hotel websites fronted by enterprise bot-management platforms such as Kasada and Akamai — collecting publicly available data within each site's terms of service and at polite rate limits, through browser automation, session and fingerprint handling, and adaptive request pacing.
• Write backend services in Golang alongside the Python stack.
• Build a code-first ETL pipeline on Databricks with PySpark, transforming raw data from a cloud object-storage landing zone through bronze, silver and gold Delta Lake layers into Elasticsearch, orchestrated with Databricks Workflows.
• Upgraded the in-house data-extraction framework to multi-browser-engine support, so collectors select a rendering engine per target instead of being locked to a single driver.
• Expose a streaming API that delivers curated data to clients in chunks, building Elasticsearch queries dynamically from each request's filter payload; currently designing a centralised data API that integrates an external data endpoint, a parse service that normalises responses, and a DocumentDB sink.
```
**1,297 / 2,000 characters**

**Why this order.** LinkedIn truncates after roughly two lines before "…see more", so bullet 1 does
disproportionate work. It leads with **ownership** (end-to-end, deployed), which is your answer to every "3+
years" filter, and it carries AWS — one of the two highest-value terms missing from your profile today.
Kasada/Akamai is second because it is your differentiator and still sits above the fold on desktop. **Golang is
deliberately a short standalone bullet at position 3**, so the word is impossible to miss on a scan; it is the
other highest-value missing term and it opens a second job market on its own.

**The one trade-off:** a pure data-engineering recruiter reaches PySpark at bullet 3. That is the deliberate cost
of a single profile serving four role families, and data is your third priority. The Skills section and the
headline both carry the data terms, so you still appear in those searches — you simply convert slightly worse
once they arrive.

**Opening line:** the promotion note is not decoration. A promotion inside 17 months is your strongest counter to
the experience filter, and stating it in the first line of the current role is the only place a recruiter is
guaranteed to see it.

## Role 2

**Title:** `Associate Software Engineer – Data` (unchanged — it is already correct)
**Company:** Engineo Solutions Pvt Ltd · **Dates:** December 2024 – March 2026 · **Location:** Gurugram, Haryana, India

```
• Built a database automation pipeline for a schema-less platform at a Big-4 consulting firm: Excel datasets transformed to JSON and loaded into PostgreSQL through APIs, with dynamic parent-child relational mapping and foreign-key resolution across multi-table loads — cutting manual effort by about 70%.
• Implemented Redis caching and rate limiting that removed 40%+ of redundant API calls, behind a layered API security stack of API keys, IP allow-listing, JWT, CORS and bad-user-agent flagging.
• Developed a microservice backend with Django and FastAPI to serve a high volume of client requests and support automated web crawlers, with Celery, RabbitMQ and Redis carrying distributed background processing.
• Built the in-house data-extraction framework and a distributed extraction platform for a US travel-domain client: Playwright for JavaScript-rendered pages, Requests with BeautifulSoup for HTTP extraction, and retries with exponential backoff plus header and session rotation for failures, rate limits and access restrictions. Co-developed an airline crawling bot service.
• Integrated an event-driven webhook system delivering real-time alerts and job updates to clients.
• Developed an ETL pipeline for travel airline data, integrated AWS S3 for storage and AWS OpenSearch for indexing, and contributed to early Databricks ETL development.
```
**1,354 / 2,000 characters**

**What changed from your current three bullets.** Your existing bullets were not wrong, they were incomplete —
they covered microservices, webhooks and Celery/Redis/RabbitMQ and omitted every quantified result you have. The
rewrite keeps all three (microservices is now bullet 3, webhooks bullet 5) and leads instead with the **70%** and
**40%+** figures, which are the only employer-side metrics you own. Also added: Playwright, BeautifulSoup,
PostgreSQL, AWS S3, OpenSearch, Databricks — six searchable terms that were absent from the whole profile.

**One word deliberately not changed:** "high volume" stays unquantified because you have no verified number. It
is your own existing wording. See [`05-metrics-and-questions.md`](05-metrics-and-questions.md) — getting a real
figure here is one of the highest-value things you can do.

**"Participated in" removed.** Your resume work established it as a weak verb; the airline bot service is now
"co-developed", which is both stronger and accurate for shared ownership.

## Role 3 — compressed to one line, as you asked

**Title:** `Associate Technical Consultant`
**Company:** Engineo Solutions Pvt Ltd · **Dates:** November 2024 – December 2024 · **Location:** Gurugram, Haryana, India

```
Deployed Frappe ERPNext on a cloud server, configured Nginx as the public web server for routing, and set up the HRMS module to the company's requirements.
```
**155 / 2,000 characters**

**What was removed and why.** Your three existing bullets each ended in an unquantified impact claim —
"enhancing operational efficiency", "improving system accessibility", "streamlining HR processes". Those are
exactly the phrases a recruiter discounts, and three of them in a two-month role did real damage to the
credibility of everything above. The single line keeps the genuine technical content (ERPNext, cloud server,
Nginx, HRMS) and preserves your unbroken tenure from November 2024.

---

# §8 — Skills strategy

### The distinction that governs this section

There is a difference between **skills you know** and **skills recruiters search for**. You know Postman and
JMeter; nobody filters on them. You use PostgreSQL daily; thousands of recruiters filter on it every day, and it
is currently absent from your profile. The list below is ordered by **search value to you**, not by your depth.

### Tier 1 — Must have (15)

These map directly to the filters your target companies run.

| # | Skill (use LinkedIn's standardised name) | Why |
|---|---|---|
| 1 | **Python (Programming Language)** 📌 | Every search you want to appear in |
| 2 | **FastAPI** 📌 | Named in most of your shortlist's backend JDs; a narrow pool, so you rank well |
| 3 | **Web Scraping** 📌 | Your differentiator. Few competitors list it credibly |
| 4 | Django | "Django is a must-have" — Ottimate, verbatim |
| 5 | Back-End Web Development | The literal filter for "Backend Engineer" searches |
| 6 | REST APIs | Near-universal in backend JDs |
| 7 | PostgreSQL | Your single biggest current omission |
| 8 | Go (Programming Language) | Opens Safe Security, Wobot, vCommission, TBO, Supabase, Paytm |
| 9 | Data Extraction | Pairs with Web Scraping; separate filter term |
| 10 | Amazon Web Services (AWS) | Filtered on in most backend and data roles |
| 11 | Extract, Transform, Load (ETL) | Carries your data claim |
| 12 | Celery | Specific, and you have real depth |
| 13 | Redis | Caching questions follow it |
| 14 | SQL | Baseline filter you currently fail |
| 15 | Microservices | Your own word for the architecture; high JD frequency |

📌 = **pin these three.** The pinned skills carry the most display and ranking weight.

**Why Web Scraping is pinned over Django**, which appears in more job descriptions: Django ranks you alongside
tens of thousands of comparable candidates, while Web Scraping ranks you alongside very few — and it is backed by
Kasada/Akamai work and a live crawler. Django still sits at #4, appears in your headline-adjacent About text and
in two experience entries, so Django searches continue to find you. You lose almost nothing and gain distinctiveness.

### Tier 2 — Strong supporting (25)

16. MongoDB · 17. RabbitMQ · 18. Docker · 19. PySpark · 20. Databricks · 21. Elasticsearch · 22. Playwright ·
23. Data Pipelines · 24. Web Crawling · 25. Browser Automation · 26. API Development · 27. Data Engineering ·
28. Asynchronous Programming · 29. SQLAlchemy · 30. Django REST Framework · 31. Pandas (Software) ·
32. Apache Spark · 33. Delta Lake · 34. Distributed Systems · 35. Software Development · 36. Git ·
37. CI/CD · 38. PyTest · 39. Pydantic · 40. JSON

### Tier 3 — Valid, but keep at the bottom (10)

41. Selenium · 42. Beautiful Soup · 43. GitHub Actions · 44. Nginx · 45. Linux · 46. Object-Oriented Programming (OOP) ·
47. Data Structures and Algorithms · 48. Postman API Platform · 49. Apache JMeter · 50. Web Services

Tier 3 skills are real and harmless at the bottom of a 50-skill list. They should never occupy a pinned slot.

### Recommended top 15, in exact order

```
1.  Python (Programming Language)   [PIN]
2.  FastAPI                         [PIN]
3.  Web Scraping                    [PIN]
4.  Django
5.  Back-End Web Development
6.  REST APIs
7.  PostgreSQL
8.  Go (Programming Language)
9.  Data Extraction
10. Amazon Web Services (AWS)
11. Extract, Transform, Load (ETL)
12. Celery
13. Redis
14. SQL
15. Microservices
```

### Skills to add

**All 50 above.** You currently have 3. This is the single largest mechanical gain available on your profile.

### Skills to remove or never add

| Skill | Why |
|---|---|
| Java | You hold a Java certification but no Java work. It pulls you into a market you do not want and dilutes the Python signal. |
| Android Development | Same, worse — it suggests a mobile developer. |
| HTML5, CSS, JavaScript | Your own LinkedIn summary says "knowledge of", which is not working level. On a backend profile these actively suggest you are a generalist juniorthe opposite of the positioning. |
| VS Code, any IDE | Not a skill. Currently in your About; remove it there. |
| Microsoft Office, Communication, Teamwork, Leadership | Soft and generic. They crowd out technical terms in a capped list. |

### Redundancy to be aware of

**Apache Spark** and **PySpark** overlap, as do **Selenium** and **Playwright**, and **Web Scraping** / **Web
Crawling** / **Data Extraction**. Keep all of them anyway — recruiters filter on different members of each pair,
and the Skills list is not scored for elegance. Just do not pin two members of the same pair.

### Endorsements

You have none. They are reported to correlate strongly with recruiter views. Ask five colleagues to endorse
**only your top three pinned skills** — scattered endorsements across 50 skills are worth far less than
concentrated ones on the three that define your positioning. The 30-day plan schedules this in Week 2.

---

# §9 — Projects

You currently have **no Projects section**. Both projects below should be added. Your LinkedIn export contains no
projects to review, remove or rewrite — so the question is purely which to add, and in what order.

### Project 1 — add first

**Name:** `HireBeacon — Live Job-Intelligence Platform`
**Dates:** 2026 – Present · **URL:** `https://hirebeacon.in` · **Associated with:** leave blank (personal project)

```
A live web platform that surfaces private-sector job openings crawled from applicant-tracking-system career pages across 4,959 companies, alongside exam and recruitment notices from central and state government recruiting bodies. Solo build, running in production.

Crawling: reverse-engineered keyless, undocumented ATS endpoints through browser network inspection with anti-bot handling, normalising every vendor's payload behind a single extraction contract. 69,318 live listings kept refreshed by scheduled daily crawls.

Reliability: ingestion is idempotent and self-healing. Upserts are keyed on (company_id, source_id), and a close-out gate skips deletion when a source returns under 50% of its baseline, so a partial or failed crawl can never wipe live inventory. Per-company and per-item failure isolation. 336 automated tests.

Matching: resume PDF to LLM skill extraction to 384-dimension MiniLM embeddings, ranked by pgvector cosine similarity through a Postgres RPC, with a fallback-chained LLM rationale. Row-level security on every table.

Stack: Python, PostgreSQL 17 (Supabase, pgvector, pg_trgm), Next.js 15, TypeScript, GitHub Actions, Groq/Gemini.
```

**Why it leads:** it is the only asset on your entire profile a recruiter can click and verify in ten seconds. It
proves crawling at scale, production reliability engineering, and shipping something end to end alone. Your own
shortlist rates it your second-strongest credential.

**It also closes your LLM/GenAI gap.** The shortlist flags "LLM/GenAI integration" as a recurring ask at Safe
Security, Bain, Respan, MongoDB and Atlys. The matching paragraph is real, verified evidence of it.

> **Before you publish this link:** your shortlist's own QA pass found four live issues on hirebeacon.in — the
> "posted" age reflects first-crawl date rather than the real posting date, some experience values mis-parse
> (TravClan shows "50+ yrs"), the `postedWithin`/remote/`companySlugs` URL parameters do not filter, and some
> searches exceed 60 seconds. A recruiter *will* click this. Fix the parsing bugs and the slow queries first —
> they are the two a technical reviewer would notice immediately.

### Project 2

**Name:** `XBRL Intelligence Engine — Multi-Source Financial Data ETL`
**Dates:** 2026 · **URL:** `https://github.com/aman0981/XBRL_Engine`

```
An async FastAPI service that ingests XBRL and iXBRL financial filings from SEC EDGAR, EU ESEF and direct upload into a single canonical financial model. Solo build.

Ingested 24,852 facts across 71 filings and 552 canonical line items. Canonical mapping uses regulator-aware fallback chains, so a filing that does not match one taxonomy degrades through alternatives rather than failing.

Cross-source reconciliation compares value, precision and only-in-one-source discrepancies between regulators. Bitemporal restatement detection identifies when a company has revised a previously reported figure, and financial statements are reconstructed from the XBRL presentation linkbase.

Guarded by 135 automated tests — unit plus isolated-PostgreSQL integration. Ships as a hardened non-root multi-stage Docker image with healthchecks and persistent volumes.

Stack: Python, FastAPI, async SQLAlchemy 2.0, asyncpg, PostgreSQL 16, Alembic, Pydantic, structlog, Arelle, Docker.
```

**Why it earns its place:** it is the async/architecture counterpart to HireBeacon's scale story. Async
SQLAlchemy 2.0 with asyncpg, bitemporal modelling and a hardened container are mid-level-plus signals, and the
135-test figure supports the testing discipline that backend interviewers probe.

### A project NOT to add

Your portfolio site (`src/lib/content.ts`) still points `demoUrl` at `http://127.0.0.1:8000` and `:3000`, and
the site URL is a placeholder marked *"update to final domain before deploy"*. **It is not deployed.** Do not
feature or link it until it is live — a dead link on a profile is worse than no link.

---

# §10 — Featured section

You have none. This is where a recruiter converts from interested to convinced, and it is currently empty.
Add in this exact order; LinkedIn shows the first two most prominently.

| # | What to feature | Type | Why | Recruiter signal it creates |
|---|---|---|---|---|
| 1 | **hirebeacon.in** | Link | Live, clickable, verifiable in ten seconds. Set the title to "HireBeacon — 4,959 sources, 69,318 live listings" so the numbers show on the card. | *This person ships production systems alone, and I can see one right now.* |
| 2 | **github.com/aman0981/HireBeacon** | Link | The code behind the thing they just clicked. Closes the loop between claim and proof. | *The live site is genuinely theirs, and the code is readable.* |
| 3 | **github.com/aman0981/XBRL_Engine** | Link | Async architecture, 135 tests, hardened Docker. | *Depth, not just breadth. They test their work.* |
| 4 | **Your resume PDF** | Document | Upload `docs/resume/submit/Aman_Nikumb_Resume.pdf` — Resume A, Backend Engineer + Web Scraping. Recruiters routinely want the PDF without asking. | *Low-friction candidate. Everything I need is here.* |
| 5 | **github.com/aman0981** | Link | Profile overview, contribution graph. | *Active engineer, not a dormant account.* |

**Which resume to feature:** `Aman_Nikumb_Resume.pdf` (Resume A — Backend Engineer + Web Scraping). Since
2026-10-05 it is backend-led, so it matches this profile's headline closely, and it is the only version carrying
both Golang and the Kasada/Akamai differentiator in the first few lines. Keep
`Aman_Nikumb_Resume_Python_Engineer.pdf` (Resume B) for roles that name ETL, Spark, Databricks or a data
platform, and send it deliberately rather than featuring it publicly.

**Do not feature:** certificates, your portfolio site (not deployed), or anything requiring a login.

---

# §11 — Profile photo and banner

## Profile photo

You have one; I cannot see it from the PDF export, so this is a checklist rather than a critique.

**Required:** face occupies roughly 60% of the frame · eyes on the upper third · looking at the camera · neutral
or softly lit background with real contrast against your clothing · shot at or near eye level · recent (within
two years) · a visible, relaxed expression — approachable reads as more competent than stern · collared shirt or
plain crew-neck, solid colour · shot on any phone in portrait mode near a window, which beats a studio photo
taken badly · minimum 400 × 400 px, ideally 800 × 800.

**Avoid:** group photos even if cropped · sunglasses or caps · heavy filters · busy or cluttered backgrounds ·
full-body or distant shots · anything taken at a wedding or party · a logo or avatar instead of your face.

## Banner — exact concept

**Dimensions: 1584 × 396 px** (4:1). Export at 2× (3168 × 792) and let LinkedIn downscale; it renders noticeably
sharper.

**The constraint that breaks most banners:** your profile photo overlaps the **bottom-left** on desktop, and
mobile crops the sides hard. Keep everything important in the **right 60%, vertically centred**. Leave the
left 400 px and the bottom 120 px empty.

### Layout

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                      Backend systems and crawlers                        │  ← line 1, ~46px bold
│                      that stay up.                                       │
│                                                                          │
│                      Python · Golang · FastAPI · AWS · PySpark           │  ← line 2, ~24px, teal
│                                                                          │
│    [ photo ]         hirebeacon.in — 4,959 sources, 69,318 listings      │  ← line 3, ~19px, muted
│    overlaps                                                              │
└──────────────────────────────────────────────────────────────────────────┘
      ↑ keep clear                  ↑ all text starts around x = 620px
```

### Exact text

```
Line 1   Backend systems and crawlers that stay up.
Line 2   Python · Golang · FastAPI · AWS · PySpark
Line 3   hirebeacon.in — 4,959 sources, 69,318 listings refreshed daily
```

### Colours — matched to your resume

These are the exact values from `docs/resume/latex/amanresume.sty`, so your banner, resume and profile read as
one deliberate system. That consistency is itself a signal.

| Role | Hex | Use |
|---|---|---|
| Background | `#1A1C20` | Near-black ink. Solid, no gradient. |
| Primary text | `#FFFFFF` | Line 1 only |
| Accent | `#0A5C54` | Line 2 — deep teal, the resume accent |
| Muted text | `#C9CED6` | Line 3 |

**Visual hierarchy:** line 1 dominates at roughly 2× the size of line 2 and 2.5× line 3. One accent colour, used
once. A single hairline rule in `#C9CED6` at 0.5px between lines 1 and 2 is optional and tightens it.

**Typography:** a clean geometric or neo-grotesque sans — Inter, Source Sans 3 or Archivo. Avoid serif here; the
resume carries the serif, and a serif banner at this size renders poorly on mobile.

**Technical theme:** restraint is the theme. A very low-opacity (3–5%) monospace code fragment or dot grid in the
background is acceptable. Nothing else.

**What NOT to include:** your name (it already appears directly below) · stock photos of code on screens ·
circuit-board or "AI brain" imagery · company logos you do not own the rights to · contact details ·
"Open to Work" text — use LinkedIn's own feature · motivational quotes · more than one accent colour ·
anything that would be unreadable at phone width.

**If you build it yourself:** Canva's LinkedIn Banner preset is already 1584 × 396. Start from a blank solid
`#1A1C20`, add the three text lines, done in ten minutes. Do not use a template with imagery.

---

**Next:** [`03-keyword-strategy.md`](03-keyword-strategy.md) — the keyword map and 18 recruiter search simulations (§12–§13).
