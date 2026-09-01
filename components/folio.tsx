import { site } from "@/content/site";

export function Folio({ sheet }: { sheet: string }) {
  return (
    <div
      aria-hidden="true"
      className="flex items-baseline justify-between border-b border-stone/20 pb-2 font-mono text-[10px] tracking-[0.16em] text-caption uppercase"
    >
      <span>{site.name}</span>
      <span>{sheet}</span>
    </div>
  );
}
