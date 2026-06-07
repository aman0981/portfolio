// Render scripts/resume.html to public/Aman_Nikumb_Resume.pdf via headless Chromium.
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "resume.html");
const out = path.join(__dirname, "..", "public", "Aman_Nikumb_Resume.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "networkidle" });
await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  margin: { top: "0", bottom: "0", left: "0", right: "0" },
});
await browser.close();
console.log("Resume PDF written to", out);
