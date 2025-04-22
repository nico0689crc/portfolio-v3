// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamPromiseType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';
import PortfolioView from '@/views/portfolio/PortfolioView';

// Page Metadata
export async function generateMetadata(props: LangParamPromiseType) {
  const params = await props.params;
  const metadata = getMetadata('portfolio');

  return metadata[params.lang];
}

// Page Component
const PortfolioPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <PortfolioView dictionary={dictionary} lang={params.lang} />;
};

export default PortfolioPage;
