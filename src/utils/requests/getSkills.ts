// Configs
import { apiRoutes } from '@/configs/routes';

// Utils
import fetcher from './fetcher';
import type { GroupedSkills } from '@/types';

const getSkills = async (): Promise<GroupedSkills> => {
  try {
    const data: GroupedSkills = await fetcher(
      `${process.env.API_URL}/${apiRoutes.pages.aboutMe.skills}`,
    );

    return data;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getSkills;
