import React from "react";
import PropTypes from "prop-types";

import { FormControlLabel, Checkbox } from "@mui/material";

import FilterSkeleton from "../FilterSkeleton";

export default function CheckboxFilter(props) {
  const { label, options } = props;

  return (
    <FilterSkeleton label={label}>
      {options.map((option) => (
        <FormControlLabel
          style={{ color: option.labelColor }}
          key={option.name}
          control={
            <Checkbox
              checked={option.value}
              onChange={option.setValue}
              name={option.name}
              size="small"
              color={option.color ? option.color : "primary"}
            />
          }
          label={option.label}
          color={option.labelColor}
        />
      ))}
    </FilterSkeleton>
  );
}

CheckboxFilter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.element.isRequired,
      color: PropTypes.string,
      value: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      setValue: PropTypes.func.isRequired,
      labelColor: PropTypes.string,
    })
  ).isRequired,
};
