import { Link } from "react-router-dom";
import { useLocale } from "../../contexts/LocaleContext";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen -mt-16 lg:-mt-20 flex flex-col justify-end bg-[#0B0B0B] overflow-hidden">
      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vertical accent line */}
      <div
        className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent hidden lg:block"
        style={{ right: "15%" }}
      />

      {/* Coordinate detail */}
      <div className="absolute top-28 right-8 text-[10px] font-mono text-white/20 tracking-wider hidden lg:block">
        47.6062° N&nbsp;&nbsp;122.3321° W
      </div>

      {/* Main content — bottom-anchored */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pb-14 lg:pb-20 pt-36 lg:pt-40">
        {/* Overline */}
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-8 lg:mb-10 font-medium">
          Pacific Northwest&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2024
        </p>

        {/* Headline */}
        <h1 className="font-serif font-bold text-white leading-[0.88] mb-10 lg:mb-12 tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}>
          Mount<br />Echo
        </h1>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-16 border-t border-white/10 pt-7">
          <p className="text-white/45 text-sm sm:text-[15px] max-w-xs leading-relaxed font-light">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex items-center gap-5 shrink-0">
            <Link to="/book" className="btn btn-ghost-light text-[13px] !py-2.5 !px-6">
              {t("home.hero.cta")}
            </Link>
            <a
              href="#experiences"
              className="text-[13px] text-white/35 hover:text-white/60 transition-colors tracking-wide"
            >
              {t("home.hero.explore")} ↓
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 right-8 hidden lg:flex flex-col items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
