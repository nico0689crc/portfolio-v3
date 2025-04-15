// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';

// External Components
import { Typography } from '@mui/material';

// Page Metadata
export async function generateMetadata(props: LangParamType) {
  const params = await props.params;
  const metadata = await getMetadata("portfolio");

  return metadata[params.lang];
}

// Page Component
const PortfolioPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Typography>{dictionary.pages.portfolio.title}</Typography>
      <Typography>
        Portfolio page content goes here. You can add your Portfolio details, experience, education, etc. 
      </Typography>
    </>
  );
};

export default PortfolioPage;
