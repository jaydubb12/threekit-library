import Accordion from '../Accordion';

const { AccordionItem } = Accordion;

export const CasketStepTwo = () => {
  return (
    <Accordion>
      <AccordionItem
        label='Front Left Corner'
        recommended
        browseAll
        showApplyToAllCornerStepper
        step='2'
        index={0}
      />
      <AccordionItem
        label='Front Right Corner'
        step='2'
        showApplyToAllCornerStepper
        index={1}
      />
      <AccordionItem
        label='Back Left Corner'
        step='2'
        showApplyToAllCornerStepper
        index={2}
      />
      <AccordionItem
        label='Back Right Corner'
        step='2'
        showApplyToAllCornerStepper
        index={3}
      />
    </Accordion>
  );
};
