# LinkedIn Profile Audit — Aman Nikumb

Source: `Profile.pdf` (LinkedIn "Save to PDF" export, 2 pages, read 2026-10-05)
Fact gate: `docs/resume/master-profile.md`
Market context: `docs/resume/job-search/2026-10-04-job-shortlist.md` (36 ranked openings, your real target set)

> **Everything numeric in this file is an estimate.** LinkedIn publishes no ranking API and no profile score.
> These figures are a structured judgement against documented ranking behaviour and against how recruiters
> actually screen. They are useful for prioritising work. They are not measurements, and no score here predicts
> an interview or an offer.

---

## How LinkedIn ranking actually works, so the scores below mean something

Four mechanics drive everything in this document.

**The headline and current-position fields carry the heaviest search weight** — reported at roughly 60% combined.
That is why an empty current role is not a cosmetic gap but a ranking failure.

> **Source caveat on that 60%.** LinkedIn does not publish its ranking weights. That figure, and the
> completeness and endorsement multipliers cited below, come from third-party SEO analyses and recruiter-tooling
> vendors, who have an obvious interest in large numbers. Treat the **direction** as reliable — headline and
> current position dominate, Skills gate filtered searches, completeness helps — and treat the **precise
> percentages as indicative only**. Every recommendation in these files holds regardless of whether the true
> figure is 45% or 70%.

**The Skills filter is an exact match.** When a recruiter filters LinkedIn Recruiter on "Celery", a profile that
does not list the literal skill "Celery" cannot appear, no matter how much Celery work is described in the
experience text. Skills are a gate, not a nice-to-have.

**The Title filter reads the job-title field in Experience, not the headline.** This is the single most
misunderstood mechanic. Your headline drives *keyword* search; your Experience titles drive *title* filters.
They need different content.

**Completeness is a multiplier.** Profiles with every section populated are reported to receive many times the
views of incomplete ones. Empty Projects, Featured, and recommendations sections cost you across every search,
not just the ones that would have matched those sections.

---

## A. Overall positioning

**What the profile currently communicates:** a Python application developer, roughly two years in, who works
with Django and FastAPI and has some data exposure. Competent, generic, interchangeable.

**What a recruiter would think you specialise in:** backend CRUD services in Python. Nothing more specific.

**Is the positioning too broad, too narrow, or unclear?** Unclear, and in an unusual way. The headline is
actually reasonably broad — *Python Developer | FastAPI | Data Extraction | ETL | Data Engineering* covers four
families. But nothing below the headline substantiates any of them. The About section talks about Django,
Celery, Redis and Docker. The experience body covers microservices and webhooks. **"Data Extraction", "ETL" and
"Data Engineering" appear in the headline and then are never mentioned again anywhere on the profile.** A
recruiter who filters on those terms finds you, opens the profile, sees no evidence, and leaves. That is the
worst of both worlds: you pay the focus cost of a broad headline and collect none of the credibility.

**Roles recruiters would currently consider you for:** Python Developer, Junior/Mid Backend Developer, possibly
Django Developer.

**Roles you are being incorrectly filtered out of, despite being qualified:**

| Role family | Why you are filtered out |
|---|---|
| Web Scraping / Crawler Engineer | The words Playwright, anti-bot, crawler, Kasada and Akamai appear nowhere. This is your strongest differentiator and it is 100% invisible. |
| Golang Backend Engineer | "Golang"/"Go" appears nowhere. Closes Safe Security, Wobot, vCommission, TBO, Supabase, Paytm from your own shortlist. |
| Data Engineer | PySpark, Databricks, Delta Lake, medallion and Elasticsearch appear nowhere. The headline claims the title with zero support. |
| Backend Engineer (AWS) | AWS, ECR, EKS, S3, CloudWatch appear nowhere. Most backend JDs filter on cloud. |
| SDE / Software Engineer at product companies | PostgreSQL, MongoDB, microservices-as-a-skill, Docker-as-a-skill all missing from the Skills field, so you fail skill-filtered searches. |

---

## B. Recruiter discoverability

Keyword presence on the current profile, for the terms that matter to your target market:

| Keyword | Headline | About | Experience | Skills | Verdict |
|---|---|---|---|---|---|
| Python | yes | yes | — | yes | **Strong** |
| FastAPI | yes | yes | yes | yes | **Strong** |
| Django | — | yes | yes | yes | **Strong** |
| Celery / Redis / RabbitMQ | — | yes | yes | — | Partial — missing from Skills, so skill-filtered searches miss you |
| Microservices | — | — | yes | — | Weak |
| REST API / API | — | yes ("API Integration") | — | — | Weak |
| Data Extraction / ETL / Data Engineering | yes | — | — | — | **Headline-only. No evidence anywhere.** |
| Web Scraping / crawler | — | — | "web crawlers", once | — | **Near-zero** |
| Golang / Go | — | — | — | — | **Absent** |
| AWS / cloud | — | — | — | — | **Absent** |
| PostgreSQL / MongoDB / SQL | — | — | — | — | **Absent** |
| PySpark / Databricks / Delta Lake | — | — | — | — | **Absent** |
| Playwright / browser automation | — | — | — | — | **Absent** |
| Elasticsearch / OpenSearch | — | — | — | — | **Absent** |
| Docker | — | yes | — | — | Weak |
| Pandas / Pytest / CI-CD | — | — | — | — | **Absent** |

**The most damaging line in that table is PostgreSQL.** You have used it in every role and both projects, it is
in more backend JDs than almost any other term, and it appears nowhere on your LinkedIn profile.

Three skills are listed in total: Python, FastAPI, Django. Because the Skills filter is exact-match, **you are
structurally excluded from any filtered search that names a fourth technology.**

---

## C. Profile conversion

| Element | State | Assessment |
|---|---|---|
| First impression | Headline + "A passionate Software Engineer…" | Reads as a 2024 fresher profile, not a promoted engineer with production ownership |
| Headline | ~113 of 220 characters | Half the highest-weighted field on the profile is unused |
| About | ~700 of 2,600 characters | Generic. No metrics, no projects, no outcomes. Lists VS Code and Postman as notable skills |
| Experience — current role | **Empty** | Seven months since promotion, zero words. See §2 problem 1 |
| Experience — Associate SWE | 3 bullets | Decent, but omits every quantified win you have |
| Experience — ERP role | 3 bullets | A 2-month role given equal space to the 16-month engineering role |
| Skills | 3 | See above |
| Projects | **Absent** | HireBeacon and XBRL Engine both missing |
| Education | No GPA; two school entries | GPA 8.54 is verified and omitted; schools consume space |
| Certifications | 5, two off-positioning | Java and Android actively pull against the narrative |
| Featured | **Absent** | No way to reach hirebeacon.in or your GitHub from the profile |
| Completeness | Low | Also: no banner, no recommendations, no endorsements, no honours |
| Evidence of impact | **None** | Not one number anywhere on the profile |
| Technical credibility | Low-moderate | Framework names without systems, scale or outcomes |
| Career narrative | Broken | The promotion is visible as a title change with no accompanying story |
| Call to action | "Open to collaboration, discussions, and opportunities to grow" | Says nothing about what roles you want |
| Contact | Email only | No GitHub, no hirebeacon.in, no phone. Vanity URL is the auto-generated `aman-nikumb-6922a6216` |

---

## D. Credibility problems

Specific lines, and what is wrong with each.

| Line | Problem |
|---|---|
| "A passionate Software Engineer with experience in…" | "Passionate" is the single most common opener on LinkedIn. It is a filler word that occupies the most valuable sentence on the profile. |
| "…Python, Django, Fast API, Application Development, MQ, Celery, Redis, DevOps(Docker, Docker-Compose), System Design, API Integration, VS Code, and Postman" | A tool list, not a capability statement. **VS Code and Postman are not skills** — listing them next to System Design actively lowers the perceived level of everything in the sentence. "Fast API" is also misspelled (it is one word). |
| "also having knowledge of HTML5, CSS, Javascript" | "Knowledge of" is a hedge. It signals you have none of it at working level, and it pulls a backend profile toward frontend. |
| "I enjoy building efficient and scalable solutions, automating tasks, and working with data." | True of every engineer. Zero information. |
| "Always eager to learn new technologies and improve my skills" | Reads junior. You were promoted inside 17 months — that fact says more and is absent. |
| "Open to collaboration, discussions, and opportunities to grow in the ever-evolving tech world!" | Buzzword close with no actionable CTA. A recruiter cannot tell what role to offer you. |
| "handle **high volume** of client requests" | "High volume" without a number is the classic unsubstantiated claim. It invites "how high?" and you currently have no answer prepared. |
| "**enhancing** client responsiveness" / "**enhancing** operational efficiency" / "**improving** system accessibility" / "**streamlining** HR processes" | Four impact claims in the profile, none quantified, none verifiable. This is the pattern recruiters are trained to discount. |
| "Software Engineer- Data@engineo solutions" in the headline | Spacing error, lowercase company name, and ~40 characters spent on an employer with no brand recognition — in the highest-weighted field on the profile. |

**Nothing on the profile is exaggerated or false.** The credibility problem is the opposite: the profile is
*under*-claimed. Real, verifiable, impressive work is missing, and its place is taken by generic filler.

---

## E. Competitive positioning

Against a strong software engineer with ~2 years of experience targeting product companies, startups and
consultancies:

| Dimension | A strong 2-year profile | Yours today | Gap |
|---|---|---|---|
| Positioning | One clear specialism, stated in the headline and proved below it | Four claimed, none proved | **Severe** |
| Technical depth | Systems described, not just named | Framework list | **Severe** |
| Achievement density | 2–4 quantified outcomes | Zero | **Severe** |
| Keywords | 30–50 skills, all sections populated | 3 skills, 5 sections empty | **Severe** |
| Clarity | Scannable in 10 seconds | Requires reading to extract anything | High |
| Credibility | Links to live work or repos | No outbound link at all | **Severe** |
| Differentiation | One thing that is hard to copy | Nothing visible | **Severe** |
| Recruiter appeal | Obvious what to offer them | Unclear | High |

**What would make a recruiter choose you over another candidate — once it is visible:**

1. **Kasada and Akamai, named.** Very few engineers at any level have worked extraction against enterprise
   bot-management platforms. Your own shortlist rates this your highest-impact credential, and four companies on
   it ask for exactly this.
2. **hirebeacon.in is live and checkable.** 4,959 sources, 69,318 listings, 336 tests, running on free-tier
   infrastructure. A recruiter can click it and see it work. Almost nobody at two years has this.
3. **Python *and* Golang *and* an AWS EKS deployment.** Opens an entire second market a Python-only profile cannot
   reach.
4. **Promoted inside 17 months.** The direct counter to every "3+ years" filter you will hit.
5. **471 automated tests across two solo projects.** Testing discipline at this level is genuinely unusual
   two years in, and backend interviewers weight it more heavily than candidates expect.

**Every one of those five is currently invisible on your LinkedIn profile.**

---

## Recruiter persona test

### Persona 1 — Hiring a Python Backend Engineer (e.g. Ottimate, Anaplan, Level AI)

1. **Shortlist?** Borderline, and only if they found you at all. Probably not.
2. **Attracts them:** FastAPI and Django together; microservices; Celery/RabbitMQ/Redis.
3. **Creates doubt:** no database named anywhere; no cloud; no testing; no scale; current role blank.
4. **Missing:** PostgreSQL, AWS, Docker as a listed skill, any performance figure, any ownership signal.
5. **Highest-impact single change:** fill the current role with the AWS travel-aggregator backend bullet. It
   simultaneously supplies cloud, ownership and seniority evidence.

### Persona 2 — Hiring a Data Engineer (e.g. Anaplan Engineer II, CredHive)

1. **Shortlist?** No.
2. **Attracts them:** the headline says "ETL" and "Data Engineering", and the job title contains "Data".
3. **Creates doubt:** everything. There is no Spark, no Databricks, no warehouse, no pipeline, no SQL, no data
   volume on the entire profile. The headline claim is unsupported, which is worse than not claiming it.
4. **Missing:** PySpark, Databricks, Delta Lake, medallion architecture, Elasticsearch, SQL, any row count.
5. **Highest-impact single change:** add the Databricks/PySpark medallion bullet to the current role and add the
   five corresponding skills.

### Persona 3 — Hiring a Web Scraping / Data Extraction Engineer (e.g. GobbleCube, YipitData, Searchlook, Wynd Labs)

1. **Shortlist?** No — and this is the most expensive miss on the profile, because it is the role you are
   *best* qualified for.
2. **Attracts them:** one phrase, "automated web crawlers", buried in a sub-clause of the second role.
3. **Creates doubt:** no browser automation tool, no anti-bot vocabulary, no proxy/session handling, no scale,
   no crawler reliability concepts.
4. **Missing:** Playwright, SeleniumBase, Kasada, Akamai, anti-bot mitigation, reverse engineering, TLS
   fingerprinting, proxy rotation, HireBeacon in its entirety.
5. **Highest-impact single change:** add HireBeacon as a Project with its real numbers and a live link, and add
   "Web Scraping" as a pinned skill.

### Persona 4 — Hiring a general Software Engineer / SDE (e.g. Safe Security, Expedia, Statiq)

1. **Shortlist?** Weak maybe. The profile does not read like someone who would clear an SDE loop.
2. **Attracts them:** promotion inside the company; microservices; a 2020–2024 B.Tech.
3. **Creates doubt:** no DS&A signal, no languages beyond Python, no system design evidence, no scale, blank
   current role.
4. **Missing:** Golang, AWS, 200+ LeetCode/HackerRank problems, GPA 8.54, both projects, all testing evidence.
5. **Highest-impact single change:** add Golang everywhere it is true, and add the LeetCode/HackerRank record to
   Honours. Both directly answer SDE screening criteria.

---

## The 10-second test

A recruiter opens your profile and gives it ten seconds.

**What they currently understand:** Python developer, Django and FastAPI, about two years, based in Gurugram,
currently at a company they have not heard of.

**What remains unclear:** what you actually build. What you are good at. Whether you have shipped anything to
production. Whether you have scale. What role to offer you. Whether you are even looking.

**What they should understand in those ten seconds:**

> Python and Golang engineer, two years, builds backend systems and production crawlers, ships on AWS, runs a
> live platform covering 4,959 sources, and is open to backend/scraping/data roles in NCR or remote.

**Your strongest differentiator:** extraction against Kasada- and Akamai-protected sites, backed by a live,
clickable platform at hirebeacon.in. Nothing else on your profile is as hard for another candidate to match.

**What is currently wasting valuable profile space:**

- ~40 headline characters on "@engineo solutions"
- The entire first and last sentences of the About section
- "VS Code, and Postman" and "knowledge of HTML5, CSS, Javascript"
- Two school entries under Education
- Two off-positioning certifications (Java Masterclass, Android Development)
- Three full bullets on a two-month ERP consulting role

---

# §1 — Executive diagnosis

| Dimension | Score | Reasoning |
|---|---|---|
| Recruiter discoverability | **32** / 100 | Headline keywords are decent; everything beneath them is empty. Three skills against an exact-match filter. No Open-to-Work signal. |
| Technical positioning | **38** / 100 | Reads as a competent Python app developer. The scraping, Golang, cloud and data-engineering dimensions are all absent. |
| Credibility | **28** / 100 | Nothing false, but zero evidence. Four unquantified "enhancing/improving" claims. "Passionate" opener. |
| Differentiation | **15** / 100 | All five of your genuine differentiators are invisible. Interchangeable with thousands of profiles. |
| Experience presentation | **22** / 100 | The current role is empty. A 2-month ERP role carries the same weight as the 16-month engineering role. |
| Keyword optimization | **35** / 100 | Half the headline unused. PostgreSQL, AWS, Golang, Playwright, PySpark all missing entirely. |
| Profile completeness | **30** / 100 | Projects, Featured, banner, recommendations, endorsements, honours — all empty. Default vanity URL. |
| Recruiter conversion | **24** / 100 | No outbound link, no metrics, no CTA. A recruiter cannot tell what to offer you. |

## **Overall: 28 / 100 — estimate**

The honest summary: **this is not a bad profile, it is an absent one.** Nothing on it is wrong. It simply does
not contain the work you have done. The gap between what you have actually built and what your profile says you
have built is the largest I would expect to see on a profile of someone with your record — which is good news,
because closing it requires no new achievements, only transcription.

---

# §2 — The ten biggest problems, ranked

| # | Problem | Why it ranks here |
|---|---|---|
| **1** | **The current role is completely empty.** Software Engineer, Apr 2026 – Present, Gurugram — zero description. | Current position shares ~60% of search ranking weight with the headline, *and* it is the first thing a recruiter reads after the About section. Seven months of your best work — AWS deployment, Kasada/Akamai extraction, Databricks pipelines, Golang services — produce nothing in search and nothing on the page. Single highest-impact fix available. |
| **2** | **Only three skills are listed.** | The Skills filter is exact-match. Every filtered search naming PostgreSQL, AWS, Celery, Docker, Golang, Playwright, PySpark or Elasticsearch excludes you by construction. This is a hard gate, not a soft ranking penalty. |
| **3** | **The entire scraping specialism is invisible.** | It is your highest-value differentiator and the role family you are best qualified for. Four shortlisted companies ask for precisely it. Kasada, Akamai, Playwright, anti-bot, proxy rotation: none appear. |
| **4** | **No Projects section.** | HireBeacon is live, public and independently verifiable — the rarest asset a two-year candidate can have. XBRL Engine shows async architecture and testing depth. Both absent. This also costs you the completeness multiplier. |
| **5** | **Not one number anywhere on the profile.** | 70%, 40%+, 4,959, 69,318, 24,852, 336 tests, 135 tests, GPA 8.54, 200+ problems — all verified, all missing. Achievement density is the clearest separator between profiles at your level. |
| **6** | **The About section is generic and evidence-free.** | Opens with "passionate", lists VS Code and Postman as skills, closes with "ever-evolving tech world". It occupies the most-read block on the profile and converts nobody. |
| **7** | **Golang is entirely absent.** | One word closes an entire second market — Safe Security, Wobot, vCommission, TBO, Supabase and Paytm on your own shortlist. Possibly the highest value-per-character fix on the whole profile. |
| **8** | **The headline wastes ~40 characters and leaves ~107 unused.** | "@engineo solutions" buys nothing in the highest-weighted field on the profile, while Backend, Golang, AWS, PostgreSQL and Web Scraping sit outside it. |
| **9** | **A two-month ERP role carries the same weight as the 16-month engineering role.** | Frappe/ERPNext, Nginx and HRMS configuration is ERP-consultant work. Given three bullets, it visibly competes with the engineering narrative directly above it. |
| **10** | **Completeness gaps across the board.** | No Featured, no banner, no recommendations, no endorsements, no honours, default vanity URL, no GitHub or hirebeacon.in link, no Open-to-Work. Each is small; together they are a standing multiplier against every search you appear in. |

---

# §3 — The ten biggest opportunities, ranked by expected impact

| # | Opportunity | Expected effect | Effort |
|---|---|---|---|
| **1** | **Fill the current role with five achievement bullets** — AWS portal ownership, Kasada/Akamai extraction, Databricks/PySpark medallion ETL, the multi-engine framework upgrade, and Golang services. | Fixes problems 1, 3, 7 at once. Restores ~30% of total search ranking weight and gives every persona something to read. | 20 min |
| **2** | **Build the Skills section to ~45 entries and pin Python, FastAPI, Web Scraping.** | Converts you from excluded to eligible in every skill-filtered search. The highest-leverage mechanical change on the profile. | 25 min |
| **3** | **Add both projects, with live link and real numbers.** | Supplies the clickable proof no competing candidate has, plus the completeness multiplier. | 20 min |
| **4** | **Rewrite the headline.** | The single highest-weighted field. Adds Backend Engineer, Golang, Web Scraping, AWS, PostgreSQL for free. | 5 min |
| **5** | **Rewrite About around evidence.** | Converts the recruiter who already found you. Carries the metric block and the first CTA you have ever had. | 15 min |
| **6** | **Turn on Open to Work, recruiters-only, with the right titles and locations.** | A primary LinkedIn Recruiter filter. Many recruiters search this pool exclusively. Hidden from your employer. | 5 min |
| **7** | **Add the Featured section** — hirebeacon.in, XBRL repo, GitHub, resume PDF. | The only route from profile to proof. Converts interest into evidence in one click. | 10 min |
| **8** | **Rewrite the Associate role around its quantified wins** and compress the ERP role to one line. | Surfaces 70% and 40%+ — your only employer-side metrics — and stops ERP work competing with engineering. | 15 min |
| **9** | **Claim a custom vanity URL and complete the contact block.** | `linkedin.com/in/aman-nikumb` instead of a random suffix; adds GitHub and hirebeacon.in as reachable links. | 5 min |
| **10** | **Add honours, fix education, prune certifications, add a banner, request recommendations.** | Completeness, plus GPA 8.54 and 200+ LeetCode/HackerRank for SDE screens. Recommendations are the slowest item — start them early. | 30 min + waiting |

**Total mechanical effort for items 1–9: roughly 2 hours.** Every one of them is transcription of work you have
already done. None requires a new achievement, a new skill, or a single invented word.

---

**Next:** [`02-profile-copy.md`](02-profile-copy.md) — the copy-paste-ready replacement content (§4–§11).
