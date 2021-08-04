import { useState } from "react";
import ApplicationCardGrid from "../components/Layouts/Application/ApplicationCardGrid";
// import { FindingsDataContextProvider } from "../components/Findings/data/Context";
import findingsDataJSON from "../components/Findings/data/recordData.json";
import initialFilterOptionsJSON from "../components/Findings/data/initialFilterOptions.json";

const Findings = () => {
  const [data, setData] = useState(findingsDataJSON);
  const [mainData, setMainData] = useState(findingsDataJSON);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptionsJSON);
  return (
    <ApplicationCardGrid
      title="Findings"
      recordTitleString="Content ID"
      data={data}
      setData={setData}
      mainData={mainData}
      setMainData={setMainData}
      filterOptions={filterOptions}
      setFilterOptions={setFilterOptions}
    />
  );
};

export default Findings;
