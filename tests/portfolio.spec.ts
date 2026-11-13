import { test, expect, type Page } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const spanishRoutes = ["/", "/work/realidad-multipolar/", "/work/airflow-migration/", "/work/pyspark-optimisation/", "/work/financial-calculator/", "/work/pc-optimisation/"];
const routes = [...spanishRoutes, ...spanishRoutes.map((route) => `/en${route}`)];
for (const version of [
  { home: "/", otherHome: "/en/", status: "En desarrollo", otherStatus: "In development", switchLabel: "Ver esta página en inglés" },
  { home: "/en/", otherHome: "/", status: "In development", otherStatus: "En desarrollo", switchLabel: "Read this page in Spanish" },
]) {
  test(`Realidad Multipolar leads the projects with development status and navigation: ${version.home}`, async ({ page }) => {
    const caseUrl = `${version.home}work/realidad-multipolar/`;
    const otherCaseUrl = `${version.otherHome}work/realidad-multipolar/`;
    await page.goto(version.home);
    const card = page.locator(".work-card").first();
    const title = card.locator("h3 a");
    await expect(title).toHaveAccessibleName("Realidad Multipolar");
    await expect(title).toHaveAttribute("href", caseUrl);
    await expect(card.locator(".text-link")).toHaveAttribute("href", caseUrl);
    await expect(card.locator(".work-stat")).toHaveCount(0);
    await expect(card.locator(".work-copy > .muted")).toContainText(new RegExp(version.status, "i"));
    const cardImage = card.locator(".work-visual img");
    await expect(card.locator(".work-visual")).toHaveAttribute("aria-hidden", "true");
    await expect(cardImage).toHaveAttribute("src", "/projects/realidad_multipolar_screenshot.webp");
    await expect(cardImage).toHaveAttribute("width", "1280");
    await expect(cardImage).toHaveAttribute("height", "800");
    await expect(cardImage).toHaveAttribute("alt", "");
    await cardImage.scrollIntoViewIfNeeded();
    await expect.poll(() => cardImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth === 1280 && image.naturalHeight === 800)).toBe(true);
    await title.click();
    await expect(page).toHaveURL(`http://127.0.0.1:4321${caseUrl}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Realidad Multipolar");
    await expect(page.locator(".case-facts dt").filter({ hasText: version.status })).toHaveText(version.status);
    await expect(page.locator(".case-facts .accent")).toHaveText("WIP");
    const liveLink = page.locator('.case-note a[data-event="project_live"]');
    await expect(liveLink).toHaveAttribute("href", "https://realidadmultipolar.com/");
    await expect(liveLink).toHaveAttribute("target", "_blank");
    await expect(liveLink).toHaveAttribute("rel", "noopener noreferrer");
    const caseImage = page.locator(".case-image img");
    await expect(caseImage).toHaveAttribute("src", "/projects/realidad_multipolar_screenshot.webp");
    await expect(caseImage).toHaveAttribute("width", "1280");
    await expect(caseImage).toHaveAttribute("height", "800");
    await expect(caseImage).toHaveAttribute("alt", `${version.home === "/" ? "Captura de" : "Screenshot of"} Realidad Multipolar`);
    await caseImage.scrollIntoViewIfNeeded();
    await expect.poll(() => caseImage.evaluate((image: HTMLImageElement) => image.complete && image.naturalWidth === 1280 && image.naturalHeight === 800)).toBe(true);
    await page.getByRole("link", { name: version.switchLabel, exact: true }).click();
    await expect(page).toHaveURL(`http://127.0.0.1:4321${otherCaseUrl}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Realidad Multipolar");
    await expect(page.locator(".case-facts dt").filter({ hasText: version.otherStatus })).toHaveText(version.otherStatus);
    await page.locator(".back-link").click();
    await expect(page).toHaveURL(`http://127.0.0.1:4321${version.otherHome}#work`);
    await page.goto(caseUrl);
    await page.locator(".back-link").click();
    await expect(page).toHaveURL(`http://127.0.0.1:4321${version.home}#work`);
  });
}
async function openMobileMenu(page: Page) {
  const toggle = page.locator(".menu-toggle");
  if (await toggle.isVisible() && await toggle.getAttribute("aria-expanded") === "false") await toggle.click();
}
for (const route of routes) {
  test(`page, metadata and accessibility: ${route}`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(route);
    const english = route.startsWith("/en/");
    const spanishRoute = english ? route.slice(3) : route;
    await expect(page.locator("html")).toHaveAttribute("lang", english ? "en" : "es");
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://jesus-dataengineer-portfolio.netlify.app${route}`);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", new RegExp(`/social/portfolio-og${english ? "-en" : ""}.png$`));
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute("content", english ? "en_GB" : "es_ES");
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", await page.title());
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", (await page.locator('meta[name="description"]').getAttribute("content"))!);
    await expect(page.locator(".wordmark")).toHaveAttribute("href", route === "/" || route === "/en/" ? "#home" : english ? "/en/" : "/");
    if (spanishRoute !== "/") await expect(page.locator(".back-link")).toHaveAttribute("href", english ? "/en/#work" : "/#work");
    for (const [language, expectedRoute] of [["es", spanishRoute], ["en", `/en${spanishRoute}`], ["x-default", spanishRoute]]) {
      await expect(page.locator(`link[rel="alternate"][hreflang="${language}"]`)).toHaveAttribute("href", `https://jesus-dataengineer-portfolio.netlify.app${expectedRoute}`);
    }
    for (const script of await page.locator('script[type="application/ld+json"]').allTextContents()) {
      const schema = JSON.parse(script);
      if (schema.inLanguage) expect(schema.inLanguage).toBe(english ? "en" : "es");
    }
    for (const link of await page.locator(".work-copy a, .case-next a, .back-link, .case-note .text-link").all()) {
      await expect(link).toHaveAttribute("href", english ? /^\/en\// : /^\/(?!en\/)/);
    }
    for (const link of await page.locator('a[target="_blank"]').all()) await expect(link).toHaveAttribute("rel", /noopener noreferrer/);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}
for (const homeRoute of ["/", "/en/"]) {
  for (const width of [320, 390, 768, 820, 1024, 1280]) {
    test(`responsive navigation and early project contact at ${width}px: ${homeRoute}`, async ({ page }) => {
      const height = width >= 768 ? 800 : 844;
      await page.setViewportSize({ width, height });
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(homeRoute);
      const contact = page.locator('.hero-actions a[href="#contact"]');
      const box = await contact.boundingBox();
      expect(box).not.toBeNull();
      expect(box!.y + box!.height).toBeLessThan(height);
      await contact.click();
      await expect(page).toHaveURL(/#contact$/);
      for (const section of ["work", "services", "experience", "about", "contact"]) {
        await openMobileMenu(page);
        const link = page.locator(`nav a[data-nav-section="${section}"]`);
        await link.click();
        await expect(page).toHaveURL(new RegExp(`#${section}$`));
        await expect(link).toHaveAttribute("aria-current", "location");
        const sectionTop = (await page.locator(`#${section}`).boundingBox())!.y;
        const header = (await page.locator("#site-header").boundingBox())!;
        expect(sectionTop).toBeGreaterThanOrEqual(header.y + header.height);
        if (width < 761) await expect(page.locator(".menu-toggle")).toHaveAttribute("aria-expanded", "false");
      }
      if (width >= 768) {
        const linkTops = await page.locator("nav a").evaluateAll((links) => links.map((link) => Math.round(link.getBoundingClientRect().top)));
        expect(new Set(linkTops).size).toBe(1);
      }
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      expect(overflow).toBe(false);
      const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
      expect(results.violations).toEqual([]);
    });
  }
}
test("skip link, legacy anchors and project navigation", async ({ page, browserName }) => {
  await page.goto("/");
  // Safari on macOS uses Option-Tab to include links when full keyboard access is off.
  await page.keyboard.press(browserName === "webkit" && process.platform === "darwin" ? "Alt+Tab" : "Tab");
  await expect(page.getByRole("link", { name: "Saltar al contenido" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  for (const hash of ["projects", "case-study", "focus"]) {
    await page.goto(`/#${hash}`);
    await expect(page.locator(`#${hash}`)).toBeAttached();
  }
  await page.goto("/#work");
  expect(await page.locator(".work-copy h3 a").evaluateAll((links) => links.map((link) => link.getAttribute("href")))).toEqual([
    "/work/realidad-multipolar/", "/work/financial-calculator/", "/work/pc-optimisation/", "/work/airflow-migration/", "/work/pyspark-optimisation/",
  ]);
  await expect(page.locator(".mini-flow")).toHaveText(["PENTAHO→AIRFLOW", "PYSPARK→HBASE"]);
  await page.getByRole("link", { name: "Leer caso de estudio: De Pentaho a Airflow", exact: true }).click();
  await expect(page).toHaveURL(/\/work\/airflow-migration\/$/);
  await page.getByRole("link", { name: "Todos los proyectos", exact: false }).click();
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
  const englishOg = await request.get("/social/portfolio-og-en.png");
  expect(englishOg.ok()).toBeTruthy();
  expect(englishOg.headers()["content-type"]).toContain("image/png");
  await page.goto("/");
  await expect(page.locator("a[download]")).toHaveCount(1);
  await expect(page.locator("#experience a[download]")).toHaveAttribute("href", "/CV_Data_Engineer_2026.pdf");
  const hrefs = await page.locator('a[href^="/"]').evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute("href")!).filter((href) => !href.startsWith("/#")))]);
  for (const href of hrefs) expect((await request.get(href)).ok(), href).toBeTruthy();
  const missing = await request.get("/not-a-real-page/");
  expect(missing.status()).toBe(404);
});
test("copy email handles permission failure accessibly", async ({ page }) => {
  await page.addInitScript(() => Object.defineProperty(navigator, "clipboard", { value: { writeText: () => Promise.reject(new Error("Denied")) } }));
  await page.goto("/#contact");
  await page.getByRole("button", { name: "Copiar email" }).click();
  await expect(page.getByRole("status")).toContainText("No se ha podido copiar");
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
  await page.getByRole("button", { name: "Copiar email" }).click();
  await expect(page.getByRole("status")).toContainText("¡Copiado!");
  await page.goto("/");
  await page.getByRole("link", { name: "Leer caso de estudio: De Pentaho a Airflow", exact: true }).click({ modifiers: ["ControlOrMeta"] });
  // The hook emits locally; no provider, storage or network transport is installed.
  await expect(page.locator("html")).toHaveAttribute("data-last-portfolio-event", "project_open");
});
test("core content and navigation work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce", viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4321/");
  await expect(page.locator('.hero-actions a[href="#contact"]')).toBeVisible();
  await expect(page.locator("#experience a[download]")).toHaveAttribute("href", "/CV_Data_Engineer_2026.pdf");
  await page.locator('nav a[href="#services"]').click();
  await expect(page).toHaveURL(/#services$/);
  await page.locator('nav a[href="#work"]').click();
  await expect(page).toHaveURL(/#work$/);
  await page.getByRole("link", { name: "Leer caso de estudio: De Pentaho a Airflow", exact: true }).click();
  await expect(page.getByRole("heading", { level: 1 })).toContainText("150–180");
  await context.close();
});

test("language switch preserves the equivalent page and selected section", async ({ page }) => {
  for (const route of spanishRoutes) {
    await page.goto(route);
    await page.getByRole("link", { name: "Ver esta página en inglés", exact: true }).click();
    await expect(page).toHaveURL(`http://127.0.0.1:4321/en${route}`);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await page.getByRole("link", { name: "Read this page in Spanish", exact: true }).click();
    await expect(page).toHaveURL(`http://127.0.0.1:4321${route}`);
  }
  await page.goto("/#services");
  await page.getByRole("link", { name: "Ver esta página en inglés", exact: true }).click();
  await expect(page).toHaveURL("http://127.0.0.1:4321/en/#services");
  await expect(page.getByRole("heading", { name: "Services for Your Business", exact: true })).toBeVisible();
  await expect(page.locator(".credentials li")).toHaveCount(4);
  await page.getByRole("link", { name: "Read this page in Spanish", exact: true }).click();
  await expect(page).toHaveURL("http://127.0.0.1:4321/#services");
});

for (const failure of [false, true]) {
  test(`English clipboard feedback: ${failure ? "unavailable" : "copied"}`, async ({ page }) => {
    await page.addInitScript((deny) => Object.defineProperty(navigator, "clipboard", {
      value: { writeText: () => deny ? Promise.reject(new Error("Denied")) : Promise.resolve() },
    }), failure);
    await page.goto("/en/#contact");
    await page.getByRole("button", { name: "Copy email" }).click();
    await expect(page.getByRole("status")).toContainText(failure ? "Copy unavailable" : "Copied!");
    await expect(page.locator(".email-link")).toHaveAttribute("href", "mailto:jesusmugo91@gmail.com");
  });
}

test("language switch and English project navigation work without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, reducedMotion: "reduce", viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:4321/");
  await page.getByRole("link", { name: "Ver esta página en inglés", exact: true }).click();
  await expect(page).toHaveURL("http://127.0.0.1:4321/en/");
  await page.locator('nav a[href="#services"]').click();
  await expect(page).toHaveURL(/\/en\/#services$/);
  await page.getByRole("link", { name: "View case study: Budget optimiser", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/work\/pc-optimisation\/$/);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Price Automation & Budget Optimiser");
  await page.getByRole("link", { name: "Read this page in Spanish", exact: true }).click();
  await expect(page).toHaveURL(/\/work\/pc-optimisation\/$/);
  await context.close();
});
