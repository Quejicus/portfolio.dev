import { SITE_CONTENT } from "../data/portfolio";
import { EN_SITE_CONTENT } from "../data/portfolio.en";
import { CASE_STUDIES } from "../data/work";
import { EN_CASE_STUDIES } from "../data/work.en";
import { ES_UI, EN_UI } from "./ui";

export const LOCALES = { ES: "es", EN: "en" } as const;
export type Locale = (typeof LOCALES)[keyof typeof LOCALES];
export const SUPPORTED_LOCALES = Object.values(LOCALES);

export function getLocale(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? LOCALES.EN : LOCALES.ES;
}

export function localizePath(pathname: string, locale: Locale): string {
  const unprefixed = pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  return locale === LOCALES.EN ? `/en${unprefixed}` : unprefixed;
}

export function getContent(locale: Locale) {
  return locale === LOCALES.EN
    ? { site: EN_SITE_CONTENT, ui: EN_UI, caseStudies: EN_CASE_STUDIES }
    : { site: SITE_CONTENT, ui: ES_UI, caseStudies: CASE_STUDIES };
}
