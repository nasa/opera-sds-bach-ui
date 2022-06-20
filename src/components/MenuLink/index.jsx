/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

import useStyles from "./style";

export default function MenuLink(props) {
  const { opened, icon, label, to, activeStyleFunc, ...rest } = props;
  const classes = useStyles();
  const link = (
    <NavLink to={to} style={activeStyleFunc}>
      <ListItem className={classes.icon} button {...rest}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          disableTypography
          className={classes.text}
          primary={label}
        />
      </ListItem>
    </NavLink>
  );
  return opened ? (
    link
  ) : (
    <Tooltip
      title={<span className={classes.tooltip}>{label}</span>}
      placement="right"
    >
      {link}
    </Tooltip>
  );
}

MenuLink.propTypes = {
  opened: PropTypes.bool,
  label: PropTypes.string,
  icon: PropTypes.element.isRequired,
};

MenuLink.defaultProps = {
  opened: true,
  label: "",
};
