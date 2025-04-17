// Types
import type { Locale } from '@/configs/i18n';
import type { Metadata } from 'next';

// Configs
import { apiRoutes } from '@/configs/routes';

// Utils
import fetcher from './fetcher';

type PageType = keyof typeof apiRoutes.pages;

const getMetadata = async (page: PageType) => {
  try {
    const pageRoute = apiRoutes.pages[page];
    if (!pageRoute) {
      throw new Error(`Page route for "${page}" does not exist.`);
    }
    const data: { [key in Locale]: Metadata } = await fetcher(
      `${process.env.API_URL}/${pageRoute.metadata}`
    );

    return data;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getMetadata;
