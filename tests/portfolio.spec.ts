import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = ["/", "/work/airflow-migration/", "/work/pyspark-optimisation/", "/work/financial-calculator/", "/work/pc-optimisation/"];
for (const route of routes) {
  test(`page, metadata and accessibility: ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(route);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://jesus-dataengineer-portfolio.netlify.app${route}`);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /\/social\/portfolio-og.png$/);
    for (const script of await page.locator('script[type="application/ld+json"]').allTextContents()) expect(() => JSON.parse(script)).not.toThrow();
    for (const link of await page.locator('a[target="_blank"]').all()) await expect(link).toHaveAttribute("rel", /noopener noreferrer/);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}
for (const width of [320, 390, 768, 1280]) {
  test(`responsive navigation and early CV at ${width}px`, async ({ page }) => {
    const height = width >= 768 ? 800 : 844;
    await page.setViewportSize({ width, height });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    const cv = page.locator(".hero-actions a[download]");
    const box = await cv.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y + box!.height).toBeLessThan(height);
    for (const section of ["work", "experience", "about", "contact"]) {
      const link = page.locator(`nav a[data-nav-section="${section}"]`);
      await link.click();
      await expect(page).toHaveURL(new RegExp(`#${section}$`));
      await expect(link).toHaveAttribute("aria-current", "location");
      const sectionTop = (await page.locator(`#${section}`).boundingBox())!.y;
      const header = (await page.locator("#site-header").boundingBox())!;
      expect(sectionTop).toBeGreaterThanOrEqual(header.y + header.height);
    }
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    expect(overflow).toBe(false);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations).toEqual([]);
  });
}
test("skip link, legacy anchors and project navigation", async ({ page, browserName }) => {
  await page.goto("/");
  // Safari on macOS uses Option-Tab to include links when full keyboard access is off.
  await page.keyboard.press(browserName === "webkit" && process.platform === "darwin" ? "Alt+Tab" : "Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  for (const hash of ["projects", "case-study", "focus"]) {
    await page.goto(`/#${hash}`);
    await expect(page.locator(`#${hash}`)).toBeAttached();
  }
  await page.goto("/#work");
  await page.getByRole("link", { name: /Read case study\s*:\s*From Pentaho to Airflow/ }).click();
  await expect(page).toHaveURL(/\/work\/airflow-migration\/$/);
  await page.getByRole("link", { name: "All work", exact: false }).click();
  await expect(page).toHaveURL(/\/#work$/);
});
test("CV, sitemap, sharing image and internal destinations resolve", async ({ page, request }) => {
  const pdf = await request.get("/CV_Data_Engineer_2026.pdf");
  expect(pdf.ok()).toBeTruthy();
  expect((await pdf.body()).subarray(0, 5).toString()).toBe("%PDF-");
  const sitemap = await request.get("/sitemap.xml");
  for (const route of routes) expect(await sitemap.text()).toContain(`https://jesus-dataengineer-portfolio.netlify.app${route}</loc>`);
  expect(await (await request.get("/robots.txt")).text()).toContain("Sitemap: https://jesus-dataengineer-portfolio.netlify.app/sitemap.xml");
  const og = await request.get("/social/portfolio-og.png");
  expect(og.ok()).toBeTruthy();
  expect(og.headers()["content-type"]).toContain("image/png");
  await page.goto("/");
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute("href")!).filter((href) => !href.startsWith("/#")))]);
  for (const href of hrefs) expect((await request.get(href)).ok(), href).toBeTruthy();
  const missing = await request.get("/not-a-real-page/");
  expect(missing.status()).toBe(404);
});
test("copy email handles permission failure accessibly", async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("Denied")) } }));
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByRole("status")).toContainText("Copy unavailable");
  await expect(page.locator(".email-link")).toHaveAttribute("href", "mailto:jesusmugo91@gmail.com");
});
test("copy email success and provider-neutral event hook", async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.resolve() } });
    window.addEventListener("portfolio:interaction", (event) => {
      const detail = (event as CustomEvent<{ name: string }>).detail;
      document.documentElement.dataset.lastPortfolioEvent = detail.name;
    });
  });
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copy email" }).click();
  await expect(page.getByRole("status")).toContainText("Email copied");
  await page.goto("/");
  await page.getByRole("link", { name: /Read case study\s*:\s*From Pentaho to Airflow/ }).click({ modifiers: ["ControlOrMeta"] });
  // The hook emits locally; no provider, storage or network transport is installed.
  await expect(page.locator("html")).toHaveAttribute("data-last-portfolio-event", "project_open");
});
test("core content and navigation work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4321/");
  await expect(page.locator(".hero-actions a[download]")).toBeVisible();
  await page.locator('nav a[href="#work"]').click();
  await expect(page).toHaveURL(/#work$/);
  await page.getByRole("link", { name: /Read case study\s*:\s*From Pentaho to Airflow/ }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("150–180");
  await context.close();
});
