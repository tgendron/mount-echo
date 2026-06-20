// Prose fields are bilingual ({ en, fr }) and resolved at render via
// src/i18n/localize.js. Keys used for logic (id, icon, beds, category, type,
// distance) stay as plain strings.
export const property = {
  name: "Mount Echo",
  tagline: { en: "Where intention meets elevation", fr: "Où l’intention rencontre l’altitude" },
  description: {
    en: "A curated hospitality property nestled in nature, designed for transformative week-long experiences. Four private bedrooms across two floors, shared common spaces built for connection, and the wild beauty of the outdoors just beyond the door.",
    fr: "Un domaine d’hospitalité niché dans la nature, conçu pour des expériences transformatrices d’une semaine. Quatre chambres privées sur deux étages, des espaces communs pensés pour la connexion et la beauté sauvage du plein air juste devant la porte.",
  },
  location: {
    address: "10 chemin du Mont Echo, Knowlton (Lac-Brome), QC",
    region: "Eastern Townships, Québec",
    elevation: "2,400 ft",
    nearestAirport: "Montréal-Trudeau (YUL) ~1 hr 15 min",
    directions: "Detailed directions provided upon booking confirmation.",
  },
  floors: [
    {
      id: "floor-1",
      name: { en: "Ground Floor", fr: "Rez-de-chaussée" },
      description: {
        en: "Connected to the gardens and common spaces, the ground floor rooms offer easy flow between private rest and shared activity.",
        fr: "Reliées aux jardins et aux espaces communs, les chambres du rez-de-chaussée offrent une transition fluide entre le repos privé et l’activité partagée.",
      },
      rooms: [
        {
          id: "f1-r1",
          name: { en: "The Canopy Room", fr: "La chambre Canopée" },
          beds: "King",
          sqft: 320,
          description: {
            en: "Floor-to-ceiling windows frame the tree canopy. Morning light filters through the leaves.",
            fr: "Des fenêtres pleine hauteur encadrent la canopée. La lumière du matin filtre à travers les feuilles.",
          },
          features: [
            { en: "King bed", fr: "Lit king" },
            { en: "En-suite bathroom", fr: "Salle de bain attenante" },
            { en: "Writing desk", fr: "Bureau d’écriture" },
            { en: "Garden view", fr: "Vue sur le jardin" },
            { en: "Heated floors", fr: "Planchers chauffants" },
          ],
        },
        {
          id: "f1-r2",
          name: { en: "The Creek Room", fr: "La chambre Ruisseau" },
          beds: "Queen",
          sqft: 280,
          description: {
            en: "Fall asleep to the sound of the creek below. A grounding space designed for deep rest.",
            fr: "Endormez-vous au son du ruisseau en contrebas. Un espace apaisant conçu pour un repos profond.",
          },
          features: [
            { en: "Queen bed", fr: "Lit queen" },
            { en: "En-suite bathroom", fr: "Salle de bain attenante" },
            { en: "Reading nook", fr: "Coin lecture" },
            { en: "Creek view", fr: "Vue sur le ruisseau" },
            { en: "Blackout curtains", fr: "Rideaux occultants" },
          ],
        },
      ],
    },
    {
      id: "floor-2",
      name: { en: "Upper Floor", fr: "Étage supérieur" },
      description: {
        en: "Elevated views and extra privacy. The upper floor rooms sit above the treeline with panoramic mountain vistas.",
        fr: "Vues élevées et intimité accrue. Les chambres de l’étage dominent la cime des arbres, avec des panoramas de montagne.",
      },
      rooms: [
        {
          id: "f2-r1",
          name: { en: "The Summit Room", fr: "La chambre Sommet" },
          beds: "King",
          sqft: 340,
          description: {
            en: "The highest point on the property. Wake up above the clouds with 180-degree mountain views.",
            fr: "Le point le plus haut du domaine. Réveillez-vous au-dessus des nuages avec une vue de montagne à 180 degrés.",
          },
          features: [
            { en: "King bed", fr: "Lit king" },
            { en: "En-suite bathroom", fr: "Salle de bain attenante" },
            { en: "Private balcony", fr: "Balcon privé" },
            { en: "Mountain view", fr: "Vue sur la montagne" },
            { en: "Soaking tub", fr: "Baignoire profonde" },
          ],
        },
        {
          id: "f2-r2",
          name: { en: "The Ridge Room", fr: "La chambre Crête" },
          beds: "Queen",
          sqft: 290,
          description: {
            en: "Perched along the ridge with views of the valley below. Warm wood and soft textiles throughout.",
            fr: "Perchée sur la crête avec vue sur la vallée en contrebas. Bois chaleureux et textiles doux partout.",
          },
          features: [
            { en: "Queen bed", fr: "Lit queen" },
            { en: "En-suite bathroom", fr: "Salle de bain attenante" },
            { en: "Window seat", fr: "Banquette de fenêtre" },
            { en: "Valley view", fr: "Vue sur la vallée" },
            { en: "Skylights", fr: "Puits de lumière" },
          ],
        },
      ],
    },
  ],
  commonAreas: [
    {
      id: "kitchen",
      name: { en: "Chef's Kitchen", fr: "Cuisine de chef" },
      description: {
        en: "Professional-grade kitchen with island seating for 8. Designed for communal cooking or private chef service.",
        fr: "Cuisine de qualité professionnelle avec îlot pour 8 personnes. Conçue pour cuisiner ensemble ou pour un service de chef privé.",
      },
    },
    {
      id: "great-room",
      name: { en: "The Great Room", fr: "Le grand salon" },
      description: {
        en: "Double-height ceilings, stone fireplace, and modular furniture. Configurable for workshops, presentations, or evening gatherings.",
        fr: "Plafonds à double hauteur, foyer en pierre et mobilier modulable. Configurable pour des ateliers, des présentations ou des rassemblements en soirée.",
      },
    },
    {
      id: "deck",
      name: { en: "Wraparound Deck", fr: "Terrasse panoramique" },
      description: {
        en: "500 sq ft of covered outdoor space. Hot tub, fire pit, and views in every direction.",
        fr: "150 m² d’espace extérieur couvert. Spa, foyer extérieur et vues dans toutes les directions.",
      },
    },
    {
      id: "studio",
      name: { en: "The Studio", fr: "Le studio" },
      description: {
        en: "A flexible space with natural light, whiteboards, and AV equipment. Perfect for focused work sessions or creative projects.",
        fr: "Un espace modulable avec lumière naturelle, tableaux blancs et équipement audiovisuel. Parfait pour les sessions de travail concentré ou les projets créatifs.",
      },
    },
  ],
  amenities: [
    { id: "high-speed-wifi", name: { en: "High-Speed WiFi", fr: "WiFi haute vitesse" }, icon: "Wifi", category: "essentials" },
    { id: "chef-service", name: { en: "Private Chef Available", fr: "Chef privé disponible" }, icon: "ChefHat", category: "dining" },
    { id: "full-kitchen", name: { en: "Full Kitchen", fr: "Cuisine complète" }, icon: "CookingPot", category: "dining" },
    { id: "hot-tub", name: { en: "Hot Tub", fr: "Spa" }, icon: "Bath", category: "wellness" },
    { id: "fire-pit", name: { en: "Outdoor Fire Pit", fr: "Foyer extérieur" }, icon: "Flame", category: "outdoor" },
    { id: "hiking-trails", name: { en: "Hiking Trails", fr: "Sentiers de randonnée" }, icon: "Mountain", category: "outdoor" },
    { id: "meeting-room", name: { en: "Meeting Space", fr: "Espace de réunion" }, icon: "Presentation", category: "work" },
    { id: "projector", name: { en: "Projector & Screen", fr: "Projecteur et écran" }, icon: "Monitor", category: "work" },
    { id: "whiteboard", name: { en: "Whiteboards", fr: "Tableaux blancs" }, icon: "PenTool", category: "work" },
    { id: "parking", name: { en: "Free Parking", fr: "Stationnement gratuit" }, icon: "Car", category: "essentials" },
    { id: "ev-charger", name: { en: "EV Charger", fr: "Borne de recharge VÉ" }, icon: "Zap", category: "essentials" },
    { id: "laundry", name: { en: "Washer & Dryer", fr: "Laveuse et sécheuse" }, icon: "Shirt", category: "essentials" },
    { id: "sound-system", name: { en: "Sound System", fr: "Système de son" }, icon: "Music", category: "entertainment" },
    { id: "yoga-deck", name: { en: "Yoga Deck", fr: "Terrasse de yoga" }, icon: "Heart", category: "wellness" },
    { id: "sauna", name: { en: "Dry Sauna", fr: "Sauna sec" }, icon: "Thermometer", category: "wellness" },
    { id: "bikes", name: { en: "Mountain Bikes", fr: "Vélos de montagne" }, icon: "Bike", category: "outdoor" },
  ],
  nearbyNature: [
    {
      name: { en: "Echo Trail Loop", fr: "Boucle du sentier Echo" },
      type: "hiking",
      distance: "0.2 mi",
      description: {
        en: "A gentle 2-mile loop through old-growth forest, starting from the property.",
        fr: "Une boucle douce de 3 km à travers une forêt ancienne, au départ du domaine.",
      },
    },
    {
      name: { en: "Mirror Lake", fr: "Lac Miroir" },
      type: "swimming",
      distance: "0.5 mi",
      description: {
        en: "A pristine alpine lake perfect for morning cold plunges or afternoon swims.",
        fr: "Un lac alpin immaculé, parfait pour les bains froids du matin ou les baignades de l’après-midi.",
      },
    },
    {
      name: { en: "Ridgeline Overlook", fr: "Belvédère de la crête" },
      type: "hiking",
      distance: "1.2 mi",
      description: {
        en: "A moderate climb rewarded with panoramic views of the valley and surrounding peaks.",
        fr: "Une montée modérée récompensée par des vues panoramiques sur la vallée et les sommets environnants.",
      },
    },
    {
      name: { en: "Cedar Creek", fr: "Ruisseau des Cèdres" },
      type: "fishing",
      distance: "0.1 mi",
      description: {
        en: "Runs along the property boundary. Seasonal trout fishing with permit.",
        fr: "Longe la limite du domaine. Pêche à la truite saisonnière avec permis.",
      },
    },
  ],
};
