import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  filterControlPaper: {
    backgroundColor: "inherit",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "17px",
  },
  visibilityBtn: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));
