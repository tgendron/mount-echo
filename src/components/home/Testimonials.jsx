import { Star } from "lucide-react";
import { useLocale } from "../../contexts/LocaleContext";

export default function Testimonials() {
  const { t } = useLocale();

  const testimonials = [
    {
      quote: t("testimonial.1.quote"),
      author: t("testimonial.1.author"),
      role: t("testimonial.1.role"),
      experience: t("testimonial.1.exp"),
    },
    {
      quote: t("testimonial.2.quote"),
      author: t("testimonial.2.author"),
      role: t("testimonial.2.role"),
      experience: t("testimonial.2.exp"),
    },
    {
      quote: t("testimonial.3.quote"),
      author: t("testimonial.3.author"),
      role: t("testimonial.3.role"),
      experience: t("testimonial.3.exp"),
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-3 font-medium">{t("home.test.label")}</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("home.test.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.author} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 text-[15px]">"{item.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{item.author}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">{item.role}</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">{item.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
