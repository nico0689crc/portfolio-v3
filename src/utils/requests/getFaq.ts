// Configs
import { apiRoutes } from '@/configs/routes';

// Utils
import fetcher from './fetcher';
import type { FAQListType } from '@/types';

const getFaq = async () => {
  try {
    const data: FAQListType = await fetcher(`${process.env.API_URL}/${apiRoutes.pages.home.faq}`);

    return data;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getFaq;
