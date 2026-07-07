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
  /** Calendrier de disponibilités — iframe autonome. */
  calendar: {
    /** Base de l'URL iframe (la langue est ajoutée selon la locale). */
    url: 'https://www.chambresdhotes.org/cgi-bin/links/booking/cal.cgi?make_iframe=1;list=1;who=4253;theme=default;target=top',
    /** Hauteur de l'iframe (px). */
    height: 600,
  },

  /** Lien direct vers la page de réservation du logement (who=26961). */
  fallbackUrl:
    'https://www.chambresdhotes.org/cgi-bin/links/booking/availability.cgi?who=26961',
};
