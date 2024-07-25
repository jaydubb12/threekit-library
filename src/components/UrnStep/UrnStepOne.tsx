'use client';
import Accordion from '../Accordion';

const { AccordionItem } = Accordion;

export const UrnStepOne = () => {
  return (
    <Accordion>
      <AccordionItem label='Finish (Urn)' step='1' index={0} />
      <AccordionItem label='Decor on Urn' step='1' index={1} />
    </Accordion>
  );
};
