export const defaultLocale = 'fr' as const;
export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
};

/**
 * Mapping des routes FR <-> EN.
 * La clé est un identifiant de page stable ; la valeur le segment localisé.
 */
export const routes = {
  home: { fr: '', en: '' },
  house: { fr: 'le-gite', en: 'the-house' },
  pool: { fr: 'piscine-spa', en: 'pool-spa' },
  rates: { fr: 'tarifs-reservation', en: 'rates-booking' },
  discover: { fr: 'tourisme', en: 'discover' },
  reviews: { fr: 'avis', en: 'reviews' },
  contact: { fr: 'contact', en: 'contact' },
  legal: { fr: 'mentions-legales', en: 'legal-notice' },
  privacy: { fr: 'confidentialite', en: 'privacy' },
  terms: { fr: 'conditions-location', en: 'rental-terms' },
} as const;

export type RouteKey = keyof typeof routes;

/** Construit une URL localisée pour une page donnée. */
export function localizeUrl(locale: Locale, key: RouteKey): string {
  const segment = routes[key][locale];
  const base = locale === defaultLocale ? '' : `/${locale}`;
  return `${base}/${segment}`.replace(/\/+$/, '') || '/';
}

/** À partir d'un pathname, retrouve la clé de page (pour le sélecteur de langue). */
export function routeKeyFromPath(pathname: string): RouteKey {
  const clean = pathname.replace(/^\/(en)(?=\/|$)/, '').replace(/^\/|\/$/g, '');
  for (const key of Object.keys(routes) as RouteKey[]) {
    if (routes[key].fr === clean || routes[key].en === clean) return key;
  }
  return 'home';
}
