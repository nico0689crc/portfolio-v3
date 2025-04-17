import type { ChildrenType, DictionaryType } from '@/types';
import { Typography } from '@mui/material';

type ServicesSectionProps = DictionaryType;

const ServicesSection = (props: ServicesSectionProps) => {
  const { dictionary } = props;

  return <Typography>ServicesSection</Typography>;
};

export default ServicesSection;
