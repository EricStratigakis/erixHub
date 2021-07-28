import { useState, createContext } from "react";

import dynamic from "next/dynamic";
import FindingsStageStatusPieChart from "../components/Findings/FindingsStageStatusPieChart";
import FindingsGrid from "../components/Findings/FindingsGrid";
import FindingsReportController from "../components/Findings/FindingsReportController";
import Modal from "../components/Modal/component";
import findingsData from "../data/findings.json";

export const FindingsDataContext = createContext();

const Findings = () => {
  const mainData = findingsData;
  const [data, setData] = useState(mainData);
  return (
    <FindingsDataContext.Provider value={{ data, mainData }}>
      <Modal title="Report Options">
        <FindingsReportController />
      </Modal>
      <FindingsStageStatusPieChart />
      <FindingsGrid />
    </FindingsDataContext.Provider>
  );
};

export default Findings;
