import { makeStyles } from "@material-ui/core/styles";

import { NASA_BLUE } from "../../constants";

export default makeStyles(() => ({
  root: {
    backgroundColor: NASA_BLUE,
    color: "#FFFFFF",
    top: "auto",
    left: 73,
    right: 0,
    zIndex: "2",
  },
  tab: {
    fontSize: 15,
  },
}));
