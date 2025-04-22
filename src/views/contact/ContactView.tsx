// External libraries
import Image from 'next/image';
import { Grid, Link, Typography } from '@mui/material';

// Components
import Iconify from '@/components/ui/Icon';
import ContactWrapper from './ContactWrapper';

// Types
import type { DictionaryType } from '@/types';
import themeConfig from '@/configs/themeConfig';

type ContactViewProps = DictionaryType;

const ContactView = (props: ContactViewProps) => {
  const { dictionary } = props;

  return (
    <ContactWrapper>
      <Grid
        sx={{ display: 'flex', flexDirection: 'column' }}
        size={{ xs: 12, [themeConfig.breakpointToChangeLayout]: 7 }}
        gap={8}
      >
        <Typography
          variant="body1"
          component="h1"
          sx={{
            width: 'fit-content',
            paddingInline: '0.5rem',
            backgroundColor: 'var(--mui-palette-primary-main)',
            color: `rgb(var(--mui-mainColorChannels-light) / 1)`,
          }}
        >
          {dictionary.pages.contact.title}
        </Typography>
        <Typography variant="h4" component="h2">
          {dictionary.pages.contact.sub_title}
        </Typography>
        <Typography variant="body1">{dictionary.pages.contact.body}</Typography>
        <Link
          href="mailto:nico.06.89crc@gmail.com"
          className="MuiLink-with-hover-effect"
          sx={{ width: 'fit-content' }}
        >
          <Typography variant="body1" display="flex" alignItems="center">
            <Iconify icon="ic:baseline-email" width={24} height={24} style={{ marginRight: 8 }} />
            {dictionary.pages.contact.form.email}
          </Typography>
        </Link>
        <Link
          href="https://www.linkedin.com/in/nicolas-ariel-fernandez"
          target="_blank"
          rel="noopener noreferrer"
          className="MuiLink-with-hover-effect"
          sx={{ width: 'fit-content' }}
        >
          <Typography variant="body1" display="flex" alignItems="flex-start">
            <Iconify
              icon="akar-icons:linkedin-fill"
              width={24}
              height={24}
              style={{ marginRight: 8 }}
            />
            {dictionary.pages.contact.form.linkedin}
          </Typography>
        </Link>
        <Link
          href="https://calendly.com/nico-06-89crc/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="MuiLink-with-hover-effect"
          sx={{ width: 'fit-content' }}
        >
          <Typography variant="body1" display="flex" alignItems="center">
            <Iconify
              icon="ic:baseline-calendar-today"
              width={24}
              height={24}
              style={{ marginRight: 8 }}
            />
            {dictionary.pages.contact.form.zoom_google}
          </Typography>
        </Link>
        <Link
          href="https://github.com/nico0689crc"
          target="_blank"
          rel="noopener noreferrer"
          className="MuiLink-with-hover-effect"
          sx={{ width: 'fit-content' }}
        >
          <Typography variant="body1" display="flex" alignItems="center">
            <Iconify
              icon="akar-icons:github-fill"
              width={24}
              height={24}
              style={{ marginRight: 8 }}
            />
            {dictionary.pages.contact.form.github}
          </Typography>
        </Link>
      </Grid>
      <Grid sx={{ display: 'flex' }} size={{ xs: 12, [themeConfig.breakpointToChangeLayout]: 5 }}>
        <Image
          src="/images/illustrations/contact.svg"
          alt="Contact illustration"
          width={400}
          height={300}
          className="illustration-image"
          style={{ maxWidth: '100%', height: 'auto', margin: '0 auto' }}
          priority
        />
      </Grid>
    </ContactWrapper>
  );
};

export default ContactView;
