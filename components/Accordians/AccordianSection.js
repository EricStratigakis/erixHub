import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AccordianSection = ({ MySummary, MyDetails }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <MySummary />
      </AccordionSummary>
      <AccordionDetails>
        <MyDetails />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordianSection;
