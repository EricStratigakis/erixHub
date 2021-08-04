import AccordianSection from "../Accordians/AccordianSection";
import { FindingAccordianHeaderText } from "./FindingsTypography";
import PieChart from "../Charts/PieChart";
import Button from "@material-ui/core/Button";
import { red, green, blue, yellow, orange } from "@material-ui/core/colors";
import { useFindingsData } from "./data/Context";

const FindingsMetaStageStatusSection = () => {
  return (
    <AccordianSection
      MySummary={() => <FindingAccordianHeaderText text="Stage Status" />}
      MyDetails={() => (
        <PieChart
          filterParam="Stage Status Text"
          labels={[
            "Stage 01 - Submit Record",
            "Stage 02 - Review Record",
            "Stage 03 - Accept Reocrd",
          ]}
          colors={[blue[500], green[500], red[500]]}
        />
      )}
    />
  );
};
const FindingsMetaInherentRiskLevelSection = () => {
  return (
    <AccordianSection
      MySummary={() => (
        <FindingAccordianHeaderText text="Inherent Risk Level" />
      )}
      MyDetails={() => (
        <PieChart
          filterParam="Inherent Risk Level Text"
          labels={["Low", "Medium", "High", "Very High"]}
          colors={[green[500], yellow[500], orange[500], red[500]]}
        />
      )}
    />
  );
};

export const FindingsMetaCardBody = () => {
  return (
    <>
      <FindingsMetaStageStatusSection />
      <FindingsMetaInherentRiskLevelSection />
    </>
  );
};

export const FindingsMetaCardActions = () => {
  const { runFilters } = useFindingsData();
  return (
    <Button onClick={() => runFilters()} variant="outlined" color="primary">
      Search
    </Button>
  );
};
