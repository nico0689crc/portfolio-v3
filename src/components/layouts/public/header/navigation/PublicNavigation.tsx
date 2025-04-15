// Component imports
import type { Locale } from "@/configs/i18n";

import PublicNavigationList from "./PublicNavigationList";
import PublicNavigationListItem from "./PublicNavigationListItem";
import { getDictionary } from "@/utils/getDictionary";

export type PageKeys = "home" | "about_me" | "resume" | "portfolio" | "contact";

type navigationItemsType = {
  name: PageKeys;
  href: string;
};

type PublicNavigationProps = {
  lang: Locale
}

// Data for navigation items
const navigationItems: navigationItemsType[] = [
  { name: "home", href: "/" },
  { name: "about_me", href: "/about" },
  { name: "resume", href: "/resume" },
  { name: "portfolio", href: "/portfolio" },
  { name: "contact", href: "/contact" },
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