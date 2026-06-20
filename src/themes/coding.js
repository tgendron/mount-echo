// Merged experience: classic coding intensives + the Claude Camp AI-founder
// program, combined into one offering. Prose is bilingual ({ en, fr }) and
// resolved at render via src/i18n/localize.js.
export const codingTheme = {
  slug: "coding-bootcamps",
  name: { en: "Coding & Claude Camp", fr: "Coding & Claude Camp" },
  tagline: {
    en: "Ship code. Build product. Level up — with AI.",
    fr: "Codez. Construisez. Progressez — avec l’IA.",
  },
  colors: {
    primary: "#2d3748",
    secondary: "#4299e1",
    accent: "#68d391",
    background: "#f0f4f8",
    surface: "#ffffff",
    text: "#1a202c",
    textMuted: "#718096",
    heroBg: "#2d3748",
    heroText: "#f0f4f8",
  },
  copy: {
    heroHeadline: { en: "Code Better,\nShip Faster", fr: "Mieux coder,\nlivrer plus vite" },
    heroSubheadline: {
      en: "Immersive week-long intensives for engineering teams and AI-powered founders. Fast internet, deep focus, Claude as your co-pilot, and the breakthroughs that only happen when you unplug from everything else.",
      fr: "Des intensifs immersifs d’une semaine pour les équipes techniques et les fondateurs propulsés par l’IA. Internet rapide, concentration profonde, Claude comme copilote et les percées qui n’arrivent que lorsqu’on se déconnecte de tout le reste.",
    },
    introTitle: { en: "The Developer & Founder Retreat", fr: "La retraite des développeurs et fondateurs" },
    introBody: {
      en: "Mount Echo is purpose-built for deep technical work. Reliable high-speed internet, standing desks, multiple monitors, and spaces designed for pair programming, solo flow, and live AI-assisted building. Whether you're shipping a feature you've been stuck on for weeks or going from MVP to traction with Claude as your co-pilot, step outside for a trail run between sprints — then come back and ship.",
      fr: "Mount Echo est conçu pour le travail technique en profondeur. Internet haute vitesse fiable, bureaux debout, écrans multiples et des espaces pensés pour le pair programming, la concentration solo et la création assistée par l’IA en direct. Que vous livriez une fonctionnalité bloquée depuis des semaines ou que vous passiez du MVP à la traction avec Claude comme copilote, sortez courir sur un sentier entre deux sprints — puis revenez livrer.",
    },
    ctaText: { en: "Book Your Sprint", fr: "Réservez votre sprint" },
  },
  highlights: [
    {
      icon: "Code",
      title: { en: "Dev-Ready Setup", fr: "Équipement prêt à coder" },
      description: {
        en: "Gigabit internet, standing desks, external monitors, and power everywhere you look.",
        fr: "Internet gigabit, bureaux debout, écrans externes et des prises de courant partout.",
      },
    },
    {
      icon: "Zap",
      title: { en: "Build with Claude", fr: "Construire avec Claude" },
      description: {
        en: "Use Claude as your co-pilot for code, copy, and strategy. API access provided — you bring the vision.",
        fr: "Utilisez Claude comme copilote pour le code, le contenu et la stratégie. Accès API fourni — vous apportez la vision.",
      },
    },
    {
      icon: "GitBranch",
      title: { en: "Pair & Cohort", fr: "Paires et cohorte" },
      description: {
        en: "The Great Room and Studio are built for collaborative coding, whiteboarding, reviews, and a small cohort of builders.",
        fr: "Le grand salon et le studio sont conçus pour le code collaboratif, le tableau blanc, les revues et une petite cohorte de bâtisseurs.",
      },
    },
    {
      icon: "Rocket",
      title: { en: "Ship Before You Leave", fr: "Livrez avant de partir" },
      description: {
        en: "The goal isn't a deck or a plan — it's something live, in users' hands, with early signal before checkout Friday.",
        fr: "L’objectif n’est ni un deck ni un plan — c’est quelque chose en ligne, entre les mains des utilisateurs, avec un premier signal avant le départ vendredi.",
      },
    },
  ],
  itinerary: [
    {
      day: { en: "Monday", fr: "Lundi" },
      title: { en: "Setup & Kickoff", fr: "Installation et lancement" },
      items: [
        { en: "Check-in and workspace setup", fr: "Arrivée et installation de l’espace de travail" },
        { en: "Sprint planning & goal setting", fr: "Planification du sprint et définition des objectifs" },
        { en: "Claude tooling setup + workflow audit", fr: "Configuration des outils Claude + audit des flux de travail" },
        { en: "Welcome dinner & lightning talks", fr: "Dîner de bienvenue et présentations éclair" },
      ],
    },
    {
      day: { en: "Tuesday", fr: "Mardi" },
      title: { en: "Deep Work", fr: "Travail en profondeur" },
      items: [
        { en: "Morning standup", fr: "Mêlée matinale" },
        { en: "4-hour focus block", fr: "Bloc de concentration de 4 heures" },
        { en: "Lunch & trail walk", fr: "Déjeuner et marche en sentier" },
        { en: "Afternoon pair programming / AI build sprint", fr: "Pair programming l’après-midi / sprint de création avec l’IA" },
      ],
    },
    {
      day: { en: "Wednesday", fr: "Mercredi" },
      title: { en: "Midweek Review", fr: "Bilan de mi-semaine" },
      items: [
        { en: "Code review & refactor session", fr: "Revue de code et session de refactorisation" },
        { en: "User research sprint — conversations before noon", fr: "Sprint de recherche utilisateur — échanges avant midi" },
        { en: "Afternoon hike to Mirror Lake", fr: "Randonnée l’après-midi vers le lac Miroir" },
        { en: "Architecture & strategy over dinner", fr: "Architecture et stratégie autour du dîner" },
      ],
    },
    {
      day: { en: "Thursday", fr: "Jeudi" },
      title: { en: "Ship It Day", fr: "Jour de livraison" },
      items: [
        { en: "Final sprint push", fr: "Dernière poussée du sprint" },
        { en: "Demo prep & distribution plan with Claude", fr: "Préparation de la démo et plan de distribution avec Claude" },
        { en: "Afternoon presentations & demos", fr: "Présentations et démos l’après-midi" },
        { en: "Celebration dinner & fire pit", fr: "Dîner de célébration et feu de camp" },
      ],
    },
    {
      day: { en: "Friday", fr: "Vendredi" },
      title: { en: "Retro & Departure", fr: "Rétro et départ" },
      items: [
        { en: "Retrospective & knowledge sharing", fr: "Rétrospective et partage des connaissances" },
        { en: "30-day plan built with Claude", fr: "Plan sur 30 jours bâti avec Claude" },
        { en: "Brunch and checkout by noon", fr: "Brunch et départ avant midi" },
      ],
    },
  ],
  featuredAmenities: ["high-speed-wifi", "meeting-room", "whiteboard", "chef-service", "projector", "hot-tub"],
  pricing: {
    headline: { en: "Your Sprint Investment", fr: "Votre investissement sprint" },
    startingAt: "$7,000",
    unit: { en: "per week · full property", fr: "par semaine · domaine complet" },
    includes: [
      { en: "All 4 private bedrooms", fr: "Les 4 chambres privées" },
      { en: "Dedicated workspace & AV", fr: "Espace de travail dédié et audiovisuel" },
      { en: "Full catering (3 meals/day)", fr: "Restauration complète (3 repas/jour)" },
      { en: "High-speed dedicated internet", fr: "Internet dédié haute vitesse" },
      { en: "Claude API access provided", fr: "Accès à l’API Claude fourni" },
      { en: "Concierge & activity planning", fr: "Conciergerie et planification des activités" },
    ],
  },
};
