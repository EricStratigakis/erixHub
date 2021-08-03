import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const AccordianSection = ({ Summary, Details }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Summary />
      </AccordionSummary>
      <AccordionDetails>
        <Details />
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordianSection;
