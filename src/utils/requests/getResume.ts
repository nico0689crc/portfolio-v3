// Configs
import { resume } from '@/data/pages/resume/data';

// Utils
import type { ResumeType } from '@/types';

const getResume = (): ResumeType => {
  try {
    return resume;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getResume;
