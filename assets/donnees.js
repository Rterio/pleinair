/* Centre de plein air de la Haute-Gaspésie — CONTENU À METTRE À JOUR
   Ce fichier contient les activités du calendrier et les options de location.
   Copiez un bloc { ... }, collez-le et changez le texte. Les activités passées disparaissent toutes seules.

   Icônes disponibles : ski, board, snowshoe, lift, mountain, moon, cup, fire, cabin, tree, snow, sun, users, hike
   ⚠ Les dates, heures et tarifs ci-dessous sont des EXEMPLES à confirmer avec le conseil d'administration. */

window.ACTIVITES = [
  {
    date: "2027-01-03",
    heure: "10 h à 15 h 30",
    titre: "Ouverture de la saison",
    icone: "lift",
    lieu: "Mont Bellevue",
    prix: "Date à confirmer",
    description: "Le remonte-pente se remet en marche! Venez inaugurer la saison en famille. L'ouverture dépend des conditions de neige : surveillez notre page Facebook.",
  },
  {
    date: "2027-01-08",
    heure: "18 h 30 à 21 h 30",
    titre: "Premier ski de soirée",
    icone: "moon",
    lieu: "Pistes éclairées",
    description: "Les vendredis soir, 4 pistes sont éclairées. Ambiance détendue et casse-croûte ouvert au chalet.",
  },
  {
    date: "2027-01-23",
    heure: "10 h à 15 h",
    titre: "Journée d'initiation à la planche",
    icone: "board",
    lieu: "Bas de la montagne",
    description: "Des bénévoles d'expérience accompagnent les débutants pour leurs premières descentes. Location d'équipement sur place.",
  },
  {
    date: "2027-02-13",
    heure: "13 h",
    titre: "Descente aux flambeaux et feu de joie",
    icone: "fire",
    lieu: "Chalet",
    description: "Les skieurs descendent la montagne à la lueur des flambeaux, suivi d'un feu de joie et de chocolat chaud.",
  },
  {
    date: "2027-03-06",
    heure: "Toute la journée",
    titre: "Carnaval de fin de saison",
    icone: "snow",
    lieu: "Tout le site",
    description: "Course amicale, parc à neige, musique et prix de présence pour souligner une belle saison.",
  },
];

window.LOCATION = [
  {
    id: "ski",
    titre: "Ensemble de ski alpin",
    icone: "ski",
    saison: "équipement",
    description: "Skis, bottes et bâtons ajustés sur place par nos bénévoles. Tailles enfants et adultes.",
    tarifs: ["Demi-journée : à venir", "Journée : à venir"],
  },
  {
    id: "planche",
    titre: "Ensemble de planche à neige",
    icone: "board",
    saison: "équipement",
    description: "Planche et bottes, pour débutants comme pour habitués du parc à neige.",
    tarifs: ["Demi-journée : à venir", "Journée : à venir"],
  },
  {
    id: "salle",
    titre: "Salle du chalet",
    icone: "cabin",
    saison: "salle",
    description: "Le chalet avec foyer, bar et casse-croûte, pour une fête d'enfants, un party de bureau ou une réunion.",
    tarifs: ["Tarif sur demande"],
  },
  {
    id: "groupe",
    titre: "Sortie de groupe",
    icone: "users",
    saison: "groupe",
    description: "Écoles, camps de jour et organismes : tarifs de groupe et horaires spéciaux possibles sur demande.",
    tarifs: ["Tarif de groupe"],
  },
];

/* Commanditaires : affichés sur l'accueil (source : publication Facebook « Merci à nos commanditaires, saison 2026 »).
   logo : chemin d'une image dans images/commanditaires/ (facultatif; sans logo, le nom s'affiche).
   niveau : "majeur" pour les partenaires majeurs (grand format).
   type : courte description affichée sous le nom. note : mention spéciale (facultatif). */

window.COMMANDITAIRES = [
  { nom: "Ville de Sainte-Anne-des-Monts", niveau: "majeur", type: "Partenaire majeur", lien: "https://sadm-loisirs-culture-sports.ca/", logo: "" },
  { nom: "MRC de La Haute-Gaspésie", niveau: "majeur", type: "Partenaire majeur", lien: "https://www.hautegaspesie.com/", logo: "" },
  { nom: "Club Ami-Jeunesse Annemontois", niveau: "majeur", type: "Partenaire majeur", lien: "", logo: "" },
  { nom: "Plomberie 132 inc.", type: "Plomberie et chauffage", lien: "https://www.plomberie132.com/", logo: "" },
  { nom: "Armand", type: "Chrysler · Jeep · Ram", lien: "", logo: "" },
  { nom: "Construction Rénosim", type: "Entrepreneur général", lien: "", logo: "" },
  { nom: "Électropage", type: "Entrepreneur électricien", lien: "", logo: "" },
  { nom: "Résidences Ste-Anne", type: "Résidence", lien: "", logo: "" },
  { nom: "Home Hardware", type: "Quincaillerie", lien: "", logo: "" },
  { nom: "Maison des Familles Haute-Gaspésie", type: "Organisme famille", note: "Coin jeunesse", lien: "", logo: "" },
  { nom: "Partagence", type: "Entraide et dépannage", note: "Coin jeunesse", lien: "https://www.partagence.ca/", logo: "" },
];
