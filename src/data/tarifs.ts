/* ═══════════════════════════════════════════════════════════════════════════
 *  TARIFS AFFICHÉS SUR LE SITE  —  fichier modifiable SANS SAVOIR CODER
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  👉 Pour changer un prix : modifiez uniquement le texte entre guillemets
 *     après « prix: ». Exemple : prix: '850 €'  →  prix: '900 €'.
 *     Ne touchez pas aux autres mots (labelFr, option, etc.).
 *
 *  👉 Comment enregistrer une modification (sans logiciel) :
 *     1. Ouvrez ce fichier sur GitHub (bouton crayon ✏️ « Edit »).
 *     2. Changez les prix voulus.
 *     3. Cliquez « Commit changes » en bas.
 *     → Le site se met à jour tout seul en 1-2 minutes (déploiement Vercel).
 *
 *  ⚠️ Ces prix sont INDICATIFS (« à partir de… »). Le prix exact payé par le
 *     client vient toujours du module chambresdhotes.org intégré à la page.
 *
 *  labelFr / labelEn = intitulé de la ligne en français / anglais.
 *  prix              = ce qui s'affiche à droite (mis en forme libre).
 *  option: true      = ligne « en supplément » (affichée en bleu).
 *  separateur: true  = trait plus épais sous la ligne (séparation visuelle).
 * ═══════════════════════════════════════════════════════════════════════════ */

export interface LigneTarif {
  labelFr: string;
  labelEn: string;
  prix: string;
  option?: boolean;
  separateur?: boolean;
}

/** Grille « à la semaine » (été) — page Tarifs, colonne de gauche. */
export const tarifsSemaine: LigneTarif[] = [
  { labelFr: 'Juillet - Août', labelEn: 'July - August', prix: '1 000 – 1 200 €' },
  { labelFr: 'Septembre', labelEn: 'September', prix: '850 €' },
  { labelFr: 'Octobre', labelEn: 'October', prix: '800 € - 1 000 €', separateur: true },
  { labelFr: 'Jacuzzi', labelEn: 'Jacuzzi', prix: '+ 200 € / sem', option: true },
  {
    labelFr: 'Prise véhicule électrique',
    labelEn: 'Electric-vehicle socket',
    prix: '+ 30 € / sem',
    option: true,
  },
  { labelFr: 'Lit d’appoint', labelEn: 'Extra bed', prix: '+ 30 € / sem', option: true },
];

/** Tarif « au mois » (octobre → juin) — page Tarifs, colonne de droite. */
export const tarifMois = {
  /** Prix mis en avant (gros chiffre). */
  prix: '1 400 €',
  /** Unité affichée à côté du prix. */
  uniteFr: '/ mois',
  uniteEn: '/ month',
  /** Petite note sous le prix. */
  noteFr: 'toutes charges comprises',
  noteEn: 'all charges included',
};
