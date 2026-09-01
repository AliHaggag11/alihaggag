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

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <Link
        href="/projects"
        className="font-mono text-xs text-caption transition-colors duration-150 hover:text-stone"
      >
        Projects
      </Link>

      <header className="mt-8 border-b border-rule pb-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
          {item.title}
        </h1>
        <p className="mt-2 text-stone">{item.tagline}</p>
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

      <div className="mt-8 border border-rule bg-surface p-4">
        <p className="text-sm leading-relaxed text-stone">
          {item.architecture}
        </p>
      </div>

      <p className="mt-8 font-mono text-sm text-caption">
        {item.stack.join(" · ")}
      </p>

      {item.github && (
        <p className="mt-6">
          <Link
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-stone transition-colors duration-150 hover:text-gold"
          >
            GitHub
          </Link>
        </p>
      )}
    </main>
  );
}
