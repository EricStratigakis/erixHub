import Grid from "@material-ui/core/Grid";
import FindingCard from "./FindingCard";
import removeTags from "../../utils/removHTML";
import { useFindingsData } from "./FindingsDataContext";
import useInfiniteScroll from "../../hooks/InfiniteScroll/withLocalDataInState";

const FindingsGrid = () => {
  const { data } = useFindingsData();
  const pageSize = 5;

  const { elements, lastElementRef } = useInfiniteScroll(data, pageSize);

  return (
    <Grid container justifyContent="center" spacing={3}>
      {elements.map((item, index) => {
        return (
          <div
            ref={elements.length === index + 1 ? lastElementRef : null}
            key={index}
          >
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
          </div>
        );
      })}
    </Grid>
  );
};

export default FindingsGrid;
