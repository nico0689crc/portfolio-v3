// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamPromiseType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';
import HomeView from '@/views/home/HomeView';

export async function generateMetadata(props: LangParamPromiseType) {
  const params = await props.params;
  const metadata = getMetadata('home');

  return metadata[params.lang];
}

const HomePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <HomeView dictionary={dictionary} lang={params.lang} />;
};

export default HomePage;
