// Configs
import { apiRoutes } from '@/configs/routes';

// Utils
import fetcher from './fetcher';
import type { ResumeType } from '@/types';

const getResume = async () => {
  try {
    const data: ResumeType = await fetcher(`${process.env.API_URL}/${apiRoutes.pages.resume.root}`);

    return data;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getResume;
