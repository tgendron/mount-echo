import { createContext, useContext, useState, useEffect, useCallback } from "react";
import en from "../i18n/en";
import fr from "../i18n/fr";

const translations = { en, fr };
const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    return localStorage.getItem("locale") || "en";
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = useCallback(
    (key) => translations[locale]?.[key] || translations.en[key] || key,
    [locale]
  );

  const setLocale = (l) => setLocaleState(l);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
