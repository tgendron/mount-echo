import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { navLinks } from "../../config/navigation";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const openDropdown = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  const navLabelMap = {
    Home: "nav.home",
    Experiences: "nav.experiences",
    "The Property": "nav.property",
    Journal: "nav.journal",
    About: "nav.about",
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="font-serif text-xl lg:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Mount Echo
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors py-2">
                    {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {/* Invisible bridge to prevent gap-triggered close */}
                  {dropdownOpen && <div className="absolute top-full left-0 h-2 w-full" />}
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-150 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div className="w-56 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700 py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-gray-900 dark:text-white"
                      : "text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                </Link>
              )
            )}

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === "en" ? "fr" : "en")}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200 transition-colors uppercase tracking-wide"
              aria-label="Toggle language"
            >
              {locale === "en" ? "FR" : "EN"}
            </button>

            <Link to="/book" className="btn btn-primary text-sm !py-2.5 !px-5">
              {t("nav.book")}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-700 dark:text-gray-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-3 py-2 text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg"
                >
                  {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                </Link>
              )
            )}
            {/* Mobile toggles */}
            <div className="flex items-center gap-2 px-3 py-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setLocale(locale === "en" ? "fr" : "en")}
                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors uppercase tracking-wide"
                aria-label="Toggle language"
              >
                {locale === "en" ? "FR" : "EN"}
              </button>
            </div>
            <div className="pt-2">
              <Link
                to="/book"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full text-sm"
              >
                {t("nav.book")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
