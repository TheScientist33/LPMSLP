/**
 * Configuration du module de réservation chambresdhotes.org.
 *
 * TODO(§14.1) : récupérer l'identifiant/URL EXACT de l'iframe depuis le code
 * source de la page /disponibilites-reservation/ actuelle ou l'espace
 * propriétaire chambresdhotes.org. Motif attendu :
 *   https://www.chambresdhotes.org/.../cal.cgi?make_iframe=1;list=1;who=…
 * NE PAS INVENTER l'identifiant.
 */
export const booking = {
  /** URL de l'iframe du calendrier/module. `null` tant que non fournie. */
  iframeUrl: null as string | null,
  /** Lien de secours vers la fiche publique chambresdhotes.org. */
  fallbackUrl: 'https://www.chambresdhotes.org/',
  /** Ratio d'aspect du conteneur (hauteur mini en px si l'iframe ne fixe pas). */
  minHeight: 720,
};
