import { site } from '~/data/site';

export interface Review {
  author: string;
  rating: number;
  text: string;
}
export interface ReviewsData {
  rating: number;
  total: number;
  reviews: Review[];
}

/**
 * Récupère les avis Google au build via Place Details.
 * Retourne `null` si la clé ou le Place ID manquent, ou si l'API échoue
 * (fallback propre : la section affiche un placeholder).
 *
 * TODO(§14.6) : fournir PLACE_ID (src/data/site.ts) et GOOGLE_PLACES_API_KEY (.env).
 */
export async function getReviews(): Promise<ReviewsData | null> {
  const key = import.meta.env.GOOGLE_PLACES_API_KEY;
  const placeId = site.placeId;
  if (!key || !placeId) return null;

  try {
    const url = new URL('https://maps.googleapis.com/maps/api/place/details/json');
    url.searchParams.set('place_id', placeId);
    url.searchParams.set('fields', 'rating,user_ratings_total,reviews');
    url.searchParams.set('reviews_sort', 'newest');
    url.searchParams.set('language', 'fr');
    url.searchParams.set('key', key);

    const res = await fetch(url);
    if (!res.ok) return null;
    const json = await res.json();
    const result = json.result;
    if (!result) return null;

    return {
      rating: result.rating ?? 0,
      total: result.user_ratings_total ?? 0,
      reviews: (result.reviews ?? [])
        .slice(0, 5)
        .map((r: { author_name: string; rating: number; text: string }) => ({
          author: r.author_name,
          rating: r.rating,
          text: r.text,
        })),
    };
  } catch {
    return null;
  }
}
