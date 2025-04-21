// External Imports
import { Button } from '@mui/material';
import Link from 'next/link';

// Internal Imports
import type { DictionaryType, LangParamType } from '@/types';
import { getLocalizedUrl } from '@/utils/i18n';
import routes from '@/configs/routes';
import AboutMeSectionWrapper from './AboutMeSectionWrapper';
import AboutMeHeader from './header/AboutMeHeader';
import { AboutMeBodyWrapper, AboutMeContent, AboutMeExperience } from './body';

// Component Definition
const AboutMeSection = async ({ dictionary, lang }: DictionaryType & LangParamType) => (
  <AboutMeSectionWrapper>
    <AboutMeHeader dictionary={dictionary} />
    <AboutMeBodyWrapper>
      <AboutMeContent dictionary={dictionary} />
      <AboutMeExperience dictionary={dictionary} />
    </AboutMeBodyWrapper>
    <Button
      component={Link}
      href={getLocalizedUrl(routes.pages.public.aboutMe, lang)}
      variant="contained"
      color="primary"
    >
      {dictionary.pages.home.sections.about.more_about_me}
    </Button>
  </AboutMeSectionWrapper>
);

export default AboutMeSection;
