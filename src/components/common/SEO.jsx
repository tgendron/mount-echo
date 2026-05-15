import { Helmet } from "react-helmet-async";

const defaults = {
  siteName: "Mount Echo",
  siteUrl: "https://mountecho.com",
  description: "Curated week-long experiences in nature. Corporate retreats, creative residencies, wellness journeys, and coding intensives.",
};

export default function SEO({ title, description, path = "", ogType = "website" }) {
  const fullTitle = title ? `${title} | ${defaults.siteName}` : `${defaults.siteName} | Curated Week-Long Experiences in Nature`;
  const desc = description || defaults.description;
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
