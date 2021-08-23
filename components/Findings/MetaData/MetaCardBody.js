import { Accordion, AccordionDetails } from "@material-ui/core";
import MyAccordionSummary from "../../erix-ui/Accordions/MyAccordionSummary";
import { red, green, blue, yellow, orange } from "@material-ui/core/colors";
import FilterPieChart from "./FilterPieChart";
import { FindingAccorionHeaderText } from "../Feilds/Typographies";

const StageStatusSelection = () => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccorionHeaderText text="Stage Status" />
      </MyAccordionSummary>
      <AccordionDetails>
        <FilterPieChart
          filterParam="Stage Status Text"
          labels={[
            "Stage 01 - Submit Record",
            "Stage 02 - Review Record",
            "Stage 03 - Accept Record",
          ]}
          colors={[blue[500], green[500], red[500]]}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const InherentRiskLevelSelection = () => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccorionHeaderText text="Inherent Risk Level" />
      </MyAccordionSummary>
      <AccordionDetails>
        <FilterPieChart
          filterParam="Inherent Risk Level Text"
          labels={["Low", "Medium", "High", "Very High"]}
          colors={[green[500], yellow[500], orange[500], red[500]]}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const MetaCardBody = () => {
  return (
    <>
      <StageStatusSelection />
      <InherentRiskLevelSelection />
    </>
  );
};

export default MetaCardBody;
