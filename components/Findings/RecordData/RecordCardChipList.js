import { makeStyles } from "@material-ui/core";
import { red, green, orange } from "@material-ui/core/colors";
import {
  ErrorOutlineOutlined,
  ScheduleSharp,
  CheckCircleOutlined,
} from "@material-ui/icons";
import Chip from "../../erix-ui/Chips/Chip";
import dateDiff from "../../../utils/dateDiff";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      padding: theme.spacing(0.5),
    },
  };
});

const RecordCardChipList = ({ record }) => {
  const classes = useStyles();
  const dueDate = new Date(record["Due Date"]);
  const today = new Date();
  const riskLevel = record["Inhereet Risk Level Text"];
  const daysUntilDue = dateDiff(today, dueDate);
  const fullyApproved =
    typeof record["Approver 1 Date"] == "string" &&
    typeof record["Approver 2 Date"] == "string";

  return (
    <div className={classes.root}>
      {riskLevel === "High" && (
        <Chip
          text="High Risk"
          color={orange[500]}
          icon={<ErrorOutlineOutlined />}
        />
      )}
      {riskLevel === "Very High" && (
        <Chip
          text="Very High Risk"
          color={red[500]}
          icon={<ErrorOutlineOutlined />}
        />
      )}
      {daysUntilDue > 0 && daysUntilDue <= 7 && (
        <Chip
          text={`Coming Due in ${daysUntilDue}`}
          color={orange[500]}
          icon={<ScheduleSharp />}
        />
      )}
      {fullyApproved && (
        <Chip
          text={"Approved"}
          color={green[500]}
          icon={<CheckCircleOutlined />}
        />
      )}
    </div>
  );
};

export default RecordCardChipList;
