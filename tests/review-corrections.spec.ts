import { test, expect } from "@playwright/test";

const versions = [
  { home: "/", claim: "mejora reportada de aproximadamente un 80%", footer: "Contenido revisado en noviembre de 2026", reviewed: "Última revisión" },
  { home: "/en/", claim: "reported improvement of approximately 80%", footer: "Content reviewed in November 2026", reviewed: "Last reviewed" },
];

test("experience preserves the reported migration result in both languages", async ({ page }) => {
  for (const version of versions) {
    await page.goto(version.home);
    const claim = page.locator("#experience").getByText(/^Cabildo de Tenerife:.*80%/);
    await expect(claim).toContainText(version.claim);
    await expect(claim).toContainText("150–180");
    await expect(claim).toContainText("Pentaho");
    await expect(claim).toContainText("Apache Airflow");
  }
});

for (const version of versions) {
  test(`review dates are not represented as modification dates: ${version.home}`, async ({ page }) => {
    await page.goto(version.home);
    await expect(page.locator("footer")).toContainText(version.footer);
    await expect(page.locator("footer time")).toHaveAttribute("datetime", "2026-11-13");
    const paths = await page.locator(".work-card a[href]").evaluateAll((links) => [...new Set(links.map((link) => link.getAttribute("href")))].filter((href): href is string => href !== null));
    expect(paths).toHaveLength(5);
    for (const path of paths) {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator(".case-facts dt").last()).toHaveText(version.reviewed);
      await expect(page.locator("main time")).toHaveAttribute("datetime", "2026-11-13");
      await expect(page.locator("footer")).toContainText(version.footer);
      const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
      expect(schemas.join("\n")).toContain('"CreativeWork"');
      expect(schemas.join("\n")).not.toMatch(/"dateModified"\s*:/);
    }
  });
}

test("sitemap preserves all locale URLs without unsupported modification dates", async ({ request }) => {
  const response = await request.get("/sitemap.xml");
  expect(response.status()).toBe(200);
  const xml = await response.text();
  expect(xml).not.toContain("<lastmod>");
  expect([...xml.matchAll(/<loc>/g)]).toHaveLength(12);
  for (const locale of ["es", "en", "x-default"]) {
    expect([...xml.matchAll(new RegExp(`hreflang="${locale}"`, "g"))]).toHaveLength(12);
  }
  expect(xml).not.toContain("404");
});
