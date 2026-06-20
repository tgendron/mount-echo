import { corporateTheme } from "../themes/corporate";
import { influencerTheme } from "../themes/influencer";
import { fastingTheme } from "../themes/fasting";
import { codingTheme } from "../themes/coding";

export const experiences = {
  "corporate-offsites": corporateTheme,
  "influencer-filming":  influencerTheme,
  "fasting-retreats":    fastingTheme,
  "coding-bootcamps":    codingTheme,
};

export const experienceList = Object.values(experiences);
