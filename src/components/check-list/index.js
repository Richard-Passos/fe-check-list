import CheckListAccordionAccordion from './Accordion';
import CheckListAccordionClientInfo from './ClientInfo';
import CheckListAccordionExtraInfo from './ExtraInfo';
import CheckListAccordionRoot from './Root';

const CheckListAccordion = CheckListAccordionRoot;

CheckListAccordion.Accordion = CheckListAccordionAccordion;
CheckListAccordion.ClientInfo = CheckListAccordionClientInfo;
CheckListAccordion.ExtraInfo = CheckListAccordionExtraInfo;

export default CheckListAccordion;
export {
  CheckListAccordionRoot as CheckListAccordion,
  CheckListAccordionAccordion,
  CheckListAccordionClientInfo,
  CheckListAccordionExtraInfo,
};
