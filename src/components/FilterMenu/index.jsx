import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@mui/styles";

import clsx from "clsx";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Container,
} from "@mui/material";

import FilterSearch from "../FilterSearch";
import FilterReset from "../FilterReset";

import useStyles from "./style";

export default function FilterMenu(props) {
  const { title, children, search, reset, searchButtonValue } = props;
  const classes = useStyles();

  const onResetClick = () => reset();

  const onSearchClick = () => search();

  const GlobalCss = withStyles((theme) => {
    return {
      "@global": {
        ".MuiCardHeader-title": {
          fontSize: "1.2em",
          alignSelf: "center",
          position: "relative",
        },
        ".MuiCardContent-root": {
          padding: "0px",
          display: "flow-root",
        },
        ".MuiCardHeader-root": {
          background: theme.palette.secondary.main,
          color: theme.palette.secondary.contrastText,
          boxShadow: "inset 0px -1px 0px #E0E0E0",
          /* Inside Auto Layout */
          flex: "none",
          order: 0,
          alignSelf: "normal",
          flexGrow: 0,
          margin: "0px 0px",
        },
        "MuiFormControl-root": {
          display: "flex",
        },
        ".MuiCardActions-root": {
          /* Sidebar / Footer */

          /* Auto Layout */

          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px",

          position: "static",
          width: "-webkit-fill-available",
          height: "56px",
          left: "0px",
          top: "312px",
          background: theme.palette.secondary.main,
          border: "1px solid #E0E0E0",
          boxSizing: "border-box",
          borderRadius: "0px 0px 4px 4px",
          verticalAlign: "baseline",
          /* Inside Auto Layout */

          flex: "none",
          order: 2,
          alignSelf: "flex-start",
          flexGrow: 0,
          margin: "0px 0px",
        },
      },
    };
  })(() => null);

  return (
    <Card className={clsx(classes.root, classes.filterCard)} variant="outlined">
      <GlobalCss />
      <CardHeader title={title} />
      <Container fixed disableGutters className={classes.actionArea}>
        <CardContent className={classes.cardContentParent}>
          <div className={classes.cardContent}>{children}</div>
        </CardContent>
      </Container>
      <CardActions>
        <FilterSearch onClick={onSearchClick} {...(searchButtonValue ? {value: searchButtonValue} : {})} />
        <FilterReset onClick={onResetClick} />
      </CardActions>
    </Card>
  );
}

FilterMenu.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  search: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  searchButtonValue: PropTypes.string,
};

FilterMenu.defaultProps = {
  children: [],
  searchButtonValue: "SEARCH",
};
