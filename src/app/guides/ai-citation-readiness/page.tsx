import { StructuredData } from "@/components/StructuredData";
import { EvidenceList, PageShell } from "@/components/PageChrome";
import { externalSources } from "@/lib/content";
import {
  articleSchema,
  breadcrumbSchema,
  CONTENT_PUBLISHED_DATE,
  CONTENT_UPDATED_DATE,
  getRoute,
  pageMetadata,
} from "@/lib/site";

const route = getRoute("/guides/ai-citation-readiness");

export const metadata = pageMetadata(route);

const readinessSteps = [
  {
    title: "State the answer early",
    body: "Put the direct answer near the top of the section before expanding with nuance, examples, or caveats.",
  },
  {
    title: "Make the entity explicit",
    body: "Name the brand, service, location, author, and topic in visible copy and structured data.",
  },
  {
    title: "Support claims visibly",
    body: "Add dates, sources, examples, definitions, data points, or limitations near claims that a model may quote.",
  },
  {
    title: "Use matching schema",
    body: "Add Article, FAQPage, Service, Organization, and BreadcrumbList schema only when it reflects visible page content.",
  },
  {
    title: "Build internal context",
    body: "Link short answer pages to deeper supporting guides so crawlers can follow the full knowledge path.",
  },
];

export default function CitationReadinessPage() {
  return (
    <PageShell>
      <StructuredData
        data={[
          articleSchema({
            path: route.path,
            headline: route.title,
            description: route.description,
            datePublished: CONTENT_PUBLISHED_DATE,
            dateModified: CONTENT_UPDATED_DATE,
          }),
          breadcrumbSchema([
            { name: "Home", path: "" },
            { name: "Guides", path: "/guides/what-is-geo" },
            {
              name: "AI Citation Readiness",
              path: "/guides/ai-citation-readiness",
            },
          ]),
        ]}
      />
      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            Guide
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight tracking-tight text-zinc-950">
            AI citation readiness
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            AI citation readiness is the degree to which a page gives answer
            engines enough visible, structured, and trustworthy information to
            cite it accurately.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            Published by ALPHAXXXX on {CONTENT_PUBLISHED_DATE}. Updated{" "}
            {CONTENT_UPDATED_DATE}.
          </p>

          <div className="mt-12 space-y-10 text-base leading-8 text-zinc-700">
            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                A citation-ready page reduces ambiguity
              </h2>
              <p className="mt-4">
                AI systems are more likely to cite pages that answer a question
                directly and make the source of the answer clear. If a page
                buries the answer in abstract copy, changes brand names between
                sections, or makes unsupported claims, the system has to infer
                too much.
              </p>
              <p className="mt-4">
                Citation readiness is not about forcing a quote. It is about
                making the page safer to quote. The page should help the model
                understand what was said, who said it, when it was updated, and
                why the claim is credible.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Five steps to improve citation readiness
              </h2>
              <div className="mt-6 grid gap-4">
                {readinessSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-lg border border-zinc-200 bg-[#f7f6f1] p-5"
                  >
                    <h3 className="text-xl font-semibold text-zinc-950">
                      <span className="mr-3 font-mono text-sm text-teal-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-700">
                      {step.body}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                What to avoid
              </h2>
              <p className="mt-4">
                Avoid marking up content that users cannot see. Avoid vague
                superlatives that have no supporting evidence. Avoid publishing
                FAQ schema for questions that are not actually answered on the
                page. Avoid hiding important definitions in images, scripts, or
                UI states that crawlers may not evaluate.
              </p>
              <p className="mt-4">
                The safest pattern is simple: put useful answers in server
                rendered HTML, make the structure obvious, and use JSON-LD to
                describe the same facts that a reader can verify on the page.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                Minimum page checklist
              </h2>
              <ul className="mt-4 grid gap-3">
                {[
                  "One clear H1 and descriptive H2 sections.",
                  "A direct answer within the first two paragraphs.",
                  "Visible author or brand attribution.",
                  "Published and updated dates for guide content.",
                  "Schema that matches the visible page.",
                  "Internal links to supporting pages.",
                  "External references for standards, crawler policies, or technical claims.",
                ].map((item) => (
                  <li key={item} className="rounded-lg border border-zinc-200 p-4">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <EvidenceList items={externalSources} />
        </div>
      </article>
    </PageShell>
  );
}
