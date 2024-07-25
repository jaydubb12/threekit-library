'use client';

import Accordion from '../Accordion';

const { AccordionItem } = Accordion;

export const UrnStepTwo = () => {
  return (
    <Accordion>
      <AccordionItem label='Engraving Template' step='2' index={0} isNotAccordion={true}></AccordionItem>
    </Accordion>
  );
};
