// Resize + compress the screenshot PNGs in public/screenshots (in place).
// Keeps .png filenames so content references stay valid.
import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, "..", "public", "screenshots");

// Only the freshly re-captured XBRL viewport shots need (re)optimizing;
// the hb-* shots are already small/crisp.
const files = fs.readdirSync(DIR).filter((f) => f.startsWith("xbrl-") && f.endsWith(".png"));
for (const f of files) {
  const p = path.join(DIR, f);
  const before = fs.statSync(p).size;
  const buf = await sharp(p, { limitInputPixels: false })
    .resize({ width: 1600, fit: "inside", withoutEnlargement: true })
    .png({ compressionLevel: 9, effort: 8 })
    .toBuffer();
  fs.writeFileSync(p, buf);
  const after = fs.statSync(p).size;
  console.log(`${f}: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024).toFixed(0)}KB`);
}
console.log("done");
