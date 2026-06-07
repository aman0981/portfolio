// Capture screenshots of the live local apps for the portfolio case studies.
// Run: node scripts/capture-screenshots.mjs
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "screenshots");

const XBRL = "http://127.0.0.1:8000";
const HB = "http://127.0.0.1:3000";
const ACC = "0000320193-25-000079"; // Apple FY2025 10-K (Mode A + Mode B present)

/** @type {{name:string,url:string,full?:boolean,wait?:number}[]} */
const shots = [
  // XBRL Intelligence Engine (already dark-themed)
  { name: "xbrl-company-aapl", url: `${XBRL}/companies/AAPL`, full: true, wait: 1800 },
  { name: "xbrl-reconciliation", url: `${XBRL}/filings/${ACC}/reconciliation`, full: true, wait: 1800 },
  { name: "xbrl-restatements", url: `${XBRL}/companies/AAPL/restatements`, full: true, wait: 1200 },
  { name: "xbrl-statements", url: `${XBRL}/filings/${ACC}/statements`, full: true, wait: 1200 },
  { name: "xbrl-facts", url: `${XBRL}/filings/${ACC}/facts`, full: true, wait: 1200 },
  { name: "xbrl-home", url: `${XBRL}/`, full: false, wait: 800 },
  // HireBeacon (Next.js)
  { name: "hb-home", url: `${HB}/`, full: false, wait: 1500 },
  { name: "hb-government", url: `${HB}/government`, full: false, wait: 1500 },
  { name: "hb-match", url: `${HB}/match`, full: false, wait: 1500 },
  { name: "hb-account", url: `${HB}/account`, full: false, wait: 1500 },
];

async function shoot(page, s) {
  try {
    await page.goto(s.url, { waitUntil: "networkidle", timeout: 30000 });
    if (s.wait) await page.waitForTimeout(s.wait);
    await page.screenshot({ path: path.join(OUT, `${s.name}.png`), fullPage: !!s.full });
    console.log(`OK  ${s.name}  <- ${s.url}`);
  } catch (e) {
    console.log(`ERR ${s.name}  <- ${s.url}  :: ${e.message}`);
  }
}

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: "dark",
});
const page = await ctx.newPage();

for (const s of shots) await shoot(page, s);

// HireBeacon job-detail: extract a real job id from the rendered home grid
try {
  await page.goto(`${HB}/`, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1200);
  const href = await page.evaluate(() => {
    const a = document.querySelector('a[href*="/jobs/"]');
    return a ? a.getAttribute("href") : null;
  });
  if (href) {
    const url = href.startsWith("http") ? href : `${HB}${href}`;
    await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(OUT, "hb-job.png"), fullPage: false });
    console.log(`OK  hb-job  <- ${url}`);
  } else {
    console.log("ERR hb-job  :: no /jobs/ link found on home grid");
  }
} catch (e) {
  console.log(`ERR hb-job  :: ${e.message}`);
}

await browser.close();
console.log("done");
