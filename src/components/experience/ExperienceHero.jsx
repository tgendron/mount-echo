import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";

export default function ExperienceHero({ theme }) {
  const { t } = useLocale();
  const slugKey = theme.slug.split("-")[0];

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center"
      style={{ backgroundColor: theme.colors.heroBg }}
    >
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2240%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%220.3%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:150px_150px]" />

      <div className="relative text-center px-4 max-w-4xl mx-auto">
        <p
          className="text-sm uppercase tracking-[0.3em] mb-6 font-medium"
          style={{ color: theme.colors.accent }}
        >
          {t(`exp.${slugKey}.tagline`)}
        </p>
        <h1
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] whitespace-pre-line"
          style={{ color: theme.colors.heroText }}
        >
          {t(`exp.${slugKey}.heroHeadline`)}
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: `${theme.colors.heroText}B3` }}
        >
          {t(`exp.${slugKey}.heroSub`)}
        </p>
        <Link
          to="/book"
          className="btn text-base px-8 py-4"
          style={{ backgroundColor: theme.colors.accent, color: "#fff" }}
        >
          {t(`exp.${slugKey}.cta`)}
        </Link>
      </div>
    </section>
  );
}
