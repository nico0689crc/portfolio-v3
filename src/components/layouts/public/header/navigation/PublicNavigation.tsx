// Component imports
import type { Locale } from "@/configs/i18n";
import type { PageKeys } from "@/types";

import PublicNavigationList from "./PublicNavigationList";
import PublicNavigationListItem from "./PublicNavigationListItem";
import { getDictionary } from "@/utils/getDictionary";
import routes from "@/configs/routes";

type navigationItemsType = {
  name: PageKeys;
  href: string;
};

type PublicNavigationProps = {
  lang: Locale
}

// Data for navigation items
const navigationItems: navigationItemsType[] = [
  { name: "home", href: routes.pages.public.home },
  { name: "about_me", href: routes.pages.public.aboutMe },
  { name: "resume", href: routes.pages.public.resume },
  { name: "portfolio", href: routes.pages.public.portfolio },
  { name: "contact", href: routes.pages.public.contact },
];

const PublicNavigation = async (props: PublicNavigationProps) => {
  const dictionary = await getDictionary(props.lang);

  return (
    <PublicNavigationList>
      {navigationItems.map((item) => (
        <PublicNavigationListItem
          key={item.name}
          text={dictionary.pages[item.name].title}
          href={item.href}
        />
      ))}
    </PublicNavigationList>
  )
};

export default PublicNavigation;