import { useState } from "react";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: { margin: theme.spacing(1), minWidth: 180 },
  })
);

const Findings = () => {
  const classes = useStyles();
  const [mainData, setMainData] = useState([]);
  const [data, setData] = useState(mainData);

  const filterFindingsByStageStaus = (event) => {
    const ss = event.target.value;

    if (ss === "None" || ss === "") {
      setData(mainData);
    } else {
      setData(mainData.filter((item) => item["Stage Status"] === ss));
    }
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          label="Stage Staus Filter"
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          width={"300 px"}
          onChange={(e) => filterFindingsByStageStaus(e)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Stage 01 - Submit Record"}>
            Stage 01 - Submit Record
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Findings;
