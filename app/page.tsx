import Link from "next/link";
import { Folio } from "@/components/folio";
import { Reveal } from "@/components/reveal";
import {
  about,
  certifications,
  experience,
  site,
  stack,
  work,
  projects,
} from "@/content/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Folio sheet="01" />

      <Reveal>
        <h1 className="mt-10 max-w-4xl font-[family-name:var(--font-commissioner)] text-[clamp(2.4rem,7vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-paper">
          {site.headline}
        </h1>
        <p className="mt-6 font-mono text-sm tracking-[0.08em] text-gold">
          {site.thesis}
        </p>
      </Reveal>

      <section className="mt-20 border-t border-stone/15 pt-10">
        <Reveal>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone/15 font-mono text-[10px] tracking-[0.16em] text-caption uppercase">
                <th className="pb-3 pr-4 font-normal">Title</th>
                <th className="hidden pb-3 pr-4 font-normal sm:table-cell">Client</th>
                <th className="pb-3 text-right font-normal">Years</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone/10">
              {work.map((item) => (
                <tr key={item.slug} className="group">
                  <td className="py-4 pr-4">
                    <Link
                      href={`/work/${item.slug}`}
                      className="font-[family-name:var(--font-commissioner)] text-xl tracking-[-0.02em] text-paper transition-colors duration-150 group-hover:text-gold sm:text-2xl"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-1 max-w-lg text-sm text-stone/70 sm:hidden">
                      {item.client}
                    </p>
                    <p className="mt-1 max-w-lg text-sm text-stone/60">
                      {item.excerpt}
                    </p>
                  </td>
                  <td className="hidden py-4 pr-4 align-top text-stone/80 sm:table-cell">
                    {item.client}
                  </td>
                  <td className="py-4 align-top text-right font-mono text-[11px] tracking-[0.12em] text-caption">
                    {item.years}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      <section className="mt-20 border-t border-stone/15 pt-10">
        <Reveal>
          <ul className="space-y-8">
            {projects.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/projects/${item.slug}`}
                  className="group block"
                >
                  <span className="font-[family-name:var(--font-commissioner)] text-2xl tracking-[-0.02em] text-paper transition-colors duration-150 group-hover:text-gold sm:text-3xl">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-lg text-stone/70">
                    {item.tagline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mt-20 border-t border-stone/15 pt-10">
        <Reveal>
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-stone/90">
            <p className="text-paper">{about.lead}</p>
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="text-caption">{about.direction}</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 border-t border-stone/15 pt-10">
        <Reveal>
          <ol className="divide-y divide-stone/10">
            {experience.map((job) => (
              <li
                key={job.slug}
                className="grid gap-2 py-5 sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <p className="font-mono text-[11px] tracking-[0.12em] text-caption">
                  {job.dates}
                </p>
                <div>
                  <p className="text-paper">
                    {job.role}
                    {job.current && (
                      <span className="ml-3 font-mono text-[10px] tracking-[0.16em] text-copper uppercase">
                        Current
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-stone/70">
                    {job.company} · {job.type}
                    {job.place ? ` · ${job.place}` : ""}
                  </p>
                  <p className="mt-2 max-w-2xl text-stone/70">{job.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="mt-20 border-t border-stone/15 pt-10">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.08em] text-gold">
            {stack.featured.join(" · ")}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-2 font-mono text-[11px] tracking-[0.08em] text-stone/70">
            {stack.groups.map((group, i) => (
              <span key={group.label}>
                {group.label}: {group.items.join(", ")}
                {i < stack.groups.length - 1 && (
                  <span className="mx-2 text-stone/30">·</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="mt-16 border-t border-stone/15 pt-8">
        <Reveal>
          <ul className="space-y-3 font-mono text-[11px] tracking-[0.08em] text-caption">
            {certifications.map((cert) => (
              <li key={cert.title}>
                {cert.title} — {cert.issuer}, {cert.issued}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mt-16 border-t border-copper/30 pt-8">
        <Reveal>
          <div className="grid grid-cols-2 border border-stone/20 font-mono text-[11px] tracking-[0.16em] uppercase">
            <Link
              href="/cv"
              className="border-r border-stone/15 px-4 py-4 text-center text-stone transition-colors duration-150 hover:text-gold focus:text-gold"
            >
              Preview
            </Link>
            <Link
              href="/Ali-Haggag-CV.pdf"
              download
              className="px-4 py-4 text-center text-stone transition-colors duration-150 hover:text-gold focus:text-gold"
            >
              Download
            </Link>
          </div>
        </Reveal>
      </section>

      <section
        id="contact"
        className="mt-16 scroll-mt-24 border-t border-stone/15 pt-8"
      >
        <Reveal>
          <p className="max-w-xl text-lg text-paper">
            Cairo. Open to conversations about fintech platforms, backend architecture, and enterprise AI.
          </p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-8 gap-y-3 font-mono text-sm tracking-[0.08em]">
            <Link
              href={`mailto:${site.email}`}
              className="text-gold transition-colors duration-150 hover:text-paper"
            >
              {site.email}
            </Link>
            <Link
              href={site.linkedin}
              className="text-stone/70 transition-colors duration-150 hover:text-stone"
            >
              LinkedIn
            </Link>
            <Link
              href={site.github}
              className="text-stone/70 transition-colors duration-150 hover:text-stone"
            >
              GitHub
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
