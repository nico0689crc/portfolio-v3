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
  const metadata = await getMetadata("resume");

  return metadata[params.lang];
}

// Page Component
const ResumePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Typography>{dictionary.pages.resume.title}</Typography>
      <Typography>
        Resume page content goes here. You can add your resume details, experience, education, etc. 
      </Typography>
    </>
  );
};

export default ResumePage;
