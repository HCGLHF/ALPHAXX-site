# Architecture

## System Shape
This is a Next.js 16 App Router static site hosted on Vercel. The site is optimized for AI readability, traditional indexing, and evidence retrieval.

## Modules and Responsibilities
- `src/app/`: route-level pages and metadata route files. Pages should remain mostly server-rendered/static and should not own shared business taxonomy.
- `src/lib/site.ts`: canonical site configuration, route inventory, metadata helpers, and shared JSON-LD builders.
- `src/lib/content.ts`: shared FAQ and external source content.
- `src/components/PageChrome.tsx`: presentational layout primitives for page shells, headings, stats, and evidence lists.
- `src/components/StructuredData.tsx`: JSON-LD rendering adapter.
- `docs/`: project memory, architecture decisions, risk notes, and implementation plans.

## Data Flow
Static page data should flow from narrow content modules into route pages. Route pages render visible HTML and call metadata/schema helpers. Sitemap, robots, llms.txt, metadata, and navigation should use the same canonical route inventory where practical.

## Dependency Direction
`src/app/*` may depend on `src/components/*` and `src/lib/*`.
`src/components/*` may depend on React and simple props, but should not import route inventories or business taxonomy unless the component explicitly renders shared navigation.
`src/lib/*` should not import route pages.

## Boundaries Not To Cross
- Do not mix page rendering, route inventory, and content taxonomy into one large file.
- Do not hide core page copy behind client-side state or browser-only rendering.
- Do not let sitemap, navigation, and page generation drift into separate hard-coded lists as the page count grows.
- Do not add new core abstractions without recording why in an ADR when they affect routing, content models, or schema generation.

## Current Architecture Pressure
The site now uses a narrow static content inventory and reusable template for intent pages. The next architecture pressure is file size: `src/lib/intent-pages.ts` should be split by intent family if the corpus expands beyond the current batch, while keeping one shared route registry for sitemap, llms.txt, metadata, and static params.
