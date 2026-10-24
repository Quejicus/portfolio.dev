import { test, expect } from "@playwright/test";
test("capture the verified production homepage", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("astro-dev-toolbar")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Jesús Muñoz");
  await page.screenshot({ path: "artifacts/portfolio-desktop.png", fullPage: false });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "artifacts/portfolio-mobile.png", fullPage: true });
  await page.goto("/en/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page.screenshot({ path: "artifacts/portfolio-english-mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.screenshot({ path: "artifacts/portfolio-english-desktop.png", fullPage: false });
});

test("capture bilingual audit evidence", async ({ page }) => {
  for (const locale of ["es", "en"]) {
    const home = locale === "es" ? "/" : "/en/";
    for (const width of [768, 1024, 1280]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(home);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: `artifacts/audit-after-${locale}-${width}.png`, fullPage: true });
    }
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(home);
    await page.locator(".menu-toggle").click();
    await page.screenshot({ path: `artifacts/audit-menu-${locale}.png` });
    await page.keyboard.press("Escape");
    const projects = await page.locator(".work-copy h3 a").evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    for (const project of projects) {
      for (const width of [390, 1024]) {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(project);
        await page.evaluate(() => document.fonts.ready);
        await page.screenshot({ path: `artifacts/audit-${locale}-${project.split("/").filter(Boolean).at(-1)}-${width}.png`, fullPage: true });
      }
    }
  }
});
