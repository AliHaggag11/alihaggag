import Link from "next/link";
import { site, work, projects } from "@/content/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <header className="border-b border-rule pb-10">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-stone">
          {site.headline}
        </p>
        <p className="mt-3 font-mono text-sm text-caption">
          {site.thesis}
        </p>
      </header>

      <section className="mt-12">
        <h2 className="font-mono text-xs text-caption">Work</h2>
        <ol className="mt-4 divide-y divide-rule border-y border-rule">
          {work.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/work/${item.slug}`}
                className="group flex items-baseline justify-between gap-4 py-4"
              >
                <span className="flex flex-col gap-1">
                  <span className="font-display text-lg text-paper transition-colors duration-150 group-hover:text-gold">
                    {item.title}
                  </span>
                  <span className="text-sm text-stone">{item.client}</span>
                </span>
                <span className="shrink-0 font-mono text-xs text-caption">
                  {item.years}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-mono text-xs text-caption">Projects</h2>
        <ol className="mt-4 divide-y divide-rule border-y border-rule">
          {projects.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/projects/${item.slug}`}
                className="group block py-4"
              >
                <span className="font-display text-lg text-paper transition-colors duration-150 group-hover:text-gold">
                  {item.title}
                </span>
                <span className="mt-1 block text-sm text-stone">
                  {item.tagline}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <footer
        id="contact"
        className="mt-14 scroll-mt-24 border-t border-rule pt-8"
      >
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-sm">
          <Link
            href={`mailto:${site.email}`}
            className="text-stone transition-colors duration-150 hover:text-gold"
          >
            {site.email}
          </Link>
          <Link
            href={site.linkedin}
            className="text-stone transition-colors duration-150 hover:text-gold"
          >
            LinkedIn
          </Link>
          <Link
            href={site.github}
            className="text-stone transition-colors duration-150 hover:text-gold"
          >
            GitHub
          </Link>
        </div>
      </footer>
    </main>
  );
}
