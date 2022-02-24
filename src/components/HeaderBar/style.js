import { makeStyles } from "@material-ui/core/styles";

import {
  APP_BAR_HEIGHT,
  DRAWER_WIDTH,
  DRAWER_CLOSED_WIDTH,
} from "../../constants";

export default makeStyles((theme) => ({
  appBar: {
    height: APP_BAR_HEIGHT,
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#F5F5F5",
    color: "black",
  },
  appBarShift: {
    marginLeft: DRAWER_WIDTH,
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
  },
  appBarClose: {
    marginLeft: DRAWER_CLOSED_WIDTH,
    width: `calc(100% - ${DRAWER_CLOSED_WIDTH}px)`,
  },
  title: {
    fontSize: 12,
    letterSpacing: 3,
  },
  subTitle: {
    paddingTop: 5,
  },
  divider: {
    margin: "0px 2px",
  },
  logo: {
    marginRight: "2%",
  },
  logoRight: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
}));
