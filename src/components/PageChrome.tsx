import Link from "next/link";
import { SITE_NAME, absoluteUrl, primaryNavLinks } from "@/lib/site";

const navLinks = primaryNavLinks.map((link) => ({
  ...link,
  href: link.href || "/",
}));

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
      >
        <Link href="/" className="flex items-center gap-3 font-semibold text-zinc-950">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-xs font-bold text-white">
            AX
          </span>
          <span>{SITE_NAME}</span>
        </Link>
        <ul className="hidden items-center gap-7 text-sm text-zinc-600 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="transition-colors hover:text-zinc-950" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/audit"
          className="rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700"
        >
          Start Audit
        </Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <div className="flex items-center gap-3 font-semibold text-zinc-950">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-zinc-950 text-xs font-bold text-white">
              AX
            </span>
            {SITE_NAME}
          </div>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
            Generative Engine Optimization infrastructure for businesses that
            want AI search engines, LLMs, and RAG systems to understand,
            retrieve, cite, and recommend their content.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid gap-2 text-sm text-zinc-600 sm:grid-cols-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-zinc-950" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-zinc-950" href="/llms.txt">
                llms.txt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="border-t border-zinc-100 px-6 py-5 text-center text-xs text-zinc-500">
        Copyright {new Date().getFullYear()} {SITE_NAME}. Canonical site:{" "}
        {absoluteUrl("")}
      </p>
    </footer>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f6f1] text-zinc-950 antialiased">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.18em] ${
          invert ? "text-teal-300" : "text-teal-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight md:text-4xl ${
          invert ? "text-white" : "text-zinc-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-7 ${
            invert ? "text-zinc-300" : "text-zinc-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function EvidenceList({
  items,
}: {
  items: readonly { label: string; href: string }[];
}) {
  return (
    <section aria-labelledby="sources-heading" className="mt-12 border-t border-zinc-200 pt-8">
      <h2 id="sources-heading" className="text-xl font-semibold text-zinc-950">
        Sources and references
      </h2>
      <ul className="mt-4 grid gap-3 text-sm text-zinc-700">
        {items.map((item) => (
          <li key={item.href}>
            <a
              className="font-medium text-teal-800 underline-offset-4 hover:underline"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function StatGrid({
  items,
}: {
  items: readonly { label: string; value: string; detail: string }[];
}) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-lg border border-zinc-200 bg-zinc-200 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="bg-white p-5">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            {item.label}
          </dt>
          <dd className="mt-3 text-3xl font-semibold text-zinc-950">{item.value}</dd>
          <dd className="mt-2 text-sm leading-6 text-zinc-600">{item.detail}</dd>
        </div>
      ))}
    </dl>
  );
}
