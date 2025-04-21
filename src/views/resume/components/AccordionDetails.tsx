import type { ChildrenType } from '@/types';
import type { AccordionDetailsProps } from '@mui/material';
import { AccordionDetails as AccordionDetailsMUI } from '@mui/material';

const AccordionDetails = ({ children, ...props }: ChildrenType & AccordionDetailsProps) => (
  <AccordionDetailsMUI {...props}>
    <>{children}</>
  </AccordionDetailsMUI>
);

export default AccordionDetails;
