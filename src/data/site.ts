/** Coordonnées et identité — source de vérité (CdC §2). */
export const site = {
  name: 'La Petite Maison Sous Les Pins',
  // TODO(§14.5) : nom d'affichage des propriétaires à confirmer.
  owners: 'Mr et Mme Ré',
  address: {
    street: '1689 chemin du Marin',
    postalCode: '13540',
    city: 'Aix-en-Provence',
    district: 'Puyricard',
    country: 'FR',
    lat: 43.5976717,
    lng: 5.4091016,
  },
  siret: '439 696 402 00031',
  phoneMobile: '+33662326718',
  email: 'mariedenise@neuf.fr',
  // Carte Google Maps (embed sans clé) centrée sur le gîte.
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.5781206483284!2d5.406526676564409!3d43.59767555601962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c98b449ef3307f%3A0x96e76ca6f93621d0!2sLa%20Petite%20Maison%20Sous%20Les%20Pins!5e1!3m2!1sfr!2sfr!4v1738501619876!5m2!1sfr!2sfr',
  // Lien public vers la fiche Google (avis) — fourni par la propriétaire.
  reviewsUrl: 'https://maps.app.goo.gl/iMuSymm7uDByhtEm7',
  // TODO(§14.6) : PLACE_ID Google Business Profile — nécessaire pour AFFICHER
  // la note + les avis au build (le lien ci-dessus fonctionne sans).
  placeId: null as string | null,
};
