import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Daleeli, EAIP, Verdict, TasteOS, and Opero.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
        Projects
      </h1>
      <p className="mt-4 text-stone">Shipped products.</p>

      <ol className="mt-10 divide-y divide-rule border-y border-rule">
        {projects.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/projects/${item.slug}`}
              className="group block py-5"
            >
              <span className="font-display text-xl text-paper transition-colors duration-150 group-hover:text-gold">
                {item.title}
              </span>
              <span className="mt-1 block text-sm text-stone">
                {item.tagline}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
