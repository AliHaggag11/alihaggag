import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  about,
  certifications,
  experience,
  projects,
  site,
  stack,
  work,
} from "@/content/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.22em] text-caption uppercase">
          {site.location} · {site.role}
        </p>
      </Reveal>
      <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-commissioner)] text-[clamp(2.4rem,7vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-paper">
        {site.headline}
      </h1>
      <p className="mt-6 font-mono text-sm tracking-[0.08em] text-gold">
        {site.thesis}
      </p>

      {/* About — the long read */}
      <section className="mt-20 border-t border-stone/15 pt-10">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          About
        </h2>
        <Reveal>
          <div className="mt-6 max-w-2xl space-y-5 text-lg leading-relaxed text-stone/90">
            <p className="text-paper">{about.lead}</p>
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="text-caption">{about.direction}</p>
          </div>
        </Reveal>
      </section>

      {/* Experience — dates as spine */}
      <section className="mt-16 border-t border-stone/15 pt-10">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Experience
        </h2>
        <Reveal>
          <ol className="mt-6 space-y-6">
            {experience.map((job) => (
              <li key={job.slug} className="grid gap-1 sm:grid-cols-[140px_1fr]">
                <p className="font-mono text-[11px] tracking-[0.08em] text-caption">
                  {job.dates}
                </p>
                <div>
                  <p className="text-paper">
                    {job.role}
                    {job.current ? (
                      <span className="ml-2 font-mono text-[10px] tracking-[0.12em] text-copper">
                        Current
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-0.5 text-sm text-stone/70">
                    {job.company} · {job.type}
                    {job.place ? ` · ${job.place}` : ""}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Stack — featured line, quiet groups */}
      <section className="mt-16 border-t border-stone/15 pt-10">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Stack
        </h2>
        <Reveal>
          <div className="mt-4">
            <p className="font-mono text-sm tracking-[0.06em] text-gold">
              {stack.featured.join(" · ")}
            </p>
            <p className="mt-4 text-sm text-stone/60">
              {stack.groups.map((group) => group.items.join(", ")).join(" · ")}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Work — the ledger (title, client, years) */}
      <section className="mt-20 border-t border-copper/30 pt-10">
        <h2 className="font-mono text-[11px] tracking-[0.12em] text-caption uppercase">
          Work
        </h2>
        <Reveal>
          <ul className="mt-4 divide-y divide-stone/10">
            {work.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-3 transition-colors duration-150"
                >
                  <span className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper group-hover:text-gold">
                    {item.title}
                  </span>
                  <span className="flex items-baseline gap-4 font-mono text-[11px] text-caption">
                    <span>{item.client}</span>
                    <span>{item.years}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Projects — products (name + tagline, no years) */}
      <section className="mt-12 border-t border-copper/30 pt-10">
        <h2 className="font-mono text-[11px] tracking-[0.12em] text-caption uppercase">
          Projects
        </h2>
        <Reveal>
          <ul className="mt-4 space-y-2">
            {projects.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/projects/${item.slug}`}
                  className="group block py-2 transition-colors duration-150"
                >
                  <span className="font-[family-name:var(--font-commissioner)] text-paper group-hover:text-gold">
                    {item.title}
                  </span>
                  <span className="ml-3 text-sm text-stone/60">
                    {item.tagline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Licenses — fine print, not a rail block */}
      <section className="mt-16 border-t border-stone/15 pt-8">
        <Reveal>
          <p className="text-xs text-stone/50">
            {certifications.map((cert, i) => (
              <span key={cert.title}>
                {cert.title} ({cert.issuer}, {cert.issued})
                {i < certifications.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
        </Reveal>
      </section>

      {/* Contact — last */}
      <section
        id="contact"
        className="mt-16 scroll-mt-24 border-t border-stone/15 pt-10"
      >
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Contact
        </h2>
        <Reveal>
          <div className="mt-4">
            <p className="max-w-xl text-lg text-paper">
              Cairo. Open to conversations about fintech platforms, backend architecture, and enterprise AI.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm tracking-[0.08em]">
              <Link href={`mailto:${site.email}`} className="text-gold transition-colors duration-150 hover:text-paper">
                {site.email}
              </Link>
              <Link href={site.linkedin} className="transition-colors duration-150 hover:text-paper">
                LinkedIn
              </Link>
              <Link href={site.github} className="transition-colors duration-150 hover:text-paper">
                GitHub
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
