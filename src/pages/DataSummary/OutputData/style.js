import { NASA_BLUE } from "../../../constants";

const useStyles = () => ({
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
  hide: {
    display: "none",
  },
  show: {
    display: "flow-root",
    position: "relative",
  },
});

export default useStyles;
