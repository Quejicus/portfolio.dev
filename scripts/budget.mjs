import { readdir, stat, readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import sharp from "sharp";
const files = await readdir("dist", { recursive: true });
let js = 0, css = 0;
for (const file of files) {
  if (file.endsWith(".js")) js += gzipSync(await readFile(`dist/${file}`)).byteLength;
  if (file.endsWith(".css")) css += gzipSync(await readFile(`dist/${file}`)).byteLength;
}
const html = gzipSync(await readFile("dist/index.html")).byteLength;
const budgets = [{ name: "All JavaScript (gzip)", size: js, limit: 5000 }, { name: "All CSS (gzip)", size: css, limit: 12000 }, { name: "Homepage HTML (gzip)", size: html, limit: 20000 }];
for (const check of budgets) {
  console.log(`${check.name}: ${check.size} / ${check.limit} bytes`);
  if (check.size > check.limit) throw new Error(`${check.name} exceeded its budget`);
}
for (const file of ["projects/micalculadora_screenshot.webp", "projects/optimizing_project.webp", "projects/portfolio_current_screenshot.webp", "social/portfolio-og.png"]) {
  const size = (await stat(`dist/${file}`)).size;
  const image = await sharp(`dist/${file}`).metadata();
  if (size > 160000) throw new Error(`${file} exceeds 160 kB`);
  if (file.includes("portfolio-og") && (image.width !== 1200 || image.height !== 630)) throw new Error("Sharing image must be 1200 × 630");
  console.log(`${file}: ${size} bytes (${image.width} × ${image.height})`);
}
