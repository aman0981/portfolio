import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", ".verify");
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.BASE || "http://localhost:3500";
const widths = [1440, 1280, 1024];

const browser = await chromium.launch();

async function ready(page) {
  for (let i = 0; i < 40; i++) {
    try { const r = await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 5000 }); if (r && r.status() < 500) return true; } catch {}
    await page.waitForTimeout(1500);
  }
  return false;
}

const warm = await browser.newContext();
const wp = await warm.newPage();
console.log("ready:", await ready(wp));
await wp.waitForTimeout(2500);
await warm.close();

for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 880 }, deviceScaleFactor: 1, colorScheme: "dark" });
  const page = await ctx.newPage();
  await page.goto(BASE + "/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await page.screenshot({ path: path.join(OUT, `w${w}-hero.png`) });
  await page.evaluate(() => document.getElementById("work")?.scrollIntoView({ block: "start" }));
  await page.waitForTimeout(1200);
  await page.screenshot({ path: path.join(OUT, `w${w}-work.png`) });
  console.log("OK", w);
  await ctx.close();
}
await browser.close();
console.log("done");
