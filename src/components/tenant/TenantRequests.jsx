import { useState } from "react";
import { Section, Tag, Callout } from "./notion";
import { useLocale } from "../../hooks/useLocale";

const CATEGORIES = ["maintenance", "plumbing", "electrical", "heating", "other"];

// Requests persist per unit in localStorage (MVP). Wiring them into the admin
// Concierge view and a real backend is on the backlog.
const storageKey = (unit) => `tenant_requests_${unit}`;
const load = (unit) => { try { return JSON.parse(localStorage.getItem(storageKey(unit)) || "[]"); } catch { return []; } };

export default function TenantRequests({ unitId, contactEmail }) {
  const { t, locale } = useLocale();
  const [items, setItems] = useState(() => load(unitId));
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const req = { id: Date.now(), date: new Date().toISOString().slice(0, 10), category, title: title.trim(), detail: detail.trim(), status: "submitted" };
    const next = [req, ...items];
    setItems(next);
    try { localStorage.setItem(storageKey(unitId), JSON.stringify(next)); } catch { /* storage unavailable */ }
    setTitle(""); setDetail(""); setCategory(CATEGORIES[0]); setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const field = "w-full rounded-lg border border-[#0B0B0B]/15 dark:border-white/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B0B0B] dark:focus:ring-white bg-white dark:bg-white/5 text-[#0B0B0B] dark:text-white";
  const fmt = (d) => { const [y, m, dd] = d.split("-").map(Number); return new Date(y, m - 1, dd).toLocaleDateString(locale === "fr" ? "fr-CA" : "en-CA", { month: "short", day: "numeric" }); };

  return (
    <Section id="requests" icon="🛠️" title={t("tenant.nav.requests")}>
      <form onSubmit={submit} className="rounded-xl border border-[#0B0B0B]/10 dark:border-white/10 bg-white dark:bg-white/5 p-5 mb-6 space-y-4">
        <h3 className="font-semibold text-[#0B0B0B] dark:text-white">{t("tenant.requests.new")}</h3>
        <div className="grid sm:grid-cols-[180px_1fr] gap-4">
          <div>
            <label htmlFor="req-cat" className="block text-xs font-medium text-[#0B0B0B]/60 dark:text-white/60 mb-1.5">{t("tenant.requests.category")}</label>
            <select id="req-cat" value={category} onChange={(e) => setCategory(e.target.value)} className={field}>
              {CATEGORIES.map((c) => <option key={c} value={c}>{t(`tenant.requests.cat.${c}`)}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="req-title" className="block text-xs font-medium text-[#0B0B0B]/60 dark:text-white/60 mb-1.5">{t("tenant.requests.titleLabel")}</label>
            <input id="req-title" required value={title} onChange={(e) => setTitle(e.target.value)} className={field} placeholder={t("tenant.requests.titlePh")} />
          </div>
        </div>
        <div>
          <label htmlFor="req-detail" className="block text-xs font-medium text-[#0B0B0B]/60 dark:text-white/60 mb-1.5">{t("tenant.requests.detail")}</label>
          <textarea id="req-detail" rows={3} value={detail} onChange={(e) => setDetail(e.target.value)} className={`${field} resize-none`} placeholder={t("tenant.requests.detailPh")} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <button type="submit" className="btn btn-primary !py-2.5 !px-6 text-[13px]">{t("tenant.requests.submit")}</button>
          <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(t("tenant.requests.mailSubject"))}`} className="text-[13px] underline underline-offset-2 text-[#0B0B0B]/60 dark:text-white/60">{t("tenant.requests.emailInstead")}</a>
          {sent && <span role="status" className="text-[13px] text-green-700 dark:text-green-300">{t("tenant.requests.sent")}</span>}
        </div>
      </form>

      {items.length === 0 ? (
        <Callout icon="✅">{t("tenant.requests.empty")}</Callout>
      ) : (
        <div className="rounded-xl border border-[#0B0B0B]/10 dark:border-white/10 bg-white dark:bg-white/5 divide-y divide-[#0B0B0B]/10 dark:divide-white/10">
          {items.map((r) => (
            <div key={r.id} className="px-5 py-3.5 grid grid-cols-[72px_1fr_auto] gap-3 items-start text-sm">
              <time dateTime={r.date} className="font-mono text-[11px] text-[#0B0B0B]/50 dark:text-white/50 pt-0.5">{fmt(r.date)}</time>
              <div className="min-w-0">
                <p className="font-medium text-[#0B0B0B] dark:text-white">{r.title}</p>
                <p className="text-xs text-[#0B0B0B]/50 dark:text-white/50">{t(`tenant.requests.cat.${r.category}`)}{r.detail ? ` — ${r.detail}` : ""}</p>
              </div>
              <Tag tone={r.status}>{t(`tenant.requests.status.${r.status}`)}</Tag>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
