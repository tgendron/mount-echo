import { useLocale } from "../../hooks/useLocale";

export default function ExperienceIntro({ theme }) {
  const { t } = useLocale();
  const slugKey = theme.slug.split("-")[0];

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold mb-6"
          style={{ color: theme.colors.text }}
        >
          {t(`exp.${slugKey}.introTitle`)}
        </h2>
        <p
          className="text-lg leading-relaxed"
          style={{ color: theme.colors.textMuted }}
        >
          {t(`exp.${slugKey}.introBody`)}
        </p>
      </div>
    </section>
  );
}
