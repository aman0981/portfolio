# ATS & Recruiter Review — Resume A (Backend Engineer + Web Scraping, hybrid)

File: `docs/resume/out/Aman_Nikumb_Resume_Backend_Web_Scraping.pdf` (1 page, A4, Editorial Serif)
Upload copy: `docs/resume/submit/Aman_Nikumb_Resume.pdf`
Source: `docs/resume/latex/Aman_Nikumb_Resume_Backend_Web_Scraping.tex` + `docs/resume/latex/amanresume.sty`
Target roles: Backend Engineer / Python Developer / Python Engineer / SDE **and** Web Scraping / Web Crawler /
Data Extraction / Automation Engineer.
Keyword basis: `docs/resume/jd-research/backend-and-web-scraping-engineer.md`.
Revision: 2026-10-05. Replaces `web-scraping-engineer-ats-review.md`, which covered the pure scraping version.

## Estimated ATS scores — scored separately per role family

A hybrid cannot have one score, because the required-skill list differs by family. Both figures use the Resume
Tailor plugin's formula (`references/ats-rules.md`) and both are **estimates, not guarantees**.

| Role family | Required | Nice-to-have | Quantification | Sections | Distribution | **Score** |
|---|---|---|---|---|---|---|
| Web Scraping / Data Extraction | 14/15 = 93% | 8/11 = 73% | 56% | 100% | 100% | **83%** |
| Backend Engineer / Python Developer | 17/19 = 89% | 4/8 = 50% | 56% | 100% | 100% | **77%** |

Scraping: `0.4(0.93) + 0.2(0.73) + 0.2(0.56) + 0.1 + 0.1 = 0.372 + 0.146 + 0.112 + 0.200 = 0.83`
Backend: `0.4(0.89) + 0.2(0.50) + 0.2(0.56) + 0.1 + 0.1 = 0.356 + 0.100 + 0.112 + 0.200 = 0.77`

**Quantification, both families:** 5 of 9 bullets carry a number — 70% effort cut, 40%+ fewer API calls,
4,959 sources / 69,318 listings, 50% close-out gate / 336 tests, 24,852 facts / 71 filings / 135 tests.

Neither figure credits job-title alignment, which the plugin's research note puts at roughly a 3.5x
interview-rate increase.

### Where the title-alignment advantage now sits — a deliberate trade

The headline was shortened to `Backend Engineer | Data Extraction & Automation` on 2026-10-05 at the
candidate's request. Three title phrases match it exactly: **Backend Engineer**, **Data Extraction Engineer**
and **Automation Engineer**.

**The literal phrase "Web Scraping" is no longer in the headline.** It remains on the page — as the skills group
label *Web Scraping & Browser Automation*, in the PDF keyword metadata, and throughout the HireBeacon project —
so keyword-coverage scoring is unaffected and the 83% holds. What changed is *positional*: a recruiter running a
title search for "Web Scraping Engineer" no longer gets a title-line match, only a body match.

Net effect: the 3.5x title-alignment advantage has moved from one scraping title to one backend title plus two
extraction/automation titles. Given the shortlist's finding that NCR scraping titles pay ₹18–30k/month, that is
the right direction — but it is a real trade, not a free win. If a specific posting is titled "Web Scraping
Engineer", put that exact phrase back in the headline before applying.

### What changed from the pure scraping version

| | Before | After |
|---|---|---|
| Headline | `Web Scraping Engineer \| Data Extraction & Automation` | `Backend Engineer \| Data Extraction & Automation` |
| Scraping score | 83% | **83%** — unchanged |
| Backend score | not scored (~65% estimated) | **77%** |
| Skill groups | 5, scraping-first | 4, backend-first |
| Bullets | 11 | 9, tighter |

**The scraping score did not fall.** Every scraping keyword that was on the page is still on the page; the
backend material was added by tightening prose and merging bullets, not by displacing extraction content.

## Keyword coverage

### Backend / application development
| Requirement | Where it appears | Status |
|---|---|---|
| Python, Golang | Headline, Summary, Skills, Role 1 | Match |
| FastAPI, Django, DRF | Summary, Skills, Role 2 | Match |
| REST API design, microservices | Skills, Role 2 | Match |
| Celery, RabbitMQ, Redis | Summary, Skills, Role 2 | Match |
| Webhooks / event-driven | Skills, Role 2 | Match — **new material from the LinkedIn export** |
| PostgreSQL, MongoDB, Elasticsearch/OpenSearch | Summary, Skills, both roles | Match |
| JWT, API keys, CORS, rate limiting | Skills, Role 2 | Match |
| AWS (ECR, EKS, CloudWatch, S3) | Summary, Skills, Role 1 | Match |
| Docker, Git, GitHub Actions CI, Pytest | Skills, projects | Match |
| asyncio, SQLAlchemy, Pydantic | Skills, XBRL | Match |
| OAuth, Kafka, WebSockets, Flask | Absent | **Gap** — not used, not claimed |

### Web scraping / data extraction
Playwright, SeleniumBase, Requests, BeautifulSoup, headless browsers, multi-browser-engine automation, anti-bot
mitigation, Kasada, Akamai, reverse engineering, TLS fingerprinting, proxy rotation, CAPTCHA solvers,
header/session rotation, retries with exponential backoff, rate-limit and 403/429 handling, Wireshark, browser
DevTools, HTTP/HTTPS, TLS/SSL, pagination, crawl scheduling, crawl scale — all present.
Unchanged gaps: **Scrapy, httpx, XPath**; and ~2 years against postings that often ask for three.

### Measured balance
**78 backend-keyword hits, 65 scraping-keyword hits** in the compiled PDF — a deliberate ~55:45 lean toward
backend, matching the headline's leading title.

## Recruiter view

**Works well**
- The first experience bullet is now **end-to-end ownership on AWS** — the direct answer to the "3+ years"
  filter that about half the shortlist applies, and it carries Golang in the same breath.
- Kasada and Akamai sit in bullet 2, still above the fold. For a scraping or integration employer this remains
  the sharpest signal on the page.
- The merged Role 2 backend bullet is unusually dense in a good way: microservices, Django, FastAPI, Celery,
  RabbitMQ, Redis, webhooks, caching with a real metric, a layered security stack, S3 and OpenSearch — one
  bullet that satisfies most of a backend JD's checklist.
- hirebeacon.in is live and independently checkable, with the figures on the page matching the figures on the site.
- Testing discipline (336 + 135 tests) is strong for two years and backend interviewers weight it heavily.

**Honest weaknesses a hiring manager will probe**
- **No API performance number anywhere.** The travel-aggregator portal has no requests/day, p95 or concurrency
  figure. Backend screens ask for one almost immediately. This is the single highest-value gap.
- **"Microservice backend" has no named service boundary.** Be ready to describe one concretely.
- Proxy rotation, CAPTCHA solving and TLS fingerprinting remain skills-line claims with no matching achievement
  bullet. Prepare one specific story.
- No Scrapy. Several scraping postings assume it.
- No employer-side scraping scale — pages per run, cadence, success rate. HireBeacon carries all the numbers.

**Deliberate wording**
The resume never says hacking, bypassing, evading, defeating, breaking or circumventing. It uses anti-bot
mitigation, responsible terms-of-service-aware scraping, public data and polite rate limits. A scan of the
compiled PDF confirms **zero occurrences** of the forbidden vocabulary and **zero banned verbs**
("responsible for", "participated in", "assisted in", "helped with").

## Changes made in this revision, and why

| # | Change | Reason |
|---|---|---|
| 1 | Headline leads with **Backend Engineer** | The candidate's own shortlist found NCR scraping titles pay ₹18–30k/month while well-paid scraping sits inside backend roles at product companies. |
| 2 | Summary rewritten backend-first | Carries FastAPI, Django, PostgreSQL, MongoDB, Redis, Celery, RabbitMQ and AWS into the first six seconds, then the Kasada/Akamai line, then the crawl scale. |
| 3 | Skills reordered to 4 groups, **Backend & APIs** first | A backend screener finds their entire stack in line 1 without scrolling. |
| 4 | **Added the microservice + webhook material** | New verified facts from the LinkedIn export (`LI` provenance in `master-profile.md`), in the candidate's own words. Strong backend evidence that both resumes previously lacked. |
| 5 | Dropped the unquantified phrase **"high volume"** | An unquantified volume claim is the pattern recruiters discount. It weakened the bullet rather than strengthening it. |
| 6 | Golang given its own sentence rather than a trailing clause | Avoids implying the Go services were part of the travel portal — a connection `master-profile.md` does not establish. |
| 7 | Role 1 to 3 bullets, Role 2 to 3, HireBeacon to 2 | Required to hold one page after the backend additions. Merging was preferred to deleting facts. |
| 8 | Added **Build REST APIs with FastAPI** to certifications | On the candidate's LinkedIn and on-positioning for a backend resume. **See the caveat below.** |

### Flagged, unresolved
- **The certification sets still do not reconcile.** `master-profile.md` records that neither resume
  certification appears on LinkedIn and three LinkedIn certifications appear on neither resume. *Build REST APIs
  with FastAPI* was added here because it is on his own profile export, but the provider is unconfirmed.
- **The Nov/Dec 2024 date conflict is still open.** This resume keeps **Nov 2024 – Mar 2026** for the Associate
  role; LinkedIn says Dec 2024 and shows a separate Associate Technical Consultant role for Nov–Dec 2024. One of
  the two documents is wrong and a recruiter comparing them will see it.

## Gaps worth closing before the next application
1. **One throughput or latency figure** for the travel-aggregator backend. Highest-value single fact missing.
2. **Employer-side scraping scale** — pages per run and cadence for the hotel extraction work.
3. **One concrete anti-bot story** — technique, obstacle, result. Converts three skills-line items into evidence.
4. **Scrapy**, even at tutorial depth. The most common scraping keyword still absent.
5. Resolve the **date** and **certification** conflicts above.
