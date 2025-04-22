// Types
import type { Locale } from '@/configs/i18n';
import type { Metadata } from 'next';

import metadatas from '@/data/pages/metadatas';

type PageType = 'default' | 'home' | 'aboutMe' | 'resume' | 'portfolio' | 'contact';

const getMetadata = (page: PageType): { [key in Locale]: Metadata } => {
  try {
    return metadatas[page];
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getMetadata;
