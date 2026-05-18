# Next

## Done
- Added five hub pages: `/platforms`, `/industries`, `/buyers`, `/locations`, and `/resources`.
- Added hub page content, reusable hub rendering, CollectionPage, ItemList, FAQPage, and BreadcrumbList structured data.
- Connected the hub pages to sitemap, llms.txt, homepage links, primary navigation, and the GEO corpus verification script.
- Implemented the second batch of 12 high-intent GEO corpus pages in `src/lib/intent-pages.ts`.
- Added `npm run verify:geo-corpus` so the intent-page inventory can be checked after each expansion.
- Added second-batch links to the homepage and AI search visibility service page.
- Replaced the old public IndexNow verification key file with `3de4733459264958879b09e7abc14da1.txt`.
- Added `npm run indexnow:submit` to submit every production sitemap URL to IndexNow after deployment.
- Created the project memory structure requested by the user: `CONTEXT.md`, `docs/architecture.md`, `docs/risks.md`, `docs/next.md`, and `docs/adr/`.
- Recorded ADR 0001 to guide the upcoming 30-50 page GEO expansion through a typed static content inventory instead of copied route files.
- Wrote the first implementation plan at `docs/superpowers/plans/2026-05-18-geo-corpus-expansion.md`.
- Implemented the first 12 high-intent GEO corpus pages through `src/lib/intent-pages.ts`, `src/components/IntentPage.tsx`, and `src/app/(intent)/[slug]/page.tsx`.
- Connected the new pages to shared route inventory, sitemap generation, llms.txt, metadata, JSON-LD, homepage links, and service-page links.

## Learned
- The site needed hub-level information architecture because a flat set of root intent pages is less clear for crawlers than platform, industry, buyer, location, and resource clusters.
- `/locations` should explicitly center Australia and Sydney while naming target customers as local, retail-demand, sales-led, B2B, agency, and professional services businesses.
- The typed intent-page inventory can scale the corpus without adding route files; the new pages automatically feed static params, sitemap, llms.txt, metadata, and JSON-LD.
- The second batch moves the site from 19 sitemap URLs toward 31 sitemap URLs, passing the first 30+ URL corpus threshold.
- `src/lib/intent-pages.ts` is now large; the next content expansion should split intent data by family before adding another large batch.
- IndexNow ownership verification uses a public root-level UTF-8 key file, so the key belongs in `public/` rather than `.env`.
- IndexNow submission should run only after the new key file is deployed, otherwise the search engine may reject or defer validation.
- The current site has too few indexable pages for the reported retrieval benchmark. The highest-value work is increasing high-intent corpus size before optimizing model mention phrasing.
- Current route count is small enough that adding many pages without a content inventory would create maintenance drift.
- ALPHAXXXX is the only active brand entity. GEO-ALPHA is abandoned and should not reappear in visible copy or schema.
- The first content batch should prioritize 12 pages matching competitor-winning intent signals: audit, Australia, Sydney, get found in AI search engines, pricing, ChatGPT, Perplexity, AI Overviews, SaaS, local services, SEO agencies, and objections.
- Next.js 16 successfully statically prerenders the new dynamic `[slug]` route when `generateStaticParams` is used with the typed static content inventory.

## Risks
- Hub pages improve structure, but Google and AI systems still need time to crawl and index them before they can affect retrieval experiments.
- The corpus is now larger, but external entity signals are still weak; ALPHAXXXX still needs trusted third-party mentions after on-site pages are indexed.
- More pages in one inventory file could reduce maintainability if the next 10-20 URLs are added without a family-level split.
- IndexNow notifies Bing and participating search engines, but it does not guarantee indexing and does not replace Google Search Console submission.
- Recall@5 and Recall@10 can remain at 0 if new pages do not target the exact commercial and platform intents used by models.
- A rushed route expansion could duplicate page logic and break sitemap/schema consistency.
- External brand/entity signals are still weak and will need attention after the on-site corpus is expanded.
- The new pages still need deployment and manual URL submission before they can influence Google, Bing, and AI retrieval experiments.

## Next
1. Push and deploy the five hub pages.
2. After Vercel deploys, run `npm run indexnow:submit` again so Bing receives the updated sitemap.
3. Add the five hub URLs to the next Google Search Console manual indexing batch, together with the existing queued URLs.
