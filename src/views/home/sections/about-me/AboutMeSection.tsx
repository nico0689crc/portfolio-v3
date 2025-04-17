import type { ChildrenType, DictionaryType } from '@/types';
import { Typography } from '@mui/material';

type AboutMeSectionProps = DictionaryType;

const AboutMeSection = (props: AboutMeSectionProps) => {
  const { dictionary } = props;

  return <Typography>AboutMeSection</Typography>;
};

export default AboutMeSection;
