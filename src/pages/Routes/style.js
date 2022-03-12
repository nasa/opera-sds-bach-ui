import { makeStyles } from "@material-ui/core/styles";

import {
  DRAWER_WIDTH,
  DRAWER_CLOSED_WIDTH,
} from "../../constants";

export default makeStyles(() => ({
  root: {},
  menuButton: {
    marginRight: 36,
  },
  content: {
    // marginTop: APP_BAR_HEIGHT,
  },
  drawerOpen: {
    marginLeft: `${DRAWER_WIDTH}px`,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
  drawerClose: {
    marginLeft: `${DRAWER_CLOSED_WIDTH}px`,
    width: `calc(100% - ${DRAWER_CLOSED_WIDTH}px)`,
  },
}));
