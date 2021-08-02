import { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import { useFindingsData } from "./FindingsDataContext";

const FindingsCheckBoxes = ({ filterParam, options, colors }) => {
  const { filterOptions, setFilterOptions } = useFindingsData();
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
              label={item}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};

export default FindingsCheckBoxes;
