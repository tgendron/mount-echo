import { Section, Callout } from "./notion";
import { useLocale } from "../../hooks/useLocale";

export default function TenantUnit({ unit }) {
  const { t } = useLocale();
  return (
    <Section id="unit" icon="🪟" title={t("tenant.nav.unit")}>
      <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#EDE8E0] dark:bg-[#141414] border border-[#0B0B0B]/8 dark:border-white/8 relative mb-5">
        <div className="absolute inset-0 opacity-[0.06] dark:hidden" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 opacity-[0.06] hidden dark:block" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/25 dark:text-white/15">{t("home.prop.photosSoon")}</p>
        </div>
      </div>
      <Callout icon="🌄">
        <span className="font-medium text-[#0B0B0B] dark:text-white">{t("tenant.unit.view")}</span> — {unit.view}
      </Callout>
      <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0B0B0B]/60 dark:text-white/60 mt-6 mb-3">{t("tenant.unit.features")}</h3>
      <ul className="flex flex-wrap gap-2">
        {unit.features.map((f) => (
          <li key={f} className="rounded-full border border-[#0B0B0B]/10 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-[13px] text-[#0B0B0B]/80 dark:text-white/80">{f}</li>
        ))}
      </ul>
    </Section>
  );
}
