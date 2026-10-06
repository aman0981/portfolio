# JD Research — hybrid target: Backend Engineer + Web Scraping / Data Extraction

Resume A was converted from a pure Web Scraping Engineer document to a **Backend Engineer + Web Scraping**
hybrid on 2026-10-05, at the candidate's request. It must survive keyword screens for two families at once:

1. **Backend Engineer / Python Developer / Python Engineer / SDE** — primary
2. **Web Scraping / Web Crawler / Data Extraction Engineer / Automation Engineer** — secondary

Underlying research is not duplicated here. The scraping requirement set is in
[`web-scraping-engineer.md`](web-scraping-engineer.md); the backend requirement set is in
[`python-backend-and-data-engineer.md`](python-backend-and-data-engineer.md), which catalogued Python/FastAPI
postings from Glassdoor, Indeed India, Orevida, builtin.com and the widely-circulated 2026 Python backend
roadmap. This file records only **why the pivot was made and how the two sets are balanced.**

## Why Backend Engineer now leads

The decision comes from the candidate's own market research in
[`../job-search/2026-10-04-job-shortlist.md`](../job-search/2026-10-04-job-shortlist.md), which surveyed 36 live
openings and found:

> *"NCR jobs titled 'web scraping' are mostly low-paid. Glassdoor showed Gurugram 'Web Scraping & Data Extraction
> Executive' roles at ₹18–30k/month. Scraping work that pays well is mostly **remote** (Wynd Labs, YipitData,
> Searchlook) or sits inside **backend roles at product companies** (Atlys, GobbleCube). Don't filter on the
> scraping title alone."*

Three consequences for the resume:

- **The scraping title caps the salary band in his home market.** With a ₹11.25 LPA floor and a ₹16–18 LPA
  anchor, leading with "Web Scraping Engineer" in Delhi NCR aims at the wrong half of the market.
- **The backend title reaches both.** Of the 36 shortlisted roles, the Tier A list is dominated by backend and
  SDE titles (Safe Security, Atlys, Ottimate, Expedia, Anaplan, NextDimension, TravClan, Level AI, Bain) where
  the scraping experience is a *differentiator* rather than the job description.
- **Nothing is lost on the scraping side.** Kasada, Akamai, Playwright, proxy rotation, TLS fingerprinting and
  the 4,959-source crawler all remain on the page, so the dedicated scraping employers (GobbleCube, YipitData,
  Searchlook, Wynd Labs, Real) still match.

## Combined keyword coverage

### Backend / application development
| Requirement | Where it appears in Resume A | Status |
|---|---|---|
| Python 3.x | Summary, Skills, both roles, both projects | Match |
| FastAPI | Summary, Skills, Role 2, XBRL descriptor | Match |
| Django, DRF | Summary, Skills, Role 2 | Match |
| REST API design | Skills, Summary | Match |
| Microservices | Skills, Role 2 bullet 2 | Match |
| Asynchronous programming / asyncio | Skills, XBRL project | Match |
| Celery, background jobs | Summary, Skills, Role 2 | Match |
| RabbitMQ, message queues | Summary, Skills, Role 2 | Match |
| Redis, caching | Summary, Skills, Role 2 (40%+ metric) | Match |
| PostgreSQL, MongoDB | Summary, Skills, both roles | Match |
| SQLAlchemy, Pydantic | Skills | Match |
| Webhooks / event-driven | Skills, Role 2 bullet 2 | Match — **new material from the LinkedIn export** |
| JWT, API-key auth, CORS, rate limiting | Skills, Role 2 | Match |
| Docker, containerised deployment | Skills | Match |
| CI/CD | GitHub Actions CI in Skills and HireBeacon | Match |
| Testing — unit and integration | Pytest in Skills; 336 and 135 tests in projects | Match (strong) |
| Cloud deployment | AWS ECR, EKS, CloudWatch, S3 — Summary, Skills, Role 1 | Match |
| Golang | Summary, Skills, Role 1 | Match (differentiator) |
| OAuth, Kafka, WebSockets, Flask | Absent | **Gap** — not used, not claimed |

### Web scraping / data extraction
Unchanged from [`web-scraping-engineer.md`](web-scraping-engineer.md): Playwright, SeleniumBase, Requests,
BeautifulSoup, headless browsers, multi-browser-engine automation, anti-bot mitigation, Kasada, Akamai, reverse
engineering, TLS fingerprinting, proxy rotation, CAPTCHA solvers, header/session rotation, retries with
exponential backoff, rate-limit and 403/429 handling, Wireshark, browser DevTools, HTTP/HTTPS, TLS/SSL,
pagination, crawl scheduling, crawl scale. Still absent and unclaimed: **Scrapy, httpx, XPath**.

## Balancing rules applied

- **Headline** — `Backend Engineer | Data Extraction & Automation` (shortened 2026-10-05 at the candidate's
  request). Backend Engineer sits first because ATS title matching weights the leading phrase most heavily;
  *Data Extraction* and *Automation* carry the second family. **"Web Scraping", "Python" and "Golang" were
  removed from the headline** — all three remain in the summary, skills and bullets, so keyword coverage is
  unchanged, but the literal phrase "Web Scraping" no longer produces a title-line match. See the review file
  for the full trade-off.
- **Summary is backend-first, scraping-second**, closing on the one verified scale figure (4,959 sources,
  69,318 listings) that belongs to neither discipline exclusively.
- **Skills lead with Backend & APIs**, then two scraping groups, then infrastructure. A backend screener sees
  their whole stack in line 1; a scraping screener sees theirs in lines 2 and 3.
- **Role 1 alternates:** backend + AWS + Golang, then Kasada/Akamai extraction, then framework upgrade + ETL.
- **Role 2 leads on metrics** (70%, then 40%+), which happen to be the backend bullets, with the extraction
  platform third.
- **Projects stay scraping-heavy.** HireBeacon is the proof of crawl scale; XBRL is reframed as an
  *"async FastAPI service and multi-source extraction pipeline"* so it reads to both audiences.
- **Nothing was invented to balance.** Where a backend keyword has no evidence, it is absent.

### Measured result
Counting occurrences in the compiled PDF: **78 backend-keyword hits, 65 scraping-keyword hits.** The document
leans backend by roughly 55:45, which is the intended ratio for a Backend-Engineer-led resume.

## Honest trade-off

Against a sharply-written pure scraping posting — Searchlook naming Kasada, Cloudflare and DataDome, or
YipitData listing fingerprinting and proxy rotation as core duties — a dedicated scraping resume would still
beat this one. It would spend its whole skills block on extraction and its summary on crawl scale.

**That version is recoverable in about twenty minutes** by reordering the skills groups and rewriting the
summary; the facts are all already on the page. For the Tier A backend roles that carry the salary, and for
volume applying across both families, the hybrid is the right default.
