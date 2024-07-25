import Accordion from '../Accordion';

const { AccordionItem } = Accordion;

export const CasketStepThree = () => {
  return (
    <Accordion>
      <AccordionItem label='Cap Panel - Left' step='2' index={0} />
      <AccordionItem label='Cap Panel - Center' step='2' index={1} />
      <AccordionItem label='Cap Panel - Right' step='2' index={2} />
    </Accordion>
  );
};
