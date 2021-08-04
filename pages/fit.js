import { useState } from "react";
import ApplicationCardGrid from "../components/Layouts/Application/ApplicationCardGrid";
import findingsDataJSON from "../components/Findings/data/recordData.json";
import initialFilterOptionsJSON from "../components/Findings/data/initialFilterOptions.json";

const Fit = () => {
  const [data, setData] = useState(findingsDataJSON);
  const [mainData, setMainData] = useState(findingsDataJSON);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptionsJSON);
  return (
    <div>
      {/* <ApplicationCardGrid
        title="Fit"
        data={data}
        setData={setData}
        mainData={mainData}
        setMainData={setMainData}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      /> */}
    </div>
  );
};
export default Fit;
