import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  global: {
    "MuiFormControl-root": {
      display: "flex",
    },
  },
  default: {},
  typography: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0px",
    fontWeight: 540,

    position: "static",

    /* Inside Auto Layout */

    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 0px",
  },
  inputComponents: {
    display: "flow-root",
    flexDirection: "column",
    alignItems: "flex-start",
    // padding: "8px 8px 16px 12px",

    position: "static",

    /* Inside Auto Layout */

    flex: "none",
    order: 1,
    alignSelf: "normal",
    flexGrow: 0,
    margin: "0px 0px",
  },
  filterComponentDiv: {
    display: "flow-root",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "8px 0px 0px 8px",

    position: "static",

    /* Inside Auto Layout */

    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 0px",
  },
  formControl: {
    display: "flex",
    paddingRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
}));
