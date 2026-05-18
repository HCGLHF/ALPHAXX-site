# ADR 0001: Use a Static Content Inventory for GEO Intent Pages

## Status
Accepted

## Context
ALPHAXXXX needs to expand from a small set of core pages to 30-50 high-intent pages for AI retrieval and citation. Copying a standalone TSX route for every page would duplicate metadata, schema, FAQ, and layout logic.

## Decision
Create a typed static content inventory for repeatable GEO intent pages, then render those pages through a small number of templates. The inventory should contain route path, title, description, H1, short answer, sections, FAQs, schema type, and internal links.

## Alternatives
- Keep writing individual TSX pages. This is fast at first but creates route and schema drift.
- Add a full CMS now. This is more flexible but adds operational cost before the content model is proven.
- Use MDX for all pages. This improves authoring but makes structured metadata/schema consistency harder unless a content registry still exists.

## Consequences
- Sitemap, llms.txt, navigation, and metadata can be generated from the same source of truth.
- Pages remain statically prerendered and readable in HTML source.
- The content model must be kept narrow. If it grows too broad, split by intent family rather than building a catch-all page manager.
