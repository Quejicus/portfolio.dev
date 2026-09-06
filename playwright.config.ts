import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests",
  testMatch: "**/*.spec.ts",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 2,
  reporter: [["list"], ["html", { open: "never" }]],
  use: { baseURL: "http://127.0.0.1:4321", trace: "retain-on-failure", screenshot: "only-on-failure" },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }, { name: "webkit", use: { ...devices["Desktop Safari"] } }],
  webServer: { command: "npm run preview -- --host 127.0.0.1 --port 4321", url: "http://127.0.0.1:4321", env: { ASTRO_PREVIEW_BACKGROUND: "1" }, reuseExistingServer: !process.env.CI },
});
