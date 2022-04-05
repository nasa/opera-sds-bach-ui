import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

import useStyles from "./style";

export default function FilterReset(props) {
  const { onClick } = props;

  const classes = useStyles();

  return (
    <div className={classes.resetDiv}>
      <Button
        variant="outlined"
        onClick={onClick}
        className={classes.resetBtn}
        data-testid="reset-filter-button"
      >
        RESET
      </Button>
    </div>
  );
}

FilterReset.propTypes = {
  onClick: PropTypes.func.isRequired,
};
