import { useEffect, useState } from "react";
import { Mail, Phone, Calendar, Users, CheckCircle, CreditCard } from "lucide-react";
import Container from "../components/common/Container";
import SEO from "../components/common/SEO";
import { useLocale } from "../hooks/useLocale";

// Replace with your Formspree form ID after creating one at https://formspree.io
const FORMSPREE_ID = "xpwzgkby";

// Stripe Payment Link for the $500 deposit. Create one in the Stripe dashboard
// (Payment Links → fixed amount $500) and set VITE_STRIPE_DEPOSIT_URL.
const DEPOSIT_URL = import.meta.env.VITE_STRIPE_DEPOSIT_URL;

export default function BookingInquiry() {
  const { t } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.target);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:hello@mountecho.com?subject=Booking Inquiry&body=${encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nExperience: ${data.get("experience")}\nDates: ${data.get("dates")}\nGroup Size: ${data.get("groupSize")}\n\n${data.get("message")}`
      )}`;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title={t("nav.book")}
        description={t("seo.book.desc")}
        path="/book"
      />
      <section className="bg-gray-900 py-24 md:py-32">
        <Container className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4 font-medium">{t("book.label")}</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            {t("book.title")}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t("book.subtitle")}
          </p>
        </Container>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <Container>
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-3">{t("book.success.title")}</h2>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                    {t("book.success.body")}
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white mb-8">{t("book.form.title")}</h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="bk-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{t("book.form.name")}</label>
                        <input id="bk-name" name="name" type="text" required className="w-full rounded-lg border border-gray-200 dark:border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder={t("book.form.name.ph")} />
                      </div>
                      <div>
                        <label htmlFor="bk-email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{t("book.form.email")}</label>
                        <input id="bk-email" name="email" type="email" required className="w-full rounded-lg border border-gray-200 dark:border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder={t("book.form.email.ph")} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bk-experience" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{t("book.form.experience")}</label>
                      <select id="bk-experience" name="experience" required className="w-full rounded-lg border border-gray-200 dark:border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white">
                        <option value="">{t("book.form.experience.ph")}</option>
                        <option value="corporate">{t("book.form.experience.corporate")}</option>
                        <option value="influencer">{t("book.form.experience.influencer")}</option>
                        <option value="fasting">{t("book.form.experience.fasting")}</option>
                        <option value="coding">{t("book.form.experience.coding")}</option>
                        <option value="custom">{t("book.form.experience.custom")}</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="bk-dates" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{t("book.form.dates")}</label>
                        <input id="bk-dates" name="dates" type="date" min={today} className="w-full rounded-lg border border-gray-200 dark:border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white [color-scheme:light] dark:[color-scheme:dark]" />
                      </div>
                      <div>
                        <label htmlFor="bk-group" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{t("book.form.group")}</label>
                        <input id="bk-group" name="groupSize" type="text" className="w-full rounded-lg border border-gray-200 dark:border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder={t("book.form.group.ph")} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="bk-message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">{t("book.form.message")}</label>
                      <textarea
                        id="bk-message" name="message"
                        rows={5}
                        className="w-full rounded-lg border border-gray-200 dark:border-gray-600 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent resize-none bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                        placeholder={t("book.form.message.ph")}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-primary text-base w-full sm:w-auto px-10 py-4 disabled:opacity-60"
                      style={{ backgroundColor: "#1a365d" }}
                    >
                      {submitting ? t("book.form.sending") : t("book.form.submit")}
                    </button>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">{t("book.form.note")}</p>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 sticky top-28">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-6">{t("book.sidebar.title")}</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, titleKey: "book.sidebar.response", descKey: "book.sidebar.response.desc" },
                    { icon: Calendar, titleKey: "book.sidebar.planning", descKey: "book.sidebar.planning.desc" },
                    { icon: Users, titleKey: "book.sidebar.concierge", descKey: "book.sidebar.concierge.desc" },
                    { icon: Phone, titleKey: "book.sidebar.phone", descKey: "book.sidebar.phone.desc" },
                  ].map(({ icon: Icon, titleKey, descKey }) => (
                    <div key={titleKey} className="flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white dark:bg-gray-900 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-gray-600 dark:text-gray-300" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{t(titleKey)}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{t(descKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deposit */}
              <div className="mt-6 bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <CreditCard size={22} className="text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{t("book.deposit.title")}</h3>
                <p className="font-serif text-3xl font-bold text-white mb-2">$500 <span className="text-base font-sans font-normal text-gray-400">CAD</span></p>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">{t("book.deposit.desc")}</p>
                {DEPOSIT_URL ? (
                  <a
                    href={DEPOSIT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full dark:!bg-white dark:!text-gray-900"
                  >
                    {t("book.deposit.cta")}
                  </a>
                ) : (
                  <p className="text-xs text-gray-400 italic">{t("book.deposit.soon")}</p>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
