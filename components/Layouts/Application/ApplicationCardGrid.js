import useInfiniteScroll from "../../../hooks/InfiniteScroll/withLocalDataInState";
import { useFindingsData } from "../../Findings/data/Context";
import { makeStyles, Grid } from "@material-ui/core";
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

const ApplicationCardGrid = ({ title, recordTitleString }) => {
  const classes = useStyles();
  const pageSize = 5;
  const { data } = useFindingsData();
  const { elements, lastElementRef } = useInfiniteScroll({ data, pageSize });
  return (
    <Grid container>
      <Grid item xs={12} className={classes.root}>
        <MyCard
          title={title}
          MyBody={FindingsMetaCardBody}
          MyActions={FindingsMetaCardActions}
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
