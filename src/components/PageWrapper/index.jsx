import React from "react";
import PropTypes from "prop-types";

import useStyles from "./style";

export default function PageWrapper(props) {
  const classes = useStyles();

  const { children } = props;

  return <div className={classes.page}>{children}</div>;
}

PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

PageWrapper.defaultProps = {
  children: [],
};
