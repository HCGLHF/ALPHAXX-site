# ALPHAXXXX GEO Corpus Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Expand ALPHAXXXX from a small evidence set into a 30-50 URL AI-retrievable corpus, starting with the first 12 high-intent pages most likely to improve Recall@5, Recall@10, and Model Mention Rate.

**Architecture:** Add a typed static content inventory for repeatable GEO intent pages, then render intent pages through a small number of App Router templates. Keep sitemap, llms.txt, metadata, schema, and internal links connected to the same page inventory to avoid drift.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, static prerendering, JSON-LD, existing `PageChrome` and `StructuredData` components.

---

## Scope

First batch: 12 pages.

1. `/geo-agency-australia`
2. `/ai-search-visibility-audit`
3. `/ai-search-optimization-sydney`
4. `/get-found-in-ai-search-engines`
5. `/chatgpt-recommendation-optimization`
6. `/perplexity-visibility-optimization`
7. `/google-ai-overviews-visibility`
8. `/geo-pricing`
9. `/geo-for-saas-companies`
10. `/geo-for-local-service-businesses`
11. `/geo-for-seo-agencies`
12. `/geo-faq-objection-handling`

This first batch directly targets the report findings: free audit, Australia, Sydney, get found in AI search engines, pricing, ChatGPT, Perplexity, AI Overviews, vendor discovery, trust validation, and objection handling.

---

## File Structure

- Create: `src/lib/intent-pages.ts`
  - Owns typed page inventory for repeatable high-intent pages.
  - Includes path, title, description, intent family, H1, short answer, sections, FAQs, CTA, schema type, and internal links.
- Create: `src/components/IntentPage.tsx`
  - Renders one inventory item into SSR/SSG HTML.
  - Handles TLDR, sections, deliverables, FAQ block, internal links, and CTA.
- Create: `src/app/(intent)/[slug]/page.tsx`
  - Dynamic static route for first-batch intent pages.
  - Uses `generateStaticParams` and `generateMetadata`.
- Modify: `src/lib/site.ts`
  - Add generated route entries from `intentPages`.
  - Keep manual core routes, but concatenate repeatable intent routes for sitemap and llms.txt.
- Modify: `src/app/sitemap.ts`
  - Continue reading from `siteRoutes`; no separate hard-coded list.
- Modify: `src/app/llms.txt/route.ts`
  - Include first-batch intent routes in recommended crawl paths.
- Modify: `src/app/page.tsx`
  - Add internal links to the highest-priority new pages: audit, Australia, Sydney, pricing, ChatGPT, Perplexity.
- Modify: `src/app/services/ai-search-visibility/page.tsx`
  - Link to pricing, platform pages, and industry pages.
- Modify: `docs/next.md`
  - Record what was added and what should happen next.

---

## Task 1: Add Intent Page Content Model

**Files:**
- Create: `src/lib/intent-pages.ts`

- [ ] **Step 1: Add the typed inventory module**

Create `src/lib/intent-pages.ts` with this shape:

```ts
export type IntentFamily =
  | "location"
  | "audit"
  | "platform"
  | "pricing"
  | "industry"
  | "objection";

export type IntentPage = {
  slug: string;
  path: string;
  title: string;
  description: string;
  family: IntentFamily;
  h1: string;
  shortAnswer: string;
  audience: string[];
  outcomes: string[];
  sections: {
    heading: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  internalLinks: {
    label: string;
    href: string;
  }[];
};
```

- [ ] **Step 2: Add the first 12 inventory records**

Each record must include:
- A user-question-style H1.
- A direct short answer in the first 1-2 sentences.
- Australia/Sydney signal where relevant.
- At least 3 FAQs.
- Links back to `/audit`, `/services/ai-search-visibility`, `/guides/what-is-geo`, and sibling intent pages where useful.

- [ ] **Step 3: Run TypeScript through build later**

Do not add a separate test yet. The first verification is `npm.cmd run build`, because this module is static data and the App Router will type-check it during build.

---

## Task 2: Add Intent Page Template

**Files:**
- Create: `src/components/IntentPage.tsx`

- [ ] **Step 1: Create the renderer**

The component should accept one `IntentPage` object and render:
- Eyebrow using the page family.
- H1 from the inventory.
- Short answer block near the top.
- Audience list.
- Outcome list.
- Main sections.
- FAQ section.
- Internal links.

Use existing `PageShell` and `SectionHeading`.

- [ ] **Step 2: Keep the template presentation-only**

The template must not import `siteRoutes`, `sitemap`, or metadata helpers. It should only render props.

- [ ] **Step 3: Use semantic HTML**

The page should contain:
- One visible `h1`.
- Multiple `h2` sections.
- FAQ questions as `h2` or `h3`.
- Lists for deliverables and outcomes.

---

## Task 3: Add Static Dynamic Route

**Files:**
- Create: `src/app/(intent)/[slug]/page.tsx`

- [ ] **Step 1: Implement static params**

Use `intentPages.map((page) => ({ slug: page.slug }))`.

- [ ] **Step 2: Implement metadata**

Use the inventory item to return title, description, canonical, OpenGraph, and Twitter metadata. Canonical URL must be `https://alphaxxxx.com/${slug}`.

- [ ] **Step 3: Render JSON-LD**

Render:
- `Article` for guide-style, objection, platform, and industry pages.
- `Service` for audit, pricing, and location service pages when the visible page describes a service.
- `FAQPage` for page-specific FAQs.
- `BreadcrumbList`.

Schema must mirror visible content.

- [ ] **Step 4: Render the page**

Pass the inventory record into `IntentPage`.

- [ ] **Step 5: Return 404 for missing slugs**

Use `notFound()` if a slug is not in the inventory.

---

## Task 4: Connect Route Inventory

**Files:**
- Modify: `src/lib/site.ts`
- Modify: `src/app/sitemap.ts`
- Modify: `src/app/llms.txt/route.ts`

- [ ] **Step 1: Import `intentPages` into `site.ts`**

Map intent pages into `SiteRoute` objects with priorities:
- P0 pages: `0.9`
- Platform and industry pages: `0.85`
- Objection handling page: `0.8`

- [ ] **Step 2: Keep sitemap unchanged if possible**

If `siteRoutes` includes the new routes, `src/app/sitemap.ts` should continue working without a separate list.

- [ ] **Step 3: Update llms.txt**

Add a section named `High-intent GEO pages` and list the 12 new URLs.

- [ ] **Step 4: Verify route count**

Run:

```powershell
npm.cmd run build
```

Expected route output should include the 12 new pages plus existing core pages.

---

## Task 5: Add Internal Link Paths

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/services/ai-search-visibility/page.tsx`

- [ ] **Step 1: Add homepage links**

Add visible links to:
- `/ai-search-visibility-audit`
- `/geo-agency-australia`
- `/ai-search-optimization-sydney`
- `/get-found-in-ai-search-engines`
- `/geo-pricing`

- [ ] **Step 2: Add service page links**

Add visible links to:
- `/chatgpt-recommendation-optimization`
- `/perplexity-visibility-optimization`
- `/google-ai-overviews-visibility`
- `/geo-for-saas-companies`
- `/geo-for-local-service-businesses`
- `/geo-for-seo-agencies`

- [ ] **Step 3: Keep navigation restrained**

Do not add all 12 pages to the top nav. Use body links and footer/llms/sitemap discovery so the site remains usable.

---

## Task 6: Verification

**Files:**
- All changed files

- [ ] **Step 1: Check abandoned brand**

Run:

```powershell
rg "GEO-ALPHA|GEO ALPHA" -n src docs
```

Expected: no matches except historical notes if explicitly marked abandoned.

- [ ] **Step 2: Check route inventory**

Run:

```powershell
rg "geo-agency-australia|ai-search-visibility-audit|geo-pricing|chatgpt-recommendation-optimization" -n src
```

Expected: matches in content inventory, sitemap/route output source, and internal links.

- [ ] **Step 3: Lint**

Run:

```powershell
npm.cmd run lint
```

Expected: exit code 0.

- [ ] **Step 4: Build**

Run:

```powershell
npm.cmd run build
```

Expected: exit code 0 and static output for all 12 new pages.

- [ ] **Step 5: Inspect sitemap**

Run local or production check after deploy:

```powershell
curl.exe -s https://alphaxxxx.com/sitemap.xml
```

Expected: all 12 new HTTPS canonical URLs appear.

---

## Task 7: Post-Deploy Indexing List

**Files:**
- Modify: `docs/next.md`

- [ ] **Step 1: Add URLs to submit**

After deployment, submit these pages to Google Search Console and Bing Webmaster Tools:

```txt
https://alphaxxxx.com/geo-agency-australia
https://alphaxxxx.com/ai-search-visibility-audit
https://alphaxxxx.com/ai-search-optimization-sydney
https://alphaxxxx.com/get-found-in-ai-search-engines
https://alphaxxxx.com/chatgpt-recommendation-optimization
https://alphaxxxx.com/perplexity-visibility-optimization
https://alphaxxxx.com/google-ai-overviews-visibility
https://alphaxxxx.com/geo-pricing
https://alphaxxxx.com/geo-for-saas-companies
https://alphaxxxx.com/geo-for-local-service-businesses
https://alphaxxxx.com/geo-for-seo-agencies
https://alphaxxxx.com/geo-faq-objection-handling
```

- [ ] **Step 2: Update `docs/next.md`**

Record:
- Done: first 12 corpus pages added.
- Learned: whether build/routes/sitemap worked cleanly.
- Risks: indexing delay and remaining corpus gap.
- Next: second batch to reach 30-50 URLs.

---

## Second Batch Candidates

After the first 12 pages are deployed and submitted, add 18-30 more pages across:

- `GEO agency comparison checklist`
- `How much does GEO cost in Australia?`
- `Is GEO worth it for small businesses?`
- `Can GEO help my company get recommended by AI?`
- `Questions to ask before buying GEO services`
- `GEO case study / before-after evidence`
- `AI visibility tracking for brands`
- `AI search visibility checklist`
- `GEO vs AEO vs AI SEO`
- `AI recommendation strategy for companies`
- `Generative Engine Optimization Australia`
- `Free AI visibility audit`
- `AI visibility tool vs GEO agency`
- `Best GEO agency in Australia`
- `AI search optimization for B2B`
- `AI search optimization for ecommerce`
- `AI search optimization for professional services`
- `AI search visibility for local businesses`

---

## Self-Review

- Spec coverage: covers P0 corpus expansion, P1 HornTech intent signals, P2 platform pages, P3 buying decision pages, P4 page structure, and P5 entity signal foundations.
- Placeholder scan: no implementation placeholders are left in the first batch. Second batch is intentionally listed as candidates, not implementation scope.
- Type consistency: `IntentPage`, `IntentFamily`, and route fields are named consistently across tasks.
