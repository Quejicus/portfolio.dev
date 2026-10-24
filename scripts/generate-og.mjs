import sharp from "sharp";
import { mkdir, readFile } from "node:fs/promises";
const output = new URL("../public/social/", import.meta.url);
await mkdir(output, { recursive: true });
for (const [source, fileName] of [["portfolio-og.svg", "portfolio-og.png"], ["portfolio-og.en.svg", "portfolio-og-en.png"]]) {
  const svg = await readFile(new URL(`../assets/${source}`, import.meta.url));
  await sharp(svg).png({ compressionLevel: 9 }).toFile(new URL(fileName, output).pathname);
  console.log(`Generated public/social/${fileName} (1200 × 630).`);
}
