# Cahier des charges v3 — Site « La petite maison sous les pins »

> Gîte T3 familial avec piscine intérieure chauffée & spa, **Puyricard – Aix-en-Provence**.
> v3 : suppression du Google Sheet et de la synchro iCal (voir §6). Contenu réel dans `CONTENU-SOURCE.md`.

---

## 1. Objectifs & principes

Remplacer le site WordPress.com actuel par une **vitrine moderne, sobre et familiale** regroupant infos, photos, tarifs, disponibilités, avis et contact.

| Principe | Traduction |
|---|---|
| **Gratuit à l'usage** | 0 €/mois nouveau. On réutilise chambresdhotes.org existant ; tout le reste en offre gratuite. |
| **Rapide à coder** | Vitrine quasi-statique + embeds. Pas de back-office, BDD, auth, ni CMS. |
| **Facile à gérer** | La propriétaire ne touche pas au code. **Tout (dispo, prix, résas) reste dans chambresdhotes.org, déjà maîtrisé.** |

---

## 2. Identité & coordonnées (confirmées)

- **Nom :** La Petite Maison Sous Les Pins
- **Propriétaires :** Mr et Mme Ré *(affichage à confirmer)*
- **Adresse :** 1689 chemin du Marin, 13540 Aix-en-Provence — **Puyricard**
- **Tél :** 04 42 28 15 69 · 06 62 32 67 18 — **Email :** mariedenise@neuf.fr
- **SIRET :** 439 696 402 00031

---

## 3. Le bien (confirmé)

**Gîte T3, 4 personnes, 2 chambres.**
- Ch. 1 : lit double 160 · Ch. 2 : 2 lits simples · 1 SdB (douche italienne, sèche-cheveux) · 1 WC séparé
- Séjour : baies vitrées sur jardin, canapé cuir, 3 fauteuils, Smart TV 108 cm, mini Hi-Fi
- Cuisine ouverte équipée (lave-vaisselle, lave-linge, four, vitrocéramique, réfrigérateur-congélateur, micro-ondes, grille-pain, cafetière)
- Climatisation · Internet · Lit bébé et lit d'appoint sur demande (appoint 30 €/sem)
- Extérieur : jardin clos de pins, terrasse, plancha gaz, ping-pong, transats, trampoline, vélos, parking 3 places

**Piscine intérieure chauffée :** 530 × 330 × 140 cm, eau **29-30 °C**, accès depuis séjour/terrasse, nage à contre-courant.
**Spa Hotspring (option) :** 4 places, couvert, 26-40 °C, jets. **200 €/semaine** en privatif.

> Règle à conserver : **« Fêtes et événements festifs non autorisés ».**

---

## 4. Modèle de location & tarifs

### 4.1 Location à la semaine (été) — réservation en ligne
- **Samedi → samedi.** Tarif = accès piscine chauffée pour 4 pers. **Spa non inclus** (option).

| Période | Prix/semaine (indicatif) |
|---|---|
| Juillet | 1000 – 1200 € |
| Août | 850 € |
| Septembre (– Octobre*) | 800 € |
| Option Spa | +200 €/sem |
| Option prise véhicule électrique | +30 €/sem |
| Lit d'appoint (sur demande) | +30 €/sem |

- **Conditions :** 20 % à la réservation (CB / Chèques-Vacances e-Connect), **solde à la remise des clés**. Moyens : CB, Chèques-Vacances & e-Connect, chèques. Annulation/report : préavis ≥ 1 mois.
- **Les prix exacts et à jour sont ceux du module chambresdhotes.org intégré** (§6.2). Le tableau ci-dessus n'est qu'indicatif (« à partir de… »).

### 4.2 Location au mois (octobre → juin) — sur demande, **sans piscine ni spa**
- **Maison seule, sans piscine ni jacuzzi** (exclus par défaut).
- Disponible **en continu du 1er octobre au 30 juin**, **sur demande**. Formule **au mois ou en saisonnier** possible **selon les dates et les disponibilités**.
- Tarif de référence : **1400 €/mois toutes charges comprises** (eau, électricité, internet). Option prise VE : +100 €/mois. Bail mobilité ou saisonnier sur justificatifs (1 à 9 mois).
- **Pas de réservation en ligne** → **formulaire de demande** (§6.3). Modalités et tarif précis étudiés au cas par cas selon période et durée (« nous consulter »).

---

## 5. Arborescence & contenu (7 pages · FR + EN)

Texte source complet dans `CONTENU-SOURCE.md`.

1. **Accueil** — hero, positionnement, points forts, double entrée *semaine (été)* / *mois (oct-juin)*, aperçu note Google + galerie.
2. **Le gîte** — descriptif §3 + galerie par espace (≈ 29 photos).
3. **Piscine & Spa** *(page dédiée, SEO)* — argument n°1 + option spa + « pas de fêtes » (≈ 22 photos).
4. **Tarifs & Réservation** — parcours A (semaine : grille indicative + **module chambresdhotes.org**) / parcours B (mois : formulaire de demande).
5. **Tourisme** — reprise des adresses actuelles : Escapades / Activités / Boire & Manger (62 liens, ≈ 27 photos).
6. **Avis** — widget Google Business Profile (fiche existante). Pas d'avis manuels.
7. **Contact & accès** — tél (clic-appel) + email affichés + formulaire + carte Google Maps + « comment venir ».

Pied de page : Mentions légales · Politique de confidentialité · Conditions de location *(à rédiger, §9)*.

---

## 6. Fonctionnalités

### 6.1 Disponibilités & réservation (simplifié)
- **Embed direct chambresdhotes.org** (iframe, Option A), dans un conteneur stylé.
- **Les calendriers des OTA (Airbnb, Booking, Abritel…) sont déjà synchronisés sur chambresdhotes.org** côté propriétaire. Le module embarqué reflète donc la **disponibilité agrégée**. → **Aucune synchro iCal à configurer côté site.**
- chambresdhotes.org reste la **source unique** de la disponibilité, des prix et des réservations (y compris blocage des résas directes ANCV/virement).

### 6.2 Tarifs (plus de Google Sheet)
- **Source unique = chambresdhotes.org.** Le **module intégré affiche les prix réels et à jour** quand le visiteur choisit ses dates → « toujours actualisé » sans code.
- *Note technique :* chambresdhotes.org n'expose pas de flux de prix (pas d'API ; l'iCal ne porte que les dispos ; scraping écarté car fragile). On ne réplique donc pas les prix : on s'appuie sur le module.
- Sur la page, une **grille indicative « à partir de… »** (contenu statique du repo, modifié 1-2×/an par Aline) donne l'ordre de grandeur et renvoie au module pour l'exact.

### 6.3 Formulaire « Location au mois » → mariedenise@neuf.fr
- **Mois / période souhaités** (mois complets ; période oct-juin) · **Nombre de personnes** · **Motif** · **Message**.
- Coordonnées (nom, email, téléphone) · consentement RGPD.

### 6.4 Formulaire de contact → mariedenise@neuf.fr
- Nom, email, téléphone (optionnel), message, consentement RGPD. Anti-spam : honeypot + Cloudflare Turnstile.

### 6.5 Avis Google
- Google Places API au build (note + ~5 avis + lien fiche), ou widget gratuit. *(À fournir : URL/Place ID.)*

### 6.6 Bilingue FR / EN
- Routage Astro `/` (FR) + `/en/`, sélecteur de langue, hreflang, traduction des textes/méta. Vérifier la langue du module chambresdhotes et de la carte.

---

## 7. Gestion courante — qui gère quoi

| Tâche | Fréquence | Outil | Qui |
|---|---|---|---|
| Réservations, **prix**, dispo, blocage résas directes | courant | **chambresdhotes.org** *(seul outil, déjà maîtrisé)* | Propriétaire |
| Demandes location au mois | courant | Email (formulaire) | Propriétaires |
| Grille indicative + contenu (textes, photos) | rare | Repo / Claude Code | Aline |
| Le code | jamais | — | — |

---

## 8. Direction artistique — *Brief Claude Design*

Voir le prompt dédié `PROMPT-Claude-Design.md`. En résumé : provençal familial, âme traditionnelle + mise en page épurée ; palette **vert pin + neutres chauds + bleu profond en accent discret (texte/liens, pas de gros boutons)**, bleu piscine via les photos ; titres **Fraunces**, texte **Work Sans** ; wordmark (pas de logo) ; sobre, micro-fondus.

---

## 9. Stack, légal, SEO

**Stack :** Astro + Tailwind · **Vercel** (gratuit) · domaine repointé depuis WordPress.com · **chambresdhotes.org embarqué (dispo + prix + résas + agrégation OTA)** · fonction Vercel + Resend pour emails (repli Web3Forms) · Turnstile · Google Places API (avis) · Google Maps embed · **Vercel Web Analytics** (gratuit, sans cookie). **~~Google Sheet~~ et ~~iCal~~ supprimés. Coût récurrent : 0 €.**

**Légal (à rédiger) :** Mentions légales (SIRET 439 696 402 00031, hébergeur Vercel) · Politique de confidentialité (formulaires → mariedenise@neuf.fr) · Conditions de location (alignées chambresdhotes.org). Consentement sur formulaires ; bandeau cookies si Maps/Places posent des cookies tiers.

**SEO :** FR « gîte piscine intérieure chauffée Aix-en-Provence / Puyricard » ; EN « holiday home heated indoor pool Aix-en-Provence ». schema.org `LodgingBusiness`/`VacationRental` · sitemap · OG/hreflang · images WebP/AVIF. Objectif Lighthouse 95+.

---

## 10. Lotissement

**MVP :** squelette Astro + design validé → 7 pages (embed chambresdhotes) → formulaires → FR/EN → domaine + déploiement.
**V1 :** avis Google · pages légales · SEO/schema/analytics.

**Hors périmètre :** moteur de résa maison · channel manager · admin/auth/BDD/CMS dans le site · paiement géré par le site · réplication des prix.

---

## 11. Points à arbitrer (restants)

1. **Chauffage piscine** — contradiction du site (« juillet→fin octobre » vs « pas chauffée déc/jan/fév »). Vérité ?
2. **Statut d'octobre** — semaine (800 €) et/ou mois ?
3. **Température piscine** — retenu 29-30 °C (à confirmer).
4. **Nom des propriétaires** à afficher.
5. **Fiche Google Business Profile** — URL / Place ID (pour les avis).
6. **Accès DNS** du domaine (repointage Vercel).

*(Résolu en v3 : location au mois = continue oct-juin sur demande, mois ou saisonnier selon dates/dispos ; tarifs via chambresdhotes.org sans Sheet ; agrégation OTA déjà en place, pas d'iCal à configurer.)*
