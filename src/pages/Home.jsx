import HeroSection from "../components/home/HeroSection";
import ExperienceGrid from "../components/home/ExperienceGrid";
import PropertyPreview from "../components/home/PropertyPreview";
import Testimonials from "../components/home/Testimonials";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import { useLocale } from "../contexts/LocaleContext";

export default function Home() {
  const { t } = useLocale();

  return (
    <>
      <SEO path="/" />
      <HeroSection />
      <ExperienceGrid />
      <PropertyPreview />
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            {t("home.cta.title")}
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            {t("home.cta.subtitle")}
          </p>
          <Link to="/book" className="btn btn-accent text-base px-10 py-4">
            {t("home.cta.btn")}
          </Link>
        </div>
      </section>
    </>
  );
}
