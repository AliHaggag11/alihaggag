import Link from "next/link";
import { Reveal } from "@/components/reveal";
import {
  about,
  certifications,
  experience,
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

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          About
        </h2>
        <Reveal>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-stone/90">
            <p className="text-paper">{about.lead}</p>
            {about.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="text-caption">{about.direction}</p>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Experience
        </h2>
        <Reveal>
          <ol className="space-y-8">
            {experience.map((job) => (
              <li key={job.slug} className="grid gap-2 sm:grid-cols-[140px_1fr]">
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
                  <p className="mt-0.5 text-stone/80">
                    {job.company} · {job.type}
                    {job.place ? ` · ${job.place}` : ""}
                  </p>
                  <p className="mt-2 max-w-2xl text-sm text-stone/70">{job.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Selected work
        </h2>
        <Reveal>
          <ul className="divide-y divide-stone/15 border-y border-stone/15">
            {work.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className="group flex items-baseline justify-between gap-6 py-4 transition-colors duration-150"
                >
                  <span className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper group-hover:text-gold">
                    {item.title}
                  </span>
                  <span className="flex items-baseline gap-4 font-mono text-[11px] text-caption">
                    <span>{item.client}</span>
                    <span className="tracking-[0.08em]">{item.years}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Stack
        </h2>
        <Reveal>
          <div>
            <p className="font-mono text-sm tracking-[0.06em] text-gold">
              {stack.featured.join(" · ")}
            </p>
            <div className="mt-6 space-y-4 text-sm text-stone/70">
              {stack.groups.map((group) => (
                <p key={group.label}>
                  <span className="text-caption">{group.label}:</span>{" "}
                  {group.items.join(", ")}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Licenses
        </h2>
        <Reveal>
          <ul className="space-y-3 text-sm text-stone/70">
            {certifications.map((cert) => (
              <li key={cert.title}>
                {cert.title}{" "}
                <span className="font-mono text-[10px] text-caption">
                  {cert.issuer} · {cert.issued}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section
        id="contact"
        className="mt-20 scroll-mt-24 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16"
      >
        <h2 className="font-[family-name:var(--font-commissioner)] text-lg tracking-[-0.02em] text-paper">
          Contact
        </h2>
        <Reveal>
          <div>
            <p className="max-w-xl text-lg text-paper">
              Cairo. Open to conversations about fintech platforms, backend architecture, and enterprise AI.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm tracking-[0.08em]">
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
