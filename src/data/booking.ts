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

  /**
   * Flux iCal d'export (dates occupées) — lus et FUSIONNÉS au build.
   * Ajoute ici l'URL d'export de chaque plateforme où tu reçois des résas
   * (chambresdhotes, Abritel/Vrbo, Airbnb, Booking…) pour que le calendrier
   * du site voie TOUTES les réservations, quelle que soit la plateforme.
   */
  icsUrls: [
    'https://www.chambresdhotes.org/booking/mariedenise.charles/4253.ics',
    'https://www.homelidays.com/icalendar/cb3f3fd6b6d0e311a563d4ae52897104.ics',
  ],

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
