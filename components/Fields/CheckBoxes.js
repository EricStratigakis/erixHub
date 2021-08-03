import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

const FindingsCheckBoxes = ({
  filterParam,
  options,
  colors,
  series,
  filterOptions,
  setFilterOptions,
}) => {
  const [state, setState] = useState(filterOptions[filterParam]);

  const handleChange = (event) => {
    setFilterOptions({
      ...filterOptions,
      [filterParam]: {
        ...filterOptions[filterParam],
        [event.target.name]: event.target.checked,
      },
    });
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormControl>
      <FormGroup>
        {options.map((item, index) => {
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={state[item]}
                  onChange={handleChange}
                  name={item}
                  style={{ color: colors[index] }}
                />
              }
              label={`${item} (${series[index]})`}
            />
          );
        })}
      </FormGroup>
      <FormHelperText>Tap Search for the changes to take effect</FormHelperText>
    </FormControl>
  );
};

export default FindingsCheckBoxes;
