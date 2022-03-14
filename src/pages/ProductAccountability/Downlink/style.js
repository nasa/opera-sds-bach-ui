import { makeStyles } from "@material-ui/core/styles";

import { NASA_BLUE } from "@bach/constants";

export default makeStyles(() => ({
  page: {
    backgroundColor: "#FFFFFF",
    height: "100vh",
  },
  pageContent: {
    padding: 25,
  },
  tabWrapper: {
    backgroundColor: NASA_BLUE,
  },
  tab: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  hide: {
    display: "none",
  },
  show: {
    display: "flow-root",
    position: "relative",
  },
  iconLabel: {
    display: "flex",
    alignItems: "center",
    marginLeft: "16.5px",
  },
  spanLabel: {
    marginLeft: "13px",
  },
}));
