// Tenant portal data for the two long-term rental units at 10 and 12 chemin du
// Mont Echo. Figures below are PLACEHOLDERS — replace with the real lease terms.
// Prose is bilingual ({ en, fr }) and resolved at render via src/i18n/localize.js.
// Dates are ISO strings; `dueDay` is the day of the month rent is due.

export const unitIds = ["10", "12"];

export const contacts = {
  manager: { en: "Mount Echo Management", fr: "Gestion Mount Echo" },
  email: "hello@mountecho.com",
  phone: "(555) 123-4567",
  emergency: { en: "Emergencies (24/7): call 911, then the management line.", fr: "Urgences (24/7) : composez le 911, puis la ligne de gestion." },
};

// Building-wide notices shown to both units.
export const sharedUpdates = [
  {
    id: "u-recycling",
    date: "2026-06-15",
    tag: "notice",
    title: { en: "Recycling pickup moves to Tuesdays", fr: "La collecte du recyclage passe au mardi" },
    body: {
      en: "Starting July 1, Lac-Brome collects recycling on Tuesdays. Bins out by 7 am, please.",
      fr: "À partir du 1er juillet, Lac-Brome ramasse le recyclage le mardi. Bacs sortis avant 7 h, s’il vous plaît.",
    },
  },
  {
    id: "u-driveway",
    date: "2026-06-02",
    tag: "maintenance",
    title: { en: "Driveway resurfacing — June 24", fr: "Resurfaçage de l’entrée — 24 juin" },
    body: {
      en: "The shared driveway will be closed 8 am–4 pm on June 24. Please park on chemin du Mont Echo that day.",
      fr: "L’entrée commune sera fermée de 8 h à 16 h le 24 juin. Merci de stationner sur le chemin du Mont Echo ce jour-là.",
    },
  },
];

// Building-wide calendar events (in addition to each unit's recurring rent due date).
export const sharedEvents = [
  { id: "e-driveway", date: "2026-06-24", type: "maintenance", title: { en: "Driveway closed 8–4", fr: "Entrée fermée 8 h–16 h" } },
  { id: "e-inspect", date: "2026-07-08", type: "inspection", title: { en: "Annual smoke-detector check", fr: "Vérification annuelle des détecteurs de fumée" } },
  { id: "e-recycle", date: "2026-07-07", type: "notice", title: { en: "First Tuesday recycling pickup", fr: "Première collecte du recyclage le mardi" } },
];

export const units = {
  10: {
    id: "10",
    address: "10 chemin du Mont Echo, Knowlton (Lac-Brome), QC",
    name: { en: "Unit 10", fr: "Unité 10" },
    tagline: { en: "The lakeside unit", fr: "L’unité côté lac" },
    about: {
      en: "A two-bedroom unit on the lower slope with a covered porch facing Brome Lake. Radiant heated floors, a wood-burning stove in the living room, and direct access to the Lac-Brome Path from the back gate.",
      fr: "Un deux-chambres sur le bas de la pente, avec une galerie couverte face au lac Brome. Planchers chauffants, poêle à bois au salon et accès direct au sentier du Lac-Brome par la barrière arrière.",
    },
    view: {
      en: "South-west exposure over Brome Lake. Golden-hour light from the porch, and the Sutton hills on clear days.",
      fr: "Exposition sud-ouest sur le lac Brome. Lumière dorée depuis la galerie, et les collines de Sutton par temps clair.",
    },
    numbers: {
      rent: 1850, currency: "CAD", dueDay: 1, deposit: 925,
      leaseStart: "2026-07-01", leaseEnd: "2027-06-30",
      sqft: 1100, bedrooms: 2, bathrooms: 1, parking: 1,
    },
    features: [
      { en: "Wood-burning stove", fr: "Poêle à bois" },
      { en: "Radiant heated floors", fr: "Planchers chauffants" },
      { en: "Covered lakeside porch", fr: "Galerie couverte côté lac" },
      { en: "In-unit washer & dryer", fr: "Laveuse et sécheuse dans l’unité" },
      { en: "Trail access from back gate", fr: "Accès au sentier par la barrière arrière" },
      { en: "1 parking space", fr: "1 place de stationnement" },
    ],
    updates: [
      {
        id: "u10-stove",
        date: "2026-06-10",
        tag: "maintenance",
        title: { en: "Chimney sweep booked for June 30", fr: "Ramonage prévu le 30 juin" },
        body: { en: "The sweep will need access to the stove between 9 and 11 am. No action needed on your end.", fr: "Le ramoneur devra accéder au poêle entre 9 h et 11 h. Aucune action requise de votre part." },
      },
    ],
    events: [
      { id: "e10-sweep", date: "2026-06-30", type: "maintenance", title: { en: "Chimney sweep, 9–11 am", fr: "Ramonage, 9 h–11 h" } },
    ],
  },
  12: {
    id: "12",
    address: "12 chemin du Mont Echo, Knowlton (Lac-Brome), QC",
    name: { en: "Unit 12", fr: "Unité 12" },
    tagline: { en: "The ridge unit", fr: "L’unité de la crête" },
    about: {
      en: "A bright three-bedroom unit on the upper slope with a wraparound deck and a dedicated office nook. Fibre internet, a heat pump for summer cooling, and skylights in every bedroom.",
      fr: "Un trois-chambres lumineux sur le haut de la pente, avec terrasse panoramique et coin bureau dédié. Internet par fibre, thermopompe pour l’été et puits de lumière dans chaque chambre.",
    },
    view: {
      en: "Elevated 180° view over the valley and the village of Knowlton. Sunrise from the east deck; the Green Mountains on the horizon.",
      fr: "Vue surélevée à 180° sur la vallée et le village de Knowlton. Lever du soleil depuis la terrasse est ; les Montagnes Vertes à l’horizon.",
    },
    numbers: {
      rent: 2250, currency: "CAD", dueDay: 1, deposit: 1125,
      leaseStart: "2026-08-01", leaseEnd: "2027-07-31",
      sqft: 1450, bedrooms: 3, bathrooms: 2, parking: 2,
    },
    features: [
      { en: "Wraparound deck", fr: "Terrasse panoramique" },
      { en: "Dedicated office nook", fr: "Coin bureau dédié" },
      { en: "Fibre internet (1 Gbps)", fr: "Internet par fibre (1 Gbps)" },
      { en: "Heat pump (heating & cooling)", fr: "Thermopompe (chauffage et climatisation)" },
      { en: "Skylights in every bedroom", fr: "Puits de lumière dans chaque chambre" },
      { en: "2 parking spaces", fr: "2 places de stationnement" },
    ],
    updates: [
      {
        id: "u12-heatpump",
        date: "2026-06-05",
        tag: "maintenance",
        title: { en: "Heat pump filter replaced", fr: "Filtre de la thermopompe remplacé" },
        body: { en: "Filter changed on June 5. Next service is scheduled for December.", fr: "Filtre changé le 5 juin. Prochain entretien prévu en décembre." },
      },
    ],
    events: [
      { id: "e12-hp", date: "2026-12-05", type: "maintenance", title: { en: "Heat pump service", fr: "Entretien de la thermopompe" } },
    ],
  },
};
