// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';

// Components
import { Typography } from '@mui/material';

export async function generateMetadata(props: LangParamType) {
  const params = await props.params;
  const metadata = await getMetadata("home");

  return metadata[params.lang];
}

const HomePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <Typography>{dictionary.pages.home.title}</Typography>;
};

export default HomePage;
