// Configs
import { portfolio } from '@/data/pages/portfolio/data';

// Utils
import type { ProjectType } from '@/types';

const getPortfolio = (): ProjectType[] => {
  try {
    return portfolio;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getPortfolio;
