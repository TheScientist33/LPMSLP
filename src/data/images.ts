/*
 * Images du site (photos réelles du gîte).
 *
 * 👉 Pour REMPLACER une photo : dépose ton nouveau fichier dans
 *    src/assets/images/… avec **exactement le même nom** que celui importé
 *    ci-dessous. Le site le reprend et l'optimise automatiquement.
 *
 * Le tableau lisible « quel fichier apparaît où » est dans PHOTOS.md (racine).
 * Les emplacements Tourisme utilisent encore des visuels neutres (photos
 * tierces à fournir séparément).
 */
import type { ImageMetadata } from 'astro';
import type { Locale } from '~/i18n/ui';

// — Piscine & Spa —
import piscineHero from '~/assets/images/piscine/piscine-hero.jpg';
import piscine01 from '~/assets/images/piscine/piscine-01.jpg';
import piscine02 from '~/assets/images/piscine/piscine-02.jpg';
import piscine03 from '~/assets/images/piscine/piscine-03.jpg';
import piscineNuit from '~/assets/images/piscine/piscine-nuit.jpg';
import piscineNage from '~/assets/images/piscine/piscine-nage.jpg';
import spa01 from '~/assets/images/piscine/spa-01.jpg';
import spa02 from '~/assets/images/piscine/spa-02.jpg';
import spaAcces from '~/assets/images/piscine/spa-acces.jpg';

// — Le gîte —
import sejour01 from '~/assets/images/gite/sejour-01.jpg';
import sejour02 from '~/assets/images/gite/sejour-02.jpg';
import cuisine01 from '~/assets/images/gite/cuisine-01.jpg';
import chambreParentale01 from '~/assets/images/gite/chambre-parentale-01.jpg';
import chambreEnfants01 from '~/assets/images/gite/chambre-enfants-01.jpg';
import salleDeBain01 from '~/assets/images/gite/salle-de-bain-01.jpg';
import jardinDrone from '~/assets/images/gite/jardin-drone.jpg';
import vuePins from '~/assets/images/gite/vue-pins.jpg';
import jardin01 from '~/assets/images/gite/jardin-01.jpg';
import jardin02 from '~/assets/images/gite/jardin-02.jpg';
import terrasse01 from '~/assets/images/gite/terrasse-01.jpg';
import parking from '~/assets/images/gite/parking.jpg';

export interface Picture {
  src: ImageMetadata;
  alt: Record<Locale, string>;
}

const p = (src: ImageMetadata, fr: string, en: string): Picture => ({ src, alt: { fr, en } });

export const pics = {
  // Piscine & Spa
  piscineHero: p(
    piscineHero,
    'Piscine intérieure chauffée avec vue sur le jardin',
    'Heated indoor pool with garden view',
  ),
  piscine01: p(piscine01, 'Piscine intérieure privative en bois', 'Private indoor wooden pool'),
  piscine02: p(piscine02, 'Piscine intérieure et sa terrasse', 'Indoor pool and its terrace'),
  piscine03: p(piscine03, 'Bassin de la piscine intérieure', 'Indoor pool basin'),
  piscineNuit: p(piscineNuit, 'Piscine intérieure éclairée de nuit', 'Indoor pool lit at night'),
  piscineNage: p(
    piscineNage,
    'Nage à contre-courant, vue depuis le salon',
    'Counter-current swim, view from the living room',
  ),
  spa01: p(spa01, 'Spa Hotspring 4 places couvert', 'Covered 4-seat Hotspring spa'),
  spa02: p(spa02, "Intérieur bois de l'espace spa", 'Wooden interior of the spa area'),
  spaAcces: p(spaAcces, 'Accès vers le spa depuis la piscine', 'Access to the spa from the pool'),

  // Le gîte
  sejour: p(
    sejour01,
    'Séjour lumineux ouvert sur la cuisine et la piscine',
    'Bright living room opening onto the kitchen and pool',
  ),
  sejour2: p(sejour02, 'Salon avec canapé et fauteuils', 'Lounge with sofa and armchairs'),
  cuisine: p(
    cuisine01,
    'Cuisine équipée ouverte sur le séjour',
    'Equipped kitchen open to the living room',
  ),
  chambreParentale: p(
    chambreParentale01,
    'Chambre avec lit double 160 cm',
    'Bedroom with 160 cm double bed',
  ),
  chambreEnfants: p(chambreEnfants01, 'Seconde chambre', 'Second bedroom'),
  salleDeBain: p(
    salleDeBain01,
    "Salle de bain avec douche à l'italienne",
    'Bathroom with walk-in shower',
  ),
  jardinDrone: p(
    jardinDrone,
    'Vue aérienne du jardin de pins et de la maison',
    'Aerial view of the pine garden and the house',
  ),
  vuePins: p(
    vuePins,
    'Vue sur les pins depuis la propriété',
    'View of the pines from the property',
  ),
  jardin: p(jardin01, 'Jardin clos arboré de pins', 'Enclosed garden shaded by pines'),
  jardin2: p(jardin02, 'Jardin et terrasse extérieure', 'Garden and outdoor terrace'),
  terrasse: p(terrasse01, 'Terrasse et coin repas extérieur', 'Terrace and outdoor dining area'),
  parking: p(parking, 'Parking privé de 3 places', 'Private parking for 3 cars'),
} satisfies Record<string, Picture>;
