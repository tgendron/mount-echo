import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { experienceList } from "../../config/experiences";
import { useLocale } from "../../hooks/useLocale";

const cardColors = {
  "corporate-offsites":  "from-[#0D1B2A] via-[#1a2f4a] to-[#0D1B2A]",
  "influencer-filming":  "from-[#1A1A1A] via-[#2a2a2a] to-[#1A1A1A]",
  "fasting-retreats":    "from-[#0F1F18] via-[#1a3528] to-[#0F1F18]",
  "coding-bootcamps":    "from-[#141414] via-[#1e1e1e] to-[#141414]",
  "claude-camp":         "from-[#1A0A00] via-[#2d1200] to-[#1A0A00]",
};

const accentColors = {
  "corporate-offsites": "text-blue-400/60",
  "influencer-filming": "text-gray-400/60",
  "fasting-retreats":   "text-emerald-400/60",
  "coding-bootcamps":   "text-cyan-400/60",
  "claude-camp":        "text-orange-400/60",
};

const slugKeyMap = {
  "corporate-offsites": "corporate",
  "influencer-filming": "influencer",
  "fasting-retreats":   "fasting",
  "coding-bootcamps":   "coding",
  "claude-camp":        "claude",
};

export default function ExperienceGrid() {
  const { t } = useLocale();

  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#F8F5F0] dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="label-overline mb-3">{t("home.exp.label")}</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#0B0B0B] dark:text-white">
              {t("home.exp.title")}
            </h2>
          </div>
          <p className="hidden md:block text-[13px] text-[#0B0B0B]/50 dark:text-white/40 max-w-xs text-right leading-relaxed">
            {t("home.exp.subtitle")}
          </p>
        </div>

        {/* Grid — first card wide, rest 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {experienceList.map((exp, i) => {
            const key = slugKeyMap[exp.slug];
            const isFirst = i === 0;
            return (
              <Link
                key={exp.slug}
                to={`/experience/${exp.slug}`}
                className={`group relative overflow-hidden rounded-2xl ${
                  isFirst ? "md:col-span-2" : ""
                }`}
              >
                {/* Card background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cardColors[exp.slug]} transition-transform duration-700 group-hover:scale-[1.02]`}
                />

                {/* Subtle noise texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20200%20200%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cfilter%20id%3D%22n%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%220.9%22%20numOctaves%3D%224%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url(%23n)%22%2F%3E%3C%2Fsvg%3E')] bg-cover" />

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-white/10 transition-all duration-300" />

                <div
                  className={`relative flex flex-col justify-between ${
                    isFirst ? "aspect-[16/7] md:aspect-[21/8]" : "aspect-[4/3]"
                  } p-7 md:p-9`}
                >
                  {/* Top — index + accent */}
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[10px] text-white/20 tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <span className={`text-[10px] uppercase tracking-[0.3em] font-medium ${accentColors[exp.slug]}`}>
                      {t(`exp.${key}.tagline`)}
                    </span>
                  </div>

                  {/* Bottom — name + arrow */}
                  <div className="flex items-end justify-between">
                    <h3 className={`font-serif font-bold text-white leading-tight ${
                      isFirst ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                    }`}>
                      {t(`exp.${key}.name`)}
                    </h3>
                    <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/60 group-hover:bg-white/10 transition-all duration-200 shrink-0 ml-4">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
