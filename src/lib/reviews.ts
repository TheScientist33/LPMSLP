import { site } from '~/data/site';

export interface Review {
  author: string;
  rating: number;
  text: string;
  /** Date relative fournie par Google (ex. « il y a un mois »). */
  when?: string;
}
export interface ReviewsData {
  rating: number;
  total: number;
  reviews: Review[];
}

/** Forme d'un avis renvoyé par Places API (New). */
interface NewApiReview {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: { text?: string };
  originalText?: { text?: string };
  authorAttribution?: { displayName?: string };
}

/**
 * Récupère les avis Google au build via Places API (New) — Place Details.
 *   GET https://places.googleapis.com/v1/places/{placeId}
 *   en-têtes : X-Goog-Api-Key + X-Goog-FieldMask
 * Retourne `null` si la clé ou le Place ID manquent, ou si l'API échoue
 * (fallback propre : la section affiche un placeholder).
 *
 * TODO(§14.6) : fournir GOOGLE_PLACES_API_KEY (.env / Vercel). Le Place ID est
 * déjà renseigné dans src/data/site.ts. Google renvoie au plus 5 avis.
 */
export async function getReviews(): Promise<ReviewsData | null> {
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = site.placeId;
  if (!key || !placeId) return null;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?languageCode=fr`,
      {
        headers: {
          'X-Goog-Api-Key': key,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
      },
    );
    if (!res.ok) return null;
    const json = await res.json();

    return {
      rating: json.rating ?? 0,
      total: json.userRatingCount ?? 0,
      reviews: (json.reviews ?? [])
        .slice(0, 6)
        .map((r: NewApiReview) => ({
          author: r.authorAttribution?.displayName ?? '',
          rating: r.rating ?? 0,
          text: r.text?.text ?? r.originalText?.text ?? '',
          when: r.relativePublishTimeDescription,
        }))
        .filter((r: Review) => r.text),
    };
  } catch {
    return null;
  }
}
