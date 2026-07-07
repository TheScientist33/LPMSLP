/**
 * Configuration du module de réservation chambresdhotes.org.
 *
 * Calendrier de disponibilités (iframe autonome) : cliquer sur une date libre
 * ouvre directement la réservation dans l'iframe. C'est le parcours complet —
 * inutile d'ajouter une barre de recherche séparée (elle ferait doublon).
 * Les règles de location (séjour du samedi au samedi) sont gérées côté
 * chambresdhotes.org par le planning du propriétaire.
 */
export const booking = {
  /** Identifiant du logement pour la réservation (paramètre « who »). */
  who: '26961',

  /** Flux iCal d'export (dates occupées) — lu au build pour le calendrier maison. */
  icsUrl: 'https://www.chambresdhotes.org/booking/mariedenise.charles/4253.ics',

  /**
   * Base de l'URL de réservation. On y ajoute (GET, format jj/mm/aaaa confirmé) :
   *   ?who=…&from=jj/mm/aaaa&to=jj/mm/aaaa&adults=…&children=…
   */
  availabilityUrl:
    'https://www.chambresdhotes.org/cgi-bin/links/booking/availability.cgi',

  /** Valeurs par défaut du formulaire de réservation. */
  defaults: { adults: 2, children: 0 },

  /** Calendrier iframe d'origine — REPLI si le flux iCal est injoignable. */
  calendar: {
    url: 'https://www.chambresdhotes.org/cgi-bin/links/booking/cal.cgi?make_iframe=1;list=1;who=4253;theme=default;target=top',
    height: 600,
  },

  /** Lien direct vers la page de réservation du logement (who=26961). */
  fallbackUrl:
    'https://www.chambresdhotes.org/cgi-bin/links/booking/availability.cgi?who=26961',
};
