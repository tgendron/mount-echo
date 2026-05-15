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

      {/* Final CTA — stark, editorial */}
      <section className="py-24 md:py-32 bg-[#F8F5F0] dark:bg-[#141414] border-t border-[#0B0B0B]/8 dark:border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#0B0B0B] dark:text-white leading-tight max-w-xl">
              {t("home.cta.title")}
            </h2>
            <div className="shrink-0">
              <p className="text-[13px] text-[#0B0B0B]/50 dark:text-white/40 mb-6 max-w-xs leading-relaxed">
                {t("home.cta.subtitle")}
              </p>
              <Link to="/book" className="btn btn-primary text-[13px] !py-3 !px-8">
                {t("home.cta.btn")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
