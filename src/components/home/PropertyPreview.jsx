import { Link } from "react-router-dom";
import { ArrowRight, Bed, Users, Mountain, Wifi } from "lucide-react";
import { useLocale } from "../../contexts/LocaleContext";

export default function PropertyPreview() {
  const { t } = useLocale();

  const stats = [
    { icon: Bed, label: t("home.prop.beds") },
    { icon: Users, label: t("home.prop.sleeps") },
    { icon: Mountain, label: t("home.prop.elev") },
    { icon: Wifi, label: t("home.prop.wifi") },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                <Mountain size={64} strokeWidth={1} />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 p-4 hidden md:block">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{t("home.prop.floors")}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{t("home.prop.rooms")}</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3 font-medium">{t("home.prop.label")}</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("home.prop.title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
              {t("home.prop.body")}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                    <Icon size={20} className="text-gray-600 dark:text-gray-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{label}</span>
                </div>
              ))}
            </div>

            <Link
              to="/property"
              className="inline-flex items-center gap-2 text-gray-900 dark:text-white font-medium hover:gap-3 transition-all"
            >
              {t("home.prop.cta")} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
