import { useState } from "react";
import ApplicationCardGrid from "../components/Findings/Layouts/ApplicationCardGrid";
// import { FindingsDataContextProvider } from "../components/Findings/data/Context";
import findingsDataJSON from "../components/Findings/data/recordData.json";
import initialFilterOptionsJSON from "../components/Findings/data/initialFilterOptions.json";

const Findings = () => {
  const [findingsData, setFindingsData] = useState(findingsDataJSON);
  const [findingsMainData, setFindingsMainData] = useState(findingsDataJSON);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptionsJSON);
  return (
    <ApplicationCardGrid
      data={findingsData}
      setData={setFindingsData}
      mainData={findingsMainData}
      setMainData={setFindingsMainData}
      filterOptions={filterOptions}
      setFilterOptions={setFilterOptions}
    />
  );
};

export default Findings;
