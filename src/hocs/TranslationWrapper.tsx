// Next Imports
import type { headers } from 'next/headers';
// Type Imports
import type { Locale } from '@/configs/i18n';
import type { ChildrenType } from '@/@core/types';

// Config Imports
import { i18n } from '@/configs/i18n';
// Component Imports
import LangRedirect from '@/components/LangRedirect';

// ℹ️ We've to create this array because next.js makes request with `_next` prefix for static/asset files
const invalidLangs = ['_next'];

const TranslationWrapper = (
  props: { headersList: Awaited<ReturnType<typeof headers>>; lang: Locale } & ChildrenType
) => {
  const doesLangExist = i18n.locales.includes(props.lang);

  const isInvalidLang = invalidLangs.includes(props.lang);

  return doesLangExist || isInvalidLang ? props.children : <LangRedirect />;
};

export default TranslationWrapper;
