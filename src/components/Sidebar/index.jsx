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
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import TableChartIcon from "@material-ui/icons/TableChart";
import VisibilityIcon from "@material-ui/icons/Visibility";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import InfoIcon from "@material-ui/icons/Info";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FavoriteIcon from "@material-ui/icons/Favorite";

import MenuLink from "../MenuLink";
import Profile from "../Profile";
import { SIDEBAR_OPENED_LS } from "../../constants";

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
    {
      label: "Product Accountability",
      path: "/product-accountability",
      icon: CheckCircleIcon,
    },
    {
      label: "Process Monitoring",
      path: "/process-monitoring",
      icon: VisibilityIcon,
    },
    {
      label: "Reporting",
      path: "/reporting",
      icon: InsertChartIcon,
    },
    {
      label: "Cluster Health",
      path: "/cluster-health",
      icon: FavoriteIcon,
    },
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
            component={NavLink}
            to={link.path}
            activeClassName={activeLink}
          />
        ))}
      </List>

      <div className={classes.filler} />

      <MenuLink label="Information" icon={<InfoIcon />} />
      <Divider />

      <Profile />
      <MenuLink opened={opened} label="Logout" icon={<ExitToAppIcon />} />
    </Drawer>
  );
}

Sidebar.propTypes = {
  opened: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};
