import { makeStyles } from "@material-ui/core/styles";

import {
  APP_BAR_HEIGHT,
  DRAWER_WIDTH,
  DRAWER_CLOSED_WIDTH,
} from "../../constants";

export default makeStyles(() => ({
  root: {
    display: "flex",
  },
  header: {
    height: APP_BAR_HEIGHT,
    color: "black",
    backgroundColor: "#FFFFFF",
  },
  menuButton: {
    marginRight: 36,
  },
  content: {
    marginTop: APP_BAR_HEIGHT,
    minWidth: "50em",
  },
  drawerOpen: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
  drawerClose: {
    width: `calc(100% - ${DRAWER_CLOSED_WIDTH}px)`,
  },
}));
