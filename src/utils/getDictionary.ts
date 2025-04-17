// Third-party Imports
// eslint-disable-next-line import/no-unresolved
import 'server-only';

// Type Imports
import type { Locale } from '@/configs/i18n';

// Import one of the JSON files to infer the type
import enDictionary from '@/data/dictionaries/en.json';

type Dictionary = typeof enDictionary;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('@/data/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/data/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Dictionary> =>
  dictionaries[locale]();
