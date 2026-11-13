import { readdir, stat, readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";
import sharp from "sharp";
const files = await readdir("dist", { recursive: true });
let js = 0, css = 0;
const inlineScripts = new Set();
const pages = [];
for (const file of files) {
  if (file.endsWith(".js")) js += gzipSync(await readFile(`dist/${file}`)).byteLength;
  if (file.endsWith(".css")) css += gzipSync(await readFile(`dist/${file}`)).byteLength;
  if (file.endsWith(".html")) {
    const html = await readFile(`dist/${file}`, "utf8");
    pages.push({ file, size: gzipSync(html).byteLength });
    for (const [, attributes, source] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (!/\bsrc\s*=|application\/ld\+json/i.test(attributes) && source.trim()) inlineScripts.add(source);
    }
  }
}
for (const source of inlineScripts) js += gzipSync(source).byteLength;
if (!pages.length) throw new Error("No built HTML pages found.");
const largestPage = pages.reduce((largest, page) => page.size > largest.size ? page : largest);
const budgets = [{ name: "JavaScript, external + unique inline (gzip)", size: js, limit: 5000 }, { name: "All CSS (gzip)", size: css, limit: 12000 }, { name: `Largest HTML page: ${largestPage.file} (gzip)`, size: largestPage.size, limit: 20000 }];
for (const check of budgets) {
  console.log(`${check.name}: ${check.size} / ${check.limit} bytes`);
  if (check.size > check.limit) throw new Error(`${check.name} exceeded its budget`);
}
for (const file of ["projects/realidad_multipolar_screenshot.webp", "projects/micalculadora_screenshot.webp", "projects/optimizing_project.webp", "projects/portfolio_current_screenshot.webp", "social/portfolio-og.png", "social/portfolio-og-en.png"]) {
  const size = (await stat(`dist/${file}`)).size;
  const image = await sharp(`dist/${file}`).metadata();
  if (size > 160000) throw new Error(`${file} exceeds 160 kB`);
  if (file.includes("portfolio-og") && (image.width !== 1200 || image.height !== 630)) throw new Error("Sharing image must be 1200 × 630");
  console.log(`${file}: ${size} bytes (${image.width} × ${image.height})`);
}
