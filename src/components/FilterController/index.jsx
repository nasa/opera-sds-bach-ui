import React from "react";
import PropTypes from "prop-types";

import { Typography, Button, Paper } from "@mui/material";

import useStyles from "./style";

export default function FilterController(props) {
  const { hidden, toggleFilters } = props;
  const classes = useStyles();

  const toggleFilter = () => toggleFilters();

  return (
    <Paper
      position="fixed"
      elevation={0}
      classes={{
        root: classes.filterControlPaper,
      }}
    >
      <Button
        variant="outlined"
        onClick={toggleFilter}
        className={classes.visibilityBtn}
      >
        <Typography variant="body1">
          {hidden ? "Show Filters" : "Hide Filters"}
        </Typography>
      </Button>
    </Paper>
  );
}

FilterController.propTypes = {
  hidden: PropTypes.bool.isRequired,
  toggleFilters: PropTypes.func.isRequired,
};
