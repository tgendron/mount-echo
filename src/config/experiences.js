import { corporateTheme } from "../themes/corporate";
import { influencerTheme } from "../themes/influencer";
import { fastingTheme } from "../themes/fasting";
import { codingTheme } from "../themes/coding";
import { claudeCampTheme } from "../themes/claudecamp";

export const experiences = {
  "corporate-offsites": corporateTheme,
  "influencer-filming":  influencerTheme,
  "fasting-retreats":    fastingTheme,
  "coding-bootcamps":    codingTheme,
  "claude-camp":         claudeCampTheme,
};

export const experienceList = Object.values(experiences);
