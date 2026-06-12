import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";

export default function ExperiencePricing({ theme }) {
  const { t } = useLocale();
  const slugKey = theme.slug.split("-")[0];
  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.surface }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{ backgroundColor: `${theme.colors.primary}08`, border: `1px solid ${theme.colors.primary}15` }}
        >
          <p className="text-sm uppercase tracking-[0.2em] font-medium mb-2" style={{ color: theme.colors.textMuted }}>
            {t(`exp.${slugKey}.pricing.headline`)}
          </p>
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="font-serif text-5xl md:text-6xl font-bold" style={{ color: theme.colors.primary }}>
              {theme.pricing.startingAt}
            </span>
          </div>
          <p className="text-sm mb-8" style={{ color: theme.colors.textMuted }}>
            {t("exp.pricing.unit.week") + " \u00b7 " + t("exp.pricing.unit.property")}
          </p>

          <ul className="space-y-3 mb-10 text-left max-w-sm mx-auto">
            {theme.pricing.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm" style={{ color: theme.colors.text }}>
                <Check size={18} style={{ color: theme.colors.accent }} />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/book"
            className="btn text-base px-10 py-4"
            style={{ backgroundColor: theme.colors.accent, color: "#fff" }}
          >
            {t(`exp.${slugKey}.cta`)}
          </Link>
        </div>
      </div>
    </section>
  );
}
