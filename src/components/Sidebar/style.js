import { makeStyles } from "@material-ui/core/styles";

import {
  DRAWER_WIDTH,
  DRAWER_COLOR,
  ACTIVE_LINK_CLOSED,
  ACTIVE_LINK_OPENED,
} from "../../constants";

export default makeStyles((theme) => ({
  menuButton: {
    marginRight: 36,
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    backgroundColor: "#FFFFFF",
  },
  drawerClose: {
    overflowX: "hidden",
    backgroundColor: DRAWER_COLOR,
    width: theme.spacing(9) + 1,
  },
  drawerList: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  drawerIcon: {
    paddingLeft: 25,
    paddingTop: 18,
    paddingBottom: 18,
  },
  drawerToggle: {
    margin: 0,
  },
  activeClosed: {
    backgroundColor: ACTIVE_LINK_CLOSED,
  },
  activeOpened: {
    backgroundColor: ACTIVE_LINK_OPENED,
  },
  filler: {
    flexGrow: 1,
  },
}));
