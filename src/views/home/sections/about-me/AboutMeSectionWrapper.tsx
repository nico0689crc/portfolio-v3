import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';
import themeConfig from '@/configs/themeConfig';
import type { ChildrenType } from '@/types';

type AboutMeSectionWrapperProps = ChildrenType;

const AboutMeSectionWrapper = ({ children }: AboutMeSectionWrapperProps) => (
  <ContainerCommon
    component="section"
    id="about-me-section"
    className="about-me-section"
    role="region"
    aria-labelledby="about-me-header-title"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5,
      py: {
        xs: '4rem',
        [themeConfig.breakpointToChangeLayout]: '8rem',
      },
    }}
  >
    {children}
  </ContainerCommon>
);

export default AboutMeSectionWrapper;
