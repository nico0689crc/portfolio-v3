'use client'

import Iconify from "@/components/ui/Icon";
import type { FAQType } from "@/types";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import { useCallback, useState } from "react";

type FaqAccordionProps = {
  faqs: FAQType[];
}

const FaqAccordion = ({ faqs }: FaqAccordionProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChangeExpanded = useCallback(
    (id: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    },
    []
  );

  return (
    <Stack gap={2}>
      {faqs.map((faq, index) => (
        <Accordion 
          key={index} 
          expanded={expanded === faq.id} 
          onChange={handleChangeExpanded(faq.id)}
        >
          <AccordionSummary
            expandIcon={<Iconify icon={expanded === faq.id ? 'radix-icons:minus' : 'radix-icons:plus'} />}
            aria-controls={`faq-content-${index}`}
            id={`faq-header-${index}`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  )
}

export default FaqAccordion;