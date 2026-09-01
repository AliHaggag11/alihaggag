import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-rule">
      <div className="mx-auto flex max-w-2xl items-center justify-between gap-4 px-5 py-4 font-mono text-xs text-caption sm:px-8">
        <span>Cairo</span>
        <span>{site.role}</span>
      </div>
    </footer>
  );
}
