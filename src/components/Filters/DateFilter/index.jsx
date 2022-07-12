import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

import moment from "moment";

import { TextField, MenuItem } from "@mui/material";

import useStyles from "./style";

import FilterSkeleton from "../FilterSkeleton";

export default function DateFilter(props) {
  const classes = useStyles();

  const {
    label,
    startValue,
    endValue,
    presetValue,
    setStartValue,
    setEndValue,
    setPresetValue,
    disabled,
    presets,
  } = props;

  const presetVals = [
    "Today",
    "Yesterday",
    "This Month",
    "Last Month",
    "Custom",
  ];

  const startOfDay = moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss");
  const endOfDay = moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss");

  const startOfYesterday = moment()
    .subtract(1, "day")
    .startOf("day")
    .format("YYYY-MM-DDTHH:mm:ss");

  const endOfYesterday = moment()
    .subtract(1, "day")
    .endOf("day")
    .format("YYYY-MM-DDTHH:mm:ss");

  const startOfMonth = moment().startOf("month").format("YYYY-MM-DDTHH:mm:ss");
  const endOfMonth = moment().endOf("month").format("YYYY-MM-DDTHH:mm:ss");

  const startOfLastMonth = moment()
    .subtract(1, "month")
    .startOf("month")
    .format("YYYY-MM-DDTHH:mm:ss");
  const endOfLastMonth = moment()
    .subtract(1, "month")
    .endOf("month")
    .format("YYYY-MM-DDTHH:mm:ss");

  const changePresetValue = (val) => {
    /**
     * If the preset value is changed, the values of the start date and end date change
     * @preset {[String]} the value of the preset to be changed
     * @start  {[String]} the start date value that will be set.
     * @end {[String]} the end date value that will be set.
     */
    if (presetVals.includes(val)) setPresetValue(val);

    switch (val) {
      case "Today":
        setStartValue(startOfDay);
        setEndValue(endOfDay);
        break;
      case "Yesterday":
        setStartValue(startOfYesterday);
        setEndValue(endOfYesterday);
        break;
      case "This Month":
        setStartValue(startOfMonth);
        setEndValue(endOfMonth);
        break;
      case "Last Month":
        setStartValue(startOfLastMonth);
        setEndValue(endOfLastMonth);
        break;
      case "Custom":
        break;
      default:
        throw new Error(`Unhandled preset: ${val}`);
    }
  };

  const evalPreset = (start, end) => {
    /**
     * Checks to see if the start date and end date values are such that they match an existing preset. If so, then the corresponding preset is set.
     * @start  {[String]} the start date value that will be set.
     * @end {[String]} the end date value that will be set.
     */
    switch (start) {
      case start.diff(startOfDay) === 0: {
        if (end.diff(endOfDay) === 0) {
          changePresetValue("Today");
        } else {
          changePresetValue("Custom");
        }
        break;
      }
      case start.diff(startOfYesterday) === 0: {
        if (end.diff(endOfYesterday) === 0) {
          changePresetValue("Yesterday");
        } else {
          changePresetValue("Custom");
        }
        break;
      }
      case start.diff(startOfMonth) === 0: {
        if (end.diff(endOfMonth) === 0) {
          changePresetValue("This Month");
        } else {
          changePresetValue("Custom");
        }
        break;
      }
      case start.diff(startOfLastMonth) === 0: {
        if (end.diff(endOfLastMonth) === 0) {
          changePresetValue("Last Month");
        } else {
          changePresetValue("Custom");
        }
        break;
      }
      default:
        break;
    }
  };

  const changeStartValue = (e) => {
    if (e.target.value && e.target.value !== "") {
      setStartValue(e.target.value);
      changePresetValue("Custom");
    }
  };

  const changeEndValue = (e) => {
    if (e.target.value && e.target.value !== "") {
      setEndValue(e.target.value);
      changePresetValue("Custom");
    }
  };

  React.useEffect(() => {
    const start = moment(startValue);
    const end = moment(endValue);

    evalPreset(start, end);
  }, [startValue, endValue]);

  return (
    <FilterSkeleton label={label} formClass={classes.datetimePadding}>
      <TextField
        id="datetime-local"
        type="datetime-local"
        aria-label="datetime-local"
        variant="outlined"
        label="From"
        htmlFor="start-datetime-local-input"
        value={startValue}
        onChange={changeStartValue}
        disabled={disabled}
        margin="normal"
        className={clsx(
          classes.textField,
          classes.filterComponent,
          classes.dateField
        )}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          "aria-label": "start-datetime-local-input",
          "data-testid": "start-datetime-test-input",
          id: "start-datetime-local-input",
          style: { fontSize: ".9em" },
        }}
      />
      <TextField
        id="datetime-local"
        type="datetime-local"
        aria-label="datetime-local"
        variant="outlined"
        label="To"
        htmlFor="end-datetime-local-input"
        value={endValue}
        disabled={disabled}
        onChange={changeEndValue}
        margin="normal"
        className={clsx(classes.textField, classes.filterComponent)}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          "aria-label": "end-datetime-local-input",
          "data-testid": "end-datetime-test-input",
          id: "end-datetime-local-input",
          style: { fontSize: ".9em" },
        }}
      />
      <TextField
        select
        value={presetValue}
        onChange={(e) => {
          changePresetValue(e.target.value);
        }}
        disabled={disabled}
        variant="outlined"
        label="Presets"
        disabled={disabled}
        margin="normal"
        className={clsx(classes.dateSelect, {
          [classes.show]: presets,
          [classes.hide]: !presets,
        })}
      >
        <MenuItem value="Today">Today</MenuItem>
        <MenuItem value="Yesterday">Yesterday</MenuItem>
        <MenuItem value="This Month">This Month</MenuItem>
        <MenuItem value="Last Month">Last Month</MenuItem>
        <MenuItem value="Custom">Custom</MenuItem>
      </TextField>
    </FilterSkeleton>
  );
}

DateFilter.propTypes = {
  label: PropTypes.string.isRequired,
  startValue: PropTypes.string.isRequired,
  endValue: PropTypes.string.isRequired,
  presetValue: PropTypes.string,
  setStartValue: PropTypes.func.isRequired,
  setEndValue: PropTypes.func.isRequired,
  setPresetValue: PropTypes.func,
  presets: PropTypes.bool,
  disabled: PropTypes.bool,
};

DateFilter.defaultProps = {
  presetValue: "Today",
  setPresetValue: null,
  presets: true,
  disabled: false,
};
