import { makeStyles } from "@material-ui/core/styles";
import { NASA_BLUE } from "@bach/constants";

export default makeStyles(() => ({
  page: {
    backgroundColor: "#FFFFFF",
    height: "100vh",
    marginTop: "35px",
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
    padding: "0 5px",
    backgroundColor: "#FFFFFF",
  },
  summaryTable: {
    marginBottom: "16px",
    paddingRight: "18px",
  },
  reportTab: {
    backgroundColor: "#FFFFFF",
    color: NASA_BLUE,
    height: "100%",
  },
}));
