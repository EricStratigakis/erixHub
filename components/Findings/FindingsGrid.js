import Grid from "@material-ui/core/Grid";
import FindingCard from "./FindingCard";
import { useFindingsData } from "./FindingsDataContext";
import useInfiniteScroll from "../../hooks/InfiniteScroll/withLocalDataInState";
import Container from "@material-ui/core/Container";

const FindingsGrid = () => {
  const { data } = useFindingsData();
  const pageSize = 5;
  const { elements, lastElementRef } = useInfiniteScroll(data, pageSize);

  return (
    <Grid container justifyContent="center" spacing={3}>
      {elements.map((item, index) => {
        return (
          <Container key={index}>
            <div
              style={{ padding: "5px" }}
              ref={elements.length === index + 1 ? lastElementRef : null}
              key={index}
            >
              <FindingCard key={index} item={item} />
            </div>
          </Container>
        );
      })}
    </Grid>
  );
};

export default FindingsGrid;
