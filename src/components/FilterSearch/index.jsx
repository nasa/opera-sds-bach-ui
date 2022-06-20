import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

import useStyles from "./style";

export default function FilterSearch(props) {
  const classes = useStyles();

  const { value, onClick } = props;

  return (
    <div className={classes.searchDiv}>
      <Button
        variant="contained"
        className={classes.searchBtn}
        onClick={onClick}
        data-testid="search-filter-button"
      >
        {value}
      </Button>
    </div>
  );
}

FilterSearch.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

FilterSearch.defaultProps = {
  value: "SEARCH",
}