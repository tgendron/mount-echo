import { Helmet } from "react-helmet-async";

// siteUrl is the canonical production origin. Swap this single constant (and the
// matching values in index.html, public/robots.txt, public/sitemap.xml) if a
// custom domain is connected later.
const defaults = {
  siteName: "Mount Echo",
  siteUrl: "https://mount-echo.vercel.app",
  description: "Curated week-long experiences in nature. Corporate retreats, creative residencies, wellness journeys, and coding intensives.",
  image: "https://mount-echo.vercel.app/og.png",
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
      <meta property="og:image" content={defaults.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={defaults.image} />
    </Helmet>
  );
}
