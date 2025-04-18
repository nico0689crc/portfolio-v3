import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';
import type { ChildrenType } from '@/types';
import type { BoxProps } from '@mui/material';

type AboutMeSectionWrapperProps = ChildrenType & BoxProps;

const AboutMeSectionWrapper = ({children, ...props}: AboutMeSectionWrapperProps) => (
  <ContainerCommon {...props}>
    {children}
  </ContainerCommon>
)

export default AboutMeSectionWrapper;
