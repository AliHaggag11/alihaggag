import type { Metadata } from "next";
import Link from "next/link";
import { Folio } from "@/components/folio";
import { Reveal } from "@/components/reveal";
import { work } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work: InstaPay at Egyptian Banks Company, and frontend product engineering at Upscale DA.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-10 sm:px-8 sm:py-14">
      <Folio sheet="02" />

      <Reveal>
        <h1 className="mt-10 font-[family-name:var(--font-commissioner)] text-[clamp(2.4rem,6vw,4rem)] leading-[0.95] font-semibold tracking-[-0.04em] text-paper">
          Work
        </h1>
        <p className="mt-4 max-w-xl text-lg text-stone/75">
          Roles and systems from the public record.
        </p>
      </Reveal>

      <section className="mt-14 border-t border-stone/15 pt-8">
        <Reveal>
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone/15 font-mono text-[10px] tracking-[0.16em] text-caption uppercase">
                <th className="pb-3 pr-4 font-normal">Title</th>
                <th className="hidden pb-3 pr-4 font-normal sm:table-cell">Client</th>
                <th className="pb-3 text-right font-normal">Years</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone/10">
              {work.map((item) => (
                <tr key={item.slug} className="group">
                  <td className="py-5 pr-4">
                    <Link
                      href={`/work/${item.slug}`}
                      className="font-[family-name:var(--font-commissioner)] text-2xl tracking-[-0.02em] text-paper transition-colors duration-150 group-hover:text-gold"
                    >
                      {item.title}
                    </Link>
                    <p className="mt-1 text-sm text-stone/70 sm:hidden">
                      {item.client}
                    </p>
                    <p className="mt-2 max-w-lg text-stone/70">
                      {item.excerpt}
                    </p>
                  </td>
                  <td className="hidden py-5 pr-4 align-top text-stone/75 sm:table-cell">
                    {item.client}
                  </td>
                  <td className="py-5 align-top text-right font-mono text-[11px] tracking-[0.12em] text-caption">
                    {item.years}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>
    </main>
  );
}
