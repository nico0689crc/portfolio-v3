// Third-party Imports
// eslint-disable-next-line import/no-unresolved
import 'server-only';

// Type Imports
import type { Locale } from '@/configs/i18n';

const dictionaries = {
  en: () => import('@/data/dictionaries/en.json').then((module) => module.default),
  es: () => import('@/data/dictionaries/es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Record<string, any>> => dictionaries[locale]();
