import type { Metadata } from "next";
import Link from "next/link";
import { TitleBlock } from "@/components/title-block";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Shipped products — Verdict, TasteOS, and Opero.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <p className="font-mono text-[11px] tracking-[0.22em] text-copper uppercase">
        Catalog
      </p>
      <h1 className="mt-4 font-[family-name:var(--font-commissioner)] text-5xl tracking-[-0.04em] text-paper sm:text-6xl">
        Projects
      </h1>
      <p className="mt-4 max-w-xl text-lg text-stone/80">
        Shipped products, not job case studies.
      </p>
      <div className="mt-10">
        <TitleBlock sheet="03 / Projects" project="Shipped products" />
      </div>
      <ul className="mt-4">
        {projects.map((item, index) => (
          <li key={item.slug}>
            <Link
              href={`/projects/${item.slug}`}
              className="group grid gap-3 border-b border-stone/15 py-8 first:border-t md:grid-cols-[4rem_1fr] md:items-start"
            >
              <span className="font-mono text-[11px] text-caption">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-[family-name:var(--font-commissioner)] text-3xl tracking-[-0.03em] text-paper group-hover:text-gold">
                  {item.title}
                </span>
                <span className="mt-2 block font-mono text-[11px] tracking-[0.12em] text-copper uppercase">
                  {item.tagline}
                </span>
                <span className="mt-3 block max-w-xl text-stone/80">
                  {item.excerpt}
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
