// Configs
import { portfolio } from '@/data/pages/portfolio/data';

// Utils
import type { ProjectType } from '@/types';
import { notFound } from 'next/navigation';

const getProject = (slug: string): ProjectType => {
  try {
    const data = portfolio.find((project) => project.slug === slug);

    if (!data) {
      notFound();
    }

    return data;
  } catch (error) {
    console.error('Error fetching default metadata:', error);
    throw error;
  }
};

export default getProject;
