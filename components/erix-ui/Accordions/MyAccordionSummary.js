import { AccordionSummary } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const MyAccordionSummary = ({ children }) => {
  return (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      {children}
    </AccordionSummary>
  );
};

export default MyAccordionSummary;
