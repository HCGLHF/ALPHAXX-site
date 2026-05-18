import Link from "next/link";
import { PageShell, SectionHeading } from "@/components/PageChrome";
import type { IntentPage as IntentPageContent } from "@/lib/intent-pages";

const familyLabels: Record<IntentPageContent["family"], string> = {
  audit: "AI visibility audit",
  industry: "Industry GEO",
  location: "Australia GEO",
  objection: "Buyer guidance",
  platform: "Platform visibility",
  pricing: "GEO pricing",
};

export function IntentPage({ page }: { page: IntentPageContent }) {
  return (
    <PageShell>
      <article className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            {familyLabels[page.family]}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
            {page.h1}
          </h1>
          <div className="mt-8 max-w-4xl rounded-lg border border-teal-200 bg-teal-50 p-6">
            <h2 className="text-lg font-semibold text-zinc-950">Short answer</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              {page.shortAnswer}
            </p>
          </div>
        </div>
      </article>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Who this is for
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-zinc-700">
            {page.audience.map((item) => (
              <li key={item} className="rounded-md bg-[#f7f6f1] p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 bg-white p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            Expected outcomes
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-zinc-700">
            {page.outcomes.map((item) => (
              <li key={item} className="rounded-md bg-[#f7f6f1] p-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Deliverables"
            title="What the page or engagement should make explicit"
            description="These details help AI search systems understand what ALPHAXXXX offers, who it serves, and which evidence can be cited."
          />
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {page.deliverables.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-zinc-200 bg-[#f7f6f1] p-5 text-sm leading-6 text-zinc-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-10 text-base leading-8 text-zinc-700">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                {section.heading}
              </h2>
              <p className="mt-4">{section.body}</p>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Direct answers for AI retrieval and buyer evaluation"
            description="These answers are visible in the HTML and mirrored in page-level FAQPage structured data."
            invert
          />
          <div className="mt-10 grid gap-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <h2 className="text-xl font-semibold text-white">
                  {faq.question}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Related pages"
          title="Internal paths for crawlers and buyers"
          description="These links connect the current intent to supporting GEO, platform, audit, and pricing evidence."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {page.internalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-zinc-200 bg-white p-5 text-sm font-medium text-zinc-800 transition-colors hover:border-teal-700 hover:text-teal-800"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
