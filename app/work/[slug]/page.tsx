import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWork, work } from "@/content/site";

export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return {};
  return {
    title: item.title,
    description: item.excerpt,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();

  const index = work.findIndex((entry) => entry.slug === item.slug);
  const next = work[(index + 1) % work.length];

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Link
        href="/work"
        className="font-mono text-[11px] tracking-[0.16em] text-caption uppercase hover:text-stone"
      >
        ← Work
      </Link>

      <h1 className="mt-10 max-w-3xl font-[family-name:var(--font-commissioner)] text-4xl tracking-[-0.03em] text-paper sm:text-5xl">
        {item.title}
      </h1>
      <p className="mt-2 font-mono text-[11px] tracking-[0.08em] text-caption">
        {item.years}
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

      <p className="mt-8 font-mono text-sm text-caption">
        {item.stack.join(" · ")}
      </p>

      <div className="mt-16 border-t border-stone/15 pt-6">
        <Link
          href={`/work/${next.slug}`}
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
