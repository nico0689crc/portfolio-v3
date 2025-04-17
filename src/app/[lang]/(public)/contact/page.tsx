// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamPromiseType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';

// External Components
import { Typography } from '@mui/material';

// Page Metadata
export async function generateMetadata(props: LangParamPromiseType) {
  const params = await props.params;
  const metadata = await getMetadata('contact');

  return metadata[params.lang];
}

// Page Component
const ContactPage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Typography>{dictionary.pages.contact.title}</Typography>
      <Typography>
        Contact page content goes here. You can add your Contact details, experience, education,
        etc.
      </Typography>
    </>
  );
};

export default ContactPage;
