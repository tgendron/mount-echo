import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="font-serif text-lg font-bold text-white inline-block mb-4">
              Mount Echo
            </Link>
            <p className="text-[13px] text-white/35 leading-relaxed max-w-[200px]">
              {t("footer.desc")}
            </p>
          </div>

          {/* Experiences */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-5 font-medium">{t("footer.experiences")}</p>
            <ul className="space-y-3">
              {[
                ["corporate-offsites", t("exp.corporate.name")],
                ["influencer-filming", t("exp.influencer.name")],
                ["fasting-retreats",   t("exp.fasting.name")],
                ["coding-bootcamps",   t("exp.coding.name")],
              ].map(([slug, label]) => (
                <li key={slug}>
                  <Link
                    to={`/experience/${slug}`}
                    className="text-[13px] text-white/40 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-5 font-medium">{t("footer.quickLinks")}</p>
            <ul className="space-y-3">
              {[
                ["/property", t("nav.property")],
                ["/journal",  t("nav.journal")],
                ["/about",    t("nav.about")],
                ["/book",     t("nav.book")],
              ].map(([path, label]) => (
                <li key={path}>
                  <Link to={path} className="text-[13px] text-white/40 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 mb-5 font-medium">{t("footer.contact")}</p>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@mountecho.com" className="text-[13px] text-white/40 hover:text-white transition-colors">
                  hello@mountecho.com
                </a>
              </li>
              <li className="text-[13px] text-white/40">{t("footer.location")}</li>
              <li aria-hidden="true" className="font-mono text-[11px] text-white/20 tracking-wider mt-4">45.2200° N</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8 border-t border-white/6">
          <p className="font-mono text-[11px] text-white/35 tracking-wider">
            © {new Date().getFullYear()} MOUNT ECHO
          </p>
          <p className="text-[11px] text-white/35">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
