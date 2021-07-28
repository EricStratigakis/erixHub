import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import FindingCard from "./FindingCard";
import removeTags from "../../utils/removHTML";
import { FindingsDataContext } from "../../pages/Findings";

const FindingsGrid = () => {
  const { data } = useContext(FindingsDataContext);
  return (
    <Grid container justifyContent={"center"} spacing={3}>
      {data.map((item, index) => {
        return (
          <FindingCard
            key={index}
            contentId={item.contentId}
            finding={removeTags(item.finding)}
            lFiveManagerName={item.lFiveManagerName}
            lFiveManagerEmail={item.lFiveManagerEmail}
            issueOwnerName={item.issueOwnerName}
            issueOwnerEmail={item.issueOwnerEmail}
            findingType={item.findingType}
            findingSubType={item.findingSubType}
            riskTreatmentType={item.riskTreatmentType}
            stageStatus={item.stageStatus}
            inHerentRiskLevel={item.inHerentRiskLevel}
            dueDate={item.dueDate}
            closedDate={item.closedDate}
            completionDate={item.completionDate}
            lastUpdatedDate={item.lastUpdatedDate}
            busUnit={item.busUnit}
            orgUnit={item.orgUnit}
          />
        );
      })}
    </Grid>
  );
};

export default FindingsGrid;
