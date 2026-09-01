import type { Metadata } from "next";
import Link from "next/link";
import { Folio } from "@/components/folio";
import { Reveal } from "@/components/reveal";
import { projects, work } from "@/content/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Shipped products — Daleeli, EAIP, Verdict, TasteOS, and Opero.",
};

export default function ProjectsPage() {
  const sheetNum = String(work.length + 2).padStart(2, "0");

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Folio sheet={sheetNum} />

      <Reveal>
        <h1 className="mt-10 font-[family-name:var(--font-commissioner)] text-[clamp(2.4rem,6vw,4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-paper">
          Projects
        </h1>
        <p className="mt-4 max-w-xl text-lg text-stone/75">
          Shipped products.
        </p>
      </Reveal>

      <section className="mt-14 border-t border-stone/15 pt-8">
        <Reveal>
          <ul className="space-y-10">
            {projects.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/projects/${item.slug}`}
                  className="group block"
                >
                  <span className="font-[family-name:var(--font-commissioner)] text-3xl tracking-[-0.02em] text-paper transition-colors duration-150 group-hover:text-gold">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-lg text-stone/70">
                    {item.tagline}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </main>
  );
}
