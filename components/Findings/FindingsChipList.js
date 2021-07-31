import Chip from "@material-ui/core/Chip";
import ScheduleSharpIcon from "@material-ui/icons/ScheduleSharp";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import useStyles from "./styles/default";
import { red } from "@material-ui/core/colors";

const FindingsChipList = ({ dueDate, riskLevel }) => {
  const classes = useStyles();
  const overDue = new Date(dueDate) < new Date();
  return (
    <div className={classes.chipList}>
      {overDue && (
        <Chip
          variant="outlined"
          size="small"
          icon={<ScheduleSharpIcon />}
          label="Overdue"
          clickable
          color="primary"
          style={{ color: red[500], borderColor: red[500] }}
        />
      )}
      {riskLevel === "High" && (
        <Chip
          variant="outlined"
          size="small"
          icon={<ErrorOutlineOutlinedIcon />}
          label="High Risk"
          clickable
          color="primary"
          style={{ color: red[500], borderColor: red[500] }}
        />
      )}
      {riskLevel === "Very High" && (
        <Chip
          variant="outlined"
          size="small"
          icon={<ErrorOutlineOutlinedIcon />}
          label="Very High Risk"
          clickable
          color="primary"
          style={{ color: red[500], borderColor: red[500] }}
        />
      )}
    </div>
  );
};

export default FindingsChipList;
