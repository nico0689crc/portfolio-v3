// Component imports
import type { Locale } from "@/configs/i18n";

import PublicNavigationList from "./PublicNavigationList";
import PublicNavigationListItem from "./PublicNavigationListItem";
import { getDictionary } from "@/utils/getDictionary";
import { navigationItems } from "@/components/layouts/public/common/navigations";

type PublicNavigationProps = {
  lang: Locale
}

const PublicNavigation = async (props: PublicNavigationProps) => {
  const dictionary = await getDictionary(props.lang);

  return (
    <PublicNavigationList>
      {navigationItems.map((item) => (
        <PublicNavigationListItem
          key={item.name}
          text={dictionary.pages[item.name].title}
          href={item.href}
          lang={props.lang}
        />
      ))}
    </PublicNavigationList>
  )
};

export default PublicNavigation;