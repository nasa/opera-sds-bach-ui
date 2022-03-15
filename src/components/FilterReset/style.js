import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  resetBtn: {
    /* baseButton */

    /* Auto Layout */

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4px 10px",

    position: "static",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",

    /* primary / border */

    border: "1px solid rgba(0, 125, 255, 0.5)",
    boxSizing: "border-box",
    borderRadius: "4px",
    color: theme.palette.primary.main,

    /* Inside Auto Layout */

    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 0px",
  },
  resetDiv: {
    /* Auto Layout */

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",

    position: "static",
    left: "72.56%",
    right: "4.33%",
    top: "21.43%",
    bottom: "21.43%",

    borderRadius: "4px",

    /* Inside Auto Layout */

    flex: "none",
    order: 1,
    flexGrow: 0,
    margin: "0px 12px",
  },
}));
