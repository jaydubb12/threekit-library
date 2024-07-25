import Accordion from '../Accordion';

const { AccordionItem } = Accordion;

export const CasketStepOne = () => {
  return (
    <Accordion>
      <AccordionItem label='Product Variant' step='1' index={0} />
      <AccordionItem label='Fabric Overlay' step='1' index={1} />
      <AccordionItem label='Interior Fabric' step='1' index={2} />
      <AccordionItem label='Interior Fabric Color' step='1' index={3} />
    </Accordion>
  );
};
