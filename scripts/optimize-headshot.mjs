// Downscale + compress the headshot (LCP image) in place. The hero displays it
// at <= ~336px CSS width (≈672px @2x), so 1000px wide is ample; next/image then
// serves responsive WebP/AVIF variants from this source.
import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const p = path.join(__dirname, "..", "public", "aman-nikumb.png");
const before = fs.statSync(p).size;
const meta = await sharp(p).metadata();
const buf = await sharp(p)
  .resize({ width: 1000, withoutEnlargement: true })
  .png({ compressionLevel: 9, effort: 9 })
  .toBuffer();
fs.writeFileSync(p, buf);
const after = fs.statSync(p).size;
console.log(`headshot ${meta.width}x${meta.height}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
