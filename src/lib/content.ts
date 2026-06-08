// ----------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Every metric here is verified against the real codebases / running apps.
// ----------------------------------------------------------------------------

export const site = {
  name: "Aman Nikumb",
  role: "Software Engineer — Data",
  shortName: "Aman Nikumb",
  url: "https://amannikumb.dev", // update to final domain before deploy
  locale: "en_US",
  description:
    "Aman Nikumb — Software Engineer (Data). Backend & data engineer building async ETL pipelines, distributed systems, and AI-powered platforms with Python, FastAPI, PySpark, Databricks and PostgreSQL.",
  keywords: [
    "Software Engineer",
    "Data Engineer",
    "Backend Developer",
    "Python",
    "FastAPI",
    "PySpark",
    "Databricks",
    "ETL",
    "PostgreSQL",
    "Forward Deployed Engineer",
  ],
};

export const profile = {
  name: "Aman Nikumb",
  role: "Software Engineer — Data",
  company: "Engineo Solutions",
  location: "Gurugram, India",
  email: "amannikumbh73@gmail.com",
  headshot: "/aman-nikumb.png",
  resume: "/Aman_Nikumb_Resume.pdf",
  // Hero value-proposition — Forward Deployed Engineer trajectory
  tagline: "I turn client requirements into shipped software, deployed pipelines, and business-ready analytics.",
  heroLine: "Backend & data engineer building async ETL, distributed systems, and AI-powered platforms — end to end.",
  yearsExperience: "1.5+",
};

export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "code" | "terminal";
  handle: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/aman0981", icon: "github", handle: "aman0981" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aman-nikumb-6922a6216/", icon: "linkedin", handle: "aman-nikumb" },
  { label: "Email", href: "mailto:amannikumbh73@gmail.com", icon: "mail", handle: "amannikumbh73@gmail.com" },
  { label: "LeetCode", href: "https://leetcode.com/u/aman_147/", icon: "code", handle: "aman_147" },
  { label: "HackerRank", href: "https://www.hackerrank.com/profile/amannikumbh73", icon: "terminal", handle: "amannikumbh73" },
];

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ----------------------------------------------------------------------------
// About
// ----------------------------------------------------------------------------
export const about = {
  kicker: "About",
  heading: "Backend roots, data-engineering focus.",
  paragraphs: [
    "I'm a Software Engineer on the Data team at Engineo Solutions, where I was promoted from Associate Software Engineer in April 2026. Over 1.5+ years I've designed scalable APIs, distributed systems, and automation pipelines — and increasingly own data end-to-end: ingestion, transformation, and the analytics layer on top.",
    "Day to day I build code-first ETL on Databricks/PySpark (bronze → silver → gold), stream filtered data out of Elasticsearch through APIs, and harden services with caching, rate-limiting, and layered API security. On my own time I ship full products solo — an async financial-data engine and an AI job-intelligence platform — front to back.",
  ],
  // FDE positioning — explicit, on-trend role framing
  aspiration: {
    title: "Aspiring Forward Deployed Engineer",
    steps: [
      "Take requirements straight from the client",
      "Build & ship the software",
      "Deploy it to production",
      "Wrangle and pipeline the data",
      "Turn it into business-ready analytics",
    ],
  },
  education: {
    degree: "B.Tech, Computer Science",
    school: "GITA Autonomous College",
    detail: "GPA 8.54",
    years: "2020 — 2024",
  },
  certifications: [
    { name: "Become a Django Developer", issuer: "LinkedIn" },
    { name: "100 Days of Code: The Complete Python Pro Bootcamp", issuer: "Udemy" },
  ],
};

// ----------------------------------------------------------------------------
// Skills
// ----------------------------------------------------------------------------
export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Python", "SQL", "Golang"] },
  { label: "Backend & APIs", items: ["FastAPI", "Django", "DRF", "Celery", "Pydantic", "REST", "JWT / API-key security"] },
  { label: "Data & ETL", items: ["PySpark", "Databricks", "Medallion ETL", "Pandas", "Web crawling", "Playwright", "BeautifulSoup"] },
  { label: "Datastores & Search", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch / OpenSearch", "pgvector", "DocumentDB", "AWS S3"] },
  { label: "Async & Messaging", items: ["asyncio", "async SQLAlchemy 2.0", "RabbitMQ", "Celery", "Streaming APIs"] },
  { label: "Infra & DevOps", items: ["Docker", "AWS", "GitHub Actions", "Git", "JMeter", "pgAdmin"] },
];

// ----------------------------------------------------------------------------
// Experience timeline
// ----------------------------------------------------------------------------
export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  promotion?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer — Data",
    company: "Engineo Solutions",
    period: "Apr 2026 — Present",
    current: true,
    promotion: true,
    bullets: [
      "Build a code-first ETL pipeline on Databricks with PySpark, transforming data through a bronze → silver → gold medallion architecture, then loading the curated output into Elasticsearch.",
      "Expose a streaming API that delivers data to clients in chunks, with Elasticsearch queries built dynamically from each client request's filter payload.",
      "Scaling the architecture toward a centralized API that integrates an external data endpoint, a parse service to normalize responses, and a DocumentDB sink — delivering to clients while persisting for reuse.",
    ],
  },
  {
    role: "Associate Software Engineer — Data",
    company: "Engineo Solutions",
    period: "Nov 2024 — Apr 2026",
    bullets: [
      "Built a distributed data-extraction platform for a US travel-domain client using Django, FastAPI, Celery, RabbitMQ, Redis, MongoDB and PostgreSQL for scalable aggregation and monitoring.",
      "Engineered an automated ingestion pipeline for a Big-4 consulting firm — Excel → JSON → PostgreSQL via APIs — cutting manual effort ~70%, with parent-child relational mapping and FK resolution for multi-table loads.",
      "Implemented Redis caching and rate-limiting (40%+ fewer redundant API calls) and a layered API security stack: API-key, IP allow-listing, JWT, CORS and bad-user-agent flagging.",
      "Integrated AWS S3 for storage and AWS OpenSearch for indexing and fast retrieval; designed Celery + RabbitMQ pipelines for background processing.",
    ],
  },
];

// ----------------------------------------------------------------------------
// Projects (case studies)
// ----------------------------------------------------------------------------
export type Metric = { value: string; label: string };
export type Screenshot = { src: string; alt: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  summary: string;
  stack: string[];
  metrics: Metric[];
  highlights: string[];
  // Case-study narrative
  problem: string;
  approach: string[];
  differentiator: string;
  demoUrl: string; // localhost for now — swap to public URL after deploy
  repoUrl: string;
  cover: string;
  screenshots: Screenshot[];
  accent?: string;
};

export const projects: Project[] = [
  {
    slug: "xbrl-intelligence-engine",
    name: "XBRL Intelligence Engine",
    tagline: "Async, multi-source ETL that normalizes SEC, EU & iXBRL filings into one canonical financial model.",
    role: "Solo build",
    year: "2026",
    summary:
      "An end-to-end engine that turns raw regulatory filings into clean, queryable financial data — ingesting XBRL/iXBRL from SEC EDGAR, EU ESEF and direct upload, then mapping thousands of issuer-specific concepts onto a single canonical line-item model so figures are comparable across companies and regulators.",
    stack: [
      "Python", "FastAPI", "async SQLAlchemy 2.0", "asyncpg", "PostgreSQL 16",
      "Alembic", "structlog", "Pydantic", "Arelle", "Docker",
    ],
    metrics: [
      { value: "24,852", label: "facts ingested (Apple)" },
      { value: "71", label: "filings" },
      { value: "552", label: "canonical line-items" },
      { value: "135", label: "automated tests" },
    ],
    highlights: [
      "Three independent ingest paths — SEC EDGAR (Mode A company-facts + Mode B source iXBRL), EU ESEF, and direct iXBRL upload — into one normalization core.",
      "Canonical mapping with regulator-aware fallback chains (e.g. SalesRevenueNet → Revenues → RevenueFromContractWithCustomer across the ASC-606 transition).",
      "Mode A vs Mode B cross-source reconciliation flags value, precision, and only-in-one discrepancies the pre-parsed feed hides.",
      "Bitemporal restatement detection (dimension-, unit- and decimals-aware) tracks how reported values change across filing versions.",
      "Server-rendered analyst UI (Jinja2 + HTMX) with ApexCharts time-series and provenance tables; hardened multi-stage non-root Docker image.",
    ],
    problem:
      "Financial data from regulators is heterogeneous and noisy: every issuer tags the same concept differently, the SEC's pre-parsed feed silently drops dimensional and hidden facts, and figures get restated across filing versions. Comparing companies — or even one company across years — means untangling all of that first.",
    approach: [
      "Ingest from three independent sources behind one normalization core: SEC EDGAR (pre-parsed company-facts and source iXBRL), EU ESEF taxonomy packages, and direct file upload.",
      "Project thousands of us-gaap / IFRS concepts onto a canonical line-item model (Revenue, Net Income, Total Assets, Operating Cash Flow, EPS) via ordered, regulator-aware fallback chains with recorded mapping confidence.",
      "Add data-integrity layers — cross-source reconciliation, DQC checks, bitemporal restatement detection, statement reconstruction from the presentation linkbase, and Arelle DTS metadata enrichment.",
      "Guard every change with 135 automated tests (unit + isolated-Postgres integration); ship as a hardened, non-root, multi-stage Docker image with healthchecks and persistent volumes.",
    ],
    differentiator:
      "Mode A vs Mode B reconciliation — a fact-by-fact diff between the SEC's pre-parsed feed and the source iXBRL — surfaces value-level discrepancies and hidden/dimensional facts that consumers of the convenience API never see.",
    demoUrl: "http://127.0.0.1:8000",
    repoUrl: "https://github.com/aman0981/XBRL_Engine",
    cover: "/screenshots/xbrl-company-aapl.png",
    screenshots: [
      { src: "/screenshots/xbrl-company-aapl.png", alt: "Canonical 5-year financials for Apple with KPI cards, trend chart and mapping provenance" },
      { src: "/screenshots/xbrl-reconciliation.png", alt: "Mode A vs Mode B reconciliation — value, precision and only-in-one discrepancies" },
      { src: "/screenshots/xbrl-restatements.png", alt: "Bitemporal restatement detection across filing versions" },
      { src: "/screenshots/xbrl-statements.png", alt: "Statement reconstruction from the XBRL presentation linkbase" },
    ],
  },
  {
    slug: "hirebeacon",
    name: "HireBeacon",
    tagline: "India job-intelligence platform — 13 ATS sources unified, résumé→job semantic matching with AI.",
    role: "Solo build",
    year: "2026",
    summary:
      "A job-intelligence platform that aggregates live India tech openings straight from companies' ATS career pages, keeps listings fresh and honest (dead links removed automatically), and matches a candidate's résumé to the best-fit roles with an AI-generated explanation of why each one fits — designed and built end-to-end, solo.",
    stack: [
      "Python", "Supabase", "PostgreSQL 17", "pgvector", "pg_trgm",
      "Next.js 15", "TypeScript", "Tailwind v4", "GitHub Actions", "Groq / Gemini",
    ],
    metrics: [
      { value: "13", label: "ATS sources unified" },
      { value: "4 / 5", label: "enterprise “big-5” ATS" },
      { value: "336", label: "tests (251 + 85)" },
      { value: "384-dim", label: "MiniLM embeddings" },
    ],
    highlights: [
      "13 ATS vendors behind one adapter contract (pure parse() / I/O fetch()) — Greenhouse, Lever, Ashby, Workable, Recruitee, SmartRecruiters, Workday, SuccessFactors, Oracle Cloud, iCIMS, Zoho, Keka, greytHR — covering 4 of the 5 major enterprise ATS.",
      "Idempotent ingestion: upserts keyed on (company_id, source_id), plus a soft close-out gate that skips deletion when a source returns < 50% of baseline — a flaky crawl can never wipe live inventory.",
      "Semantic résumé→job matching: MiniLM 384-dim embeddings ranked by cosine top-25 via a Postgres RPC, with a fallback-chained LLM (Groq → Gemini → local) writing a 'why it fits' rationale.",
      "Row-level security on every table, two Vercel Python serverless functions, JobPosting JSON-LD (Google-for-Jobs eligible) and dynamic sitemap/robots.",
      "Runs entirely on free-tier infra, orchestrated as scheduled GitHub Actions (daily crawl, weekly digest, weekly apply-URL verify sweep).",
    ],
    problem:
      "India job boards are noisy and stale — duplicated reposts, dead apply links, and hidden salaries. The real, fresh openings live on thousands of companies' own ATS career pages, behind a dozen different undocumented APIs.",
    approach: [
      "Reverse-engineer keyless/undocumented ATS APIs (Oracle Cloud, the iCIMS 'Jibe' SPA, greytHR) via live network inspection and anti-bot handling, then unify 13 vendors behind one adapter contract separating a unit-tested pure parse() from an I/O fetch().",
      "Make ingestion idempotent and self-healing: upserts preserve first-seen timestamps and embeddings; a listing-integrity gate treats a < 50%-of-baseline fetch as partial and skips close-out; per-company and per-item failures are isolated.",
      "Match résumés semantically: PDF → LLM skill extraction → MiniLM 384-dim embedding → pgvector cosine top-25 via a Postgres RPC → fallback-chained LLM writes the rationale, degrading gracefully with no API key.",
      "Ship the whole system solo — crawler, Postgres schema + row-level security, two serverless match APIs, and a Next.js 15 UI — test-driven across 336 tests on free-tier infrastructure.",
    ],
    differentiator:
      "One adapter contract spanning 13 ATS vendors — including 4 of the 5 enterprise 'big-5' — plus an idempotent, self-healing ingestion model that guarantees a partial or failed crawl never deletes live inventory.",
    demoUrl: "http://127.0.0.1:3000",
    repoUrl: "https://github.com/aman0981/HireBeacon",
    cover: "/screenshots/hb-government.png",
    screenshots: [
      { src: "/screenshots/hb-government.png", alt: "HireBeacon government-jobs board with live openings and official apply links" },
      { src: "/screenshots/hb-home.png", alt: "HireBeacon home — live-filtered job search grid" },
      { src: "/screenshots/hb-match.png", alt: "Résumé upload → AI-ranked job matches with explanations" },
      { src: "/screenshots/hb-account.png", alt: "Account — saved searches, alerts and digest preferences" },
    ],
  },
];

// ----------------------------------------------------------------------------
// Coding profiles
// ----------------------------------------------------------------------------
export const codingProfiles = {
  kicker: "Proof of work",
  heading: "Problem-solving, on the record.",
  stats: [
    { value: "200+", label: "problems solved", detail: "LeetCode & HackerRank" },
    { value: "50", label: "day badge", detail: "LeetCode streak" },
    { value: "Top", label: "SQL 50 badge", detail: "LeetCode" },
  ],
};

// ----------------------------------------------------------------------------
// Contact
// ----------------------------------------------------------------------------
export const contact = {
  kicker: "Contact",
  heading: "Let's build something that ships.",
  blurb:
    "Open to Software Engineer / Data Engineer roles and forward-deployed opportunities. The fastest way to reach me is email — or send a note below.",
  email: "amannikumbh73@gmail.com",
};
