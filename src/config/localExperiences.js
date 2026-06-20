// Verified nearby experiences for guests, mapped to the retreat types they suit.
// Distances are approximate driving times from 10 chemin du Mont Echo, Knowlton
// (Lac-Brome), QC. Sourced from a fact-checked research pass — every entry rests
// on primary sources (official operator sites, the Town of Brome Lake, and the
// regional tourism authorities). `suits` references experience slugs from
// src/config/experiences.js.
//
// category drives the icon (see ExperienceLocal.jsx): one of
// "outdoor" | "adventure" | "wellness" | "food" | "culture".

export const localExperiences = [
  {
    id: "lac-brome-path",
    name: "Lac-Brome Path",
    category: "outdoor",
    distance: "~5 min",
    season: "Four-season",
    description:
      "An 11.15 km lakeshore trail from Knowlton village to Foster — walking and cycling in summer, cross-country skiing and snowshoeing in winter.",
    suits: ["corporate-offsites", "coding-bootcamps", "claude-camp", "fasting-retreats", "influencer-filming"],
    url: "https://tourismelacbrome.com/en/attraction/sentier-argyll/",
  },
  {
    id: "bromont-montagne",
    name: "Bromont, montagne d'expériences",
    category: "adventure",
    distance: "~20–25 min",
    season: "Four-season",
    description:
      "A four-season mountain resort with a dedicated corporate-events program (rentable venues up to ~175 people, catering), winter skiing, and 20+ chairlift-served downhill bike trails in summer.",
    suits: ["corporate-offsites", "coding-bootcamps", "claude-camp", "influencer-filming"],
    url: "https://www.bromontmontagne.com/en/",
  },
  {
    id: "mont-sutton",
    name: "Mont Sutton",
    category: "adventure",
    distance: "~25–30 min",
    season: "Four-season",
    description:
      "Natural-snow gladed skiing with a reputation as the best in Canada, plus summer hiking, mountain biking, disc golf, chairlift rides, and a zipline.",
    suits: ["corporate-offsites", "coding-bootcamps", "claude-camp", "influencer-filming"],
    url: "https://montsutton.com/en/",
  },
  {
    id: "balnea",
    name: "BALNEA Spa",
    category: "wellness",
    distance: "~22 min",
    season: "Four-season",
    description:
      "A Scandinavian thermal spa with lake and mountain views and a hot–cold–rest ritual, named one of the Top 10 Best Nordic Spas of 2025 by Spas of America.",
    suits: ["fasting-retreats", "corporate-offsites", "influencer-filming"],
    url: "https://www.balnea.ca/en/",
  },
  {
    id: "auberge-yoga-salamandre",
    name: "Auberge Yoga Salamandre",
    category: "wellness",
    distance: "~10 min",
    season: "Four-season",
    description:
      "A riverside yoga lodge in Lac-Brome offering classes, partner massage therapy, and co-working space — available for exclusive group buyouts.",
    suits: ["fasting-retreats", "corporate-offsites", "claude-camp"],
    url: "https://aubergeyogasalamandre.com/",
  },
  {
    id: "the-well",
    name: "The Well",
    category: "wellness",
    distance: "~5 min",
    season: "Four-season",
    description:
      "An in-village yoga and wellness studio — Hatha, Vinyasa, Yin, Pilates (mat and reformer), Essentrics, and meditation — with private sessions bookable via Rent the Well.",
    suits: ["fasting-retreats", "claude-camp"],
    url: "https://www.knowltonwell.com/",
  },
  {
    id: "brome-missisquoi-wine-route",
    name: "Brome-Missisquoi Wine Route",
    category: "food",
    distance: "~20–30 min",
    season: "Best May–Oct",
    description:
      "A marked circuit of 24 vineyards and cideries — roughly a third of Quebec's wine production — including Côtes d'Ardoise (Quebec's oldest vineyard, est. 1980) and l'Orpailleur.",
    suits: ["influencer-filming", "corporate-offsites", "fasting-retreats"],
    url: "https://tourismebrome-missisquoi.ca/en/activity/the-wine-route/",
  },
  {
    id: "brome-lake-ducks",
    name: "Brome Lake Ducks",
    category: "food",
    distance: "~10 min",
    season: "Four-season",
    description:
      "Canada's oldest specialized Peking duck producer, raising ducks on Brome Lake's shores since 1912 — a distinctive farm-to-table story with a farm boutique.",
    suits: ["influencer-filming", "corporate-offsites", "fasting-retreats"],
    url: "https://canardsdulacbrome.com/en/",
  },
  {
    id: "knowlton-heritage",
    name: "Knowlton Village & Lac-Brome Museum",
    category: "culture",
    distance: "~5 min",
    season: "Four-season",
    description:
      "A walkable Victorian heritage core (the free self-guided Knowlton Circuit, 17 stops) and the Lac-Brome Museum — photogenic backdrops and local history.",
    suits: ["influencer-filming", "corporate-offsites", "coding-bootcamps", "claude-camp", "fasting-retreats"],
    url: "https://tourismelacbrome.com/en/attraction/the-knowlton-circuit/",
  },
];

export function localExperiencesFor(slug) {
  return localExperiences.filter((x) => x.suits.includes(slug));
}
