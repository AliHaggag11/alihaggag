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
} from "@/content/site";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Reveal>
        <p className="font-mono text-[11px] tracking-[0.22em] text-copper uppercase">
          {site.location} · {site.role}
        </p>
        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-commissioner)] text-[clamp(2.4rem,7vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-paper">
          {site.headline}
        </h1>
        <p className="mt-6 font-mono text-sm tracking-[0.08em] text-gold">
          {site.thesis}
        </p>
      </Reveal>

      <div className="mt-12">
        <Folio sheet="01" />
      </div>

      <section className="mt-16 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
            About
          </h2>
        </Reveal>
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-stone/90">
          <Reveal>
            <p className="text-paper">{about.lead}</p>
          </Reveal>
          {about.body.map((paragraph) => (
            <Reveal key={paragraph.slice(0, 24)}>
              <p>{paragraph}</p>
            </Reveal>
          ))}
          <Reveal>
            <p className="text-caption">{about.direction}</p>
          </Reveal>
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
            Experience
          </h2>
        </Reveal>
        <ol className="divide-y divide-stone/15 border-y border-stone/15">
          {experience.map((job) => (
            <li key={job.slug} className="grid gap-3 py-6 sm:grid-cols-[140px_1fr]">
              <p className="font-mono text-[11px] tracking-[0.12em] text-caption uppercase">
                {job.dates}
              </p>
              <div>
                <p className="text-lg text-paper">
                  {job.role}
                  {job.current ? (
                    <span className="ml-3 font-mono text-[10px] tracking-[0.16em] text-copper uppercase">
                      Current
                    </span>
                  ) : null}
                </p>
                <p className="mt-1 text-stone/80">
                  {job.company} · {job.type}
                  {job.place ? ` · ${job.place}` : ""}
                </p>
                <p className="mt-3 max-w-2xl text-stone/80">{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
            Selected work
          </h2>
        </Reveal>
        <div>
          <ul>
            {work.map((item, index) => (
              <li key={item.slug}>
                <Link
                  href={`/work/${item.slug}`}
                  className="group grid gap-2 border-b border-stone/15 py-6 first:border-t sm:grid-cols-[auto_1fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="font-mono text-[11px] text-caption">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-commissioner)] text-2xl tracking-[-0.03em] text-paper transition-colors group-hover:text-gold">
                      {item.title}
                    </span>
                    <span className="mt-2 block max-w-xl text-stone/75">
                      {item.excerpt}
                    </span>
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.12em] text-caption uppercase">
                    {item.years}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/work"
            className="mt-6 inline-block font-mono text-[11px] tracking-[0.16em] text-gold uppercase hover:text-paper"
          >
            All work →
          </Link>
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
            Stack
          </h2>
        </Reveal>
        <div>
          <p className="font-mono text-sm tracking-[0.06em] text-gold">
            {stack.featured.join(" · ")}
          </p>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            {stack.groups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-[11px] tracking-[0.16em] text-caption uppercase">
                  {group.label}
                </h3>
                <ul className="mt-3 space-y-1.5 text-stone/85">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
            Licenses
          </h2>
        </Reveal>
        <ul className="space-y-4">
          {certifications.map((cert) => (
            <li key={cert.title}>
              <p className="text-paper">{cert.title}</p>
              <p className="font-mono text-[11px] tracking-[0.12em] text-caption uppercase">
                {cert.issuer} · {cert.issued}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16">
        <Reveal>
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
            CV
          </h2>
        </Reveal>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm tracking-[0.08em]">
          <Link
            href="/cv"
            className="text-gold transition-colors duration-150 hover:text-paper"
          >
            Preview
          </Link>
          <Link
            href="/Ali-Haggag-CV.pdf"
            download
            className="text-stone/70 transition-colors duration-150 hover:text-paper"
          >
            Download
          </Link>
        </div>
      </section>

      <section
        id="contact"
        className="mt-20 scroll-mt-24 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr] lg:gap-16"
      >
        <Reveal>
          <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
            Contact
          </h2>
        </Reveal>
        <div>
          <p className="max-w-xl text-lg text-paper">
            Cairo. Open to conversations about fintech platforms, backend architecture, and enterprise AI.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm tracking-[0.08em]">
            <Link href={`mailto:${site.email}`} className="text-gold hover:text-paper">
              {site.email}
            </Link>
            <Link href={site.linkedin} className="hover:text-paper">
              LinkedIn
            </Link>
            <Link href={site.github} className="hover:text-paper">
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
