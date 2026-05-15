import { Camera } from "lucide-react";
import { useLocale } from "../../contexts/LocaleContext";

export default function ExperienceGallery({ theme }) {
  const { t } = useLocale();
  return (
    <section className="py-20" style={{ backgroundColor: theme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-center mb-12"
          style={{ color: theme.colors.text }}
        >
          {t("exp.gallery.title")}
        </h2>
        {/* Placeholder gallery grid — swap with real images */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`rounded-xl overflow-hidden flex items-center justify-center ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
              }`}
              style={{ backgroundColor: `${theme.colors.primary}15` }}
            >
              <Camera size={32} style={{ color: `${theme.colors.primary}40` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
