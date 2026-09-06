import type { APIRoute } from "astro";
import { CASE_STUDIES } from "../data/work";
import { SITE_CONTENT } from "../data/portfolio";
export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("Set site in astro.config.mjs before building the sitemap.");
  const paths = ["/", ...CASE_STUDIES.map(({ slug }) => `/work/${slug}/`)];
  const entries = paths.map((path) => `<url><loc>${new URL(path, site).href}</loc><lastmod>${SITE_CONTENT.lastUpdated.isoDate}</lastmod></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`, { headers: { "Content-Type": "application/xml" } });
};
