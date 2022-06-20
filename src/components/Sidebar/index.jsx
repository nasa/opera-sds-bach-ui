import React from "react";
import PropTypes from "prop-types";

import { NavLink } from "react-router-dom";

import clsx from "clsx";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
// hidden for OPERA
// import VisibilityIcon from "@mui/icons-material/Visibility";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import InfoIcon from "@mui/icons-material/Info";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// hidden for OPERA
// import FavoriteIcon from "@mui/icons-material/Favorite";

import { SIDEBAR_OPENED_LS } from "@bach/constants";
import MenuLink from "../MenuLink";

import useStyles from "./style";

export default function Sidebar(props) {
  const { opened, toggleSidebar } = props;
  const classes = useStyles();

  const activeLink = opened ? classes.activeOpened : classes.activeClosed;

  // TODO: need to move this to a config file and map over an array
  const links = [
    {
      label: "Data Summary",
      path: "/data-summary",
      icon: TableChartIcon,
    },
    // TODO chrisjrd: unhide when implementing
    // {
    //   label: "Product Accountability",
    //   path: "/product-accountability",
    //   icon: CheckCircleIcon,
    // },
    // hidden for OPERA
    // {
    //   label: "Process Monitoring",
    //   path: "/process-monitoring",
    //   icon: VisibilityIcon,
    // },
    {
      label: "Reporting",
      path: "/reporting",
      icon: InsertChartIcon,
    },
    // hidden for OPERA
    // {
    //   label: "Cluster Health",
    //   path: "/cluster-health",
    //   icon: FavoriteIcon,
    // },
  ];

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: opened,
        [classes.drawerClose]: !opened,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: opened,
          [classes.drawerClose]: !opened,
        }),
      }}
    >
      <List className={classes.drawerList}>
        <ListItem
          button
          className={classes.drawerIcon}
          onClick={() => {
            localStorage.setItem(SIDEBAR_OPENED_LS, !opened);
            toggleSidebar(!opened);
          }}
        >
          <ListItemIcon data-testid="open-close-menu">
            {opened ? <MenuOpenIcon /> : <MenuIcon />}
          </ListItemIcon>
          <ListItemText
            disableTypography
            className={classes.drawerToggle}
            primary="Close Menu"
          />
        </ListItem>

        <Divider />

        {links.map((link) => (
          <MenuLink
            key={link.path}
            opened={opened}
            label={link.label}
            icon={<link.icon />}
            to={link.path}
            activeStyleFunc={({ isActive }) => ({
              ...{ textDecoration: "none" },
              ...(isActive ? { background: "rgba(0, 0, 0, 0.25)"} : null),
            })}
          />
        ))}
      </List>

      <div className={classes.filler} />
    </Drawer>
  );
}

Sidebar.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};
