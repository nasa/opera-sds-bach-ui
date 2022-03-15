import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  filterControlPaper: {
    backgroundColor: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "17px",
  },
  visibilityBtn: {
    flex: "none",
    order: 0,
    flexGrow: 0,
    margin: "0px 0px",
    height: "32px",
    left: 0,
    top: 0,
    borderRadius: 4,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 24,
  },
}));
