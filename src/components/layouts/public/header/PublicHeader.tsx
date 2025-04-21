// External Components
import ContainerCommon from '@/components/layouts/public/common/ContainerCommon';

// Local Components
import PublicHeaderWrapper from './PublicHeaderWrapper';
import Logo from '../common/logo/Logo';
import PublicNavigation from './navigation/PublicNavigation';
import PublicSocial from '../common/social/PublicSocial';
import PublicActions from './actions/PublicActions';

// Types
import type { Locale } from '@/configs/i18n';
import themeConfig from '@/configs/themeConfig';

type PublicHeaderProps = {
  lang: Locale;
};

const PublicHeader = ({ lang }: PublicHeaderProps) => (
  <PublicHeaderWrapper>
    <ContainerCommon
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        '.PublicSocialWrapper': {
          display: {
            xs: 'none',
            [themeConfig.breakpointToChangeLayout]: 'flex',
          },
        },
      }}
    >
      <Logo />
      <PublicNavigation lang={lang} />
      <PublicSocial lang={lang} />
      <PublicActions lang={lang} />
    </ContainerCommon>
  </PublicHeaderWrapper>
);

export default PublicHeader;
