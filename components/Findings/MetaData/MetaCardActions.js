import { Button } from "@material-ui/core";
import { useFindingsData } from "../data/Context";

const MetaCardActions = () => {
  const { runFilters } = useFindingsData();
  return (
    <>
      <Button onClick={runFilters} variant="outlined" color="primary">
        Search
      </Button>
      <Button
        onClick={() => console.log("here")}
        variant="outlined"
        color="primary"
      >
        Save Default Search Setting
      </Button>
    </>
  );
};

export default MetaCardActions;
