# Next

## Done
- Created the project memory structure requested by the user: `CONTEXT.md`, `docs/architecture.md`, `docs/risks.md`, `docs/next.md`, and `docs/adr/`.
- Recorded ADR 0001 to guide the upcoming 30-50 page GEO expansion through a typed static content inventory instead of copied route files.
- Wrote the first implementation plan at `docs/superpowers/plans/2026-05-18-geo-corpus-expansion.md`.
- Implemented the first 12 high-intent GEO corpus pages through `src/lib/intent-pages.ts`, `src/components/IntentPage.tsx`, and `src/app/(intent)/[slug]/page.tsx`.
- Connected the new pages to shared route inventory, sitemap generation, llms.txt, metadata, JSON-LD, homepage links, and service-page links.

## Learned
- The current site has too few indexable pages for the reported retrieval benchmark. The highest-value work is increasing high-intent corpus size before optimizing model mention phrasing.
- Current route count is small enough that adding many pages without a content inventory would create maintenance drift.
- ALPHAXXXX is the only active brand entity. GEO-ALPHA is abandoned and should not reappear in visible copy or schema.
- The first content batch should prioritize 12 pages matching competitor-winning intent signals: audit, Australia, Sydney, get found in AI search engines, pricing, ChatGPT, Perplexity, AI Overviews, SaaS, local services, SEO agencies, and objections.
- Next.js 16 successfully statically prerenders the new dynamic `[slug]` route when `generateStaticParams` is used with the typed static content inventory.

## Risks
- Recall@5 and Recall@10 can remain at 0 if new pages do not target the exact commercial and platform intents used by models.
- A rushed route expansion could duplicate page logic and break sitemap/schema consistency.
- External brand/entity signals are still weak and will need attention after the on-site corpus is expanded.
- The first batch still leaves ALPHAXXXX below the 30-50 URL target; a second batch is needed after the template and inventory path proves stable.
- The new pages still need deployment and manual URL submission before they can influence Google, Bing, and AI retrieval experiments.

## Next
1. Push and deploy the first 12 high-intent pages.
2. Submit the 12 new HTTPS canonical URLs in Google Search Console and Bing Webmaster Tools after deployment.
3. Start the second corpus batch to move from roughly 20 URLs toward the 30-50 URL target.
