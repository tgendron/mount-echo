import { useContext } from "react";
import { LocaleContext } from "../contexts/locale-context";

export function useLocale() {
  return useContext(LocaleContext);
}
