import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLocale } from "../../hooks/useLocale";

export default function ExperienceItinerary({ theme }) {
  const { t } = useLocale();
  const [openDay, setOpenDay] = useState(0);

  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.surface }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-4"
          style={{ color: theme.colors.text }}
        >
          {t("exp.itinerary.title")}
        </h2>
        <p className="text-center mb-12" style={{ color: theme.colors.textMuted }}>
          {t("exp.itinerary.subtitle")}
        </p>

        <div className="space-y-3">
          {theme.itinerary.map((day, i) => (
            <div
              key={day.day}
              className="rounded-xl overflow-hidden border"
              style={{ borderColor: `${theme.colors.primary}15` }}
            >
              <button
                onClick={() => setOpenDay(openDay === i ? -1 : i)}
                aria-expanded={openDay === i}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                style={{ backgroundColor: openDay === i ? `${theme.colors.primary}08` : "transparent" }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: theme.colors.accent }}
                  >
                    {day.day}
                  </span>
                  <span className="font-semibold" style={{ color: theme.colors.text }}>
                    {day.title}
                  </span>
                </div>
                <ChevronDown
                  size={18}
                  className={`transition-transform ${openDay === i ? "rotate-180" : ""}`}
                  style={{ color: theme.colors.textMuted }}
                />
              </button>
              {openDay === i && (
                <div className="px-6 pb-4">
                  <ul className="space-y-2">
                    {day.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm" style={{ color: theme.colors.textMuted }}>
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ backgroundColor: theme.colors.accent }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
