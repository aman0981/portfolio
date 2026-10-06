# Metrics Strategy & Open Questions

---

## Metrics strategy

Your profile currently contains **zero numbers**. The rewrite in `02-profile-copy.md` adds **eight verified
ones** — 70%, 40%+, 4,959, 69,318, 336, 24,852, 71, 135 — plus GPA 8.54 and 200+ problems in Education and
Honours.

**Every one of those comes from work you have already done and recorded.** Nothing below was invented, and
nothing below should be added to your profile until you have confirmed the real figure.

The table is ordered by **how much the missing number would be worth**, not by section order.

| Existing statement | Missing evidence | Recommended metric | Why it matters |
|---|---|---|---|
| "Developed the end-to-end backend for a client travel-aggregator web portal and deployed it on AWS" | No performance figure anywhere on the profile | **Requests/day, peak RPS, p95 latency, or concurrent users** | Your single biggest gap. Backend interviewers ask for a performance number almost immediately, and you currently have no answer prepared for any role family. One figure here lifts the backend positioning more than any wording change. **Metric to verify.** |
| "Build data-extraction services for hotel booking sites fronted by Kasada and Akamai" | No scale at all for your *employer* scraping work | **Pages or listings per run · run cadence · extraction success rate** | This is your strongest credential and it is currently a capability claim with no evidence behind it. HireBeacon supplies scale for your side project; your paid work has none. Scraping interviewers will probe exactly this. **Metric to verify.** |
| "Developed a microservice backend … to serve a **high volume** of client requests" | "High volume" is your own wording and is unquantified | **Requests/day or peak RPS** | Unquantified volume claims are the pattern recruiters are trained to discount. Right now this phrase slightly *weakens* the bullet. Either quantify it or the bullet is stronger without the words "high volume". **Metric to verify.** |
| "Build a code-first ETL pipeline on Databricks with PySpark … bronze, silver and gold Delta Lake layers" | No data volume, no runtime, no source count | **Rows or GB per run · pipeline runtime · number of source systems** | Every data-engineering JD screens on volume. Without it, "I build pipelines" reads as tutorial-scale. **Metric to verify.** |
| "Upgraded the in-house data-extraction framework to multi-browser-engine support" | No before/after | **Collectors migrated · change in failure rate or success rate** | An upgrade with no measured effect invites "so what changed?". A failure-rate delta turns a task into an engineering win. **Metric to verify.** |
| "Built the in-house data-extraction framework and a distributed extraction platform for a US travel-domain client" | No breadth | **Number of sites/sources covered · items extracted per day** | Mirrors HireBeacon's 4,959/69,318, which is the figure that makes your side project credible. The employer equivalent is missing. **Metric to verify.** |
| "Integrated an event-driven webhook system delivering real-time alerts and job updates" | No scale, no latency | **Events delivered/day · delivery latency** | New material from your LinkedIn, and currently the vaguest bullet in the rewrite. A number would make it competitive with the others. **Metric to verify.** |
| "cutting manual effort by about 70%" | Has a percentage, but no base | **Hours/week before and after · records or tables processed** | A percentage without a base is weaker than it looks: 70% of 2 hours and 70% of 2 days are very different stories. The base makes it concrete and interview-proof. **Metric to verify.** |
| "removed 40%+ of redundant API calls" | Has a percentage, no absolute or cost | **Calls/day before and after · infrastructure cost saved per month** | Engineering managers hear percentages; budget holders hear money. A monthly cost figure converts this from a technical win into a business one. **Metric to verify.** |
| "a layered API security stack of API keys, IP allow-listing, JWT, CORS and bad-user-agent flagging" | No outcome | **Abusive requests blocked/day · change in abuse or incident rate** | Security work is almost universally unquantified on resumes, so *any* number here would stand out sharply. **Metric to verify.** |
| "several services written in Golang" | No count, no scope | **How many Go services · what they do · why Go and not Python** | "Several" is vague for what is strategically one of your most valuable claims — it opens an entire second job market. Be specific. **Metric to verify.** |
| "Deployed Frappe ERPNext … configured the HRMS module" | No outcome | **Users supported** | Low priority. Only add if it is a number you already know. |

### Two rules for using this table

**Never estimate upward.** If the travel portal served 2,000 requests a day, write 2,000. A small real number is
credible and defensible; a large unverifiable one collapses in the first interview and takes the rest of your
profile with it.

**If you cannot verify a number, the statement is still fine without one.** The rewrite reads well as-is. These
are upgrades, not repairs.

---

## Information I should provide you

Nine items, ordered by impact. Two are blocking.

### 🔴 Blocking — these affect published content

**1. Which start date is correct for Associate Software Engineer – Data: November or December 2024?**
Your LinkedIn says December 2024 and dates Associate Technical Consultant to Nov–Dec 2024. Both resumes in
`docs/resume/` say November 2024 and do not mention the ERP role at all. A recruiter comparing your resume and
profile side by side sees a contradiction, and date inconsistency is one of the things background checks
actually catch. Tell me which is right and I will correct the losing document.

**2. Is your official current job title "Software Engineer" or "Software Engineer – Data"?**
LinkedIn says the former; both resumes, your portfolio site and the master profile say the latter. I have
recommended "Software Engineer – Data" because LinkedIn Recruiter's Title filter reads this field and the word
"Data" changes which searches you appear in — but only if that is genuinely your title.

### 🟡 High value — each would materially improve recruiter conversion

**3. One performance number for the travel-aggregator backend.** Requests/day, peak RPS, p95 latency or
concurrent users. Any one of them. This is the most valuable single fact you could give me.

**4. Scale for the hotel-extraction work.** Pages per run and run cadence. It converts your strongest credential
from a claim into evidence.

**5. Which cloud hosts the Databricks workspace** — AWS, Azure or GCP? The master profile has blocked naming one
since September because it was never confirmed. "Azure Databricks" and "Databricks on AWS" are separate recruiter
searches, and you currently appear in neither.

**6. Do you use Spark SQL alongside the DataFrame API?** It is a required keyword in most data-engineering
postings and is currently on your "not claimable" list purely for lack of confirmation.

### 🟢 Worth answering when convenient

**7. Have you worked with OAuth or a managed identity provider** (Auth0, Cognito, Keycloak, Firebase Auth)?
It is the most common backend auth keyword still missing from your profile. You have JWT, API keys and CORS,
which is most of the way there.

**8. Do you still hold the two resume certifications** — *Become a Django Developer* (LinkedIn Learning) and
*100 Days of Code* (Udemy)? Neither appears on LinkedIn, and three LinkedIn certifications appear on neither
resume. The two sets should be reconciled.

**9. Are you comfortable with hirebeacon.in being prominently and publicly associated with you while employed
at Engineo?** It is already public and it is your strongest asset, so my recommendation is yes. But Featured
placement plus a banner mention makes it considerably more visible to colleagues than it is today, and that is
your call to make rather than mine.

---

**Next:** [`06-red-team-review.md`](06-red-team-review.md) — the adversarial pass against this work.
