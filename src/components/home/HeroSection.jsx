import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { useLocale } from "../../contexts/LocaleContext";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cpath%20d%3D%22M0%20100%20L50%200%20L100%20100%22%20fill%3D%22none%22%20stroke%3D%22%23fff%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')] bg-repeat bg-[length:200px_200px]" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-gray-900/40" />

      <div className="relative text-center px-4 max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-white/60 mb-6 font-medium">
          {t("home.hero.label")}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.05]">
          {t("home.hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("home.hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book" className="btn btn-accent text-base px-8 py-4">
            {t("home.hero.cta")}
          </Link>
          <Link to="#experiences" className="btn btn-outline !border-white/30 !text-white hover:!bg-white/10 text-base px-8 py-4">
            {t("home.hero.explore")}
          </Link>
        </div>
      </div>

      <a
        href="#experiences"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
