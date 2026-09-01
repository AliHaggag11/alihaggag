import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Folio } from "@/components/folio";
import { Reveal } from "@/components/reveal";
import { getProject, projects, work } from "@/content/site";

export function generateStaticParams() {
  return projects.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProject(slug);
  if (!item) notFound();

  const index = projects.findIndex((entry) => entry.slug === item.slug);
  const sheetNum = String(work.length + index + 2).padStart(2, "0");
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Folio sheet={sheetNum} />

      <Reveal>
        <Link
          href="/projects"
          className="mt-8 inline-block font-mono text-[11px] tracking-[0.16em] text-caption uppercase transition-colors duration-150 hover:text-stone"
        >
          ← Projects
        </Link>

        <p className="mt-8 font-mono text-sm tracking-[0.08em] text-gold">
          {item.tagline}
        </p>

        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-commissioner)] text-[clamp(2.4rem,6vw,4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-paper">
          {item.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-stone/80">
          {item.excerpt}
        </p>
      </Reveal>

      <section className="mt-14 border-t border-copper/30 pt-8">
        <Reveal>
          <p className="max-w-2xl text-lg leading-relaxed text-stone/85">
            {item.problem}
          </p>
        </Reveal>
      </section>

      <section className="mt-12 border-t border-copper/30 pt-8">
        <Reveal>
          <ul className="max-w-2xl space-y-3 text-stone/85">
            {item.built.map((line) => (
              <li key={line} className="border-l border-copper/40 pl-4">
                {line}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="mt-12 border-t border-copper/30 pt-8">
        <Reveal>
          <p className="max-w-2xl text-stone/75 leading-relaxed">
            {item.architecture}
          </p>
        </Reveal>
      </section>

      <section className="mt-12 border-t border-copper/30 pt-8">
        <Reveal>
          <p className="font-mono text-sm tracking-[0.06em] text-stone/70">
            {item.stack.join(" · ")}
          </p>
        </Reveal>
      </section>

      {item.github && (
        <section className="mt-12 border-t border-copper/30 pt-8">
          <Reveal>
            <Link
              href={item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-[0.06em] text-gold transition-colors duration-150 hover:text-paper"
            >
              View on GitHub →
            </Link>
          </Reveal>
        </section>
      )}

      <div className="mt-20 border-t border-stone/15 pt-8">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-baseline justify-between gap-6"
        >
          <span className="font-mono text-[11px] tracking-[0.16em] text-caption uppercase">
            Next
          </span>
          <span className="font-[family-name:var(--font-commissioner)] text-2xl tracking-[-0.03em] text-paper transition-colors duration-150 group-hover:text-gold">
            {next.title} →
          </span>
        </Link>
      </div>
    </main>
  );
}
