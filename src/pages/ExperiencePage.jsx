import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { experiences } from "../config/experiences";
import { useTheme } from "../hooks/useTheme";
import SEO from "../components/common/SEO";
import ExperienceHero from "../components/experience/ExperienceHero";
import ExperienceIntro from "../components/experience/ExperienceIntro";
import ExperienceHighlights from "../components/experience/ExperienceHighlights";
import ExperienceGallery from "../components/experience/ExperienceGallery";
import ExperienceItinerary from "../components/experience/ExperienceItinerary";
import ExperienceAmenities from "../components/experience/ExperienceAmenities";
import ExperienceLocal from "../components/experience/ExperienceLocal";
import ExperiencePricing from "../components/experience/ExperiencePricing";
import ExperienceCTA from "../components/experience/ExperienceCTA";

// Neutral dark surfaces used in dark mode. Brand hues (primary/secondary/accent)
// and the already-dark hero are preserved; only the page surfaces flip so themed
// experience pages respond to the light/dark toggle like the rest of the site.
const darkSurfaces = {
  background: "#0B0B0B",
  surface: "#141414",
  text: "#F0EDE6",
  textMuted: "#9CA3AF",
};

export default function ExperiencePage() {
  const { slug } = useParams();
  const { theme: mode } = useTheme();
  const theme = experiences[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!theme) return <Navigate to="/" replace />;

  const dark = mode === "dark";
  const activeTheme = dark
    ? { ...theme, colors: { ...theme.colors, ...darkSurfaces } }
    : theme;
  const c = activeTheme.colors;

  return (
    <div
      style={{
        "--color-primary": c.primary,
        "--color-secondary": c.secondary,
        "--color-accent": c.accent,
        "--color-background": c.background,
        "--color-surface": c.surface,
        "--color-text": c.text,
        "--color-text-muted": c.textMuted,
        "--color-hero-bg": c.heroBg,
        "--color-hero-text": c.heroText,
      }}
    >
      <SEO
        title={theme.name}
        description={theme.copy.heroSubheadline}
        path={`/experience/${theme.slug}`}
      />
      <ExperienceHero theme={activeTheme} />
      <ExperienceIntro theme={activeTheme} />
      <ExperienceHighlights theme={activeTheme} />
      <ExperienceGallery theme={activeTheme} />
      <ExperienceItinerary theme={activeTheme} />
      <ExperienceAmenities theme={activeTheme} />
      <ExperienceLocal theme={activeTheme} />
      <ExperiencePricing theme={activeTheme} />
      <ExperienceCTA theme={activeTheme} />
    </div>
  );
}
