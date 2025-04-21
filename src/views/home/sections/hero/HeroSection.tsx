// Types
import type { ChildrenType } from '@/types';

// Components
import HeroSectionWrapper from './HeroSectionWrapper';

export { default as HeroSectionTitle } from './HeroSectionTitle';
export { default as HeroSectionPictureProfile } from './HeroSectionPictureProfile';

type HeroSectionProps = ChildrenType;

const HeroSection = (props: HeroSectionProps) => {
  const { children } = props;

  return <HeroSectionWrapper>{children}</HeroSectionWrapper>;
};

export default HeroSection;
