/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

import useStyles from "./style";

export default function MenuLink(props) {
  const { opened, icon, label, ...rest } = props;
  const classes = useStyles();

  const link = (
    <ListItem className={classes.icon} button {...rest}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        disableTypography
        className={classes.text}
        primary={label}
      />
    </ListItem>
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
