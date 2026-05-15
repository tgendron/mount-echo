import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { navLinks } from "../../config/navigation";
import { useTheme } from "../../contexts/ThemeContext";
import { useLocale } from "../../contexts/LocaleContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const isHeroPage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#F8F5F0]/95 dark:bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-[#0B0B0B]/8 dark:border-white/8"
          : isHeroPage
            ? "bg-transparent"
            : "bg-[#F8F5F0]/95 dark:bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-[#0B0B0B]/8 dark:border-white/8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link
            to="/"
            className={`font-serif text-lg lg:text-xl font-bold tracking-tight transition-colors ${
              !scrolled && isHeroPage
                ? "text-white"
                : "text-[#0B0B0B] dark:text-white"
            }`}
          >
            Mount Echo
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={`flex items-center gap-1 text-[13px] font-medium transition-colors ${
                      !scrolled && isHeroPage
                        ? "text-white/70 hover:text-white"
                        : "text-[#0B0B0B]/60 dark:text-white/60 hover:text-[#0B0B0B] dark:hover:text-white"
                    }`}
                  >
                    {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {dropdownOpen && <div className="absolute top-full left-0 h-3 w-full" />}
                  <div
                    className={`absolute top-full left-0 pt-3 transition-all duration-150 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="w-52 bg-white dark:bg-[#141414] rounded-2xl shadow-2xl shadow-black/10 dark:shadow-black/40 border border-[#0B0B0B]/6 dark:border-white/8 py-1.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block px-4 py-2.5 text-[13px] text-[#0B0B0B]/70 dark:text-white/70 hover:text-[#0B0B0B] dark:hover:text-white hover:bg-[#F8F5F0] dark:hover:bg-white/5 transition-colors"
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
                  className={`text-[13px] font-medium transition-colors ${
                    location.pathname === link.path
                      ? (!scrolled && isHeroPage ? "text-white" : "text-[#0B0B0B] dark:text-white")
                      : (!scrolled && isHeroPage
                          ? "text-white/70 hover:text-white"
                          : "text-[#0B0B0B]/60 dark:text-white/60 hover:text-[#0B0B0B] dark:hover:text-white")
                  }`}
                >
                  {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                </Link>
              )
            )}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-1.5 rounded-full transition-colors ${
                !scrolled && isHeroPage
                  ? "text-white/50 hover:text-white hover:bg-white/10"
                  : "text-[#0B0B0B]/40 dark:text-white/40 hover:text-[#0B0B0B] dark:hover:text-white hover:bg-[#0B0B0B]/6 dark:hover:bg-white/8"
              }`}
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Language toggle */}
            <button
              onClick={() => setLocale(locale === "en" ? "fr" : "en")}
              className={`text-[11px] font-medium tracking-widest transition-colors ${
                !scrolled && isHeroPage
                  ? "text-white/50 hover:text-white"
                  : "text-[#0B0B0B]/40 dark:text-white/40 hover:text-[#0B0B0B] dark:hover:text-white"
              }`}
              aria-label="Toggle language"
            >
              {locale === "en" ? "FR" : "EN"}
            </button>

            <Link
              to="/book"
              className={`btn text-[13px] !py-2 !px-5 ${
                !scrolled && isHeroPage ? "btn-ghost-light" : "btn-primary"
              }`}
            >
              {t("nav.book")}
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-1.5 transition-colors ${
              !scrolled && isHeroPage
                ? "text-white/70"
                : "text-[#0B0B0B]/70 dark:text-white/70"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#F8F5F0] dark:bg-[#0B0B0B] border-t border-[#0B0B0B]/8 dark:border-white/8">
          <div className="px-6 py-5 space-y-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <p className="px-2 py-2 text-[10px] font-medium text-[#0B0B0B]/40 dark:text-white/40 uppercase tracking-[0.3em]">
                    {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                  </p>
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block px-2 py-2.5 text-[14px] text-[#0B0B0B]/70 dark:text-white/70 hover:text-[#0B0B0B] dark:hover:text-white"
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
                  className="block px-2 py-2.5 text-[14px] font-medium text-[#0B0B0B]/70 dark:text-white/70 hover:text-[#0B0B0B] dark:hover:text-white"
                >
                  {navLabelMap[link.label] ? t(navLabelMap[link.label]) : link.label}
                </Link>
              )
            )}
            <div className="flex items-center gap-3 px-2 pt-3 border-t border-[#0B0B0B]/8 dark:border-white/8 mt-2">
              <button
                onClick={toggleTheme}
                className="p-1.5 text-[#0B0B0B]/40 dark:text-white/40 hover:text-[#0B0B0B] dark:hover:text-white transition-colors"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setLocale(locale === "en" ? "fr" : "en")}
                className="text-[11px] font-medium tracking-widest text-[#0B0B0B]/40 dark:text-white/40 hover:text-[#0B0B0B] dark:hover:text-white transition-colors"
              >
                {locale === "en" ? "FR" : "EN"}
              </button>
            </div>
            <div className="pt-3">
              <Link
                to="/book"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full"
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
