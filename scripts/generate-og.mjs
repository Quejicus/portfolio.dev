import sharp from "sharp";
import { mkdir, readFile } from "node:fs/promises";
const output = new URL("../public/social/", import.meta.url);
await mkdir(output, { recursive: true });
const svg = await readFile(new URL("../assets/portfolio-og.svg", import.meta.url));
await sharp(svg).png({ compressionLevel: 9 }).toFile(new URL("portfolio-og.png", output).pathname);
console.log("Generated public/social/portfolio-og.png (1200 × 630).");
