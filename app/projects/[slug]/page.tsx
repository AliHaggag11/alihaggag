import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TitleBlock } from "@/components/title-block";
import { getProject, projects } from "@/content/site";

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
    description: `${item.tagline} ${item.excerpt}`,
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
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Link
        href="/projects"
        className="font-mono text-[11px] tracking-[0.16em] text-caption uppercase hover:text-stone"
      >
        ← Projects
      </Link>
      <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-copper uppercase">
        {item.tagline}
      </p>
      <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-commissioner)] text-5xl tracking-[-0.04em] text-paper sm:text-6xl">
        {item.title}
      </h1>
      <div className="mt-10">
        <TitleBlock
          sheet={`03 / ${String(index + 1).padStart(2, "0")}`}
          project={item.title}
        />
      </div>
      <section className="mt-14 grid gap-10 lg:grid-cols-[200px_1fr]">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
          What it does
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-stone/90">
          {item.excerpt}
        </p>
      </section>
      <section className="mt-14 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr]">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
          Stack
        </h2>
        <p className="font-mono text-sm tracking-[0.06em] text-gold">
          {item.stack.join(" · ")}
        </p>
      </section>
      <section className="mt-14 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr]">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
          Links
        </h2>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm tracking-[0.08em]">
          <Link
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-paper"
          >
            GitHub →
          </Link>
          {item.liveUrl ? (
            <Link
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-paper"
            >
              Live demo →
            </Link>
          ) : null}
        </div>
      </section>
      <div className="mt-20 border-t border-stone/15 pt-8">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-baseline justify-between gap-6"
        >
          <span className="font-mono text-[11px] tracking-[0.16em] text-caption uppercase">
            Next
          </span>
          <span className="font-[family-name:var(--font-commissioner)] text-2xl tracking-[-0.03em] text-paper group-hover:text-gold">
            {next.title} →
          </span>
        </Link>
      </div>
    </main>
  );
}
