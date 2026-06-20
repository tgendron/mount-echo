// Deep-resolve a config object that contains bilingual leaves of the shape
// { en: "...", fr: "..." } into plain strings for the active locale. Non-bilingual
// values (colors, icon names, plain strings, numbers) pass through unchanged.
// Used to keep prose in config files (themes, property, journal) bilingual while
// components stay locale-agnostic.
export function localize(value, locale) {
  if (Array.isArray(value)) return value.map((v) => localize(v, locale));
  if (value && typeof value === "object") {
    if (typeof value.en === "string" || typeof value.fr === "string") {
      return value[locale] ?? value.en ?? value.fr ?? "";
    }
    const out = {};
    for (const key of Object.keys(value)) out[key] = localize(value[key], locale);
    return out;
  }
  return value;
}
