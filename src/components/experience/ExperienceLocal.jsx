import { Footprints, Mountain, Sparkles, Wine, Landmark, MapPin, ArrowUpRight } from "lucide-react";
import { localExperiencesFor } from "../../config/localExperiences";
import { useLocale } from "../../hooks/useLocale";

const categoryIcons = {
  outdoor: Footprints,
  adventure: Mountain,
  wellness: Sparkles,
  food: Wine,
  culture: Landmark,
};

export default function ExperienceLocal({ theme }) {
  const { t } = useLocale();
  const items = localExperiencesFor(theme.slug);

  if (!items.length) return null;

  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: theme.colors.text }}
        >
          {t("exp.local.title")}
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto" style={{ color: theme.colors.textMuted }}>
          {t("exp.local.subtitle")}
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {items.map((item) => {
            const Icon = categoryIcons[item.category] || MapPin;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} — ${t("exp.local.newTab")}`}
                className="group block rounded-xl border p-5 transition-colors"
                style={{ borderColor: `${theme.colors.primary}15`, backgroundColor: theme.colors.surface }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${theme.colors.accent}20` }}
                  >
                    <Icon size={20} style={{ color: theme.colors.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h3 className="font-semibold leading-snug" style={{ color: theme.colors.text }}>
                        {item.name}
                      </h3>
                      <ArrowUpRight
                        size={16}
                        className="shrink-0 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity"
                        style={{ color: theme.colors.textMuted }}
                      />
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: theme.colors.textMuted }}>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} /> {item.distance}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.season}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: theme.colors.textMuted }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
