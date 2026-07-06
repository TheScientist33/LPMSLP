# TODO — informations en attente (AGENT.md §14 / CdC §11)

Ces points ne doivent **pas** être remplis au hasard. Placeholders visibles dans le code.

1. **Module chambresdhotes.org** — identifiant/URL exact de l'iframe.
   → `src/data/booking.ts` (`iframeUrl: null`). Motif attendu : `cal.cgi?make_iframe=1;list=1;who=…`.
2. **Chauffage piscine** — contradiction du site (« juillet→fin octobre » vs « pas chauffée déc/jan/fév »).
   → Texte provisoire dans `src/i18n/*.json` (`pool.heatingNote`).
3. **Statut d'octobre** — semaine (800 €) et/ou mois ? Grille tarifs à ajuster (`fr.json` `rates.grid`).
4. **Température piscine** — retenu provisoirement 29-30 °C.
5. **Nom d'affichage des propriétaires** — « Mr et Mme Ré » à confirmer.
   → `src/data/site.ts` (`owners`).
6. **PLACE_ID Google** (avis) — `src/data/site.ts` (`placeId: null`) + `GOOGLE_PLACES_API_KEY` (.env).
   Tant qu'absent, la page Avis affiche un placeholder propre.
7. **Accès DNS** pour le repointage du domaine vers Vercel.

## Design (Claude Design) — en cours d'intégration

- ✅ **Page Piscine & Spa** implémentée fidèlement d'après la maquette
  (`La Petite Maison - Piscine & Spa.dc.html`) : hero pleine largeur, blocs
  piscine/spa alternés, chiffres-clés, badge « En option », galerie ambiance,
  encadré « fêtes » terre cuite.
- ✅ **Système de composants commun** aligné sur la maquette : Header (wordmark
  « …sous les **pins** », nav, sélecteur FR·EN, CTA « Disponibilités », bouton
  d'appel + hamburger mobile), Footer vert pin foncé 3 colonnes, tokens
  couleurs mis à jour (`src/styles/global.css`).
- ⏳ **Reste à décliner** les 6 autres pages sur la maquette (Accueil, Le gîte,
  Tarifs & Réservation, Tourisme, Avis, Contact) — mockups fournis dans le
  bundle de handoff. Actuellement en version sobre provisoire.
- Emplacements photos : composant `Photo.astro` (placeholder), à remplacer par
  `<Image>` une fois les 72 images intégrées (étape 4).

## Étapes de build restantes (workflow §12)

- [ ] Étape 4 — Télécharger et optimiser les 72 images (WordPress → `src/assets/images/`),
      galeries `<Image>` + lightbox par espace.
- [ ] Secrets Vercel (Resend, Turnstile, Google Places) puis déploiement.
- [ ] Passe Lighthouse ≥ 95 + accessibilité finale.
