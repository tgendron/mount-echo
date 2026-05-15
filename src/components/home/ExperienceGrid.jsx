import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { experienceList } from "../../config/experiences";
import { useLocale } from "../../contexts/LocaleContext";

const vibeImages = {
  "corporate-offsites": "from-blue-900 to-blue-800",
  "influencer-filming": "from-gray-900 to-gray-800",
  "fasting-retreats": "from-green-900 to-green-800",
  "coding-bootcamps": "from-gray-800 to-gray-700",
};

const slugKeyMap = {
  "corporate-offsites": "corporate",
  "influencer-filming": "influencer",
  "fasting-retreats": "fasting",
  "coding-bootcamps": "coding",
};

export default function ExperienceGrid() {
  const { t } = useLocale();

  return (
    <section id="experiences" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3 font-medium">{t("home.exp.label")}</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("home.exp.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t("home.exp.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceList.map((exp) => {
            const key = slugKeyMap[exp.slug];
            return (
              <Link
                key={exp.slug}
                to={`/experience/${exp.slug}`}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[3/2]"
              >
                {/* Gradient background (placeholder for real images) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${vibeImages[exp.slug]} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />

                <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                  <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-2">{t(`exp.${key}.tagline`)}</p>
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-bold mb-2">{t(`exp.${key}.name`)}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    {t("home.exp.more")} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
