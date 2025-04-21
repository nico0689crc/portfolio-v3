// Types
import type { Locale } from '@/configs/i18n';
import type { LangParamPromiseType } from '@/types';

// Utilities
import { getDictionary } from '@/utils/getDictionary';
import getMetadata from '@/utils/requests/getMetadata';
import ResumeView from '@/views/resume/ResumeView';

// Page Metadata
export async function generateMetadata(props: LangParamPromiseType) {
  const params = await props.params;
  const metadata = await getMetadata('resume');

  return metadata[params.lang];
}

// Page Component
const ResumePage = async (props: { params: Promise<{ lang: Locale }> }) => {
  const params = await props.params;
  const dictionary = await getDictionary(params.lang);

  return <ResumeView dictionary={dictionary} lang={params.lang} />;
};

export default ResumePage;
