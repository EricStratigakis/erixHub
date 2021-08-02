import FindingsCardGrid from "../components/Findings/FindingsCardGrid";
import FindingsMetaData from "../components/Findings/FindingsMetaData";
import { FindingsDataContextProvider } from "../components/Findings/FindingsDataContext";

const Findings = () => {
  return (
    <FindingsDataContextProvider>
      <FindingsMetaData />
      <FindingsCardGrid />
    </FindingsDataContextProvider>
  );
};

export default Findings;
