import fr from './fr.json';
import en from './en.json';
import { defaultLocale, type Locale } from './ui';

const dictionaries: Record<Locale, Record<string, unknown>> = { fr, en };

/** Récupère une valeur imbriquée via une clé "a.b.c". */
function resolve(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, part) => {
    if (acc && typeof acc === 'object' && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

/**
 * Traduit une clé pour une locale. Retourne une string ou (pour les listes)
 * la valeur brute. Fallback FR puis clé si absente.
 */
export function useTranslations(locale: Locale) {
  return function t<T = string>(key: string): T {
    const value = resolve(dictionaries[locale], key) ?? resolve(dictionaries[defaultLocale], key);
    return (value ?? key) as T;
  };
}
