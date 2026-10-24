import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const versions = [
  { home: "/", locale: "es", otherHome: "/en/", otherLocale: "en", open: "Abrir menú principal", close: "Cerrar menú principal" },
  { home: "/en/", locale: "en", otherHome: "/", otherLocale: "es", open: "Open main menu", close: "Close main menu" },
];

for (const version of versions) {
  for (const width of [768, 1024, 1280]) {
    test(`project links and service rows align: ${version.locale}, ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(version.home);
      await page.evaluate(() => document.fonts.ready);
      const geometry = await page.evaluate(() => ({
        cards: [...document.querySelectorAll(".work-card")].map((card) => ({
          top: card.getBoundingClientRect().top,
          bottom: card.getBoundingClientRect().bottom,
          ctaBottom: card.querySelector(".text-link")!.getBoundingClientRect().bottom,
        })),
        services: [...document.querySelectorAll(".capabilities > div")].map((service) => ({
          height: service.getBoundingClientRect().height,
          paragraphTop: service.querySelector("p")!.getBoundingClientRect().top,
        })),
        portrait: document.querySelector(".identity img")!.getBoundingClientRect().toJSON(),
      }));
      expect(geometry.cards).toHaveLength(4);
      for (let index = 0; index < geometry.cards.length; index += 2) {
        const [left, right] = geometry.cards.slice(index, index + 2);
        expect(Math.abs(left.top - right.top)).toBeLessThan(1);
        expect(Math.abs(left.bottom - right.bottom)).toBeLessThan(1);
        expect(Math.abs(left.ctaBottom - right.ctaBottom)).toBeLessThan(1);
      }
      expect(Math.max(...geometry.services.map((service) => service.height)) - Math.min(...geometry.services.map((service) => service.height))).toBeLessThan(1);
      expect(Math.max(...geometry.services.map((service) => service.paragraphTop)) - Math.min(...geometry.services.map((service) => service.paragraphTop))).toBeLessThan(1);
      expect(Math.abs(geometry.portrait.width - geometry.portrait.height)).toBeLessThan(1);
    });
  }

  test(`mobile menu: keyboard, focus, outside click and language change: ${version.locale}`, async ({ page, browserName }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(version.home);
    const toggle = page.getByRole("button", { name: version.open, exact: true });
    const navigation = page.locator("#primary-navigation");
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await expect(navigation).toBeHidden();
    const tab = browserName === "webkit" && process.platform === "darwin" ? "Alt+Tab" : "Tab";
    await page.keyboard.press(tab);
    await expect(page.locator(".skip-link")).toBeFocused();
    const focus = await page.locator(".skip-link").evaluate((element) => ({
      style: getComputedStyle(element).outlineStyle,
      width: parseFloat(getComputedStyle(element).outlineWidth),
    }));
    expect(focus.style).not.toBe("none");
    expect(focus.width).toBeGreaterThanOrEqual(2);
    await page.keyboard.press(tab);
    await expect(page.locator(".wordmark")).toBeFocused();
    await page.keyboard.press(tab);
    await expect(toggle).toBeFocused();
    await page.keyboard.press("Space");
    await expect(page.getByRole("button", { name: version.close, exact: true })).toHaveAttribute("aria-expanded", "true");
    await expect(navigation).toBeVisible();
    const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    expect(accessibility.violations).toEqual([]);
    await page.keyboard.press(tab);
    await expect(navigation.locator("a").first()).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(toggle).toBeFocused();
    await expect(navigation).toBeHidden();
    await page.keyboard.press("Enter");
    await page.keyboard.press(tab);
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(`http://127.0.0.1:4321${version.home}#work`);
    await expect(navigation).toBeHidden();
    await expect(page.locator("#work")).toBeFocused();
    await toggle.click();
    await page.locator("#contact h2").click();
    await expect(navigation).toBeHidden();
    await toggle.click();
    await page.locator(".language-switch").click();
    await expect(page).toHaveURL(`http://127.0.0.1:4321${version.otherHome}#work`);
    await expect(page.locator("html")).toHaveAttribute("lang", version.otherLocale);
    await expect(page.locator(".menu-toggle")).toHaveAttribute("aria-expanded", "false");
    await expect(page.locator("#primary-navigation")).toBeHidden();
  });

  test(`project routes, logo, back link and actual CV download: ${version.locale}`, async ({ page }) => {
    await page.goto(version.home);
    const projectUrls = await page.locator(".work-copy h3 a").evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    expect(projectUrls).toHaveLength(4);
    for (const [index, url] of projectUrls.entries()) {
      await page.goto(version.home);
      await page.locator(".work-copy h3 a").nth(index).click();
      await expect(page).toHaveURL(`http://127.0.0.1:4321${url}`);
      await expect(page.locator("html")).toHaveAttribute("lang", version.locale);
      await page.locator(".wordmark").click();
      await expect(page).toHaveURL(`http://127.0.0.1:4321${version.home}`);
      await page.goto(url);
      await page.locator(".back-link").click();
      await expect(page).toHaveURL(`http://127.0.0.1:4321${version.home}#work`);
    }
    const [download] = await Promise.all([
      page.waitForEvent("download"), page.locator("#experience a[download]").click(),
    ]);
    expect(download.suggestedFilename()).toBe("Jesus_Munoz_Gonzalez_Data_Engineer_CV_2026.pdf");
    expect(await download.failure()).toBeNull();
    await page.locator(".footer-links a[href='#main-content']").click();
    await expect(page.locator("#main-content")).toBeFocused();
  });

  test(`case studies reflow on small phones: ${version.locale}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 844 });
    await page.goto(version.home);
    const projectUrls = await page.locator(".work-copy h3 a").evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    for (const url of projectUrls) {
      await page.goto(url);
      await page.evaluate(() => document.fonts.ready);
      expect(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), url).toBe(false);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      const portrait = await page.locator(".menu-toggle").boundingBox();
      expect(portrait!.height).toBeGreaterThanOrEqual(44);
    }
  });
}
