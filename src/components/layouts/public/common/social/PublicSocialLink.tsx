import type { LinkProps } from '@mui/material';

import Iconify from '@/components/ui/Icon';
import { Link, Tooltip } from '@mui/material';

type PublicSocialLinkProps = LinkProps & {
  icon: string;
  titleTooltip: string;
};

const PublicSocialLink = ({ icon, titleTooltip, sx, ...props }: PublicSocialLinkProps) => (
  <Tooltip title={titleTooltip} arrow>
    <Link
      sx={{
        display: 'flex',
        color: 'var(--mui-palette-text-primary)',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          scale: 1.1,
        },
        ...sx,
      }}
      {...props}
    >
      <Iconify icon={icon} />
    </Link>
  </Tooltip>
);
export default PublicSocialLink;
