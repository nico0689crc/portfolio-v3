// External imports
import Image from 'next/image';
import { Box } from '@mui/material';

// Types
import type { DictionaryType } from '@/types';

// Local imports
import profilePicture from "@public/images/profile-picture.jpeg";
import themeConfig from '@/configs/themeConfig';

// Types
type HeroSectionPictureProfileProps = DictionaryType;

// Component: ProfileImage
const ProfileImage = ({ alt }: { alt: string }) => (
  <Image
    src={profilePicture}
    alt={alt}
    className="profile-image"
    style={{
      borderRadius: '50%',
      maxWidth: '93%',
      height: '93%',
      objectFit: 'cover',
      border: '15px solid #fff',
      boxShadow: '0 0.4rem 1.3rem rgba(0, 0, 0, 0.6) !important',
    }}
  />
);

// Component: ProfileImageContainer
const ProfileImageContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    className="profile-image-container"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 1,
      maxWidth: {
        xs: '230px',
        [themeConfig.breakpointToChangeLayout]: '500px',
      },
      height: {
        xs: '100%',
        [themeConfig.breakpointToChangeLayout]: '500px',
      },
      my: 'auto',
    }}
  >
    {children}
  </Box>
);

// Component: HeroSectionContainer
const HeroSectionContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    className="hero-section-container"
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: {
        xs: '100%',
        [themeConfig.breakpointToChangeLayout]: '30rem',
      },
    }}
  >
    {children}
  </Box>
);

// Component: HeroSectionPictureProfile
const HeroSectionPictureProfile = (props: HeroSectionPictureProfileProps) => {
  const { dictionary } = props;

  return (
    <HeroSectionContainer>
      <ProfileImageContainer>
        <ProfileImage alt={dictionary.pages.home.sections.hero.title} />
      </ProfileImageContainer>
    </HeroSectionContainer>
  );
};

export default HeroSectionPictureProfile;
