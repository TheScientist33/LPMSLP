/**
 * Configuration du module de réservation chambresdhotes.org.
 *
 * L'identifiant du logement (« who ») fourni par la propriétaire est 26961.
 * L'URL d'iframe suit le motif standard chambresdhotes.org
 * (cf. AGENT.md §7.1) : cal.cgi?make_iframe=1;list=1;who=<id>.
 *
 * ⚠️ À CONFIRMER visuellement sur la preview Vercel : si le calendrier ne
 * s'affiche pas, copier le `src` exact de l'iframe depuis le code source de la
 * page /disponibilites-reservation/ du site actuel et le coller dans WHO_URL.
 */
const WHO = '26961';

export const booking = {
  /** Identifiant du logement chez chambresdhotes.org. */
  who: WHO,
  /** URL de l'iframe du calendrier/module (motif standard chambresdhotes.org). */
  iframeUrl: `https://www.chambresdhotes.org/cal.cgi?make_iframe=1;list=1;who=${WHO}` as
    string | null,
  /** Lien de secours vers la fiche publique chambresdhotes.org. */
  fallbackUrl: `https://www.chambresdhotes.org/hote_gp.cgi?who=${WHO}`,
  /** Hauteur mini du conteneur (px) si l'iframe ne fixe pas sa hauteur. */
  minHeight: 720,
};
