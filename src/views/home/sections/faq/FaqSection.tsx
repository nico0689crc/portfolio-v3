import type { DictionaryType, LangParamType } from '@/types';
import FaqSectionWrapper from './FaqSectionWrapper';
import FaqHeader from './header/FaqHeader';
import FaqBody from './body/FaqBody';

const FaqSection = (props: DictionaryType & LangParamType) => {
  const { dictionary, lang } = props;

  return (
    <FaqSectionWrapper>
      <FaqHeader dictionary={dictionary} />
      <FaqBody lang={lang} />
    </FaqSectionWrapper>
  );
};

export default FaqSection;
