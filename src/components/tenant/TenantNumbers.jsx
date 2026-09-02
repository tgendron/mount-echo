import { Section, StatTile, PropertyRow } from "./notion";
import { useLocale } from "../../hooks/useLocale";

function fmtMoney(n, currency, locale) {
  return new Intl.NumberFormat(locale === "fr" ? "fr-CA" : "en-CA", { style: "currency", currency, maximumFractionDigits: 0 }).format(n);
}
function fmtDate(iso, locale) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString(locale === "fr" ? "fr-CA" : "en-CA", { month: "long", day: "numeric", year: "numeric" });
}
function ordinal(day, locale) {
  if (locale === "fr") return day === 1 ? "1er" : `${day}`;
  const s = ["th", "st", "nd", "rd"], v = day % 100;
  return day + (s[(v - 20) % 10] || s[v] || s[0]);
}

export default function TenantNumbers({ numbers }) {
  const { t, locale } = useLocale();
  const n = numbers;
  return (
    <Section id="numbers" icon="🔢" title={t("tenant.nav.numbers")}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        <StatTile label={t("tenant.numbers.rent")} value={fmtMoney(n.rent, n.currency, locale)} hint={t("tenant.numbers.perMonth")} />
        <StatTile label={t("tenant.numbers.due")} value={ordinal(n.dueDay, locale)} hint={t("tenant.numbers.ofMonth")} />
        <StatTile label={t("tenant.numbers.leaseEnd")} value={fmtDate(n.leaseEnd, locale)} />
        <StatTile label={t("tenant.numbers.deposit")} value={fmtMoney(n.deposit, n.currency, locale)} hint={t("tenant.numbers.held")} />
      </div>
      <dl>
        <PropertyRow label={t("tenant.numbers.leaseStart")}>{fmtDate(n.leaseStart, locale)}</PropertyRow>
        <PropertyRow label={t("tenant.numbers.sqft")}>{n.sqft.toLocaleString(locale === "fr" ? "fr-CA" : "en-CA")} {t("tenant.numbers.sqftUnit")}</PropertyRow>
        <PropertyRow label={t("tenant.numbers.bedrooms")}>{n.bedrooms}</PropertyRow>
        <PropertyRow label={t("tenant.numbers.bathrooms")}>{n.bathrooms}</PropertyRow>
        <PropertyRow label={t("tenant.numbers.parking")}>{n.parking}</PropertyRow>
      </dl>
    </Section>
  );
}
