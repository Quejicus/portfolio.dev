import type { APIRoute } from "astro";
import { CASE_STUDIES } from "../data/work";
import { SITE_CONTENT } from "../data/portfolio";
import { localizePath, SUPPORTED_LOCALES } from "../i18n";
export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("Set site in astro.config.mjs before building the sitemap.");
  const paths = ["/", ...CASE_STUDIES.map(({ slug }) => `/work/${slug}/`)];
  const entries = SUPPORTED_LOCALES.flatMap((locale) => paths.map((path) => {
    const alternates = [...SUPPORTED_LOCALES, "x-default"].map((language) => `<xhtml:link rel="alternate" hreflang="${language}" href="${new URL(localizePath(path, language === "en" ? "en" : "es"), site).href}" />`).join("");
    return `<url><loc>${new URL(localizePath(path, locale), site).href}</loc><lastmod>${SITE_CONTENT.lastUpdated.isoDate}</lastmod>${alternates}</url>`;
  })).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`, { headers: { "Content-Type": "application/xml" } });
};
