import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "../../contexts/LocaleContext";

export default function PropertyPreview() {
  const { t } = useLocale();

  const stats = [
    { value: "4", unit: t("home.prop.beds") },
    { value: "8", unit: t("home.prop.sleeps") },
    { value: "2,400", unit: t("home.prop.elev") },
    { value: "1 Gbps", unit: t("home.prop.wifi") },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0B0B0B] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image placeholder with architectural frame */}
          <div className="relative">
            {/* Main frame */}
            <div className="aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-[#141414] border border-white/6 relative">
              {/* Inner grid lines */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
                  `,
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="font-mono text-[10px] text-white/15 tracking-[0.3em] uppercase">
                  Photography arriving soon
                </p>
              </div>
              {/* Corner marks */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-white/20" />
              <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-white/20" />
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b border-l border-white/20" />
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-white/20" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-4 md:-right-6 bg-[#F8F5F0] dark:bg-[#141414] rounded-xl px-5 py-4 border border-[#0B0B0B]/6 dark:border-white/8 hidden md:block">
              <p className="font-mono text-[10px] text-[#0B0B0B]/40 dark:text-white/30 tracking-[0.2em] uppercase mb-0.5">Elevation</p>
              <p className="font-serif text-2xl font-bold text-[#0B0B0B] dark:text-white">2,400 ft</p>
            </div>
          </div>

          {/* Right — content */}
          <div>
            <p className="label-overline mb-4 !text-white/30">{t("home.prop.label")}</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-7 leading-tight">
              {t("home.prop.title")}
            </h2>
            <p className="text-white/50 text-[15px] leading-relaxed mb-10 font-light">
              {t("home.prop.body")}
            </p>

            {/* Stats — mono style */}
            <div className="grid grid-cols-2 gap-px bg-white/6 rounded-xl overflow-hidden mb-10">
              {stats.map(({ value, unit }) => (
                <div key={unit} className="bg-[#141414] px-5 py-4">
                  <p className="font-mono text-xl text-white font-normal mb-0.5">{value}</p>
                  <p className="text-[11px] text-white/35 uppercase tracking-[0.15em]">{unit}</p>
                </div>
              ))}
            </div>

            <Link
              to="/property"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-[13px] tracking-wide transition-colors group"
            >
              {t("home.prop.cta")}
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
