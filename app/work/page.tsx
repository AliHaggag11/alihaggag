import type { Metadata } from "next";
import Link from "next/link";
import { work } from "@/content/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "InstaPay at Egyptian Banks Company, and frontend product engineering at Upscale DA.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-5 py-16 sm:px-8 sm:py-20">
      <h1 className="font-display text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
        Work
      </h1>
      <p className="mt-4 text-stone">
        Roles and systems from the public record.
      </p>

      <ol className="mt-10 divide-y divide-rule border-y border-rule">
        {work.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/work/${item.slug}`}
              className="group flex items-baseline justify-between gap-4 py-5"
            >
              <span className="flex flex-col gap-1">
                <span className="font-display text-xl text-paper transition-colors duration-150 group-hover:text-gold">
                  {item.title}
                </span>
                <span className="text-sm text-stone">{item.client}</span>
              </span>
              <span className="shrink-0 font-mono text-xs text-caption">
                {item.years}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
