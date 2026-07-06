/**
 * Configuration du module de réservation chambresdhotes.org.
 *
 * Identifiant du logement (« who ») fourni par la propriétaire : 26961.
 *
 * ⚠️ L'URL d'iframe EXACTE reste à récupérer : le motif deviné
 * (…/cal.cgi?…) renvoie une 404 côté chambresdhotes.org. Pour l'obtenir :
 *   • espace propriétaire chambresdhotes.org → « intégrer mon planning / widget »,
 *     copier le code <iframe src="…">, ou
 *   • sur la page actuelle /disponibilites-reservation/ : clic droit →
 *     « Afficher le code source » → copier le src de l'<iframe>.
 * Coller cette URL dans EMBED_URL ci-dessous (garder null tant qu'inconnue :
 * la page affiche alors un cadre propre, pas d'iframe cassée).
 */
const WHO = '26961';

/** URL exacte de l'iframe (à renseigner une fois récupérée). */
const EMBED_URL: string | null = null;

export const booking = {
  /** Identifiant du logement chez chambresdhotes.org. */
  who: WHO,
  /** URL de l'iframe du calendrier/module. `null` = cadre placeholder propre. */
  iframeUrl: EMBED_URL,
  /** Lien de secours (fiche publique). */
  fallbackUrl: 'https://www.chambresdhotes.org/',
  /** Hauteur mini du conteneur (px) si l'iframe ne fixe pas sa hauteur. */
  minHeight: 720,
};
