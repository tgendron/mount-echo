import { iconMap } from "../../config/icons";

export default function ExperienceHighlights({ theme }) {
  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {theme.highlights.map((h) => {
            const Icon = iconMap[h.icon] || iconMap.Star;
            return (
              <div key={h.title} className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${theme.colors.accent}20` }}
                >
                  <Icon size={24} style={{ color: theme.colors.accent }} />
                </div>
                <h3 className="font-semibold text-lg mb-2" style={{ color: theme.colors.text }}>
                  {h.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: theme.colors.textMuted }}>
                  {h.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
