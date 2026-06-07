// Screenshot the built portfolio for visual verification.
import { chromium } from "playwright";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, "..", ".verify");
fs.mkdirSync(OUT, { recursive: true });
const BASE = process.env.BASE || "http://localhost:3500";

async function waitReady(page, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await page.goto(BASE + "/", { waitUntil: "domcontentloaded", timeout: 4000 });
      if (r && r.status() < 500) return true;
    } catch {}
    await page.waitForTimeout(1000);
  }
  return false;
}

async function settle(page) {
  // scroll through to trigger in-view reveals, then return to top
  await page.evaluate(async () => {
    const h = document.body.scrollHeight;
    for (let y = 0; y <= h; y += Math.round(window.innerHeight * 0.8)) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(800);
}

const browser = await chromium.launch();

// Desktop
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1.5, colorScheme: "dark" });
const page = await ctx.newPage();
const ok = await waitReady(page);
console.log("server ready:", ok);
if (!ok) { await browser.close(); process.exit(1); }

await page.waitForTimeout(2200); // let particles + hero reveals play
await page.screenshot({ path: path.join(OUT, "home-hero.png") });
console.log("OK home-hero");

await settle(page);
await page.screenshot({ path: path.join(OUT, "home-full.png"), fullPage: true });
console.log("OK home-full");

await page.goto(`${BASE}/projects/xbrl-intelligence-engine`, { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
await page.screenshot({ path: path.join(OUT, "case-xbrl-top.png") });
await settle(page);
await page.screenshot({ path: path.join(OUT, "case-xbrl-full.png"), fullPage: true });
console.log("OK case-xbrl");

await ctx.close();

// Mobile
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, colorScheme: "dark", isMobile: true });
const mpage = await mctx.newPage();
await mpage.goto(`${BASE}/`, { waitUntil: "networkidle" });
await mpage.waitForTimeout(1500);
await mpage.screenshot({ path: path.join(OUT, "home-mobile.png") });
console.log("OK home-mobile");
await mctx.close();

await browser.close();
console.log("done");
