import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", ".verify");
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.BASE || "http://localhost:3500";

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 880 }, deviceScaleFactor: 1.5, colorScheme: "dark" });
const page = await ctx.newPage();
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.waitForTimeout(2400);
await page.screenshot({ path: path.join(OUT, "hero2-top.png") });
console.log("OK hero2-top");

await page.evaluate(() => window.scrollTo({ top: 320, behavior: "instant" }));
await page.waitForTimeout(900);
await page.screenshot({ path: path.join(OUT, "hero2-scrolled.png") });
console.log("OK hero2-scrolled");
await ctx.close();

for (const w of [1280, 1024]) {
  const c = await browser.newContext({ viewport: { width: w, height: 880 }, deviceScaleFactor: 1, colorScheme: "dark" });
  const p = await c.newPage();
  await p.goto(BASE + "/", { waitUntil: "networkidle" });
  await p.waitForTimeout(1200);
  await p.evaluate(() => document.getElementById("work")?.scrollIntoView({ block: "start" }));
  await p.waitForTimeout(1000);
  await p.screenshot({ path: path.join(OUT, `work-fixed-${w}.png`) });
  console.log("OK work-fixed", w);
  await c.close();
}
await browser.close();
console.log("done");
