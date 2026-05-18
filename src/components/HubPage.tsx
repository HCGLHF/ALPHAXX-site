import Link from "next/link";
import { PageShell, SectionHeading } from "@/components/PageChrome";
import type { HubPageContent } from "@/lib/hub-pages";

export function HubPage({ page }: { page: HubPageContent }) {
  return (
    <PageShell>
      <article className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
            {page.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-zinc-950 md:text-6xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            {page.shortAnswer}
          </p>
          <div className="mt-8 max-w-4xl rounded-lg border border-teal-200 bg-teal-50 p-6">
            <h2 className="text-xl font-semibold text-zinc-950">Definition</h2>
            <p className="mt-3 text-base leading-7 text-zinc-700">
              {page.definition}
            </p>
          </div>
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="Recommended crawl path"
          title="How this hub organizes the ALPHAXXXX evidence set"
          description="These steps tell search crawlers, AI crawlers, and buyers how to move through this topic cluster."
        />
        <ol className="mt-8 grid gap-4 md:grid-cols-3">
          {page.recommendedPath.map((step, index) => (
            <li key={step} className="rounded-lg border border-zinc-200 bg-white p-6">
              <span className="text-sm font-semibold text-teal-700">
                Step {index + 1}
              </span>
              <p className="mt-3 text-sm leading-6 text-zinc-700">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Core pages"
            title="Primary pages in this topic cluster"
            description="Each link is a server-rendered page with its own H1, short answer, FAQ, metadata, canonical URL, and structured data."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {page.primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-zinc-200 bg-[#f7f6f1] p-5 transition-colors hover:border-teal-700"
              >
                <h2 className="text-lg font-semibold text-zinc-950">{link.label}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="space-y-12">
          {page.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
                {section.heading}
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-700">
                {section.body}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {section.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg border border-zinc-200 bg-white p-5 text-sm transition-colors hover:border-teal-700"
                  >
                    <span className="font-semibold text-zinc-950">{link.label}</span>
                    <span className="mt-2 block leading-6 text-zinc-600">
                      {link.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-zinc-950 py-16 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Direct answers for hub-level entity understanding"
            description="These visible answers are mirrored in FAQPage structured data."
            invert
          />
          <div className="mt-10 grid gap-4">
            {page.faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
