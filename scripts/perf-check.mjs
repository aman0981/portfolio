// Lightweight performance probe of the homepage: transfer weight by type + LCP.
import { chromium } from "playwright";

const BASE = process.env.BASE || "http://localhost:3500";
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1366, height: 800 } });
const page = await ctx.newPage();

const bytes = {};
let total = 0;
let count = 0;
page.on("response", async (res) => {
  try {
    const h = await res.allHeaders();
    const len = Number(h["content-length"] || 0);
    const type = (res.request().resourceType() || "other");
    bytes[type] = (bytes[type] || 0) + len;
    total += len;
    count++;
  } catch {}
});

await page.addInitScript(() => {
  window.__lcp = 0;
  new PerformanceObserver((list) => {
    for (const e of list.getEntries()) window.__lcp = Math.round(e.startTime);
  }).observe({ type: "largest-contentful-paint", buffered: true });
});

const t0 = Date.now();
await page.goto(BASE + "/", { waitUntil: "load" });
await page.waitForTimeout(2500); // allow lazy 3D + LCP to settle
const loadMs = Date.now() - t0;

const metrics = await page.evaluate(() => {
  const nav = performance.getEntriesByType("navigation")[0] || {};
  const fcp = performance.getEntriesByName("first-contentful-paint")[0];
  return {
    lcp: window.__lcp,
    fcp: fcp ? Math.round(fcp.startTime) : null,
    domContentLoaded: Math.round(nav.domContentLoadedEventEnd || 0),
    transferReported: nav.transferSize || null,
  };
});

const kb = (b) => (b / 1024).toFixed(0) + " KB";
console.log("=== Homepage perf (cold, http://localhost:3500) ===");
console.log("requests:", count, " content-length total:", kb(total));
for (const [t, b] of Object.entries(bytes).sort((a, b) => b[1] - a[1])) console.log("  " + t.padEnd(10), kb(b));
console.log("LCP:", metrics.lcp + " ms", " FCP:", metrics.fcp + " ms", " DCL:", metrics.domContentLoaded + " ms", " wallLoad:", loadMs + " ms");

await browser.close();
