# AGENT.md — Guide de build pour Claude Code

Projet : **site vitrine du gîte « La Petite Maison Sous Les Pins »** (Puyricard, Aix-en-Provence).
Ce fichier pilote le développement. Lis-le en entier avant de coder, puis suis le workflow §12.

> **Documents compagnons (à lire aussi, dans le repo) :**
> - `CdC-lapetitemaisonsouslespins-v3.md` — cahier des charges (source de vérité des décisions).
> - `CONTENU-SOURCE.md` — textes réels de chaque page + 62 liens tourisme + manifeste des 72 images.
> - *(À venir)* export du design depuis Claude Design — sera injecté après review. **Tant qu'il n'est pas fourni, applique la direction artistique §5 mais reste sur une structure propre et sobre, sans sur-investir le visuel : il sera aligné sur le design final ensuite.**
>
> **Note :** Claude Code charge automatiquement un fichier nommé `CLAUDE.md` à la racine. Si tu veux l'auto-chargement, renomme ce fichier `CLAUDE.md` (contenu identique).

---

## 1. Objectif & principes

Vitrine élégante, sobre, familiale, **bilingue FR/EN**, qui regroupe : infos & photos, piscine/spa, tarifs & disponibilités, tourisme, avis, contact. La réservation elle-même est déléguée à un **module externe intégré** (chambresdhotes.org).

**Principes non négociables :**
1. **Gratuit à l'usage** — 0 €/mois. Aucune dépendance payante.
2. **Rapide à coder / léger** — site **statique** (Astro), JS minimal (islands seulement).
3. **Facile à gérer** — la propriétaire ne touche **pas** au code. Dispo, prix et réservations restent dans **chambresdhotes.org** (déjà en place, OTA déjà agrégées côté propriétaire).

---

## 2. Stack imposée

- **Astro 5** + **TypeScript (strict)** + **Tailwind CSS**.
- **i18n** via le routage natif Astro (`astro:i18n`) : FR par défaut (`/`), EN sous `/en/`.
- **Hébergement : Vercel** (offre gratuite). Adaptateur `@astrojs/vercel`.
- **Sitemap** `@astrojs/sitemap`. **Images** `astro:assets` (`<Image>`, WebP/AVIF, responsive).
- **Polices auto-hébergées** via Fontsource (pas de requête Google Fonts) : `@fontsource-variable/fraunces`, `@fontsource/work-sans`.
- **Emails formulaires** : endpoint serveur Astro (fonction Vercel) + **Resend**.
- **Anti-spam** : honeypot + **Cloudflare Turnstile** (vérif serveur).
- **Avis** : **Google Places API** au build. **Carte** : Google Maps embed (sans clé).
- **Analytics** : `@vercel/analytics` (sans cookie).
- **Validation** : `zod`. **Lint/format** : ESLint + Prettier + `prettier-plugin-astro` + `prettier-plugin-tailwindcss`.

**Interdits (ne pas introduire) :** CMS, base de données, authentification, back-office, channel manager, réplication/scraping des prix, gros framework SPA (Next/React global), librairies UI lourdes.

---

## 3. Architecture de rendu

- Site **statique par défaut** (`prerender` implicite).
- Seuls les **endpoints de formulaire** sont en rendu serveur : `export const prerender = false` sur les routes API, transformées en fonctions serverless par l'adaptateur Vercel.
- Les **avis Google** sont récupérés **au build** (pas d'appel côté client) et mis en cache dans le build ; prévoir un fallback si l'API échoue.

---

## 4. Structure de fichiers cible

```
/
├─ AGENT.md  /  CLAUDE.md
├─ CdC-lapetitemaisonsouslespins-v3.md
├─ CONTENU-SOURCE.md
├─ astro.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ .env.example
├─ public/                      # favicon, robots.txt, images statiques
├─ src/
│  ├─ assets/images/            # images optimisées (téléchargées depuis WordPress)
│  ├─ components/
│  │  ├─ Header.astro  Footer.astro  LanguageSwitcher.astro
│  │  ├─ Button.astro  Card.astro  Section.astro
│  │  ├─ Gallery.astro (island)  Lightbox
│  │  ├─ BookingEmbed.astro     # iframe chambresdhotes.org
│  │  ├─ MapEmbed.astro         # iframe Google Maps
│  │  ├─ ReviewsGoogle.astro    # rendu des avis (données build)
│  │  ├─ ContactForm.astro / MonthlyRequestForm.astro (islands)
│  │  └─ Seo.astro / JsonLd.astro
│  ├─ layouts/BaseLayout.astro
│  ├─ i18n/                     # fr.json, en.json + helpers (t(), localizeUrl())
│  ├─ data/
│  │  ├─ tarifs.ts              # grille INDICATIVE (« à partir de… »)
│  │  ├─ equipements.ts  tourisme.ts
│  ├─ lib/                      # reviews.ts (Places API), email.ts (Resend), turnstile.ts
│  ├─ pages/                    # FR (racine) + en/ (miroir)  + pages/api/*
│  └─ styles/global.css
```

---

## 5. Direction artistique (à appliquer, sera affinée par le design Claude Design)

**Tokens de couleur (Tailwind `theme.extend.colors`) :**
- `cream` #FAF6EF (fond principal) · `sand` #EFE7D9 · `beige` #E9DFCE (fonds alternés/cartes)
- `pine` #33503F (identité dominante : titres accents, filets, aplats sobres) · `sage` #7C9885 (fonds doux)
- `marine` #264E6C (**accent** : texte/liens/petits CTA — **pas de gros boutons vifs**)
- `pool` #8FBCCB (touche légère, hover) · `ink` #2B2823 (texte) · `muted` #6B6459 (texte secondaire)

**Typographie :** titres **Fraunces** (500-600) ; corps/UI **Work Sans** (400/500). Map dans Tailwind : `font-display` / `font-sans`.

**Style :** beaucoup de blanc et d'air, grandes photos, sections alternées photo/texte, filets fins, ombres très douces, coins arrondis 4-6 px. Ambiance « modern rustic provençal », familiale, **jamais festive**. Wordmark typographique « La petite maison sous les pins » (pas de logo).

**Boutons/CTA discrets :** primaire = aplat/contour `pine`, texte `cream` ; liens = `marine` soulignés au survol.

**Mouvement :** micro-fondus / apparitions douces au scroll, **en respectant `prefers-reduced-motion`**.

**Accessibilité :** HTML sémantique, `alt` sur toutes les images, focus visibles, contrastes AA, skip-link, navigation clavier, cibles tactiles ≥ 44 px.

**Perf :** viser Lighthouse ≥ 95 partout. JS uniquement pour : menu mobile, lightbox galerie, formulaires.

---

## 6. Pages & routes (FR + EN)

| FR | EN | Contenu (voir `CONTENU-SOURCE.md`) |
|---|---|---|
| `/` | `/en/` | Accueil : hero, points forts, double entrée semaine/mois, aperçu avis + galerie |
| `/le-gite` | `/en/the-house` | Descriptif T3 4 pers + équipements + galerie |
| `/piscine-spa` | `/en/pool-spa` | Piscine intérieure chauffée + option spa + « pas de fêtes » |
| `/tarifs-reservation` | `/en/rates-booking` | Parcours A (semaine + `BookingEmbed`) / Parcours B (mois + formulaire) |
| `/tourisme` | `/en/discover` | Escapades / Activités / Boire & Manger |
| `/avis` | `/en/reviews` | `ReviewsGoogle` |
| `/contact` | `/en/contact` | Coordonnées + `ContactForm` + `MapEmbed` + « comment venir » |
| `/mentions-legales` `/confidentialite` `/conditions-location` | idem `/en/…` | Pages légales (§10) |

Chaque page : `<Seo>` (title/meta/OG), balises **hreflang** FR↔EN, canonical.

---

## 7. Intégrations

### 7.1 BookingEmbed (chambresdhotes.org)
- Iframe du module de réservation/calendrier, dans un conteneur stylé, **lazy-load**, ratio responsive, avec lien de secours (« Réserver sur chambresdhotes.org »).
- **URL/identifiant exact à récupérer** depuis le code source de la page actuelle `/disponibilites-reservation/` ou l'espace propriétaire chambresdhotes.org (motif attendu du type `cal.cgi?make_iframe=1;list=1;who=…`). **Ne pas inventer l'identifiant** → le mettre en variable de config (`src/data/booking.ts`) avec un `TODO`.
- Rappels : les prix affichés par le module sont la **source de vérité** ; les OTA sont déjà synchronisées côté chambresdhotes.org (rien à faire ici).

### 7.2 Formulaires → `mariedenise@neuf.fr`
- **Contact** : nom, email, téléphone (optionnel), message, consentement RGPD.
- **Demande location au mois** : période souhaitée (oct-juin, mois complets), nombre de personnes, motif, message, coordonnées, consentement RGPD.
- Endpoints `src/pages/api/contact.ts` et `.../monthly-request.ts` (`prerender = false`) : valider avec `zod`, vérifier Turnstile côté serveur, refuser si honeypot rempli, envoyer via Resend, répondre JSON `{ok}`. Côté client (island) : états loading/succès/erreur, pas de rechargement.
- **Ne jamais** logguer d'email en clair ni exposer de secret côté client.

### 7.3 Avis Google
- `src/lib/reviews.ts` : au build, `Place Details` (champs rating, user_ratings_total, reviews) via `GOOGLE_PLACES_API_KEY` + `PLACE_ID`. Rendre note globale + jusqu'à ~5 avis + lien vers la fiche. Fallback propre si indispo. **Place ID à fournir** (sinon `TODO` + section masquée).

### 7.4 Carte
- `MapEmbed.astro` : iframe Google Maps (sans clé) centrée sur *1689 chemin du Marin, 13540 Aix-en-Provence (Puyricard)*, lazy-load.

### 7.5 Analytics
- `@vercel/analytics` (sans cookie) dans le layout.

---

## 8. Contenu & images

- **Textes** : reprendre **fidèlement** ceux de `CONTENU-SOURCE.md` (FR). Ne pas réinventer. Traduire en EN dans `src/i18n/en.json` (traduction naturelle, ton chaleureux).
- **Images** : le manifeste liste 72 URLs WordPress. **Les télécharger dans `src/assets/images/`** (ne pas hotlinker WordPress), puis servir via `<Image>` optimisé. Nommer clairement (ex. `piscine-interieure-01.jpg`). `alt` descriptifs bilingues.
- **Tarifs** : `src/data/tarifs.ts` = grille **indicative** uniquement (Juillet 1000-1200 € / Août 850 € / Sept-Oct 800 € / Spa +200 € / VE +30 €). Le prix exact vient du module. Mois : « à partir de 1400 €/mois TCC, sur demande ».

---

## 9. i18n

- FR par défaut, EN sous `/en/`. Helper `t(locale, key)` + `localizeUrl(locale, path)`.
- Aucune chaîne en dur dans les composants : tout dans `fr.json`/`en.json`.
- `hreflang` + `x-default` sur toutes les pages. Sélecteur de langue conservant la page courante.

---

## 10. Légal & RGPD (à rédiger, FR + EN)

- **Mentions légales** : éditeur (Mr et Mme Ré — *nom d'affichage à confirmer*), SIRET 439 696 402 00031, hébergeur Vercel, contact.
- **Politique de confidentialité** : données des formulaires envoyées à `mariedenise@neuf.fr`, finalité (répondre aux demandes), durée, droits RGPD, pas de revente.
- **Conditions de location** : aligner sur chambresdhotes.org (samedi-samedi, 20 % d'acompte CB/Chèques-Vacances, solde à la remise des clés, annulation préavis 1 mois).
- Case de consentement + lien confidentialité sur chaque formulaire. **Bandeau cookies** à prévoir **uniquement si** Google Maps/Places posent des cookies tiers côté client (Analytics Vercel = sans cookie).

---

## 11. SEO

- `<Seo>` par page : title, meta description, Open Graph, canonical, hreflang.
- **JSON-LD `LodgingBusiness`/`VacationRental`** : nom, adresse, geo, équipements, `priceRange`, `aggregateRating` (depuis Google si dispo).
- `@astrojs/sitemap`, `robots.txt`, images optimisées.
- Cibles : FR « gîte piscine intérieure chauffée Aix-en-Provence / Puyricard » ; EN « holiday home heated indoor pool Aix-en-Provence ».

---

## 12. Workflow de build (incrémental — vérifier à chaque étape)

1. **Scaffold** Astro + TS + Tailwind + adaptateur Vercel + sitemap + Fontsource. Config i18n. Lint/format.
2. **Design system** : tokens couleurs/typo Tailwind, `BaseLayout`, `Header` (+ `LanguageSwitcher`, menu mobile, clic-appel), `Footer`, `Button`, `Card`, `Section`.
3. **Pages FR** (contenu réel) : Accueil → Le gîte → Piscine & Spa → Tarifs & Réservation → Tourisme → Avis → Contact. Placeholders `TODO` là où une info est en attente (§14).
4. **Images** : télécharger, optimiser, intégrer galeries + lightbox.
5. **Intégrations** : `BookingEmbed`, `MapEmbed`, `ReviewsGoogle`.
6. **Formulaires** + endpoints Resend/Turnstile.
7. **i18n EN** : miroir des pages + traductions.
8. **SEO** : Seo/JsonLd/sitemap/hreflang. **Légal** : 3 pages.
9. **Analytics** + passe accessibilité + budget perf (Lighthouse ≥ 95).
10. **Déploiement Vercel** + variables d'env + repointage domaine.

**Definition of done par feature** : build vert, `astro check` OK, lint OK, pas de secret exposé, responsive desktop+mobile, `prefers-reduced-motion` respecté.

---

## 13. Variables d'environnement (`.env.example`)

```
RESEND_API_KEY=
CONTACT_TO_EMAIL=mariedenise@neuf.fr
PUBLIC_TURNSTILE_SITE_KEY=
TURNSTILE_SECRET_KEY=
GOOGLE_PLACES_API_KEY=
PLACE_ID=
PUBLIC_SITE_URL=https://lapetitemaisonsouslespins.fr
```
Ne jamais committer `.env`. Secrets côté serveur uniquement (seules les vars `PUBLIC_*` sont exposées au client).

---

## 14. À NE PAS inventer — mettre en `TODO` et lister

Ces points sont en attente d'arbitrage (voir CdC §11). **Ne pas les remplir au hasard** : utiliser un placeholder visible et les recenser dans un fichier `TODO.md`.
1. Identifiant/URL exact du module chambresdhotes.org.
2. Période réelle de chauffage de la piscine (le site se contredit).
3. Statut d'octobre (semaine et/ou mois).
4. Température piscine (retenu provisoirement 29-30 °C).
5. Nom d'affichage des propriétaires.
6. `PLACE_ID` Google (avis).
7. Accès DNS pour le repointage du domaine.

---

## 15. Commandes

```
npm install
npm run dev        # dev local
npm run build      # build de prod
npm run preview    # prévisualisation du build
npx astro check    # types/diagnostics
```
Déploiement : connecter le repo GitHub à Vercel, renseigner les variables d'env, déployer.
