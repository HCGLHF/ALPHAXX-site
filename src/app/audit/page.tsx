import { StructuredData } from "@/components/StructuredData";
import { PageShell, SectionHeading, StatGrid } from "@/components/PageChrome";
import {
  aiSearchServiceSchema,
  breadcrumbSchema,
  getRoute,
  pageMetadata,
} from "@/lib/site";

const route = getRoute("/audit");

export const metadata = pageMetadata(route);

const auditChecks = [
  {
    title: "Crawler access",
    body: "Confirm that robots.txt, sitemap.xml, redirects, canonical tags, server rendering, and CDN rules allow search and AI crawlers to reach important pages.",
  },
  {
    title: "Entity clarity",
    body: "Review whether the page consistently explains the brand, service category, target market, locations served, and topics ALPHAXXXX should be associated with.",
  },
  {
    title: "Citation readiness",
    body: "Identify pages that make claims without direct answers, supporting evidence, dates, sources, authorship, or schema that reinforces the visible content.",
  },
  {
    title: "Structured data",
    body: "Check Organization, WebSite, Service, FAQPage, Article, and BreadcrumbList markup for accuracy, validity, and alignment with visible page content.",
  },
  {
    title: "Answer extraction",
    body: "Evaluate whether AI systems can lift concise, accurate answers from headings, paragraphs, FAQs, and comparison sections without guessing context.",
  },
  {
    title: "Internal knowledge paths",
    body: "Map whether core pages link to supporting guides, FAQs, service pages, and evidence pages so crawlers can understand topical depth.",
  },
];

const stats = [
  {
    label: "Audit areas",
    value: "6",
    detail: "Technical access, entity signals, content, schema, evidence, and links.",
  },
  {
    label: "Crawler groups",
    value: "10+",
    detail: "Traditional search crawlers plus major AI search and user agents.",
  },
  {
    label: "Output",
    value: "Roadmap",
    detail: "Prioritized fixes for pages that should become answer-ready.",
  },
] as const;

export default function AuditPage() {
  return (
    <PageShell>
      <StructuredData
        data={[
          aiSearchServiceSchema,
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "GEO Audit", path: "/audit" },
          ]),
        ]}
      />
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            GEO Audit
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
            Find out whether AI search systems can read and cite your brand.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            The ALPHAXXXX GEO Audit reviews the crawl, content, entity, and
            structured data signals that influence whether your pages can be
            retrieved, cited, and represented inside AI-generated answers.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <StatGrid items={stats} />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Audit checklist"
            title="What the audit examines"
            description="The audit prioritizes issues that stop crawlers and answer engines from confidently retrieving, summarizing, or citing the right page."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {auditChecks.map((check) => (
              <article key={check.title} className="rounded-lg border border-zinc-200 p-6">
                <h2 className="text-xl font-semibold text-zinc-950">{check.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{check.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
          Recommended first fixes
        </h2>
        <ol className="mt-8 grid gap-4">
          {[
            "Unify brand naming across visible copy, metadata, schema, and internal links.",
            "Make every important route discoverable through sitemap.xml and crawlable links.",
            "Add page-specific schema that describes the visible content on that page.",
            "Rewrite thin guides into direct-answer resources with dates, sources, and internal links.",
            "Check that AI crawler user agents are allowed by robots.txt and not blocked by CDN or WAF rules.",
          ].map((item, index) => (
            <li key={item} className="rounded-lg border border-zinc-200 bg-white p-5">
              <span className="font-mono text-sm text-teal-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-base leading-7 text-zinc-700">{item}</p>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
