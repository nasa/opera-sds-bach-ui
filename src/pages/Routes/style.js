import { makeStyles } from "@mui/styles";

import { DRAWER_WIDTH, DRAWER_CLOSED_WIDTH } from "@bach/constants";

export default makeStyles(() => ({
  root: {},
  menuButton: {
    marginRight: 36,
  },
  content: {},
  drawerOpen: {
    marginLeft: `${DRAWER_WIDTH}px`,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
  drawerClose: {
    marginLeft: `${DRAWER_CLOSED_WIDTH}px`,
    width: `calc(100% - ${DRAWER_CLOSED_WIDTH}px)`,
  },
}));
