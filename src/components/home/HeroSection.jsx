import { Link } from "react-router-dom";
import { useLocale } from "../../contexts/LocaleContext";

export default function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-[#0B0B0B] overflow-hidden">
      {/* Subtle topographic / architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent translate-x-0" style={{ right: "15%" }} />

      {/* Corner coordinate — techy detail */}
      <div className="absolute top-28 right-8 text-[10px] font-mono text-white/20 tracking-wider hidden lg:block">
        47.6062° N&nbsp;&nbsp;122.3321° W
      </div>

      {/* Bottom content — left-anchored editorial layout */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pb-16 pt-32">
        {/* Overline */}
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-10 font-medium">
          Pacific Northwest&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2024
        </p>

        {/* Headline — massive editorial serif */}
        <h1 className="font-serif text-[clamp(4rem,13vw,11rem)] font-bold text-white leading-[0.88] mb-12 tracking-tight">
          Mount<br />Echo
        </h1>

        {/* Bottom bar — description + CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-end gap-8 md:gap-20 border-t border-white/10 pt-8">
          <p className="text-white/50 text-[15px] max-w-sm leading-relaxed font-light">
            {t("home.hero.subtitle")}
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <Link to="/book" className="btn btn-ghost-light text-[13px] !py-2.5 !px-7">
              {t("home.hero.cta")}
            </Link>
            <a
              href="#experiences"
              className="text-[13px] text-white/40 hover:text-white/70 transition-colors tracking-wide"
            >
              {t("home.hero.explore")} ↓
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator — right side, rotated */}
      <div className="absolute bottom-16 right-8 hidden lg:flex items-center gap-3">
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/20 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
