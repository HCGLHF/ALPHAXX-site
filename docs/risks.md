# Risks

## Product and GEO Risks
- Corpus size has improved to roughly 31 sitemap URLs after the second intent-page batch, but competitors still show roughly 40-50 URLs.
- Recall is still the primary bottleneck until the new pages are indexed and the site has enough high-intent retrievable evidence.
- Local intent now has Australia and Sydney pages, but additional city and industry combinations may be needed if retrieval tests show local gaps.
- Buying decision content is stronger after pricing, comparison, objection, and hiring-checklist pages, but proof assets such as case studies are still thin.

## Architecture Risks
- Adding 30-50 routes by copying TSX page files would create maintenance drift across metadata, schema, sitemap, llms.txt, and page layout.
- A single catch-all content helper would become a dumping ground. Use typed page inventories and specific render templates instead.
- Route inventory and sitemap can drift if new pages are not added through a shared page registry.
- Schema can become inaccurate if FAQPage, Article, Service, and visible page content are maintained separately.
- `src/lib/intent-pages.ts` is now large enough that the next expansion should consider splitting by intent family while preserving the shared registry interface.

## Operational Risks
- Google indexing may lag even with correct technical setup.
- Vercel HTTPS redirect behavior is correct, but Search Console may report HTTP URLs as redirected.
- External entity signals are still weak; LinkedIn, directories, partner pages, and third-party mentions are needed after the on-site corpus grows.
