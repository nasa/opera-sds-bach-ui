import React from "react";
import PropTypes from "prop-types";

import { Grid, useTheme } from "@mui/material";

import useStyles from "./style";

export default function FilterTableGrid(props) {
  const { filtersHidden, children } = props;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container className={classes.gridContainer}
      spacing={1} style={{ padding: theme.spacing(1) }}
    >
      {!filtersHidden ? (
        <Grid
          item
          className={classes.leftGridChild}
          xs={12}
          md={4}
          lg={3}
          xl={2}
        >
          {children[0]}
        </Grid>
      ) : null}
      {children.length <= 1 ? null : (
        <Grid
          item
          xs={filtersHidden ? 12 : 12}
          md={filtersHidden ? 12 : 8}
          lg={filtersHidden ? 12 : 9}
          xl={filtersHidden ? 12 : 10}
          className={classes.rightGridChild}
        >
          {children[1]}
        </Grid>
      )}
    </Grid>
  );
}

FilterTableGrid.propTypes = {
  filtersHidden: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

FilterTableGrid.defaultProps = {
  children: [],
};
