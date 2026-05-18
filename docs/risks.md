# Risks

## Product and GEO Risks
- Corpus size is too small: the site has about 7 indexable sitemap pages, while competing evidence sets have roughly 40-50 URLs.
- Recall is currently the primary bottleneck. More recommendation polishing will not matter until ALPHAXXXX has enough high-intent retrievable pages.
- Local intent is underdeveloped. Australia and Sydney pages are needed because competitor evidence signals include Australia, Sydney, free audit, pricing, and get found in AI search engines.
- Buying decision content is thin. Pricing, comparison, objections, and engagement model pages are needed for trust validation and objection handling.

## Architecture Risks
- Adding 30-50 routes by copying TSX page files will create maintenance drift across metadata, schema, sitemap, llms.txt, and page layout.
- A single catch-all content helper would become a dumping ground. Use typed page inventories and specific render templates instead.
- Route inventory and sitemap can drift if new pages are not added through a shared page registry.
- Schema can become inaccurate if FAQPage, Article, Service, and visible page content are maintained separately.

## Operational Risks
- Google indexing may lag even with correct technical setup.
- Vercel HTTPS redirect behavior is correct, but Search Console may report HTTP URLs as redirected.
- External entity signals are still weak; LinkedIn, directories, partner pages, and third-party mentions are needed after the on-site corpus grows.
