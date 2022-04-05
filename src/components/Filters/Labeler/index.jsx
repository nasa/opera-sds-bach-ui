import React from "react";
import Tooltip from "@mui/material/Tooltip";

const makeLabel = (icon, text, hoverText, color, classes) => (
  <div className={classes.iconLabel} style={{ color }}>
    <Tooltip title={hoverText} aria-label={hoverText} style={{ color }}>
      {icon}
    </Tooltip>
    <span className={classes.spanLabel} style={{ color }}>
      {text}
    </span>
  </div>
);

export default makeLabel;
