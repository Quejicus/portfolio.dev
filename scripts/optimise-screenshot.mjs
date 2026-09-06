import sharp from "sharp";
const source = "artifacts/portfolio-desktop.png";
await sharp(source).png({ compressionLevel: 9 }).toFile("public/projects/portfolio_current_screenshot.png");
await sharp(source).webp({ quality: 82 }).toFile("public/projects/portfolio_current_screenshot.webp");
console.log("Refreshed PNG (existing URL) and WebP (README) from the production capture.");
