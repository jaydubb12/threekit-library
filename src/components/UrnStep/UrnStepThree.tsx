import Accordion from '../Accordion';

const { AccordionItem } = Accordion;

export const UrnStepThree = () => {
  return (
    <Accordion>
      <AccordionItem label='Name and Date' step='3' index={0} />
      <AccordionItem label='Small Verse' step='3' index={1} />
      <AccordionItem label='Engraving Design' step='3' recommended={true}
        browseAll={true} isShowUploadImageSection={true} index={2} />
    </Accordion>
  );
};
