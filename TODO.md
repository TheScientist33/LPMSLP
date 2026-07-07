# TODO — informations en attente (AGENT.md §14 / CdC §11)

Ces points ne doivent **pas** être remplis au hasard. Placeholders visibles dans le code.

1. **Module chambresdhotes.org** — identifiant/URL exact de l'iframe.
   → `src/data/booking.ts` (`iframeUrl: null`). Motif attendu : `cal.cgi?make_iframe=1;list=1;who=…`.
   En attendant, la page Tarifs affiche l'encadré « module » en pointillés (fidèle à la maquette).
2. **Chauffage piscine** — contradiction du site (« juillet→fin octobre » vs « pas chauffée déc/jan/fév »).
   → Note affichée sur la page Piscine (`pool.heatingNote` dans `src/i18n/*.json`).
3. **Température piscine** — retenu provisoirement 29-30 °C (aligné maquette v2).
4. **Nom d'affichage des propriétaires** — « Mr et Mme Ré » à confirmer → `src/data/site.ts`.
5. **PLACE_ID Google** (avis) — `src/data/site.ts` (`placeId: null`) + `GOOGLE_PLACES_API_KEY` (.env).
   Tant qu'absent : la page Avis et le bloc avis de l'Accueil affichent un état placeholder
   (pas de faux avis) ; le bouton renvoie vers la recherche Google Maps du gîte.
6. **Accès DNS** pour le repointage du domaine vers Vercel.

## Design (maquettes Claude Design v2) — intégré

- ✅ Les **7 pages** implémentées d'après les artboards **desktop 1440** (les artboards
  mobiles du bundle sont obsolètes : le mobile est décliné en responsive cohérent).
- ✅ Système commun : Header (CTA « Disponibilités », clic-appel + hamburger mobile),
  Footer vert pin 3 colonnes, tokens `src/styles/global.css`.
- ✅ Tarifs v2 : Juillet-Août 1000-1200 € / Septembre 850 € / Octobre 800-1000 € /
  Jacuzzi +200 € / Prise VE +30 € / Lit d'appoint +30 € ; conditions « CB ou e-ANCV ».
- ✅ Formulaire « demande au mois » intégré à la carte Parcours B (page Tarifs).
- ✅ **Email masqué partout** (confidentialité) : contact écrit uniquement via formulaires ;
  l'adresse ne sert plus que côté serveur (envoi Resend).
- ✅ Conditions de location : draps/serviettes inclus, ménage inclus (usage normal)
  sinon forfait 50 €, fêtes interdites, animaux sur demande.

## Étapes restantes (workflow §12)

- [ ] Étape 4 — Télécharger et optimiser les 72 images (WordPress → `src/assets/images/`),
      remplacer les `Photo.astro` par `<Image>` + lightbox.
- [ ] Secrets Vercel (Resend, Turnstile, Google Places) puis déploiement + DNS.
- [ ] Passe Lighthouse ≥ 95 + accessibilité finale.
