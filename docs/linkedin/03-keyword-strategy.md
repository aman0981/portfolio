# Keyword Strategy & Recruiter Search Simulation (§12 – §13)

---

# §12 — LinkedIn SEO keyword strategy

### The placement rule

Keywords are not equal wherever they land. Placement priority, highest weight first:

**Headline → Experience job titles → About → Experience descriptions → Skills → Projects**

with one exception that overrides the whole hierarchy: **the Skills field is a binary gate.** A recruiter who
filters on a skill you have not listed cannot see you, no matter how well that term is covered elsewhere. So
Skills is low-weight for *ranking* and absolute for *eligibility*. Both matter; they work differently.

A keyword also compounds when it appears in several sections. The column marked **Target placement** below is
where each term *should* live after the rewrite — not a suggestion to repeat it mechanically.

### Primary keywords — highest recruiter value

These are the terms your target employers filter on most often.

| Keyword | Target placement | Status after rewrite |
|---|---|---|
| Python | Headline · About · Skills (pinned) · all roles · both projects | Covered |
| Software Engineer | Headline · job titles | Covered |
| Backend Engineer / Back-End Development | Headline · Skills · About | Covered |
| FastAPI | Headline · About · Skills (pinned) · Role 1 · Role 2 · XBRL | Covered |
| Django | Headline · About · Skills · Role 2 | Covered |
| REST API | Headline · About · Skills | Covered |
| Web Scraping | Headline · Skills (pinned) · About · Role 1 · HireBeacon | Covered |
| Data Extraction | Headline · Skills · About · Role 1 · Role 2 | Covered |
| ETL | Headline · About · Skills · Role 1 · Role 2 · XBRL | Covered |
| Data Engineer / Data Engineering | Skills · job title ("– Data") · About | Covered |
| AWS | Headline · About · Skills · Role 1 · Role 2 | Covered |
| PostgreSQL | Headline · About · Skills · Role 2 · both projects | Covered |
| Golang / Go | Headline · About · Skills · Role 1 | Covered |
| SQL | About · Skills | Covered |

### Secondary keywords — strengthen and qualify

| Keyword | Target placement | Status |
|---|---|---|
| Celery · RabbitMQ · Redis | Headline (Celery) · About · Skills · Role 2 | Covered |
| Microservices | About · Skills · Role 2 | Covered |
| MongoDB · Elasticsearch / OpenSearch | About · Skills · Role 1 · Role 2 | Covered |
| Docker | About · Skills · XBRL | Covered |
| PySpark · Databricks · Delta Lake | About · Skills · Role 1 | Covered |
| Playwright · browser automation · SeleniumBase | About · Skills · Role 1 · Role 2 | Covered |
| Pandas · Pydantic · SQLAlchemy | About · Skills · XBRL | Covered |
| Asynchronous programming / asyncio | About · Skills · XBRL | Covered |
| CI/CD · GitHub Actions · Pytest | About · Skills · both projects | Covered |
| Distributed systems · data pipelines | Skills · About · Role 2 | Covered |
| JWT · API security · rate limiting | About · Role 2 | Covered |
| Web crawling · crawler | Skills · HireBeacon | Covered |

### Long-tail keywords — specific combinations recruiters actually type

These are where you can genuinely rank first page, because the competing pool is tiny.

| Long-tail phrase | Why it is winnable | Where it lands |
|---|---|---|
| `Python FastAPI AWS` | Common ask, and you have all three with deployment evidence | Headline + Role 1 |
| `web scraping anti-bot` | Very few profiles carry credible anti-bot vocabulary | Role 1 + Skills |
| `Kasada Akamai scraping` | Almost nobody names these. Near-unique | Role 1 + About |
| `Python Golang backend` | Dual-language backend is rare at 2 years | Headline + Role 1 |
| `Databricks PySpark medallion` | Narrow and specific | Role 1 |
| `Celery RabbitMQ distributed` | Classic Python-at-scale signature | About + Role 2 |
| `Playwright browser automation Python` | Direct match for automation roles | About + Skills |
| `idempotent ingestion pipeline` | Senior-sounding, and genuinely yours | HireBeacon |
| `async SQLAlchemy asyncpg FastAPI` | Tiny pool, exact match | XBRL |
| `travel domain backend Python` | Four shortlisted employers are travel | Role 1 + Role 2 |

### Job-title keyword variations

LinkedIn's Title filter reads your **Experience job titles**, not your headline. Your titles are fixed by
employment reality, so the strategy is to cover title *variants* in the headline and About, where they are
searched as keywords.

| Variant | Covered by |
|---|---|
| Software Engineer | Headline + both job titles |
| Software Development Engineer / SDE | Not covered — see note below |
| Python Developer / Python Engineer | Headline ("Python"), About CTA names both |
| Backend Engineer / Backend Developer | Headline, Skills |
| Data Engineer | Job title contains "– Data"; Skills; About CTA |
| Web Scraping Engineer / Data Extraction Engineer | Headline, Skills, About CTA |
| Crawler Engineer | Skills ("Web Crawling"), HireBeacon |
| Automation Engineer | Skills ("Browser Automation"), Role 1 |
| API Developer | Skills ("API Development"), About |

> **Note on "SDE".** The abbreviation is heavily used by Expedia, Safe Security, Statiq and Amazon-lineage
> companies on your shortlist, and it appears nowhere on your profile. You cannot put it in a job title you do
> not hold, and padding the headline with it would look odd. The honest fix is the About CTA, which already
> names four target titles — **add "SDE" there only if you are comfortable with it.** I have left it out, since
> "Software Engineer" is the term LinkedIn's own synonym matching most reliably associates with it.

### Keyword density: what I deliberately did not do

The rewritten profile mentions **Python** 8 times across all sections, **FastAPI** 5, **Web Scraping** or its
variants 6. That is natural density for a technical profile — every instance sits inside a real sentence doing
real work. There is no keyword list, no hidden text, no repeated phrase block, and no term appears anywhere it
is not substantiated. Stuffing is both detectable and counterproductive once a human reads the profile.

---

# §13 — Recruiter search simulation

18 searches, each one modelled on a real posting from your own shortlist
(`docs/resume/job-search/2026-10-04-job-shortlist.md`). Each is scored twice: against your **profile today**, and
against the **rewritten profile**.

Legend: **✗** will not appear · **~** may appear, ranked low · **✓** appears, ranked competitively

| # | Search query | Who runs it | Today | After | What makes the difference |
|---|---|---|---|---|---|
| 1 | `"Python" AND "FastAPI" AND "AWS"` | Safe Security, Anaplan, Ottimate | **✗** | **✓** | AWS is absent today — a hard exclusion. Added to headline, About, Skills and Role 1. |
| 2 | `"Python" AND "Django" AND "PostgreSQL"` | Ottimate, Level AI, HFT Talent | **✗** | **✓** | PostgreSQL is absent today. Your most expensive single omission. |
| 3 | `"Backend Engineer" AND "Python" AND ("Go" OR "Golang")` | Safe Security, TBO, Talentoj, Supabase | **✗** | **✓** | Neither "Backend Engineer" nor Go appears today. Both added to headline and Skills. |
| 4 | `"Web Scraping" AND "Python" AND ("Playwright" OR "Selenium")` | YipitData, GobbleCube, Searchlook | **✗** | **✓** | Playwright and Web Scraping both absent today. Now a pinned skill plus two role bullets. |
| 5 | `"scraping" AND ("anti-bot" OR "Akamai" OR "Kasada")` | GobbleCube, Searchlook, Wynd Labs | **✗** | **✓** | Near-unique match. Very small competing pool — expect to rank at or near the top. |
| 6 | `"Data Engineer" AND "PySpark" AND "Databricks"` | Anaplan Engineer II, CredHive | **✗** | **✓** | Today the headline claims "Data Engineering" with zero supporting terms. Now substantiated. |
| 7 | `"Celery" AND "RabbitMQ" AND "Redis"` | Atlys, Wynd Labs (Data Engineer) | **~** | **✓** | All three appear in your experience text today but none in Skills, so skill-filtered variants miss you. |
| 8 | `"Python Developer" AND ("Gurgaon" OR "Gurugram")` | NCR volume recruiters | **~** | **✓\*** | You match today but rank poorly on completeness and have no Open-to-Work signal. Both fixed — but see the asterisk. |
| 9 | `"Software Engineer" AND "Python" AND "Microservices" AND "Docker"` | Statiq, NextDimension, Bain | **~** | **✓** | Microservices and Docker are in body text but not Skills. Added to both. |
| 10 | `"ETL" AND "Python" AND "SQL"` | Generic data screens | **✗** | **✓** | SQL appears nowhere on your profile today, despite a Top SQL 50 badge. |
| 11 | `("Golang" OR "Go") AND "backend" AND India` | Wobot, vCommission, Paytm, Supabase | **✗** | **✓** | One word, an entire market. Highest value-per-character fix on the profile. |
| 12 | `("Elasticsearch" OR "OpenSearch") AND "Python"` | CyberAtlas, Talentoj, BOLD | **✗** | **✓** | You integrated OpenSearch and build ES queries dynamically. Invisible today. |
| 13 | `("crawler" OR "crawling") AND "Python" AND "distributed"` | Wynd Labs, Forage AI | **~** | **✓** | "automated web crawlers" appears once today, in a sub-clause. Now in Skills, a role bullet and a project. |
| 14 | `"FastAPI" AND "async" AND "SQLAlchemy"` | Niche backend screens | **✗** | **✓** | Exact match via the XBRL project. Tiny pool — strong ranking. |
| 15 | `"Python" AND "data pipeline" AND "AWS" AND 2–4 years` | Mid-level data screens | **✗** | **✓** | Experience band matches; the keywords did not exist. |
| 16 | `"Playwright" AND "browser automation"` | Real (REAX), Atlys | **✗** | **✓** | Atlys lists Playwright/Selenium as a plus and travel domain as a plus — you have both. |
| 17 | `"API development" AND "Python" AND ("JWT" OR "authentication")` | Backend security-aware screens | **✗** | **✓** | Your layered API security stack is strong evidence and was entirely absent. |
| 18 | `"travel" AND "Python" AND "backend"` | Atlys, Expedia, TravClan, TBO | **~** | **✓** | Travel domain appears nowhere today despite two travel clients and a travel-aggregator portal. |

### Scoreboard

| | ✓ competitive | ~ low-ranked | ✗ excluded |
|---|---|---|---|
| **Profile today** | **0** / 18 | 5 / 18 | **13** / 18 |
| **After rewrite** | **17** / 18 | 1 / 18 (search 8) | 0 |

**\* Search 8 is the honest exception.** `"Python Developer" AND "Gurugram"` is an extremely high-volume query —
thousands of profiles match it, and the rewrite puts you *in* that pool rather than *at the top of* it. Keywords
cannot win a search that broad. Ranking there is decided by connection degree, recent activity, endorsements and
Open-to-Work status, which is precisely what Weeks 2–4 of the plan work on. Treat any claim that profile text
alone wins high-volume searches as marketing.

### How to read that honestly

**"Appears" is not "gets contacted."** Ranking within the matched pool still depends on connection degree,
recent activity, endorsements, profile completeness and recruiter-side filters you cannot see. What the rewrite
changes is **eligibility**: today you are structurally excluded from 13 of 18 searches regardless of how good you
are, because the terms are simply not on the page. After the rewrite you are in the pool for all 18, and the
remaining variables become things you can influence through activity and referrals — which is what
[`04-30-day-plan.md`](04-30-day-plan.md) is for.

### The three highest-priority keyword fixes

If you only do three things from this entire file:

1. **Add the Skills section** (all 50). Converts you from excluded to eligible across the board. Fixes searches
   1, 2, 3, 4, 6, 7, 9, 10, 11, 12.
2. **Add "Go (Programming Language)" and AWS everywhere they are true.** Two terms, and they alone unlock
   searches 1, 3, 11 and a documented second job market.
3. **Fill the current role.** It restores roughly a third of your total search weight and gives every one of the
   18 searches something to rank.

---

**Next:** [`04-30-day-plan.md`](04-30-day-plan.md) — execution schedule, Open-to-Work config and job preferences (§14).
