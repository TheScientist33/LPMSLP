import { booking } from '~/data/booking';

/**
 * Lecture du flux iCal d'export de chambresdhotes.org au moment du build.
 * Retourne la liste des jours OCCUPÉS au format 'YYYY-MM-DD' (nuits réservées),
 * ou `null` si le flux est injoignable (→ repli sur l'iframe d'origine).
 *
 * Convention iCal : DTEND est EXCLUSIF. Un événement 15→22 = nuits 15..21
 * occupées, le 22 (jour de départ) reste libre pour une nouvelle arrivée.
 */

function pad(n: number): string {
  return String(n).padStart(2, '0');
}
function isoUTC(d: Date): string {
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
}
/** Extrait une date d'une valeur iCal (20260815 ou 20260815T140000Z). */
function parseIcsDate(value: string): Date | null {
  const m = value.match(/(\d{4})(\d{2})(\d{2})/);
  if (!m) return null;
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3]));
}

/** Extrait les jours occupés d'un seul flux iCal dans `booked`. */
function collectFromIcs(text: string, booked: Set<string>): void {
  // Dépliage des lignes iCal (une ligne suivante commençant par espace/tab
  // est la continuation de la précédente).
  const lines = text.replace(/\r?\n[ \t]/g, '').split(/\r?\n/);
  let inEvent = false;
  let start: Date | null = null;
  let end: Date | null = null;

  for (const line of lines) {
    if (line.startsWith('BEGIN:VEVENT')) {
      inEvent = true;
      start = end = null;
      continue;
    }
    if (line.startsWith('END:VEVENT')) {
      if (start) {
        const last = end ?? new Date(start.getTime() + 86400000);
        for (let d = new Date(start); d < last; d.setUTCDate(d.getUTCDate() + 1)) {
          booked.add(isoUTC(d));
        }
      }
      inEvent = false;
      continue;
    }
    if (!inEvent) continue;
    // On ignore volontairement SUMMARY/DESCRIPTION (noms de clients éventuels).
    if (line.startsWith('DTSTART')) start = parseIcsDate(line.split(':').pop() ?? '');
    else if (line.startsWith('DTEND')) end = parseIcsDate(line.split(':').pop() ?? '');
  }
}

/**
 * Lit et FUSIONNE tous les flux iCal (booking.icsUrls). Un jour est « occupé »
 * dès qu'au moins un flux le déclare. Résilient : si un flux échoue, les autres
 * sont conservés. Retourne `null` seulement si AUCUN flux n'a pu être lu.
 */
export async function getBookedDates(): Promise<string[] | null> {
  const booked = new Set<string>();
  let anyOk = false;

  await Promise.all(
    booking.icsUrls.map(async (url) => {
      try {
        const res = await fetch(url, {
          headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LPMSLP-site/1.0)' },
        });
        if (!res.ok) return;
        collectFromIcs(await res.text(), booked);
        anyOk = true;
      } catch {
        /* flux ignoré, on garde les autres */
      }
    }),
  );

  if (!anyOk) return null;
  return [...booked].sort();
}
