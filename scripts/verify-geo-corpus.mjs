import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "src/lib/intent-pages.ts",
  "src/lib/hub-pages.ts",
  "src/components/HubPage.tsx",
  "src/components/IntentPage.tsx",
  "src/app/(intent)/[slug]/page.tsx",
];

const requiredSlugs = [
  "geo-agency-australia",
  "ai-search-visibility-audit",
  "ai-search-optimization-sydney",
  "get-found-in-ai-search-engines",
  "chatgpt-recommendation-optimization",
  "perplexity-visibility-optimization",
  "google-ai-overviews-visibility",
  "geo-pricing",
  "geo-for-saas-companies",
  "geo-for-local-service-businesses",
  "geo-for-seo-agencies",
  "geo-faq-objection-handling",
  "how-to-get-recommended-by-chatgpt",
  "how-to-appear-in-perplexity-answers",
  "how-to-get-cited-in-google-ai-overviews",
  "ai-visibility-tracking-for-brands",
  "ai-search-visibility-checklist",
  "geo-vs-aeo-vs-ai-seo",
  "how-much-does-geo-cost-in-australia",
  "is-geo-worth-it-for-small-businesses",
  "questions-to-ask-before-hiring-a-geo-agency",
  "geo-agency-comparison-checklist",
  "ai-search-visibility-for-b2b-companies",
  "ai-search-visibility-for-professional-services",
];

const requiredHubPaths = [
  "/platforms",
  "/industries",
  "/buyers",
  "/locations",
  "/resources",
];

const missingFiles = requiredFiles.filter((file) => !existsSync(join(root, file)));

if (missingFiles.length > 0) {
  throw new Error(`Missing files: ${missingFiles.join(", ")}`);
}

const intentSource = readFileSync(join(root, "src/lib/intent-pages.ts"), "utf8");
const missingSlugs = requiredSlugs.filter((slug) => !intentSource.includes(`slug: "${slug}"`));

if (missingSlugs.length > 0) {
  throw new Error(`Missing intent page slugs: ${missingSlugs.join(", ")}`);
}

const siteSource = readFileSync(join(root, "src/lib/site.ts"), "utf8");
const hubSource = readFileSync(join(root, "src/lib/hub-pages.ts"), "utf8");
const routeSource = readFileSync(join(root, "src/app/(intent)/[slug]/page.tsx"), "utf8");
const llmsSource = readFileSync(join(root, "src/app/llms.txt/route.ts"), "utf8");

if (!siteSource.includes("intentPageRoutes")) {
  throw new Error("siteRoutes is not connected to intentPageRoutes");
}

const missingHubPaths = requiredHubPaths.filter((path) => !siteSource.includes(`path: "${path}"`));

if (missingHubPaths.length > 0) {
  throw new Error(`Missing hub paths in site routes: ${missingHubPaths.join(", ")}`);
}

const missingHubContent = requiredHubPaths.filter((path) => !hubSource.includes(`path: "${path}"`));

if (missingHubContent.length > 0) {
  throw new Error(`Missing hub content paths: ${missingHubContent.join(", ")}`);
}

if (!routeSource.includes("generateStaticParams")) {
  throw new Error("Intent route is missing generateStaticParams");
}

if (!routeSource.includes("FAQPage")) {
  throw new Error("Intent route is missing FAQPage JSON-LD");
}

if (!llmsSource.includes("High-intent GEO pages")) {
  throw new Error("llms.txt is missing the high-intent GEO pages section");
}

console.log(`Verified ${requiredSlugs.length} GEO intent pages and ${requiredHubPaths.length} hub pages.`);
