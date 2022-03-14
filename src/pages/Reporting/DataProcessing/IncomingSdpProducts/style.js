import { makeStyles } from "@material-ui/core/styles";
import { NASA_BLUE } from "@bach/constants";

export default makeStyles(() => ({
  page: {
    backgroundColor: "#FFFFFF",
    height: "100vh",
  },
  pageContent: {
    padding: 25,
  },
  tabWrapper: {
    backgroundColor: NASA_BLUE,
  },
  tab: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  subPage: {
    padding: "0 25px",
    backgroundColor: "#FFFFFF",
  },
  summaryTable: {
    marginBottom: "16px",
  },
  reportTable: {},
}));
