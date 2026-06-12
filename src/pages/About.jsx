import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Leaf, Compass, Handshake } from "lucide-react";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import { useLocale } from "../hooks/useLocale";

const valueIcons = [Heart, Leaf, Compass, Handshake];
const valueKeys = ["hospitality", "nature", "flexible", "concierge"];

export default function About() {
  const { t } = useLocale();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <SEO
        title="About"
        description="The story behind Mount Echo. A property built on the belief that the right environment can transform how teams work and individuals reconnect."
        path="/about"
      />
      {/* Hero */}
      <section className="bg-gray-900 py-24 md:py-32">
        <Container className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">{t("about.label")}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            {t("about.title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("about.subtitle")}
          </p>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t("about.story.title")}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <p>{t("about.story.p3")}</p>
              <p>{t("about.story.p4")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <Container>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {t("about.values.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {valueKeys.map((key, i) => {
              const Icon = valueIcons[i];
              return (
                <div key={key} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon size={22} className="text-gray-700 dark:text-gray-200" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{t(`about.values.${key}`)}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{t(`about.values.${key}.desc`)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <Container className="text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {t("about.cta.title")}
          </h2>
          <p className="text-gray-400 text-lg mb-8">{t("about.cta.sub")}</p>
          <Link to="/book" className="btn btn-accent text-base px-10 py-4">
            {t("about.cta.btn")}
          </Link>
        </Container>
      </section>
    </>
  );
}
