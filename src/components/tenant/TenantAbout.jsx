import { Section, Callout, PropertyRow } from "./notion";
import { useLocale } from "../../hooks/useLocale";

export default function TenantAbout({ unit, contacts }) {
  const { t } = useLocale();
  return (
    <Section id="about" icon="🏡" title={t("tenant.nav.about")}>
      <p className="text-[15px] leading-relaxed text-[#0B0B0B]/80 dark:text-white/80 mb-6">{unit.about}</p>
      <dl className="mb-6">
        <PropertyRow label={t("tenant.about.address")}>{unit.address}</PropertyRow>
        <PropertyRow label={t("tenant.about.manager")}>{contacts.manager}</PropertyRow>
        <PropertyRow label={t("tenant.about.phone")}>
          <a href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`} className="underline underline-offset-2">{contacts.phone}</a>
        </PropertyRow>
        <PropertyRow label={t("tenant.about.email")}>
          <a href={`mailto:${contacts.email}`} className="underline underline-offset-2">{contacts.email}</a>
        </PropertyRow>
      </dl>
      <Callout icon="🚨" tone="danger">{contacts.emergency}</Callout>
    </Section>
  );
}
