import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Tabs, Tab } from "@mui/material";
import styles from "./style";

export default function TabMenu(props) {
  const { match, links, classes: classOveride } = props;
  const classes = styles();

  const activeStyle = {
    borderBottom: "3px solid #FF505F",
    opacity: 1,
  };

  return (
    <Tabs
      variant="scrollable"
      className={classOveride || classes.root}
      value={false}
    >
      {links.map((link) => (
        <Tab
          key={link.path}
          className={classes.tab}
          label={
            <NavLink
              to={link.path}
              style={({ isActive }) => ({
                ...{ textDecoration: "none" },
                ...(isActive ? { fontWeight: "bold", ...activeStyle } : null),
              })}
            >
              {link.label || link.path}
            </NavLink>
          }
        />
      ))}
    </Tabs>
  );
}

TabMenu.propTypes = {
  links: PropTypes.instanceOf(Array),
  // eslint-disable-next-line react/require-default-props
  classes: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
};

TabMenu.defaultProps = {
  links: [],
};
