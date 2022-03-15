import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  searchDiv: {
    /* Button */

    /* Auto Layout */

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",

    position: "static",
    left: "4.33%",
    right: "68.23%",
    top: "21.43%",
    bottom: "21.43%",

    borderRadius: "4px",

    /* Inside Auto Layout */

    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 12px",
  },
  searchBtn: {
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

    /* primary / main */

    background: theme.palette.primary.main,
    /* Shadow / 2 */

    boxShadow:
      "0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)",
    borderRadius: "4px",

    /* Inside Auto Layout */

    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 0px",
  },
  text: {
    position: "static",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",

    /* button medium */

    /* identical to box height, or 171% */

    letterSpacing: "0.4px",
    textTransform: "uppercase",

    /* primary / contrastText */

    color: "#FFFFFF",

    /* Inside Auto Layout */

    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 0px",
  },
}));
