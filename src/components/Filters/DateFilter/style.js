import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  global: {
    "MuiFormControl-root": {
      display: "flex",
    },
  },
  filterComponent: {
    display: "flex",
    fontSize: "small",
    width: "",
  },
  dateSelect: {
    margin: "8px 0px",
    display: "flex",
    justifyContent: "center",
  },
  datetimePadding: {
    margin: "8px 0px",
  },
  dateField: {
    margin: "8px 0px",
  },
  textField: {
    font: "0.9em",
  },
}));
