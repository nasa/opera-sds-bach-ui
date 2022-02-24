import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  filterWidth: {
    paddingTop: "width",
  },
  gridContainer: {
    position: "static",
    alignItems: "flex-start",
    minHeight: "50%",
    height: "fit-content",
    background: "rgb(255, 255, 255)",
  },
  leftGridChild: {
    position: "relative",
    height: "fit-content",
    minWidth: "220px",
    minHeight: "400px",
    justifyContent: "space-between",
  },
  rightGridChild: {
    position: "relative",
    height: "fit-content",
    minHeight: "400px",
    justifyContent: "space-between",
  },
}));
