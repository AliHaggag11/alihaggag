import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Link
        href="/projects"
        className="font-mono text-[11px] tracking-[0.16em] text-caption uppercase hover:text-stone"
      >
        ← Projects
      </Link>

      <h1 className="mt-10 max-w-3xl font-[family-name:var(--font-commissioner)] text-4xl tracking-[-0.03em] text-paper sm:text-5xl">
        {item.title}
      </h1>
      <p className="mt-2 text-lg text-stone/70">
        {item.tagline}
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stone/90">
        {item.problem}
      </p>

      <ul className="mt-8 max-w-2xl space-y-2 text-stone/80">
        {item.built.map((line) => (
          <li key={line} className="leading-relaxed">
            {line}
          </li>
        ))}
      </ul>

      <div className="mt-10 max-w-2xl border-t border-copper/40 pt-4">
        <p className="font-mono text-sm leading-relaxed text-stone/70">
          {item.architecture}
        </p>
      </div>

      <p className="mt-8 font-mono text-sm text-caption">
        {item.stack.join(" · ")}
      </p>

      {item.github && (
        <p className="mt-4">
          <Link
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-gold hover:text-paper"
          >
            GitHub →
          </Link>
        </p>
      )}

      <div className="mt-16 border-t border-stone/15 pt-6">
        <Link
          href={`/projects/${next.slug}`}
          className="group flex items-baseline justify-between gap-6"
        >
          <span className="font-mono text-[11px] tracking-[0.12em] text-caption">
            Next
          </span>
          <span className="font-[family-name:var(--font-commissioner)] text-xl tracking-[-0.02em] text-paper group-hover:text-gold">
            {next.title} →
          </span>
        </Link>
      </div>
    </main>
  );
}
