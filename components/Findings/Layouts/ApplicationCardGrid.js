import MetaCard from "../Cards/MetaCard";
import useInfiniteScroll from "../../../hooks/InfiniteScroll/withLocalDataInState";
import RecordCard from "../Cards/RecordCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(1),
      justifyContent: "center",
    },
  };
});

const ApplicationCardGrid = ({
  data,
  setData,
  filterOptions,
  setFilterOptions,
  mainData,
}) => {
  const classes = useStyles();
  const pageSize = 5;
  const { elements, lastElementRef } = useInfiniteScroll({ data, pageSize });
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.root}>
        <MetaCard
          title="Findings"
          data={data}
          setData={setData}
          mainData={mainData}
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
        />
      </Grid>
      {elements.map((record, index) => {
        return (
          <Grid key={index} item xs={12} className={classes.root}>
            <div
              ref={elements.length === index + 1 ? lastElementRef : null}
              key={index}
            >
              <RecordCard key={index} record={record} />
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ApplicationCardGrid;
