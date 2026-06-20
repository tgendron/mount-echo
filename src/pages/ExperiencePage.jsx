import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { experiences } from "../config/experiences";
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

export default function ExperiencePage() {
  const { slug } = useParams();
  const theme = experiences[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!theme) return <Navigate to="/" replace />;

  return (
    <div
      style={{
        "--color-primary": theme.colors.primary,
        "--color-secondary": theme.colors.secondary,
        "--color-accent": theme.colors.accent,
        "--color-background": theme.colors.background,
        "--color-surface": theme.colors.surface,
        "--color-text": theme.colors.text,
        "--color-text-muted": theme.colors.textMuted,
        "--color-hero-bg": theme.colors.heroBg,
        "--color-hero-text": theme.colors.heroText,
      }}
    >
      <SEO
        title={theme.name}
        description={theme.copy.heroSubheadline}
        path={`/experience/${theme.slug}`}
      />
      <ExperienceHero theme={theme} />
      <ExperienceIntro theme={theme} />
      <ExperienceHighlights theme={theme} />
      <ExperienceGallery theme={theme} />
      <ExperienceItinerary theme={theme} />
      <ExperienceAmenities theme={theme} />
      <ExperienceLocal theme={theme} />
      <ExperiencePricing theme={theme} />
      <ExperienceCTA theme={theme} />
    </div>
  );
}
