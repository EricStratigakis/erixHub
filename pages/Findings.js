import FindingsPieChart from "../components/Findings/FindingsPieChart";
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
      <FindingsPieChart filterParam="Stage Status Text" />
      <FindingsPieChart filterParam="Inherent Risk Level Text" />

      <FindingsGrid />
    </FindingsDataContextProvider>
  );
};

export default Findings;
