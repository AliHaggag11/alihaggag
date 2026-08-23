import Link from "next/link";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-stone/15">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 font-mono text-[11px] tracking-[0.14em] text-caption uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Cairo · {site.role}</p>
        <div className="flex gap-5">
          <Link href={site.linkedin} className="hover:text-stone">
            LinkedIn
          </Link>
          <Link href={site.github} className="hover:text-stone">
            GitHub
          </Link>
          <Link href={`mailto:${site.email}`} className="hover:text-stone">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
