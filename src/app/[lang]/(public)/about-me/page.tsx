// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamPromiseType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';
import AboutMeView from '@/views/about-me/AboutMeView';

// External Components

// Page Metadata
export async function generateMetadata(props: LangParamPromiseType) {
  const params = await props.params;
  const metadata = getMetadata('aboutMe');

  return metadata[params.lang];
}

// Page Component
const AboutMePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <AboutMeView dictionary={dictionary} />;
};

export default AboutMePage;
