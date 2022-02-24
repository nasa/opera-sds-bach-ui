import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  text: {
    marginLeft: 8,
  },
  parentTable: {
    width: "100%",
  },
  table: {
    fontFamily: "arial, sans-serif",
    borderCollapse: "collapse",
    border: "1px solid #E0E0E0",
    width: "100%",
  },
  leftTable: {
    borderRight: "0px",
    marginRight: "-4px",
  },
  rightTable: {
    borderLeft: "0px",
    marginLeft: "-4px",
  },
  column: {
    padding: "12px 8px",
  },
  key: {
    width: "30%",
    backgroundColor: "#F5F5F5",
    borderBottom: "1px solid #E0E0E0",
    minWidth: "180px",
  },
  value: {
    backgroundColor: "#FFFFFF",
    borderBottom: "1px solid #E0E0E0",
    width: "70%",
  },
}));
