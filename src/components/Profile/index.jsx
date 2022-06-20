import React from "react";

import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import useStyles from "./style";

export default function Profile() {
  const classes = useStyles();

  return (
    <ListItem button>
      <ListItemIcon>
        <Avatar>N</Avatar>
      </ListItemIcon>
      <ListItemText
        disableTypography
        className={classes.text}
        primary="Guest"
      />
    </ListItem>
  );
}
