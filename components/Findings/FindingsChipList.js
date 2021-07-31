import Chip from "@material-ui/core/Chip";
import ScheduleSharpIcon from "@material-ui/icons/ScheduleSharp";
import useStyles from "./styles/default";
import { red } from "@material-ui/core/colors";

const FindingsChipList = () => {
  const classes = useStyles();
  return (
    <div className={classes.chipList}>
      <Chip
        variant="outlined"
        size="small"
        icon={<ScheduleSharpIcon />}
        label="Overdue"
        clickable
        onClick={() => console.log("here")}
        color="primary"
        style={{ color: red[500], borderColor: red[500] }}
      />
    </div>
  );
};

export default FindingsChipList;
