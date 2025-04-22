// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamPromiseType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';
import ContactView from '@/views/contact/ContactView';
import WorkInProgressView from '@/views/work-in-progress/WorkInProgressView';

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
    <ContactView
      dictionary={dictionary}
      lang={params.lang}
    />
  );
};

export default ContactPage;
