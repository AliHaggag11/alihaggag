export function TitleBlock({
  sheet,
  project,
}: {
  sheet: string;
  project: string;
}) {
  const cells = [
    ["Project", project],
    ["Drawn by", "Ali Haggag"],
    ["Location", "Cairo, EG"],
    ["Sheet", sheet],
  ];

  return (
    <div
      aria-hidden="true"
      className="grid grid-cols-2 border border-stone/25 font-mono text-[10px] tracking-[0.18em] text-caption uppercase sm:grid-cols-4"
    >
      {cells.map(([label, value]) => (
        <div
          key={label}
          className="border-r border-b border-stone/20 px-3 py-2.5 last:border-r-0 sm:border-b-0 sm:[&:nth-child(4n)]:border-r-0"
        >
          <div className="mb-1 text-caption/80">{label}</div>
          <div className="text-stone">{value}</div>
        </div>
      ))}
    </div>
  );
}
