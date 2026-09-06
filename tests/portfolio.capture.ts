import { test, expect } from "@playwright/test";
test("capture the verified production homepage", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("astro-dev-toolbar")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jesús Muñoz");
  await page.screenshot({ path: "artifacts/portfolio-desktop.png", fullPage: false });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "artifacts/portfolio-mobile.png", fullPage: true });
});
