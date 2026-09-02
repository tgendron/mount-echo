import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sun, Moon, LogOut } from "lucide-react";
import { units, contacts, sharedUpdates, sharedEvents } from "../../config/tenants";
import { localize } from "../../i18n/localize";
import { useLocale } from "../../hooks/useLocale";
import { useTheme } from "../../hooks/useTheme";
import TenantGate from "../../components/tenant/TenantGate";
import TenantAbout from "../../components/tenant/TenantAbout";
import TenantNumbers from "../../components/tenant/TenantNumbers";
import TenantUpdates from "../../components/tenant/TenantUpdates";
import TenantCalendar from "../../components/tenant/TenantCalendar";
import TenantRequests from "../../components/tenant/TenantRequests";
import TenantUnit from "../../components/tenant/TenantUnit";

const NAV = [
  { id: "about", icon: "🏡", key: "tenant.nav.about" },
  { id: "numbers", icon: "🔢", key: "tenant.nav.numbers" },
  { id: "updates", icon: "📣", key: "tenant.nav.updates" },
  { id: "calendar", icon: "🗓️", key: "tenant.nav.calendar" },
  { id: "requests", icon: "🛠️", key: "tenant.nav.requests" },
  { id: "unit", icon: "🪟", key: "tenant.nav.unit" },
];

export default function TenantPortal() {
  const { t, locale, setLocale } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [unitId, setUnitId] = useState(() => {
    const u = sessionStorage.getItem("tenant_unit");
    return u && units[u] ? u : null;
  });

  if (!unitId) return <TenantGate onAuth={setUnitId} />;

  const unit = localize(units[unitId], locale);
  const c = localize(contacts, locale);
  const updates = [...localize(sharedUpdates, locale), ...unit.updates];
  const events = [...localize(sharedEvents, locale), ...unit.events];

  const signOut = () => { sessionStorage.removeItem("tenant_unit"); setUnitId(null); };

  return (
    <div className="min-h-screen bg-[#F8F5F0] dark:bg-[#0B0B0B] text-[#0B0B0B] dark:text-white">
      <Helmet>
        <title>{`${unit.name} · ${t("tenant.title")} | Mount Echo`}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-[#F8F5F0]/90 dark:bg-[#0B0B0B]/90 backdrop-blur border-b border-[#0B0B0B]/8 dark:border-white/8">
        <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/" className="font-serif text-lg font-bold">Mount Echo</Link>
            <span className="text-[#0B0B0B]/30 dark:text-white/30">/</span>
            <span className="text-sm text-[#0B0B0B]/60 dark:text-white/60 truncate">{t("tenant.title")}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="hidden sm:inline-flex rounded-full border border-[#0B0B0B]/15 dark:border-white/15 px-2.5 py-1 text-[11px] font-medium tracking-wide">{unit.name}</span>
            <button type="button" onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2 rounded-md hover:bg-[#0B0B0B]/5 dark:hover:bg-white/10">
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button type="button" onClick={() => setLocale(locale === "en" ? "fr" : "en")} aria-label="Toggle language" className="px-2 py-1.5 rounded-md text-[11px] font-medium tracking-widest hover:bg-[#0B0B0B]/5 dark:hover:bg-white/10">
              {locale === "en" ? "FR" : "EN"}
            </button>
            <button type="button" onClick={signOut} className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-[12px] text-[#0B0B0B]/60 dark:text-white/60 hover:bg-[#0B0B0B]/5 dark:hover:bg-white/10">
              <LogOut size={14} /> {t("tenant.signout")}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 py-10 lg:py-14 grid lg:grid-cols-[210px_minmax(0,1fr)] gap-10">
        {/* TOC — Notion-style sidebar */}
        <nav aria-label={t("tenant.nav.label")} className="lg:sticky lg:top-24 self-start">
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#0B0B0B]/40 dark:text-white/40 mb-3 hidden lg:block">{t("tenant.nav.label")}</p>
          <ul className="flex lg:flex-col gap-1 overflow-x-auto pb-1 lg:pb-0">
            {NAV.map((n) => (
              <li key={n.id} className="shrink-0">
                <a href={`#${n.id}`} className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[13px] text-[#0B0B0B]/70 dark:text-white/70 hover:bg-[#0B0B0B]/5 dark:hover:bg-white/10 hover:text-[#0B0B0B] dark:hover:text-white whitespace-nowrap">
                  <span aria-hidden="true">{n.icon}</span>{t(n.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Page — Notion-style document */}
        <main className="max-w-3xl">
          <div className="mb-12">
            <div aria-hidden="true" className="text-6xl leading-none mb-4">🏔️</div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-2">{unit.name}</h1>
            <p className="text-[#0B0B0B]/60 dark:text-white/60">{unit.tagline} · {unit.address}</p>
          </div>

          <TenantAbout unit={unit} contacts={c} />
          <TenantNumbers numbers={unit.numbers} />
          <TenantUpdates updates={updates} />
          <TenantCalendar events={events} dueDay={unit.numbers.dueDay} />
          <TenantRequests unitId={unitId} contactEmail={contacts.email} />
          <TenantUnit unit={unit} />
        </main>
      </div>
    </div>
  );
}
