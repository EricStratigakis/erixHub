import useInfiniteScroll from "../../erix-ui/hooks/InfiniteScroll/withLocalDataInState";
import { makeStyles, Grid } from "@material-ui/core";
import MetaCard from "../MetaData/MetaCard";
import RecordCard from "../RecordData/RecordCard";
import { useFindingsData } from "../data/Context";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(1),
      justifyContent: "center",
    },
  };
});

const ApplicationCardGrid = () => {
  const classes = useStyles();
  const { data } = useFindingsData();
  const pageSize = 5;
  const { elements, lastElementRef } = useInfiniteScroll({ data, pageSize });
  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <MetaCard />
      </Grid>
      {elements.map((record, index) => {
        return (
          <Grid key={index} item xs={12} className={classes.root}>
            <div
              ref={elements.length === index + 1 ? lastElementRef : null}
              key={index}
            >
              <RecordCard record={record} />
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ApplicationCardGrid;
