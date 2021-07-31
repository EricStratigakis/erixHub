import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import useStyles from "./styles/default";

const FindingsFilterList = ({ filterParam, options }) => {
  const classes = useStyles();

  const filterFindingsBy = (filterParam, event) => {
    // const x = event.target.value;
    // if (x === "None" || x === "") {
    //   setData(mainData);
    // } else {
    //   setData(mainData.filter((item) => item[filterParam] === x));
    // }
  };
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>{filterParam} Filter</InputLabel>
      <Select width="300px" onChange={(e) => filterFindingsBy(filterParam, e)}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((item, index) => (
          <MenuItem key={index} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default FindingsFilterList;
