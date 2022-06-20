import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { TextField } from "@mui/material";

import useStyles from "./style";

import FilterSkeleton from "../FilterSkeleton";

export default function StringFilter(props) {
  const { label, value, setValue, disabled } = props;

  const classes = useStyles();

  const updateValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <FilterSkeleton label={label}>
      <TextField
        id="datetime-local"
        variant="outlined"
        value={disabled ? "disabled" : value}
        onChange={updateValue}
        disabled={disabled}
        className={clsx(classes.textField, classes.filterComponent)}
        InputLabelProps={{
          shrink: true,
        }}
        InputProps={{
          "data-testid": "string-filter-field",
        }}
      />
    </FilterSkeleton>
  );
}

StringFilter.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

StringFilter.defaultProps = {
  disabled: false,
};
