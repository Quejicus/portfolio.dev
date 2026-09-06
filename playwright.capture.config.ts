import { defineConfig } from "@playwright/test";
export default defineConfig({
  testDir: "./tests", testMatch: "portfolio.capture.ts", workers: 1,
  use: { baseURL: "http://127.0.0.1:4321", viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1, colorScheme: "dark", reducedMotion: "reduce" },
  webServer: { command: "npm run preview -- --host 127.0.0.1 --port 4321", url: "http://127.0.0.1:4321", env: { ASTRO_PREVIEW_BACKGROUND: "1" }, reuseExistingServer: !process.env.CI },
});
