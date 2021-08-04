import AccordianSection from "../Accordians/AccordianSection";
import { FindingAccordianHeaderText } from "./FindingsTypography";
import PieChart from "../Charts/PieChart";
import Button from "@material-ui/core/Button";
import { red, green, blue, yellow, orange } from "@material-ui/core/colors";

const FindingsMetaStageStatusSection = ({
  data,
  filterOptions,
  setFilterOptions,
}) => {
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
          data={data}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      )}
    />
  );
};
const FindingsMetaInherentRiskLevelSection = ({
  data,
  filterOptions,
  setFilterOptions,
}) => {
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
          data={data}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      )}
    />
  );
};

export const FindingsMetaCardBody = ({
  data,
  filterOptions,
  setFilterOptions,
}) => {
  return (
    <>
      <FindingsMetaStageStatusSection
        data={data}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
      <FindingsMetaInherentRiskLevelSection
        data={data}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />
    </>
  );
};

export const FindingsMetaCardActions = ({
  setData,
  mainData,
  filterOptions,
}) => {
  const isValidResult = (filterParam, item) => {
    return filterOptions[filterParam][item[filterParam]];
  };
  const runFilters = () => {
    setData(
      mainData.filter((item) => {
        return (
          isValidResult("Stage Status Text", item) &&
          isValidResult("Inherent Risk Level Text", item)
        );
      })
    );
  };
  return (
    <Button onClick={() => runFilters()} variant="outlined" color="primary">
      Search
    </Button>
  );
};
