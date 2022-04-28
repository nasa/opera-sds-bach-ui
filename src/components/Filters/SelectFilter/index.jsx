import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { Select } from "@mui/material";

import useStyles from "./style";

import FilterSkeleton from "../FilterSkeleton";

export default function SelectFilter(props) {
  const { label, options, value, setValue } = props;

  const changeValue = (event, newValue) => setValue(newValue);

  const classes = useStyles();

  return (
    <FilterSkeleton label={label}>
      <Select
        native
        autoWidth
        value={value}
        inputProps={{
          "data-testid": "select-test-id",
        }}
        onChange={changeValue}
        variant="outlined"
        className={clsx(classes.selectInput)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FilterSkeleton>
  );
}

SelectFilter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
