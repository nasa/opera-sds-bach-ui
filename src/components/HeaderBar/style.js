import { makeStyles } from "@mui/styles";

import { DRAWER_WIDTH, DRAWER_CLOSED_WIDTH } from "@bach/constants";

export default makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.text.primary,
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
