import { Link } from "react-router-dom";
import { useLocale } from "../../contexts/LocaleContext";

export default function ExperienceCTA({ theme }) {
  const { t } = useLocale();
  const slugKey = theme.slug.split("-")[0];

  return (
    <section
      className="py-20 md:py-28"
      style={{ backgroundColor: theme.colors.primary }}
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
          {t("exp.cta.title")}
        </h2>
        <p className="text-lg mb-8" style={{ color: `${theme.colors.heroText}99` }}>
          {t("exp.cta.subtitle")}
        </p>
        <Link
          to="/book"
          className="btn text-base px-10 py-4"
          style={{ backgroundColor: theme.colors.accent, color: "#fff" }}
        >
          {t(`exp.${slugKey}.cta`)}
        </Link>
      </div>
    </section>
  );
}
