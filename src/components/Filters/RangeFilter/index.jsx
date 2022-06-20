import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import { TextField, Grid } from "@mui/material";

import useStyles from "./style";

import FilterSkeleton from "../FilterSkeleton";

export default function RangeFilter(props) {
  const {
    label,
    valueA,
    setValueA,
    labelA,
    valueB,
    setValueB,
    labelB,
    disabled,
  } = props;

  const classes = useStyles();

  const updateValueA = (e) => {
    setValueA(e.target.value);
  };

  const updateValueB = (e) => {
    setValueB(e.target.value);
  };

  return (
    <FilterSkeleton label={label}>
      <Grid container spacing={2} className={classes.smallGap}>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label={labelA}
            value={valueA}
            onChange={updateValueA}
            className={clsx(classes.textField, classes.filterComponent)}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              "data-testid": "string-filter-field",
            }}
            disabled={disabled}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="outlined"
            label={labelB}
            value={valueB}
            onChange={updateValueB}
            className={clsx(classes.textField, classes.filterComponent)}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              "data-testid": "string-filter-field",
            }}
            disabled={disabled}
          />
        </Grid>
      </Grid>
    </FilterSkeleton>
  );
}

RangeFilter.propTypes = {
  label: PropTypes.string.isRequired,
  valueA: PropTypes.string.isRequired,
  setValueA: PropTypes.func.isRequired,
  labelA: PropTypes.string.isRequired,
  valueB: PropTypes.string.isRequired,
  setValueB: PropTypes.func.isRequired,
  labelB: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

RangeFilter.defaultProps = {
  disabled: false,
};
