import React, { useContext } from "react";
import PropTypes from "prop-types";

import { useLocation } from "react-router-dom";

import clsx from "clsx";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import operaLogo from "@bach/images/opera_logo.png";
import nasaLogo from "@bach/images/nasa_logo.svg";
import { PageTitleContext } from "@bach/contexts/PageTitleContext";

import useStyles from "./style";

export function hashCode(str) {
  let hash = 0;
  let chr = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i += 1) {
    chr = str.charCodeAt(i);
    hash = (hash < 5) - hash + chr;
    hash = hash || 0; // Convert to 32bit integer
  }
  return hash;
}

export const LocationDisplay = () => {
  const location = useLocation();

  return <div data-testid="location-display">{location.pathname}</div>;
};

export default function HeaderBar(props) {
  const { opened, missionTitle } = props;

  const classes = useStyles();

  const { pageTitle } = useContext(PageTitleContext);

  return (
    <>
      <AppBar
        position="relative"
        elevation={0}
        className={clsx(classes.appBar, classes.header, {
          [classes.appBarShift]: opened,
          [classes.appBarClose]: !opened,
        })}
        color="transparent"
      >
        <Toolbar>
          <img
            width="129px"
            height="auto"
            alt="logo"
            src={operaLogo}
            className={classes.logo}
          />
          <div>
            <Typography className={classes.title}>{missionTitle}</Typography>
            <Typography variant="h4" className={classes.subTitle}>
              {pageTitle}
            </Typography>
          </div>
          <div className={classes.logoRight}>
            <img width="129px" height="auto" alt="logo" src={nasaLogo} />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

HeaderBar.propTypes = {
  opened: PropTypes.bool.isRequired,
  missionTitle: PropTypes.string.isRequired,
};
