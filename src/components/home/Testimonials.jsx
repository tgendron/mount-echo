import { useLocale } from "../../hooks/useLocale";

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
    <section className="py-24 md:py-32 bg-[#F8F5F0] dark:bg-[#141414]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Label */}
        <p className="label-overline mb-16">{t("home.test.label")}</p>

        {/* Testimonials — horizontal rule separated */}
        <div className="divide-y divide-[#0B0B0B]/10 dark:divide-white/10">
          {testimonials.map((item) => (
            <div
              key={item.author}
              className="py-10 md:py-12 grid md:grid-cols-[1fr_auto] gap-6 md:gap-16 items-start"
            >
              {/* Quote */}
              <div>
                <p className="font-serif text-xl md:text-2xl text-[#0B0B0B] dark:text-white leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="shrink-0 md:text-right">
                <p className="text-[13px] font-medium text-[#0B0B0B] dark:text-white">{item.author}</p>
                <p className="text-[12px] text-[#0B0B0B]/45 dark:text-white/40 mt-0.5">{item.role}</p>
                <p className="font-mono text-[10px] text-[#0B0B0B]/30 dark:text-white/25 mt-2 tracking-[0.2em] uppercase">{item.experience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
