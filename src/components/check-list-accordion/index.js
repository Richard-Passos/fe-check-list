import CheckListAccordionClientInfo from './ClientInfo';
import CheckListAccordionRoot from './Root';

const CheckListAccordion = CheckListAccordionRoot;

CheckListAccordion.ClientInfo = CheckListAccordionClientInfo;

export default CheckListAccordion;
export {
  CheckListAccordionRoot as CheckListAccordion,
  CheckListAccordionClientInfo,
};
