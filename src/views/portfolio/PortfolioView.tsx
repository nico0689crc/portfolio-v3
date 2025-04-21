import type { DictionaryType, LangParamType } from '@/types';
import PortfolioWrapper from './PortfolioWrapper';
import PortfolioHeader from './header/PortfolioHeader';
import PortfolioBody from './body/PortfolioBody';
import getPortfolio from '@/utils/requests/getPortfolio';

const PortfolioView = async ({ dictionary, lang }: DictionaryType & LangParamType) => {
  const data = await getPortfolio();

  return (
    <PortfolioWrapper>
      <PortfolioHeader dictionary={dictionary} />
      <PortfolioBody data={data} dictionary={dictionary} lang={lang} />
    </PortfolioWrapper>
  );
};

export default PortfolioView;
