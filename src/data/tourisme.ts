export type TourismCategory = 'escapades' | 'activites' | 'manger';

export interface TourismItem {
  id: string;
  category: TourismCategory;
  emoji: string;
  /** Temps de trajet en voiture, affiché tel quel (ex. « ~10 min »). */
  drive: string;
  /** Lien vers le site officiel / l'adresse (optionnel). */
  siteUrl?: string;
  /** Lien Google Maps « itinéraire » (optionnel). */
  directionsUrl?: string;
  fr: { title: string; text: string };
  en: { title: string; text: string };
}

export const tourism: TourismItem[] = [
  {
    id: 'chateau-calade',
    category: 'escapades',
    emoji: '🏰',
    drive: '~10 min',
    siteUrl: 'https://chateaudelacalade.fr',
    fr: {
      title: 'Château de la Calade',
      text: "Une bastide du XVIIᵉ siècle sur le plateau de Puyricard, classée Monument Historique. Visites guidées avec le châtelain passionné pour explorer son architecture authentique et son riche passé.",
    },
    en: {
      title: 'Château de la Calade',
      text: 'A 17th-century bastide on the Puyricard plateau, a listed Historic Monument. Guided tours with the passionate owner to explore its authentic architecture and rich past.',
    },
  },
  {
    id: 'chateau-la-coste',
    category: 'escapades',
    emoji: '🌿',
    drive: '~10 min',
    siteUrl: 'https://chateau-la-coste.com/',
    fr: {
      title: 'Château La Coste',
      text: "Un domaine viticole exceptionnel au Puy-Sainte-Réparade, alliant vignoble, art contemporain et architecture moderne. Dégustation de vins biodynamiques et parcours artistique en plein air.",
    },
    en: {
      title: 'Château La Coste',
      text: 'An outstanding wine estate in Le Puy-Sainte-Réparade combining vineyard, contemporary art and modern architecture. Biodynamic wine tasting and an open-air art walk.',
    },
  },
  {
    id: 'aix',
    category: 'escapades',
    emoji: '🏛️',
    drive: '~18 min',
    siteUrl: 'https://www.aixenprovencetourism.com/',
    fr: {
      title: 'Aix-en-Provence',
      text: "Capitale historique de la Provence. Flânez sous les platanes du Cours Mirabeau, admirez les fontaines centenaires et visitez l'Atelier de Cézanne.",
    },
    en: {
      title: 'Aix-en-Provence',
      text: "Provence's historic capital. Stroll under the plane trees of the Cours Mirabeau, admire the century-old fountains and visit Cézanne's studio.",
    },
  },
  {
    id: 'luberon',
    category: 'escapades',
    emoji: '🏞️',
    drive: '~25 min',
    siteUrl: 'https://www.luberoncoeurdeprovence.com/',
    fr: {
      title: 'Le Luberon et ses villages perchés',
      text: "Gordes et ses ruelles pavées, Roussillon et ses falaises d'ocre, Lourmarin, Ménerbes… Un voyage hors du temps dans des villages de carte postale.",
    },
    en: {
      title: 'The Luberon and its hilltop villages',
      text: 'Gordes and its cobbled lanes, Roussillon and its ochre cliffs, Lourmarin, Ménerbes… A timeless journey through postcard villages.',
    },
  },
  {
    id: 'roquefavour',
    category: 'escapades',
    emoji: '🌉',
    drive: '~30 min',
    fr: {
      title: 'Aqueduc de Roquefavour',
      text: "Plus grand aqueduc en pierre du monde, il offre une vue imprenable sur la vallée de l'Arc et témoigne du génie architectural du XIXe siècle.",
    },
    en: {
      title: 'Roquefavour Aqueduct',
      text: "The largest stone aqueduct in the world, offering sweeping views over the Arc valley and a testament to 19th-century engineering.",
    },
  },
  {
    id: 'lourmarin',
    category: 'escapades',
    emoji: '🏡',
    drive: '~30 min',
    siteUrl: 'https://lourmarin.com/decouvrir/',
    fr: {
      title: 'Lourmarin',
      text: "Un des plus beaux villages de France, connu pour son château et ses ruelles pleines de charme. Marchés typiques et ambiance provençale unique.",
    },
    en: {
      title: 'Lourmarin',
      text: 'One of the most beautiful villages in France, known for its château and charming lanes. Typical markets and a unique Provençal atmosphere.',
    },
  },
  {
    id: 'cassis',
    category: 'escapades',
    emoji: '🌊',
    drive: '~50 min',
    siteUrl: 'https://www.ot-cassis.com/',
    fr: {
      title: 'Cassis',
      text: "Un port de pêche joyau de la côte. Plages, restaurants et balades en bateau pour découvrir les célèbres Calanques de Cassis.",
    },
    en: {
      title: 'Cassis',
      text: 'A gem of a fishing port on the coast. Beaches, restaurants and boat trips to discover the famous Calanques de Cassis.',
    },
  },
  {
    id: 'arles',
    category: 'escapades',
    emoji: '🏛️',
    drive: '~1 h',
    siteUrl: 'https://www.arlestourisme.com/fr/a-la-decouverte-des-monuments-romains-a-arles.html',
    fr: {
      title: 'Les vestiges romains d’Arles',
      text: "Vestige romain incontournable, l'amphithéâtre accueille encore aujourd'hui courses camarguaises et spectacles taurins.",
    },
    en: {
      title: 'The Roman remains of Arles',
      text: 'A must-see Roman monument, the amphitheatre still hosts Camargue races and bullfighting shows today.',
    },
  },
  {
    id: 'roussillon',
    category: 'escapades',
    emoji: '🎨',
    drive: '~1 h',
    siteUrl: 'https://www.luberon-apt.fr/sites-touristiques-des-ocres-du-luberon',
    fr: {
      title: "Roussillon et les carrières d'ocre",
      text: "Un village coloré entouré de falaises d'ocre flamboyantes, offrant un spectacle naturel unique et un sentier inoubliable.",
    },
    en: {
      title: 'Roussillon and the ochre quarries',
      text: 'A colourful village surrounded by blazing ochre cliffs, a unique natural spectacle with an unforgettable trail.',
    },
  },
  {
    id: 'carrieres-lumieres',
    category: 'escapades',
    emoji: '🌟',
    drive: '~1 h',
    siteUrl: 'https://www.carrieres-lumieres.com/fr',
    fr: {
      title: 'Carrières des Lumières, Baux-de-Provence',
      text: "Un lieu magique où des œuvres d'art prennent vie grâce à des projections immersives dans une ancienne carrière de pierre.",
    },
    en: {
      title: 'Carrières des Lumières, Baux-de-Provence',
      text: 'A magical place where works of art come to life through immersive projections inside a former stone quarry.',
    },
  },
  {
    id: 'sanary',
    category: 'escapades',
    emoji: '🌅',
    drive: '~1 h',
    siteUrl: 'https://www.sanary-tourisme.com/',
    fr: {
      title: 'Sanary-sur-Mer',
      text: "Un village authentique avec un charmant port de pêche, des marchés colorés et une ambiance typiquement méditerranéenne.",
    },
    en: {
      title: 'Sanary-sur-Mer',
      text: 'An authentic village with a charming fishing port, colourful markets and a typically Mediterranean atmosphere.',
    },
  },
  {
    id: 'calanques',
    category: 'escapades',
    emoji: '🌊',
    drive: '~1 h',
    siteUrl: 'https://www.calanques-parcnational.fr/fr',
    fr: {
      title: 'Les Calanques de Cassis et Marseille',
      text: "Le Parc National des Calanques offre des paysages spectaculaires entre falaises calcaires et eaux turquoise. En bateau ou à pied, à la découverte des criques secrètes comme En-Vau.",
    },
    en: {
      title: 'The Calanques of Cassis and Marseille',
      text: 'The Calanques National Park offers spectacular scenery of limestone cliffs and turquoise water. By boat or on foot, discover secret coves such as En-Vau.',
    },
  },
  {
    id: 'avignon',
    category: 'escapades',
    emoji: '🏰',
    drive: '~1 h 10',
    siteUrl: 'https://avignon-tourisme.com/',
    fr: {
      title: 'Avignon, la cité des Papes',
      text: "Classée au patrimoine mondial de l'UNESCO, Avignon abrite le majestueux Palais des Papes et le célèbre Pont d'Avignon.",
    },
    en: {
      title: 'Avignon, city of the Popes',
      text: 'A UNESCO World Heritage site, Avignon is home to the majestic Palais des Papes and the famous Pont d’Avignon.',
    },
  },
  {
    id: 'fontaine-vaucluse',
    category: 'escapades',
    emoji: '🏞️',
    drive: '~1 h 15',
    siteUrl: 'https://islesurlasorguetourisme.com/decouvrir/terre-de-patrimoine/nos-villages/fontaine-de-vaucluse',
    fr: {
      title: 'La Fontaine de Vaucluse',
      text: "Un site naturel impressionnant où la Sorgue jaillit d'une immense cavité rocheuse. Lieu de mystère et d'inspiration.",
    },
    en: {
      title: 'Fontaine de Vaucluse',
      text: 'An impressive natural site where the Sorgue river gushes from a huge rocky cavity. A place of mystery and inspiration.',
    },
  },
  {
    id: 'saintes-maries',
    category: 'escapades',
    emoji: '🌊',
    drive: '~1 h 30',
    siteUrl: 'https://www.saintesmaries.com/',
    fr: {
      title: 'Saintes-Maries-de-la-Mer',
      text: "Un village emblématique de la Camargue, haut lieu de pèlerinage et berceau des traditions gitane et camarguaise.",
    },
    en: {
      title: 'Saintes-Maries-de-la-Mer',
      text: 'An iconic Camargue village, a major pilgrimage site and cradle of Gypsy and Camargue traditions.',
    },
  },
  {
    id: 'pont-du-gard',
    category: 'escapades',
    emoji: '🌉',
    drive: '~1 h 30',
    siteUrl: 'https://www.pontdugard.fr/fr',
    fr: {
      title: 'Le Pont du Gard',
      text: "Chef-d'œuvre de l'architecture romaine, ce pont-aqueduc classé à l'UNESCO est incontournable pour les amateurs d'histoire et de nature.",
    },
    en: {
      title: 'Pont du Gard',
      text: 'A masterpiece of Roman architecture, this UNESCO-listed aqueduct bridge is a must for lovers of history and nature.',
    },
  },
  {
    id: 'verdon',
    category: 'escapades',
    emoji: '🌄',
    drive: '~2 h',
    siteUrl: 'https://lesgorgesduverdon.fr/',
    fr: {
      title: 'Les Gorges du Verdon',
      text: "Le plus grand canyon d'Europe offre des paysages spectaculaires, parfaits pour la randonnée, le kayak et l'escalade.",
    },
    en: {
      title: 'Gorges du Verdon',
      text: "Europe's largest canyon offers spectacular scenery, perfect for hiking, kayaking and climbing.",
    },
  },

  {
    id: 'aix-bike',
    category: 'activites',
    emoji: '🚴',
    drive: '~6 min',
    siteUrl: 'https://aixbikeprovence.com/',
    fr: {
      title: 'VTT électrique en Provence',
      text: "Découvrez les collines du Luberon, les vignobles d'Aix ou les sentiers de la Sainte-Victoire en VTT électrique, avec Aix Bike Provence.",
    },
    en: {
      title: 'Electric mountain biking in Provence',
      text: 'Explore the hills of the Luberon, the Aix vineyards or the Sainte-Victoire trails on an e-bike, with Aix Bike Provence.',
    },
  },
  {
    id: 'montopoto',
    category: 'activites',
    emoji: '🎠',
    drive: '~15 min',
    siteUrl: 'https://www.montopoto.com',
    fr: {
      title: 'Montopoto',
      text: "La plus grande aire de jeux couverte de France, à Saint-Cannat. 2 500 m² sur le thème de la jungle : toboggans géants, trampolines, piscines à balles, circuit de voitures électriques. Idéal quelle que soit la météo.",
    },
    en: {
      title: 'Montopoto',
      text: "France's largest indoor playground, in Saint-Cannat. 2,500 m² on a jungle theme: giant slides, trampolines, ball pools and an electric car track. Ideal whatever the weather.",
    },
  },
  {
    id: 'village-automates',
    category: 'activites',
    emoji: '🎠',
    drive: '~15 min',
    siteUrl: 'https://villagedesautomates.com/',
    fr: {
      title: 'Le Village des Automates',
      text: "Un parc de loisirs familial dans une pinède de 8 hectares à Saint-Cannat : plus de 50 attractions, labyrinthe, toboggans géants, filets suspendus et ferme pédagogique.",
    },
    en: {
      title: 'Le Village des Automates',
      text: 'A family leisure park set in an 8-hectare pine forest in Saint-Cannat: over 50 attractions, a maze, giant slides, rope nets and a petting farm.',
    },
  },
  {
    id: 'zoo-barben',
    category: 'activites',
    emoji: '🦁',
    drive: '~25 min',
    siteUrl: 'https://www.zoolabarben.com/',
    fr: {
      title: 'Le Zoo de la Barben et son château',
      text: "Un parc zoologique exceptionnel au cœur de la Provence : plus de 600 animaux et un magnifique château historique à visiter.",
    },
    en: {
      title: 'La Barben Zoo and its château',
      text: 'An outstanding zoo in the heart of Provence: over 600 animals and a magnificent historic château to visit.',
    },
  },

  {
    id: 'lou-cau',
    category: 'manger',
    emoji: '🍦',
    drive: '~5 min',
    siteUrl: 'https://www.instagram.com/loucau_/',
    fr: {
      title: 'Le Glacier Lou Cau de Puyricard',
      text: "Des glaces artisanales et gourmandes à Puyricard, une adresse incontournable pour les amateurs de douceurs glacées.",
    },
    en: {
      title: 'Lou Cau ice-cream, Puyricard',
      text: 'Artisanal, indulgent ice cream in Puyricard — a must for those with a sweet tooth.',
    },
  },
  {
    id: 'phocea',
    category: 'manger',
    emoji: '🍴',
    drive: '~6 min',
    siteUrl: 'https://maps.app.goo.gl/9oLeuS5UBHw3A2J3A',
    fr: {
      title: 'Le Phocéa',
      text: "Une adresse gourmande à Puyricard, cuisine maison généreuse avec des produits frais et de saison. Terrasse pour le déjeuner ou dîner entre amis.",
    },
    en: {
      title: 'Le Phocéa',
      text: 'A tasty spot in Puyricard: generous home cooking with fresh, seasonal produce. Terrace for lunch or dinner with friends.',
    },
  },
  {
    id: 'chocolaterie',
    category: 'manger',
    emoji: '🍫',
    drive: '~5 min',
    siteUrl: 'https://www.puyricard.fr/',
    fr: {
      title: 'La Chocolaterie de Puyricard',
      text: "Un paradis pour les amateurs de chocolat : fabrication artisanale et spécialités provençales. Visite de l'atelier possible sur réservation.",
    },
    en: {
      title: 'La Chocolaterie de Puyricard',
      text: 'A paradise for chocolate lovers: artisanal production and Provençal specialities. Workshop visits available on booking.',
    },
  },
  {
    id: 'calissons',
    category: 'manger',
    emoji: '🏭',
    drive: '~8 min',
    siteUrl: 'https://www.calisson.com/fr/content/17-musee-du-calisson',
    fr: {
      title: 'Musée du Calisson — Le Roy René',
      text: "Aux portes d'Aix, explorez les traditions séculaires du calisson au musée et à la fabrique. Visite libre ou guidée.",
    },
    en: {
      title: 'Calisson Museum — Le Roy René',
      text: 'On the edge of Aix, explore the age-old traditions of the calisson at the museum and factory. Self-guided or guided visits.',
    },
  },
  {
    id: 'quincaille',
    category: 'manger',
    emoji: '🍕',
    drive: '~6 min',
    siteUrl: 'https://www.tripadvisor.fr/Restaurant_Review-g1793559-d4604730-Reviews-La_Quincaille-Puyricard_Aix_en_Provence_Bouches_du_Rhone_Provence_Alpes_Cote_d_A.html',
    fr: {
      title: 'Restaurant La Quincaille',
      text: "À 5 min du gîte, une bonne pizza et les meilleures frites de Puyricard (testé et approuvé !). N'accepte pas la carte bleue. Réservation : +33 4 42 57 04 21.",
    },
    en: {
      title: 'Restaurant La Quincaille',
      text: '5 minutes from the house: great pizza and the best fries in Puyricard (tried and approved!). No card payments. Booking: +33 4 42 57 04 21.',
    },
  },
  {
    id: 'theiere',
    category: 'manger',
    emoji: '🍵',
    drive: '~5 min',
    siteUrl: 'https://la-theiere-de-puyricard.com/',
    fr: {
      title: 'Restaurant La Théière',
      text: "À 5 min du gîte, une cuisine maison de produits locaux bio, au soleil. Réservation : +33 4 42 92 03 54.",
    },
    en: {
      title: 'Restaurant La Théière',
      text: '5 minutes from the house: home cooking with local organic produce, in the sun. Booking: +33 4 42 92 03 54.',
    },
  },
  {
    id: 'quille',
    category: 'manger',
    emoji: '🍨',
    drive: '~30 min',
    siteUrl: 'https://www.glacierlequille.com',
    fr: {
      title: 'Le Quillé',
      text: "Un glacier artisanal emblématique de la Provence depuis 1982 : plus de 56 parfums et 100 compositions gourmandes, à déguster en terrasse à l'ombre des platanes.",
    },
    en: {
      title: 'Le Quillé',
      text: 'An iconic Provençal ice-cream maker since 1982: over 56 flavours and 100 indulgent creations, to enjoy on a terrace under the plane trees.',
    },
  },
];
