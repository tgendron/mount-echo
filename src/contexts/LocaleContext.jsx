import { useState, useEffect, useCallback } from "react";
import { LocaleContext } from "./locale-context";
import en from "../i18n/en";
import fr from "../i18n/fr";

const translations = { en, fr };

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
