# Portfolio maintenance

## Before a release

1. Review professional claims against the latest owner-approved content and CV. Keep approximate figures approximate; distinguish scope, runtime, throughput and business impact. Keep the Spanish business-facing copy aligned with the web application, automation and data services offered.
2. Update the reviewed date in `src/data/portfolio.ts` only when content has actually been checked. Do not make every build look like a content update.
3. Reconfirm “Actualidad”, availability, the 4+ years claim, language level and credential dates. The tenure wording is intentionally manually verified rather than calculated from calendar time across career gaps.
4. If replacing the public CV, inspect the PDF and confirm public disclosure of all contact information. Keep the existing URL or update links and tests together.
5. Run `npm ci`, `npm run build`, `npm test` and `npm run budget`. Install the Chromium and WebKit engines when setting up a new machine.
6. Inspect both language homepages and all work pages at phone, tablet and desktop widths; check the language switch, keyboard focus, reduced motion, anchors and localised email copy feedback. Keep Spanish and English claims aligned when editing content.
7. After visual changes, run `npm run assets:screenshot`. After editing `assets/portfolio-og.svg`, run `npm run assets:og`. Inspect both outputs, then rebuild.
8. Check `git diff --check`, the file diff, and `npm audit`. Review dependency major changes against Astro’s migration guides.
9. Commit and push only when authorised. After Netlify completes, verify live routes, the PDF, sitemap, share image and a hard-refreshed homepage.

## Discovery and measurement

The production origin lives in `astro.config.mjs`. Changing to a personal domain also requires DNS, Netlify domain configuration and redirect decisions; no domain is purchased or configured by this implementation.

Submit the sitemap to search tools once site ownership is verified. Repository social previews are a separate GitHub setting: upload `public/social/portfolio-og.png` in Settings → General → Social preview if desired. The README image and webpage Open Graph image are already wired locally.

Use the supplied local event hooks only after choosing an analytics provider. Track successful CV requests separately from link clicks if the provider supports that distinction. Avoid treating clicks as downloads completed, or sending identifiable data.

Useful future evidence: certificate verification URLs; a public PC optimiser repository/demo; migration acceptance criteria; before/after runtime, workload and cluster configuration; product adoption measurements. Add these only when confirmed.

## Performance

`npm run budget` checks the built HTML, CSS and JavaScript against small static-site budgets, plus image dimensions/sizes. It is not a Core Web Vitals measurement. Run a mobile Lighthouse lab audit after major changes; use field data only once there is sufficient real traffic. Do not present lab scores as real-user performance.

Only hashed `/_astro/` assets receive immutable caching. The CV and human-named screenshots remain refreshable. Security headers apply through Netlify; local preview does not emulate hosting headers.

## Known scope limits

Case diagrams are explicitly simplified scope/workflow illustrations, not invented client architecture. Professional source code and benchmark details are not included. The CV itself has not been rewritten or redesigned. No third-party analytics, certificate verification, domain, search-console ownership or GitHub repository settings were changed.
