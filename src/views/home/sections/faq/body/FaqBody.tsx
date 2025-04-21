import type { LangParamType } from '@/types';
import getFaq from '@/utils/requests/getFaq';
import FaqAccordion from './FaqAccordion';

const FaqBody = async ({ lang }: LangParamType) => {
  const faqs = await getFaq();

  return <FaqAccordion faqs={faqs[lang]} />;
};

export default FaqBody;
