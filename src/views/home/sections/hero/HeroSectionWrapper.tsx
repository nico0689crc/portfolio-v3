// External imports
import { Box } from '@mui/material';

// Internal imports
import themeConfig from '@/configs/themeConfig';
import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';

// Types
import type { ChildrenType } from '@/types';

type HeroSectionWrapperProps = ChildrenType;

const HeroSectionWrapper = ({ children }: HeroSectionWrapperProps) => (
  <Box
    component="section"
    className="HeroSectionWrapper"
    sx={{
      display: 'flex',
      alignItems: {
        xs: 'flex-start',
        [themeConfig.breakpointToChangeLayout]: 'center',
      },
      py: {
        xs: '1.5rem',
        [themeConfig.breakpointToChangeLayout]: 0,
      },
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      minHeight: `calc(100vh - ${themeConfig.headerHeight})`,
    }}
  >
    <HeroBackground />
    <HeroContent>{children}</HeroContent>
  </Box>
);

const HeroBackground = () => (
  <Box
    className="HeroBackground"
    sx={{
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      overflow: 'hidden',
    }}
  >
    <BackgroundOverlay />
    <BackgroundVideo />
  </Box>
);

const BackgroundOverlay = () => (
  <Box
    className="BackgroundOverlay"
    sx={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'primary.main',
      opacity: 0.8,
      height: '100%',
    }}
  />
);

const BackgroundVideo = () => (
  <Box
    component="video"
    className="BackgroundVideo"
    sx={{
      width: {
        xs: '1400px',
        md: '1500px',
        lg: '1700px',
        xl: '100%',
      },
    }}
    autoPlay
    loop
    muted
    controls={false}
    playsInline
    disablePictureInPicture
    disableRemotePlayback
    preload="auto"
    data-testid="background-video"
    data-src="/videos/background.mp4"
    data-type="video/mp4"
    data-playsinline="true"
    data-loop="true"
    data-mute="true"
    data-controls="false"
    data-preload="auto"
  >
    <source src="/videos/background.mp4" type="video/mp4" />
  </Box>
);

const HeroContent = ({ children }: ChildrenType) => (
  <ContainerCommon>
    <Box
      className="HeroContent"
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          [themeConfig.breakpointToChangeLayout]: 'row-reverse',
        },
        justifyContent: 'space-evenly',
        my: 'auto',
        zIndex: 2,
        gap: 5,
      }}
    >
      {children}
    </Box>
  </ContainerCommon>
);

export default HeroSectionWrapper;
