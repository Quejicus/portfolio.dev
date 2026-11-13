# Jesús Muñoz González · Aplicaciones Web con IA, Automatización y Datos

[Live portfolio](https://jesus-dataengineer-portfolio.netlify.app/) · [LinkedIn](https://linkedin.com/in/jesus-data-engineer) · [Email](mailto:jesusmugo91@gmail.com)

![Current portfolio homepage](./public/projects/portfolio_current_screenshot.webp)

A bilingual static Astro site for businesses looking for custom web applications, process automation and data solutions. Spanish remains at `/`; English is available at `/en/`, including all five case studies. Realidad Multipolar, a personal editorial platform in development, leads the project selection, followed by enterprise Airflow and PySpark case studies. Professional experience and credentials support the services; the CV download is available in Experience.

## Development

Use Node 24 (see `.nvmrc`; minimum supported: 22.23.4, matching Astro's requirement).

```sh
npm ci
npm run dev
```

## Verification

```sh
npm run build
npx playwright install chromium webkit
npm test
npm run budget
```

The build runs a strict Astro check and refuses a zero-file/partial-source check. Browser tests cover Chromium and WebKit, 320/390/768/820/1024/1280px widths, accessibility checks, card alignment, keyboard and anchor navigation, mobile menu dismissal, actual CV downloads, bilingual metadata and routing, project ordering, clipboard feedback, no-JavaScript navigation, and local event hooks. These automated checks complement manual review.

`npm run preview` serves the built files. Astro may background the preview in agent environments; `npm run astro -- preview stop` stops that process.

## Content and assets

- `src/data/portfolio.ts` and `portfolio.en.ts`: Spanish and English professional content; shared contact details, CV and credential metadata come from the Spanish source.
- `src/data/work.ts` and `work.en.ts`: the five project overviews and their English translations; each gets a route and sitemap entry in both languages. Missing English case translations fail the build.
- `src/i18n/`: typed interface copy, supported locales and path helpers. `HomePage.astro` and `CaseStudyPage.astro` share the page structure between languages.
- `astro.config.mjs`: the single production origin used for canonical URLs, structured data, sitemap and robots.
- `src/styles/global.css`: shared design tokens and responsive layouts. Native CSS; no client framework or page-transition router.
- `public/CV_Data_Engineer_2026.pdf`: the authorised public CV. Review personal information before replacing it.
- `assets/portfolio-og.svg` and `portfolio-og.en.svg`: editable 1200 × 630 social previews; run `npm run assets:og` to generate both PNGs.
- `npm run assets:screenshot`: capture the production homepage and refresh its PNG and WebP versions. Run the build first, then rebuild afterward to include the new images in `dist`.

Screenshots are taken from a production preview, with fonts loaded and without the development toolbar. The existing PNG URL is retained for compatibility; this README uses the smaller WebP. Social cards use a dedicated identity image rather than a miniature webpage.

Language selection uses ordinary links to the equivalent page and works without JavaScript. With JavaScript enabled, it also preserves the current section hash. Internal navigation stays in the selected language. Each page has its own canonical, reciprocal `hreflang` links (Spanish, English and Spanish as `x-default`), language-specific structured data and a localised social image. The sitemap lists both language versions. No automatic language redirect, cookie or saved language preference is used.

On mobile, JavaScript enhances the visible navigation with a disclosure button. It closes on a link, language change, Escape or interaction outside the header. Escape returns focus to the button; same-page links move focus to the target section. Without JavaScript, navigation links remain visible. See [the bilingual QA audit](docs/qa-audit-2026-10-24.md) for scope and verification evidence.

## Deployment

Netlify serves `dist` using `npm run build` and Node 24, configured in `netlify.toml`. GitHub Actions checks pull requests and pushes to main. This work does not change hosting providers.

Before release, follow [the maintenance checklist](docs/maintenance.md). A local implementation is not deployed until its changes are committed, pushed and successfully built by Netlify.

## Analytics

Links emit a local `portfolio:interaction` custom event with only `{ name, path }`. No analytics provider, cookies, network transport or persistent storage is installed. Do Not Track disables the hook. Event names include `cv_download`, `project_open`, `project_live`, `contact_email` and `contact_link`.

A provider integration remains an explicit deployment decision. Validate privacy requirements and avoid collecting email URLs, CV contents or other personal data.

## Content boundaries

Content, client names and the approximate 80% migration improvement follow the owner's October 2026 brief. No client architecture, certificate verification links or user counts have been added. The ~60% figure describes a reduction in end-to-end ETL runtime. Credential dates describe when they were earned, not a claim of current renewal status.

Hero metrics describe individual case studies: the one-month delivery refers to Mi Calculadora Financiera, the ~60% reduction refers to ETL runtime, and the 150–180 figure counts migrated workflows.

The PC optimisation project has an overview but no fabricated repository/demo link. Add verified links and measurements when available.
