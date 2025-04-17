import routes from '@/configs/routes';
import type { PageKeys } from '@/types';

export type navigationItemsType = {
  name: PageKeys;
  href: string;
};

// Data for navigation items
export const navigationItems: navigationItemsType[] = [
  { name: 'home', href: routes.pages.public.home },
  { name: 'about_me', href: routes.pages.public.aboutMe },
  { name: 'resume', href: routes.pages.public.resume },
  { name: 'portfolio', href: routes.pages.public.portfolio },
  { name: 'contact', href: routes.pages.public.contact },
];
