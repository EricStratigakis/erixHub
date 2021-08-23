import ApplicationCardGrid from "../components/Findings/Layouts/ApplicationCardGrid";
import { FindingsDataContextProvider } from "../components/Findings/data/Context";

const Findings = () => {
  return (
    <FindingsDataContextProvider>
      <ApplicationCardGrid title="Findings" recordTitleString="Content ID" />
    </FindingsDataContextProvider>
  );
};

export default Findings;
