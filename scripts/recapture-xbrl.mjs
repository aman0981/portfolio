// Re-capture the 4 XBRL pages as crisp viewport shots (not full-page) so they
// are appropriately sized and don't exceed image pixel limits.
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", "public", "screenshots");
const XBRL = "http://127.0.0.1:8000";
const ACC = "0000320193-25-000079";

const shots = [
  { name: "xbrl-company-aapl", url: `${XBRL}/companies/AAPL` },
  { name: "xbrl-reconciliation", url: `${XBRL}/filings/${ACC}/reconciliation` },
  { name: "xbrl-restatements", url: `${XBRL}/companies/AAPL/restatements` },
  { name: "xbrl-statements", url: `${XBRL}/filings/${ACC}/statements` },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 920 },
  deviceScaleFactor: 1.5,
  colorScheme: "dark",
});
const page = await ctx.newPage();

for (const s of shots) {
  try {
    await page.goto(s.url, { waitUntil: "networkidle", timeout: 30000 });
    await page.waitForTimeout(1800); // let ApexCharts render
    await page.screenshot({ path: path.join(OUT, `${s.name}.png`), fullPage: false });
    console.log("OK", s.name);
  } catch (e) {
    console.log("ERR", s.name, e.message);
  }
}
await browser.close();
console.log("done");
