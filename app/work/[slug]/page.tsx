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

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href="/work"
        className="font-mono text-xs text-caption transition-colors duration-150 hover:text-stone"
      >
        Work
      </Link>

      <header className="mt-8 border-b border-rule pb-8">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            {item.title}
          </h1>
          <span className="shrink-0 font-mono text-xs text-caption">
            {item.years}
          </span>
        </div>
        <p className="mt-2 text-stone">{item.client}</p>
      </header>

      <p className="mt-8 text-lg leading-relaxed text-stone">
        {item.problem}
      </p>

      <ul className="mt-8 space-y-3 border-l border-copper pl-4">
        {item.built.map((line) => (
          <li key={line} className="text-stone">
            {line}
          </li>
        ))}
      </ul>

      <p className="mt-8 font-mono text-sm text-caption">
        {item.stack.join(" · ")}
      </p>
    </main>
  );
}
