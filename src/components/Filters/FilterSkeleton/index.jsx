import React from "react";
import PropTypes from "prop-types";

import { FormControl, Typography } from "@mui/material";

import useStyles from "./style";

export default function FilterSkeleton(props) {
  const { label, key, children } = props;

  const classes = useStyles();

  return (
    <div key={key} className={classes.filterComponentDiv}>
      <Typography className={classes.typography}>{label}</Typography>
      <div className={classes.inputComponents}>
        <FormControl component="fieldset" className={classes.formControl}>
          {children}
        </FormControl>
      </div>
    </div>
  );
}

FilterSkeleton.propTypes = {
  label: PropTypes.string,
  key: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

FilterSkeleton.defaultProps = {
  label: "",
  key: "",
  children: [],
};
