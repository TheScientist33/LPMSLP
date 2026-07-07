# Roadmap — La Petite Maison Sous Les Pins

État au 6 juillet 2026. Les 7 pages + pages légales sont construites, fidèles aux
maquettes desktop, bilingues FR/EN, build vert. Ce document liste **tout ce qui
reste** avant la mise en ligne, par chantier, avec ce que je peux faire seul et ce
que tu dois me fournir.

Légende : 🟢 je le fais sans rien attendre · 🟡 je le fais dès que tu me fournis l'info · 🔴 action de ton côté (accès/comptes).

---

## Chantier 1 — Images réelles 🟢🔴

**État.** Toutes les zones photo sont des placeholders (composant `Photo.astro`).
16 emplacements « éditoriaux » (Accueil 5, Le gîte 6, Piscine 4, Tourisme 1 par carte)

- les galeries. Le manifeste liste **72 URLs** : Le gîte 29, Piscine & Spa 15, Abritel 1,
  Tourisme 27.

**Ce que je fais (🟢).**

1. Télécharger les **45 photos du gîte** (gîte + piscine + Abritel — ce sont **nos** photos, aucun souci de droits) depuis WordPress dans `src/assets/images/`, nommées clairement (`sejour-01.jpg`, `piscine-interieure-01.jpg`, …).
2. Créer `src/data/images.ts` : mapping id → import d'asset + `alt` bilingue (accessibilité).
3. Remplacer les `Photo.astro` par `<Image>` (`astro:assets`, sharp intégré) → WebP/AVIF, `srcset` responsive, `loading="lazy"` partout **sauf le hero** (chargé en priorité pour le LCP).
4. Ajouter une **lightbox légère** (island vanilla, ~1 Ko, sans librairie) sur les galeries Accueil / Le gîte / Piscine, avec navigation clavier et `prefers-reduced-motion`.
5. Générer une **image Open Graph** par défaut (le hero) pour le partage réseaux sociaux + `apple-touch-icon`.

**Ce dont j'ai besoin de toi (🔴).**

- **Tourisme (27 images)** : ce sont des photos **tierces** (Wikimedia, Flickr, sites d'offices de tourisme, TripAdvisor…). Droits variables. Deux options :
  - **Recommandé** : tu me fournis une short-list de photos libres de droits (ou tes propres photos des lieux), OU je n'utilise que les images clairement réutilisables (Wikimedia Commons avec attribution) et je laisse un dégradé sobre pour les autres.
  - À défaut, on garde les cartes Tourisme avec un visuel neutre (pas de hotlink vers des CDN tiers, interdit par le cahier des charges et fragile).
- Confirmation : ordre de priorité des photos par page si tu as des préférences (sinon je choisis les plus lumineuses/représentatives).

**Validation.** Lighthouse « Images » vert, aucun hotlink WordPress restant, `alt` sur 100 % des images, LCP < 2,5 s.

---

## Chantier 2 — Avis Google 🟡🔴

**État.** La page Avis et le bloc Accueil sont **prêts et branchés** sur l'API Google
Places (récupération au **build**). Sans identifiants, ils affichent un placeholder
propre (pas de faux avis) et le bouton renvoie vers une recherche Google Maps.

**Deux niveaux, selon ce que tu fournis :**

- **Niveau 1 — juste le lien (🔴 rapide).** Tu me donnes l'**URL de ta fiche Google Business Profile** (ou le **Place ID**). Je câble le vrai lien « Voir tous les avis sur Google » → fiche réelle. Aucune clé API requise.
- **Niveau 2 — note + avis affichés (🟡).** Pour afficher la **note globale + jusqu'à 6 avis** directement sur le site, il faut :
  - `PLACE_ID` (identifiant de ta fiche),
  - `GOOGLE_PLACES_API_KEY` (clé API Google Cloud, API « Places » activée, ~gratuit à ce volume).
    Je les mets en variables d'env Vercel ; les avis sont figés au build (rafraîchis à chaque déploiement). Bonus : la note alimente aussi le `aggregateRating` du schema.org SEO.

**Ce dont j'ai besoin de toi (🔴).**

- L'**URL de la fiche Google** du gîte (pour le Place ID).
- Si niveau 2 : que tu crées la clé API dans Google Cloud (je te fournis la procédure pas-à-pas) — ou tu me délègues l'accès.

**Validation.** Lien correct vers la fiche ; en niveau 2, note et avis réels affichés, fallback propre si l'API échoue.

---

## Chantier 3 — Calendrier & réservation (chambresdhotes.org) 🟡🔴

**État.** La page Tarifs affiche le **cadre du module** en pointillés (fidèle à la
maquette), avec un lien de secours. Le code est prêt : il suffit de renseigner l'URL
de l'iframe (`src/data/booking.ts`, `iframeUrl`).

**Ce dont j'ai besoin de toi (🔴).**

- L'**identifiant/URL exact de l'iframe** chambresdhotes.org. On le récupère :
  - soit dans le **code source de la page actuelle** `/disponibilites-reservation/` (chercher un motif `cal.cgi?make_iframe=1;list=1;who=…`),
  - soit dans ton **espace propriétaire chambresdhotes.org** (section « intégrer le calendrier / widget »).
- Si tu m'envoies le lien de la page actuelle ou une copie du code d'intégration, je l'extrais moi-même.

**Ce que je fais dès réception (🟡).**

- Renseigner `booking.iframeUrl`, régler le ratio/hauteur, lazy-load, tester l'affichage FR (et vérifier la langue du module).
- Le cadre pointillé est automatiquement remplacé par le vrai calendrier.

**Validation.** Calendrier réel affiché sur `/tarifs-reservation`, dates sélectionnables, prix à jour (source de vérité = chambresdhotes.org), lien de secours conservé.

---

## Chantier 4 — Formulaires (envoi d'emails + anti-spam) 🟡🔴

**État.** Formulaires **contact** et **demande au mois** complets (validation zod,
honeypot, états succès/erreur). Il manque les 2 services externes pour l'envoi réel.

**Ce dont j'ai besoin de toi (🔴).**

1. **Resend** (envoi des emails, gratuit jusqu'à 3 000/mois) :
   - Création d'un compte Resend + `RESEND_API_KEY`.
   - **Vérification du domaine** `lapetitemaisonsouslespins.fr` chez Resend (ajout d'enregistrements DNS SPF/DKIM) pour que les emails partent de `site@lapetitemaisonsouslespins.fr` sans finir en spam. → dépend du Chantier 5 (DNS).
   - Confirmation de l'email de réception (par défaut l’adresse de la propriétaire (variable Vercel)).
2. **Cloudflare Turnstile** (anti-spam invisible, gratuit) :
   - `PUBLIC_TURNSTILE_SITE_KEY` + `TURNSTILE_SECRET_KEY` (création d'un widget Turnstile).

**Ce que je fais (🟡).**

- Mettre les clés en env Vercel, tester un envoi de bout en bout (contact + demande au mois), vérifier la réception et la non-fuite de secrets.
- Sans les clés : les formulaires valident côté client mais l'envoi renvoie une erreur propre (déjà géré). Turnstile est **optionnel** au lancement (le honeypot protège déjà) mais recommandé.

**Validation.** Email reçu à chaque soumission, spam bloqué, aucun secret exposé côté client.

---

## Chantier 5 — Déploiement Vercel + domaine 🟡🔴

**État.** Projet configuré pour Vercel (adaptateur, analytics sans cookie, sitemap).
Rien n'est encore déployé.

**Étapes.**

1. 🔴 **Connecter le dépôt GitHub à Vercel** (compte Vercel gratuit) — je te guide, ou tu m'ajoutes.
2. 🟡 **Renseigner les variables d'environnement** Vercel (toutes celles de `.env.example` : Resend, Turnstile, Google Places, `PUBLIC_SITE_URL`).
3. 🟢 Premier **déploiement de preview** (URL `*.vercel.app`) pour recette avant bascule.
4. 🔴 **Repointer le domaine** `lapetitemaisonsouslespins.fr` de WordPress.com vers Vercel :
   - accès au **registrar / gestion DNS** du domaine,
   - ajout des enregistrements A / CNAME fournis par Vercel,
   - (+ SPF/DKIM Resend du Chantier 4).
5. 🟢 Vérifier HTTPS (certificat auto Vercel), redirection `www` → apex, `robots.txt`/sitemap en prod.

**Ce dont j'ai besoin de toi (🔴).** Accès Vercel + accès DNS du domaine (ou je te fournis la liste exacte des enregistrements à saisir).

**Validation.** Site en ligne sur le domaine final, HTTPS OK, emails délivrés, analytics actif.

---

## Chantier 6 — Contenus à arbitrer (CdC §11) 🔴

Points factuels à trancher (je ne les invente pas — placeholders en attente) :

1. **Chauffage piscine** — le site actuel se contredit (« juillet→fin octobre » vs « pas chauffée déc/jan/fév »). **Vérité à confirmer** → j'ajuste `pool.heatingNote`.
2. **Statut d'octobre** — semaine (800-1000 €) **et/ou** mois ? (impacte la grille tarifs).
3. **Température piscine** — retenu 29-30 °C : à confirmer.
4. **Nom d'affichage des propriétaires** — « Mr et Mme Ré » (mentions légales) : à confirmer.
5. **Tarifs** — la grille indicative t'appartient : valider les montants v2 (Juil-Août 1000-1200 € / Sept 850 € / Oct 800-1000 €).

**Ce que je fais.** Dès tes réponses, mise à jour des textes FR + EN (quelques minutes chacun).

---

## Chantier 7 — SEO, performance, accessibilité 🟢

**Ce que je fais, une fois les images et avis en place :**

- `og:image` réel par page + `apple-touch-icon` + favicon multi-format.
- `aggregateRating` (note Google) et `priceRange` dans le JSON-LD `LodgingBusiness`.
- Vérifier hreflang/canonical sur les 20 pages (10 FR + 10 EN) et le sitemap.
- **Passe Lighthouse ≥ 95** sur les 4 catégories (perf, a11y, best practices, SEO), desktop + mobile.
- Audit accessibilité final : focus visibles, contrastes AA, navigation clavier (lightbox, menu, onglets Tourisme), cibles ≥ 44 px.
- Bandeau cookies **uniquement si** la carte/les widgets Google déposent des cookies tiers (Analytics Vercel = sans cookie).

**Validation.** Lighthouse ≥ 95 partout, 0 erreur `astro check`, axe-core sans violation bloquante.

---

## Chantier 8 — Recette finale & go-live 🟢🔴

Checklist avant bascule DNS :

- [ ] Toutes les photos intégrées, galeries + lightbox OK.
- [ ] Module chambresdhotes.org fonctionnel.
- [ ] Formulaires : email reçu, anti-spam actif.
- [ ] Avis Google affichés (ou lien fiche à minima).
- [ ] Contenus arbitrés (chantier 6) validés.
- [ ] Pages légales relues (SIRET, hébergeur, nom propriétaires).
- [ ] Lighthouse ≥ 95, a11y OK, FR + EN vérifiés page à page.
- [ ] Preview Vercel validée par toi.
- [ ] Bascule DNS + vérif HTTPS + emails en prod.
- [ ] Ancien site WordPress conservé en lecture le temps de la transition.

---

## Ce dont j'ai besoin de toi — récapitulatif

| #   | Élément                                          | Pour débloquer                               |
| --- | ------------------------------------------------ | -------------------------------------------- |
| A   | URL fiche Google (Place ID)                      | Lien + affichage des avis (chantier 2)       |
| B   | Clé API Google Places                            | Affichage note + avis (chantier 2, niveau 2) |
| C   | URL/code d'intégration iframe chambresdhotes.org | Calendrier de réservation (chantier 3)       |
| D   | Compte Resend + clé API + validation domaine     | Envoi des emails (chantier 4)                |
| E   | Clés Cloudflare Turnstile                        | Anti-spam renforcé (chantier 4)              |
| F   | Accès Vercel                                     | Déploiement (chantier 5)                     |
| G   | Accès DNS du domaine                             | Mise en ligne + emails (chantiers 4, 5)      |
| H   | Photos Tourisme libres de droits (ou validation) | Images page Tourisme (chantier 1)            |
| I   | Réponses aux 5 points d'arbitrage                | Textes définitifs (chantier 6)               |

**Je peux avancer immédiatement, sans rien attendre**, sur : les **45 photos du gîte**
(téléchargement, optimisation, galeries, lightbox), l'image OG/favicon, et la passe
SEO/perf de base. Le reste s'enchaîne au fil de tes fournitures ci-dessus.

## Ordre recommandé

1. **Photos du gîte + lightbox** (🟢, je démarre quand tu veux) — impact visuel maximal.
2. **Lien/avis Google** (A/B) et **calendrier** (C) — les 2 fonctions clés côté visiteur.
3. **Resend + Turnstile** (D/E) — formulaires opérationnels.
4. **Déploiement preview Vercel** (F) — recette sur URL de test.
5. **Arbitrages contenus** (I) + **photos Tourisme** (H).
6. **SEO/perf/a11y final** puis **bascule DNS** (G) → go-live.
