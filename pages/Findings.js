import ApplicationCardGrid from "../components/Layouts/Application/ApplicationCardGrid";
import { FindingsDataContextProvider } from "../components/Findings/data/Context";

const Findings = () => {
  return (
    <FindingsDataContextProvider>
      <ApplicationCardGrid title="Findings" recordTitleString="Content ID" />
    </FindingsDataContextProvider>
  );
};

export default Findings;
