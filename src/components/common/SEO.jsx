import { Helmet } from "react-helmet-async";
import { useLocale } from "../../hooks/useLocale";

// siteUrl is the canonical production origin. Swap this single constant (and the
// matching values in index.html, public/robots.txt, public/sitemap.xml) if a
// custom domain is connected later.
const defaults = {
  siteName: "Mount Echo",
  siteUrl: "https://mount-echo.vercel.app",
  image: "https://mount-echo.vercel.app/og.png",
};

export default function SEO({ title, description, path = "", ogType = "website" }) {
  const { t } = useLocale();
  const fullTitle = title ? `${title} | ${defaults.siteName}` : `${defaults.siteName} | Curated Week-Long Experiences in Nature`;
  const desc = description || t("seo.default.desc");
  const url = `${defaults.siteUrl}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:image" content={defaults.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={defaults.image} />
    </Helmet>
  );
}
