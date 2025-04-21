// Types
import type { DictionaryType, LangParamType } from '@/types';

// Components
import HeroSection, {
  HeroSectionPictureProfile,
  HeroSectionTitle,
} from './sections/hero/HeroSection';
import AboutMeSection from './sections/about-me/AboutMeSection';
import FaqSection from './sections/faq/FaqSection';

type HomeViewProps = DictionaryType & LangParamType;

const HomeView = async (props: HomeViewProps) => {
  const { dictionary, lang } = props;

  return (
    <>
      <HeroSection>
        <HeroSectionPictureProfile dictionary={dictionary} />
        <HeroSectionTitle dictionary={dictionary} lang={lang} />
      </HeroSection>
      <AboutMeSection dictionary={dictionary} lang={lang} />
      <FaqSection dictionary={dictionary} lang={lang} />
    </>
  );
};

export default HomeView;
