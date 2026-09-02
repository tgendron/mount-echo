// Notion-style building blocks for the tenant portal: sections, callouts,
// property rows, tags, and stat tiles. Light/dark aware via Tailwind dark:.

export function Section({ id, icon, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 mb-14">
      <h2 className="flex items-center gap-2.5 text-xl font-semibold text-[#0B0B0B] dark:text-white mb-4">
        <span aria-hidden="true" className="text-2xl leading-none">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

const calloutTones = {
  neutral: "bg-[#F1EEE8] dark:bg-white/5 border-[#0B0B0B]/10 dark:border-white/10",
  info: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900",
  warn: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900",
  danger: "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900",
};

export function Callout({ icon = "💡", tone = "neutral", children }) {
  return (
    <div className={`flex gap-3 rounded-lg border px-4 py-3.5 text-[15px] leading-relaxed text-[#0B0B0B]/80 dark:text-white/80 ${calloutTones[tone] || calloutTones.neutral}`}>
      <span aria-hidden="true" className="text-lg leading-none mt-0.5 shrink-0">{icon}</span>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

const tagTones = {
  notice: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200",
  maintenance: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  inspection: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200",
  rent: "bg-rose-100 text-rose-800 dark:bg-rose-900/50 dark:text-rose-200",
  submitted: "bg-gray-200 text-gray-700 dark:bg-white/10 dark:text-white/70",
  inprogress: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  done: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200",
};

export function Tag({ tone = "submitted", children }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide ${tagTones[tone] || tagTones.submitted}`}>
      {children}
    </span>
  );
}

export function PropertyRow({ label, children }) {
  return (
    <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-3 py-2.5 border-b border-dashed border-[#0B0B0B]/10 dark:border-white/10 text-sm">
      <dt className="text-[#0B0B0B]/50 dark:text-white/50">{label}</dt>
      <dd className="text-[#0B0B0B] dark:text-white/90">{children}</dd>
    </div>
  );
}

export function StatTile({ label, value, hint }) {
  return (
    <div className="rounded-xl border border-[#0B0B0B]/10 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-4">
      <p className="text-[11px] uppercase tracking-[0.15em] text-[#0B0B0B]/50 dark:text-white/50 mb-1">{label}</p>
      <p className="font-serif text-2xl font-bold text-[#0B0B0B] dark:text-white leading-tight">{value}</p>
      {hint && <p className="text-xs text-[#0B0B0B]/50 dark:text-white/50 mt-1">{hint}</p>}
    </div>
  );
}
