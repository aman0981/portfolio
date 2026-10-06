# Red-Team Review

An adversarial pass against my own output, run in the persona you specified: **a senior technical recruiter who
sees 500+ profiles a week and is looking for a reason to stop reading.**

Eight findings. All eight were fixed in [`02-profile-copy.md`](02-profile-copy.md) and
[`03-keyword-strategy.md`](03-keyword-strategy.md) before you read them — the copy in those files is the revised
version, not the draft these findings describe.

---

## 🔴 Finding 1 — Critical. The About section publicly announced a job search, contradicting your own decision.

**The draft ended with:**

> `WHAT I AM LOOKING FOR` — Backend, Python, web scraping and data-engineering roles… Open to Python Engineer,
> Backend Engineer, Web Scraping / Data Extraction Engineer and Data Engineer titles.

**The problem.** You chose **recruiters-only** Open to Work specifically so that Engineo would not see that you
are looking. Open to Work is private. **Your About section is not.** That block would have been visible to your
manager, your colleagues and your clients, every day, in the single most-read part of your profile. It would
have broadcast exactly what the privacy setting exists to conceal — and done it more loudly than the green
badge you declined.

This is the kind of error that costs someone their current job before the new one arrives. It was mine, and I
should have caught it when I recommended the privacy setting.

**Fixed.** The block is now `WHAT INTERESTS ME`, written as standing professional interest rather than active
search:

> Backend and Python engineering, web scraping and data extraction, and data pipelines — problems where
> reliability matters more than feature throughput. Based in Gurugram, and set up to work remote.
> Always up for a conversation about backend systems or extraction at scale.

**What this costs you:** the four explicit job titles are gone from About. Those titles are still carried by the
headline, the Skills section and your Open-to-Work configuration — which is where job-seeking signals belong,
because only recruiters see them.

**What it preserves:** every keyword that mattered (Backend, Python, web scraping, data extraction, data
pipelines, Gurugram, remote), plus a contact line and a conversational opening that reads natural rather than
available.

---

## 🟠 Finding 2 — "Increasingly in Golang" claimed a trend that is not in evidence.

**Draft:** *"in Python, and increasingly in Golang."*

Your master profile records *"some backend services in Golang"*. That establishes **usage**. It does not
establish a **trajectory**. "Increasingly" implies Go is growing as a share of your work over time, which
nothing on record supports, and it is exactly the kind of small inflation that unravels when an interviewer
asks "so how much Go are you writing now?"

**Fixed.** Now reads *"in Python, and in Golang."* — same keyword, no unsupported claim.

---

## 🟠 Finding 3 — The Golang claim was attached to a project it may not belong to.

**Draft bullet 1:** *"Developed the end-to-end backend for a client travel-aggregator web portal and deployed it
on AWS across ECR, EKS, CloudWatch and S3, **with several services written in Golang alongside the Python
stack**."*

Two separate problems in one sentence.

**First**, your master profile lists the AWS portal and the Golang services as *separate* facts. Merging them
into one sentence asserts that the Go services are part of that portal. That connection has never been
established. It is a plausible inference and it might well be true — but a resume is not the place for
inferences, and you would be the one defending it in an interview.

**Second**, "several" is my word, not yours. Yours is "some". "Several" implies three or more.

**Fixed.** Golang is now its own standalone bullet with no quantifier and no project attached:

> `• Write backend services in Golang alongside the Python stack.`

**This fix also made the profile better.** A short standalone bullet at position 3 makes "Golang" far more
scannable than a trailing clause on a long sentence — and Golang is the single term that opens the most new
market for you. Accuracy and effectiveness pointed the same way.

---

## 🟡 Finding 4 — "Hotel booking sites" was an inference, not a record.

Your master profile says *"two hotel websites"*. I wrote *"hotel booking sites"*. In a travel-aggregator context
that is very likely correct, but "booking" is a function I added, and both resumes say "websites".

**Fixed.** Now *"hotel websites"*, matching the verified record and both resumes exactly.

> **Note for interviews:** the number is **two**. The profile says "hotel websites" without a count, which is
> accurate and reads better than "two" — but if asked, answer two. Do not let the plural imply more.

---

## 🟡 Finding 5 — "Free-tier infrastructure" undersells HireBeacon to a fast reader.

**Draft:** *"Solo build, running in production on free-tier infrastructure."*

To an engineer, running 4,959 crawl sources and 69,318 listings on free tier is impressive cost engineering. To
a recruiter skimming 500 profiles, the words "free tier" land as **hobby project** — and that reading arrives
before the admiring one, in the opening sentence of your strongest asset.

**Fixed.** Now *"Solo build, running in production."* The free-tier fact is genuinely good and belongs in an
interview, where you have time to frame it as a constraint you chose.

---

## 🟡 Finding 6 — The search simulation's "18 / 18" scoreboard was not credible.

A perfect score invites exactly the scepticism it was meant to pre-empt. And it was not honest: search 8,
`"Python Developer" AND "Gurugram"`, matches thousands of profiles. The rewrite puts you in that pool; it cannot
put you at the top of it. Profile text does not win high-volume queries — connection degree, activity,
endorsements and Open-to-Work status do.

**Fixed.** The scoreboard now reads **17 ✓ / 1 ~**, with search 8 flagged and the reason stated in full.

---

## 🟡 Finding 7 — A ranking statistic was stated more confidently than its sourcing supports.

The "roughly 60% of search weight" figure for headline plus current position comes from third-party SEO
analyses and recruiter-tooling vendors, all of whom benefit from dramatic numbers. **LinkedIn publishes no
ranking weights.** Stating it flatly borrowed authority the source does not have.

**Fixed.** [`01-audit.md`](01-audit.md) now carries an explicit source caveat: the *direction* is reliable, the
*precise percentages are indicative only*, and every recommendation holds whether the true figure is 45% or 70%.

---

## 🟢 Finding 8 — "High volume" survives, and it is still the weakest phrase on the profile.

*"Developed a microservice backend with Django and FastAPI to serve a **high volume** of client requests"*

This is your own wording from your existing LinkedIn, and it is unquantified. An unquantified volume claim is
the single most-discounted pattern in recruiter screening. I kept it because removing it would also remove the
genuine scale signal, and inventing a number is not an option.

**Not fixed — it needs a fact from you.** It is item 3 in
[`05-metrics-and-questions.md`](05-metrics-and-questions.md). Either give me a real requests/day figure, or
accept that the bullet is modestly stronger with the words "high volume" deleted entirely.

---

## Considered and deliberately rejected

| Change considered | Why rejected |
|---|---|
| Add "SDE" to the headline | Heavily used by Expedia, Safe Security and Statiq, but you hold no SDE title and padding the headline with an abbreviation you cannot substantiate looks odd. "Software Engineer" carries LinkedIn's synonym matching. |
| Add Scrapy, Kafka, OAuth, WebSockets, Flask or Airflow to Skills | All are common filters you currently fail. None is supported. Adding them would survive the keyword screen and fail the interview, which is worse than not appearing. |
| Name the Big-4 firm or the travel clients | Generic descriptors match both resumes and avoid a client-confidentiality problem on a public page. |
| Soften or remove Kasada and Akamai | Your own shortlist rates it your highest-impact credential. The wording already carries the compliance posture — public data, terms of service, polite rate limits — and states an engineering capability, not anything improper. Keeping it. |
| Drop the data-engineering material to sharpen backend positioning | It is real, it is in the headline, and Anaplan's Engineer II role on your shortlist wants exactly it. The cost is that PySpark sits at bullet 4 of the current role. Acceptable. |
| Claim a number for the Databricks pipeline or the hotel extraction | No verified figure exists. Marked *Metric to verify* instead. |

---

## Objections that still stand — prepare answers, do not edit the profile

These are not fixable by rewriting. A good recruiter will raise them, and you should have an answer ready.

| Objection | Your answer |
|---|---|
| **"Two years against a 3+ year requirement."** | Promoted inside 17 months; end-to-end ownership of a client backend on AWS; two solo production systems. The promotion line is the first thing in your current role for exactly this reason. |
| **"Proxy rotation, CAPTCHA solvers and TLS fingerprinting are in your skills but no bullet shows you using them."** | Your shortlist already flagged this. Prepare one specific story: the obstacle, the technique, the result. YipitData, GobbleCube and Searchlook will probe it. |
| **"Microservices is claimed but no bullet names a service boundary."** | Be ready to describe one concretely — what the services were, how they communicated, where the boundary fell. |
| **"No Scrapy."** | True, and most scraping postings assume it. Your shortlist's suggestion stands: build one real Scrapy spider into HireBeacon, then claim it honestly. |
| **"Your data-engineering work has no volumes and no named cloud."** | Intermediate depth, stated honestly. Do not oversell it. The backend and scraping stories are your strength. |
| **"Only one employer."** | Normal at two years, and a promotion inside it is better evidence than a lateral move. |

---

## What the red-team pass did not change

The **structure** survived scrutiny: headline keyword density, bullet ordering, the three pinned skills, the
project order, and the decision to serve four role families from one profile. The findings above were all
accuracy and framing, not architecture.

**Every number on the profile remains traceable** to `docs/resume/master-profile.md` or to your own LinkedIn
export. Nothing was invented, and nothing survived the pass that I could not point to a source for.
