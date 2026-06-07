import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", ".verify");
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.BASE || "http://localhost:3500";

const ids = ["about", "skills", "work", "experience", "coding", "contact"];

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5, colorScheme: "dark" });
const page = await ctx.newPage();
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.waitForTimeout(1500);

for (const id of ids) {
  try {
    await page.evaluate((sel) => {
      const el = document.getElementById(sel);
      if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
    }, id);
    await page.waitForTimeout(1100); // let reveals play
    await page.screenshot({ path: path.join(OUT, `sec-${id}.png`) });
    console.log("OK", id);
  } catch (e) {
    console.log("ERR", id, e.message);
  }
}

await browser.close();
console.log("done");
