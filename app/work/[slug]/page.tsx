import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TitleBlock } from "@/components/title-block";
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
      <p className="mt-8 font-mono text-[11px] tracking-[0.18em] text-copper uppercase">
        {item.client} · {item.years}
      </p>
      <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-commissioner)] text-5xl tracking-[-0.04em] text-paper sm:text-6xl">
        {item.title}
      </h1>
      <p className="mt-4 text-lg text-stone/80">{item.role}</p>
      <div className="mt-10">
        <TitleBlock
          sheet={`03 / ${String(index + 1).padStart(2, "0")}`}
          project={item.title}
        />
      </div>
      <section className="mt-14 grid gap-10 lg:grid-cols-[200px_1fr]">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
          Context
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-stone/90">
          {item.problem}
        </p>
      </section>
      <section className="mt-14 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr]">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
          What I work on
        </h2>
        <ul className="max-w-2xl space-y-3 text-lg leading-relaxed text-stone/90">
          {item.built.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>
      <section className="mt-14 grid gap-10 border-t border-stone/15 pt-10 lg:grid-cols-[200px_1fr]">
        <h2 className="font-mono text-[11px] tracking-[0.2em] text-caption uppercase">
          Stack
        </h2>
        <p className="font-mono text-sm tracking-[0.06em] text-gold">
          {item.stack.join(" · ")}
        </p>
      </section>
      <div className="mt-20 border-t border-stone/15 pt-8">
        <Link
          href={`/work/${next.slug}`}
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
