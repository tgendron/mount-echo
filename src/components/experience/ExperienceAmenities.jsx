import { iconMap } from "../../config/icons";
import { property } from "../../config/property";
import { useLocale } from "../../hooks/useLocale";
import { localize } from "../../i18n/localize";

export default function ExperienceAmenities({ theme }) {
  const { t, locale } = useLocale();
  const amenities = localize(property.amenities, locale).filter((a) =>
    theme.featuredAmenities.includes(a.id)
  );

  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: theme.colors.text }}
        >
          {t("exp.amenities.title")}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {amenities.map((a) => {
            const Icon = iconMap[a.icon] || iconMap.Star;
            return (
              <div key={a.id} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${theme.colors.primary}10` }}
                >
                  <Icon size={20} style={{ color: theme.colors.primary }} />
                </div>
                <span className="text-sm font-medium" style={{ color: theme.colors.text }}>
                  {a.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
