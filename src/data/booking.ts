/**
 * Configuration du module de réservation chambresdhotes.org.
 *
 * Deux briques distinctes fournies par chambresdhotes.org (codes d'intégration
 * copiés depuis l'espace propriétaire) :
 *   1. Calendrier de disponibilités (iframe autonome, lecture seule) — who=4253.
 *   2. Barre de recherche → réservation (formulaire + assets JS/CSS) — who=26961.
 * Les deux « who » diffèrent car ce sont deux widgets distincts chez eux.
 */
export const booking = {
  /** Identifiant logement pour la réservation (barre de recherche). */
  who: '26961',

  /** Calendrier de disponibilités — iframe autonome. */
  calendar: {
    /** Base de l'URL iframe (la langue est ajoutée selon la locale). */
    url: 'https://www.chambresdhotes.org/cgi-bin/links/booking/cal.cgi?make_iframe=1;list=1;who=4253;theme=default;target=top',
    /** Hauteur de l'iframe (px). */
    height: 600,
  },

  /** Barre de recherche de disponibilités → réservation. */
  search: {
    /** Action du formulaire (résultats affichés dans l'iframe inline-booking). */
    action: 'https://www.chambresdhotes.org/cgi-bin/links/booking/availability.cgi',
    /** Feuille de style du datepicker. */
    datepickerCss:
      'https://www.chambresdhotes.org/new_design/bookings/css/book/datepicker.css',
    /** Script du datepicker / formulaire. */
    js: 'https://www.chambresdhotes.org/new_design/bookings/js/book/calendar-form.js',
    /** Thème CSS du formulaire attendu par leur JS (variable globale the_css). */
    formCss: 'calendar-form-1.css',
  },

  /** Lien de secours (fiche publique). */
  fallbackUrl: 'https://www.chambresdhotes.org/',
};
