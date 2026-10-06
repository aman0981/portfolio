# LinkedIn Profile Rebuild — Aman Nikumb

Optimisation of the LinkedIn profile for recruiter **discovery** and **conversion**, targeting Software Engineer,
Python Developer and Backend Engineer roles primarily, with Data Engineer, Web Scraping / Data Extraction and
Automation Engineer as secondary families.

Built 2026-10-05.

---

## Read in this order

The files are numbered so that reading `01` → `06` gives the fourteen deliverables **in the order you asked for
them**. Nothing was reordered for filing convenience.

| File | Covers |
|---|---|
| [`01-audit.md`](01-audit.md) | How LinkedIn ranking works · positioning, discoverability, conversion, credibility and competitive analysis · 4 recruiter personas · the 10-second test · competitor benchmark · **§1** diagnosis and scores · **§2** ten problems · **§3** ten opportunities |
| [`02-profile-copy.md`](02-profile-copy.md) | **§4** positioning · **§5** five headlines · **§6** About · **§7** three experiences · **§8** skills · **§9** projects · **§10** Featured · **§11** banner and photo — **this is the copy-paste file** |
| [`03-keyword-strategy.md`](03-keyword-strategy.md) | **§12** keyword map with placement · **§13** 18 recruiter searches, scored against both the current and the rewritten profile |
| [`04-30-day-plan.md`](04-30-day-plan.md) | **§14** four-week plan · Open-to-Work configuration · job preferences · referral targets |
| [`05-metrics-and-questions.md`](05-metrics-and-questions.md) | Metrics strategy table · the nine questions I need answered, two of them blocking |
| [`06-red-team-review.md`](06-red-team-review.md) | The adversarial pass against my own output: eight findings, what changed, and the objections that still stand |

**If you only have twenty minutes:** open `02-profile-copy.md`, paste the headline, the About section and the
three experience blocks, then add the 50 skills. That is roughly 80% of the available gain.

---

## Where it stands

| | |
|---|---|
| Current profile score | **~28 / 100** (estimate — see the caveat below) |
| Searches you are excluded from today | **13 of 18** modelled recruiter queries |
| Searches you appear in after the rewrite | **17 of 18** competitively, 1 mid-pack |
| Numbers currently on your profile | **0** |
| Numbers after the rewrite | **8**, all verified |
| Skills listed today | **3** |
| Skills recommended | **50** |
| Mechanical effort to apply it all | **~2 hours** |

The single largest finding: **your current role, Software Engineer, April 2026 – Present, has no description at
all.** Seven months since your promotion are blank, in the field that shares the heaviest search weight with your
headline.

---

## Source of truth

Every claim traces to one of:

- **`Profile.pdf`** — your LinkedIn export, read 2026-10-05 (tagged `LI` in the master profile)
- **`../resume/master-profile.md`** — the provenance-tagged fact store built during the resume work
- **`../resume/job-search/2026-10-04-job-shortlist.md`** — your 36 ranked target openings, which set the
  positioning and the referral targets

Nothing here was invented. Where a number would help and none exists, it appears in the metrics table marked
***Metric to verify*** rather than being estimated.

### What the export revealed that the resume work did not have

Three findings, now recorded in `master-profile.md`:

1. **A third role exists** — Associate Technical Consultant, Nov–Dec 2024 (Frappe ERPNext, Nginx, HRMS). It
   appears in neither resume.
2. **A date conflict.** LinkedIn dates your Associate Software Engineer – Data role to **Dec 2024**; both resumes
   say **Nov 2024**. A recruiter comparing the two documents sees a contradiction. **Blocking — see
   `05-metrics-and-questions.md` question 1.**
3. **Two unrecorded achievements** in your own words: an event-driven webhook system for real-time alerts, and
   the backend explicitly described as microservice architecture supporting automated web crawlers.

---

## Honest limits

- **Every score is an estimate.** LinkedIn publishes no ranking API, no profile score and no field weights. These
  figures are structured judgement against documented ranking behaviour and recruiter practice. They are useful
  for prioritising. They are not measurements.
- **Ranking percentages cited in `01-audit.md` come from third-party analyses**, not LinkedIn. The direction is
  reliable; the precise numbers are indicative.
- **No guarantee of interviews, offers or inbound messages.** A profile controls your eligibility and your
  conversion. It does not control hiring demand.
- **I could not see your live profile** — no banner, endorsements, recommendations or full skills list. You
  confirmed those are empty or unset, so the Skills guidance is build-from-scratch plus a delete list.
- **Nothing was applied to LinkedIn.** Everything here is copy-paste blocks for you to review and apply.
- **Nothing is committed to git.** `Profile.pdf` and `public/` are untouched.

---

## Before you publish

Two things to settle first:

1. **Answer the two blocking questions** in `05-metrics-and-questions.md` — the Nov/Dec 2024 date, and whether
   your official title is "Software Engineer" or "Software Engineer – Data". Both appear in published copy.
2. **Fix hirebeacon.in.** Your own job-shortlist QA found mis-parsed experience values (TravClan shows "50+ yrs"),
   non-functional URL filters and searches exceeding 60 seconds. The rewritten profile puts that link in your
   banner, your About, your Featured section and a Project. Recruiters will click it.
