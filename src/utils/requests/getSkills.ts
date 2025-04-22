import type { GroupedSkills } from '@/types';
import { groupedSkills } from '@/data/pages/about-me/skills/data';

const getSkills = (): GroupedSkills => {
  try {
    return groupedSkills;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getSkills;
