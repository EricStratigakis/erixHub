import useInfiniteScroll from "../../../hooks/InfiniteScroll/withLocalDataInState";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import MyCard from "../../Cards/MyCard";
import {
  FindingsRecordCardBody,
  FindingsChipList,
  FindingsRecrodCardActions,
} from "../../Findings/RecordDataComponents";
import {
  FindingsMetaCardBody,
  FindingsMetaCardActions,
} from "../../Findings/ApplicationMetaDataComponents";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      padding: theme.spacing(1),
      justifyContent: "center",
    },
  };
});

const Temp = () => {
  return <div>here</div>;
};

const ApplicationCardGrid = ({
  title,
  recordTitleString,
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
        <MyCard
          title={title}
          MyBody={() => (
            <FindingsMetaCardBody
              data={data}
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
          )}
          MyActions={() => (
            <FindingsMetaCardActions
              filterOptions={filterOptions}
              setData={setData}
              mainData={mainData}
            />
          )}
        />
      </Grid>
      {elements.map((record, index) => {
        return (
          <Grid key={index} item xs={12} className={classes.root}>
            <div
              ref={elements.length === index + 1 ? lastElementRef : null}
              key={index}
            >
              <MyCard
                key={index}
                title={record[recordTitleString]}
                MyChipList={() => <FindingsChipList record={record} />}
                MyBody={() => <FindingsRecordCardBody record={record} />}
                MyActions={() => <FindingsRecrodCardActions record={record} />}
              />
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ApplicationCardGrid;
