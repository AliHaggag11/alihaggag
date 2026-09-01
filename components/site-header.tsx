"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { useCommandPalette } from "@/components/command-palette";

const links = [
  { href: "/", label: "Index" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { setOpen } = useCommandPalette();

  return (
    <header className="sticky top-0 z-20 border-b border-stone/15 bg-header-bg backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <div className="flex items-baseline gap-4">
          <Link
            href="/"
            className="font-mono text-[11px] tracking-[0.18em] text-stone uppercase"
          >
            {site.name}
          </Link>
          <span className="hidden font-mono text-[10px] tracking-[0.14em] text-caption uppercase sm:inline">
            Cairo · {site.role}
          </span>
        </div>
        <nav className="flex items-center gap-4 font-mono text-[11px] tracking-[0.14em] uppercase text-caption sm:gap-5">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-150 hover:text-stone ${active ? "text-stone" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="transition-colors duration-150 hover:text-stone"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
        </nav>
      </div>
    </header>
  );
}
