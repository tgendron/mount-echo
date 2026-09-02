import { Section, Tag } from "./notion";
import { useLocale } from "../../hooks/useLocale";

function fmtDate(iso, locale) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(locale === "fr" ? "fr-CA" : "en-CA", { month: "short", day: "numeric", year: "numeric" });
}

export default function TenantUpdates({ updates }) {
  const { t, locale } = useLocale();
  const sorted = [...updates].sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <Section id="updates" icon="📣" title={t("tenant.nav.updates")}>
      <div className="divide-y divide-[#0B0B0B]/10 dark:divide-white/10 rounded-xl border border-[#0B0B0B]/10 dark:border-white/10 bg-white dark:bg-white/5">
        {sorted.map((u) => (
          <article key={u.id} className="px-5 py-4">
            <div className="flex items-center gap-3 mb-1.5">
              <time dateTime={u.date} className="font-mono text-[11px] text-[#0B0B0B]/50 dark:text-white/50">{fmtDate(u.date, locale)}</time>
              <Tag tone={u.tag}>{t(`tenant.tag.${u.tag}`)}</Tag>
            </div>
            <h3 className="font-semibold text-[#0B0B0B] dark:text-white mb-1">{u.title}</h3>
            <p className="text-sm leading-relaxed text-[#0B0B0B]/70 dark:text-white/70">{u.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
