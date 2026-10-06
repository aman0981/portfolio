# JD Research — Web Scraping / Web Data Extraction / Crawler Engineer

Representative postings and aggregator summaries gathered 2026-09-14 (no specific JD supplied by the candidate). Used to derive the keyword set for Resume A. Requirements are aggregated across postings; a single real JD will differ, so re-tailor per application.

## Sources
- Alphamatician — Web Scraping Engineer (bebee.com, Indiana, US). Required: "Python proficiency with modern scraping libraries: Playwright, Scrapy, Selenium, Requests, httpx, BeautifulSoup, or comparable"; "demonstrated experience scraping hard targets at scale"; MySQL query optimization; PHP. Preferred: "anti-bot evasion: residential proxies, TLS fingerprint matching, JA3, header rotation, CAPTCHA strategy"; Node.js/Puppeteer; financial/alternative data. Responsibilities: review pipeline logs, triage failures, update scrapers as sites change, data-quality checks against baselines.
- ZipRecruiter "Python Web Scraping" and "Web Scraping" job aggregates (Aug–Sep 2026): Python + HTML/CSS; Playwright/Scrapy/Selenium/Requests/httpx/BeautifulSoup; dynamic websites and JavaScript rendering; anti-scraping mechanisms; REST API development; SQL and NoSQL databases; cloud and containerization; JSON/XML formats. Many list 3+ years.
- Glassdoor / Indeed / Cutshort India listings ("web crawler engineer", "web scraping", "data engineer web crawling"): 1–3 years typical for Web Scraping & Automation Engineer; Python; crawling strategies for pagination, dynamic content and complex site structures; Playwright or Selenium; Scrapy; CSS selectors and XPath; Pandas/NumPy for cleaning; XML; Git; databases.
- Legistify — Python Developer (Web Scraping Specialist), India (Taro listing; page did not expose the full JD, title/company only).

## Derived keyword set

### Required (appear in most postings)
| Keyword / requirement | Candidate coverage | Status |
|---|---|---|
| Python | Every role and project | Match |
| Web scraping / crawling / data extraction | Travel-client extraction platform; HireBeacon 13-source crawler | Match |
| Playwright (browser automation, JS-rendered pages) | Used at Engineo (USER-confirmed) | Match |
| Requests + BeautifulSoup (HTTP extraction, HTML parsing) | Used at Engineo (USER-confirmed) | Match |
| Dynamic websites / JavaScript rendering | Playwright work | Match |
| Handling anti-scraping mechanisms / access restrictions | Retries, backoff, header and session rotation (USER); anti-bot handling in HireBeacon (SITE) | Partial (no proxies/CAPTCHA) |
| HTML/CSS selectors | Implied by BeautifulSoup/Playwright work | Match (listed in skills) |
| Pagination, crawl strategies, scheduling | HireBeacon scheduled crawls; adapter contract | Match |
| Data cleaning / processing (Pandas) | Pandas on resume; Excel ingestion pipeline | Match |
| SQL and NoSQL databases | PostgreSQL, MongoDB, Redis, Elasticsearch | Match |
| REST API development | FastAPI/Django APIs, streaming API | Match |
| JSON / data formats | Excel-to-JSON pipeline, ATS JSON APIs | Match |
| Git / version control | Git, GitHub Actions | Match |
| Pipeline monitoring, failure triage, data-quality checks | Monitoring in travel platform; HireBeacon close-out gate and link-verification sweeps | Match |
| 3+ years (many US postings) | ~2 years | Gap (honest) |

### Preferred (appear in some postings)
| Keyword / requirement | Candidate coverage | Status |
|---|---|---|
| Scrapy | Not used | Gap (not claimed) |
| Selenium / SeleniumBase | Listed on old resume only, not confirmed used | Omitted |
| httpx | Not used | Gap |
| XPath | Not evidenced | Gap (not claimed) |
| Proxies / residential proxies / proxy rotation | Not used | Gap (not claimed) |
| CAPTCHA strategy, TLS fingerprinting / JA3 | Not used | Gap (not claimed) |
| Header rotation | Used (USER) | Match |
| Docker / containerization | Docker used | Match |
| Cloud platforms | AWS S3, OpenSearch | Match |
| Node.js / Puppeteer / TypeScript | HireBeacon UI in Next.js 15 + TypeScript | Partial |
| Scraping at scale (volumes) | No verified scale numbers | Gap (not claimed) |

### Domain terms used naturally in Resume A
web scraping, web crawling, data extraction, browser automation, JavaScript-rendered pages, dynamic content, HTTP/HTTPS, headers, cookies, sessions, rate limits, HTTP 403/429, retries, exponential backoff, anti-bot mitigation, responsible scraping, scraper reliability, DevTools network inspection, undocumented APIs, idempotent upserts, pagination, scheduled crawls, data parsing/cleaning/validation.

### Forbidden phrasing (per candidate instruction)
"hacking websites", "breaking anti-bot systems", "bypassing security", "evasion" — replaced with "anti-bot mitigation", "access restriction handling", "responsible scraping", "scraper reliability engineering".
