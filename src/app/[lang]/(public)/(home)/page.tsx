import type { Locale } from '@/configs/i18n';
import { getDictionary } from '@/utils/getDictionary';
import { Typography } from '@mui/material';

const HomePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <Typography>{dictionary.pages.home.title}</Typography>;
};

export default HomePage;
