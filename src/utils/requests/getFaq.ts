// Configs
import { faq } from '@/data/pages/home/faq/data';

import type { FAQListType } from '@/types';

const getFaq = (): FAQListType => {
  try {
    return faq;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getFaq;
