// External libraries

// Internal components
import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';

// Configs
import themeConfig from '@/configs/themeConfig';

// Types
import type { ChildrenType } from '@/types';

const ResumeWrapper = ({ children }: ChildrenType) => (
  <ContainerCommon
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      py: {
        xs: '2rem',
        [themeConfig.breakpointToChangeLayout]: '4rem',
      },
    }}
  >
    {children}
  </ContainerCommon>
);

export default ResumeWrapper;
