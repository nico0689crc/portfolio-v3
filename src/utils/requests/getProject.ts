// Configs
import { apiRoutes } from '@/configs/routes';

// Utils
import fetcher from './fetcher';
import type { ProjectType } from '@/types';

const getProject = async (slug: string): Promise<ProjectType> => {
  try {
    const data: ProjectType = await fetcher(`${process.env.API_URL}/${apiRoutes.pages.portfolio.root}/${slug}`);

    return data;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getProject;
