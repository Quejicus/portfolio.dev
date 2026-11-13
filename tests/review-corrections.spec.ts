import { test, expect } from "@playwright/test";
import { readFile } from "node:fs/promises";

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

// Astro preview does not process Netlify rules: verify the declaration and its
// generated document here, and verify missing-route HTTP 404 after deployment.
test("English 404 document has an unforced Netlify fallback and no-JS recovery", async ({ page, browser, baseURL }) => {
  const config = await readFile("netlify.toml", "utf8");
  const blocks = [...config.matchAll(/\[\[redirects\]\]([\s\S]*?)(?=\n\[\[|$)/g)].map((match) => match[1]);
  const fallback = blocks.find((block) => /^\s*from\s*=\s*"\/en\/\*"\s*$/m.test(block));
  expect(fallback, "Netlify must declare the English missing-route fallback").toBeDefined();
  if (!fallback) throw new Error("English Netlify fallback is missing");
  expect(fallback).toMatch(/^\s*status\s*=\s*404\s*$/m);
  expect(fallback).toMatch(/^\s*force\s*=\s*false\s*$/m);
  const target = fallback.match(/^\s*to\s*=\s*"([^"]+)"\s*$/m)?.[1];
  expect(target).toMatch(/^\/en\/404(?:\/index)?\.html$/);
  if (!target) throw new Error("English error document target is missing");
  expect(await readFile(`dist${target}`, "utf8")).toContain("Page not found");

  const noJS = await browser.newContext({ javaScriptEnabled: false });
  try {
    for (const current of [page, await noJS.newPage()]) {
      const response = await current.goto(new URL(target, baseURL).href);
      expect(response?.status()).toBe(200); // Direct document, not missing-path status.
      await expect(current.locator("html")).toHaveAttribute("lang", "en");
      await expect(current).toHaveTitle("Page not found | Jesús Muñoz González");
      await expect(current.locator("h1")).toHaveText(/This page\s*is not available\./);
      await expect(current.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
      await expect(current.locator("main").getByRole("link", { name: "View projects", exact: true })).toHaveAttribute("href", "/en/#work");
      await expect(current.locator("main").getByRole("link", { name: "Contact", exact: true })).toHaveAttribute("href", "/en/#contact");
    }
  } finally {
    await noJS.close();
  }
});

test("Spanish 404 recovery preserves status, language and destinations", async ({ page }) => {
  const response = await page.goto("/not-a-real-page/");
  expect(response?.status()).toBe(404);
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator("h1")).toHaveText(/Esta página\s*no está disponible\./);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  await expect(page.locator("main").getByRole("link", { name: "Ver proyectos", exact: true })).toHaveAttribute("href", "/#work");
  await expect(page.locator("main").getByRole("link", { name: "Contactar", exact: true })).toHaveAttribute("href", "/#contact");
});
