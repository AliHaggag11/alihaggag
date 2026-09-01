import { site } from "@/content/site";

export function Folio({ sheet }: { sheet: string }) {
  const cells = [
    ["Name", site.name],
    ["Location", "Cairo"],
    ["Role", site.role],
    ["Sheet", sheet],
  ];

  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-2 border border-stone/20 font-mono text-[10px] tracking-[0.16em] text-caption uppercase sm:grid-cols-4"
    >
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="border-r border-b border-stone/15 px-3 py-2.5 last:border-r-0 sm:border-b-0 sm:[&:nth-child(4n)]:border-r-0"
        >
          <div className="mb-1 text-caption/70">{label}</div>
          <div className="text-stone">{value}</div>
        </div>
      ))}
    </div>
  );
}
