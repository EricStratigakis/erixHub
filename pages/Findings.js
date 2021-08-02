import FindingsPieChart from "../components/Findings/FindingsPieChart";
import FindingsCardGrid from "../components/Findings/FindingsCardGrid";
import FindingReportOptions from "../components/Findings/FindingReportOptions";
import { FindingsDataContextProvider } from "../components/Findings/FindingsDataContext";

const Findings = () => {
  return (
    <FindingsDataContextProvider>
      <FindingReportOptions />

      <FindingsCardGrid />
    </FindingsDataContextProvider>
  );
};

export default Findings;
