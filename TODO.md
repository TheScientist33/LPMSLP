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

## En attente du design final (Claude Design)

- Direction artistique appliquée en version **sobre provisoire** (AGENT.md §5).
  Tokens dans `src/styles/global.css` (`@theme`). Le visuel sera aligné ensuite.

## Étapes de build restantes (workflow §12)

- [ ] Étape 4 — Télécharger et optimiser les 72 images (WordPress → `src/assets/images/`),
      galeries `<Image>` + lightbox par espace.
- [ ] Secrets Vercel (Resend, Turnstile, Google Places) puis déploiement.
- [ ] Passe Lighthouse ≥ 95 + accessibilité finale.
