import { socialLinks } from '@/data/social-links';
import type { PublicSocialLinkType } from '@/types';

const getSocialLinks = (): PublicSocialLinkType[] => {
  try {
    return socialLinks;
  } catch (error) {
    console.error('Failed to fetch social links:', error);
    throw error;
  }
};

export default getSocialLinks;
