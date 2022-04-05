import React from "react";
import PropTypes from "prop-types";

import { FormControlLabel, RadioGroup, Radio } from "@mui/material";

import FilterSkeleton from "../FilterSkeleton";

export default function RadioFilter(props) {
  const { label, value, setValue, options } = props;

  const updateValue = (event, newValue) => setValue(newValue);

  return (
    <FilterSkeleton label={label}>
      <RadioGroup
        aria-label={label}
        name="controlled-radio-buttons-group"
        value={value}
        onChange={updateValue}
        data-testid="radio-test-id"
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.label}
            value={option.value}
            control={
              <Radio
                size="small"
                color={option.color ? option.color : "primary"}
              />
            }
            label={option.label}
            color={option.labelColor}
          />
        ))}
      </RadioGroup>
    </FilterSkeleton>
  );
}

RadioFilter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
      name: PropTypes.string.isRequired,
      labelColor: PropTypes.string,
    })
  ).isRequired,
};
