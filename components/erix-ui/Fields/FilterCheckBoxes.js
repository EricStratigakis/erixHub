import { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
} from "@material-ui/core";
import { useFindingsData } from "../../Findings/data/Context";

const FilterCheckBoxes = ({ filterParam, options, colors, series }) => {
  const { filterOptions, setFilterOptions } = useFindingsData();
  const [state, setState] = useState(filterOptions[filterParam]);
  console.log({ filterOptions, filterParam, state });

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
              label={`${item} (${series[index]})`}
              control={
                <Checkbox
                  checked={state[item]}
                  onChange={handleChange}
                  name={item}
                  style={{ color: colors[index] }}
                />
              }
            />
          );
        })}
      </FormGroup>
      <FormHelperText>Tap Search for the changes to take effect</FormHelperText>
    </FormControl>
  );
};

export default FilterCheckBoxes;
