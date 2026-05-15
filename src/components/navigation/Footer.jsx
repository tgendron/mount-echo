import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLocale } from "../../contexts/LocaleContext";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Mount Echo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">{t("footer.experiences")}</h4>
            <ul className="space-y-2">
              <li><Link to="/experience/corporate-offsites" className="text-sm text-gray-300 hover:text-white transition-colors">{t("exp.corporate.name")}</Link></li>
              <li><Link to="/experience/influencer-filming" className="text-sm text-gray-300 hover:text-white transition-colors">{t("exp.influencer.name")}</Link></li>
              <li><Link to="/experience/fasting-retreats" className="text-sm text-gray-300 hover:text-white transition-colors">{t("exp.fasting.name")}</Link></li>
              <li><Link to="/experience/coding-bootcamps" className="text-sm text-gray-300 hover:text-white transition-colors">{t("exp.coding.name")}</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              <li><Link to="/property" className="text-sm text-gray-300 hover:text-white transition-colors">{t("nav.property")}</Link></li>
              <li><Link to="/journal" className="text-sm text-gray-300 hover:text-white transition-colors">{t("nav.journal")}</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/book" className="text-sm text-gray-300 hover:text-white transition-colors">{t("nav.book")}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} className="text-gray-500" />
                hello@mountecho.com
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} className="text-gray-500" />
                (555) 123-4567
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-300">
                <MapPin size={16} className="text-gray-500 mt-0.5" />
                Pacific Northwest
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Mount Echo. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
