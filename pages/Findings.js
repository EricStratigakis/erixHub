import FindingsStageStatusPieChart from "../components/Findings/FindingsStageStatusPieChart";
import FindingsGrid from "../components/Findings/FindingsGrid";
import FindingsReportController from "../components/Findings/FindingsReportController";
import { FindingsDataContextProvider } from "../components/Findings/FindingsDataContext";
import Modal from "../components/Modal/component";

const Findings = () => {
  return (
    <FindingsDataContextProvider>
      <Modal title="Report Options">
        <FindingsReportController />
      </Modal>
      <FindingsStageStatusPieChart />
      <FindingsGrid />
    </FindingsDataContextProvider>
  );
};

export default Findings;
