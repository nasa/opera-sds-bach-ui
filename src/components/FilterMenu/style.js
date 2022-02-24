import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  subTitle: {
    paddingTop: 5,
  },
  filterCard: {
    /* Auto Layout */

    display: "sticky",
    height: "inherit",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 0,

    position: "sticky",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    /* grey / grey-300 */

    border: "1px solid #E0E0E0",
    boxSizing: "border-box",
    borderRadius: "4px",

    /* Inside Auto Layout */

    order: 0,
    flexGrow: 0,
    margin: "0px 15px",
    overflowY: "auto",
    width: "100%",
  },
  cardContent: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  cardContentParent: {
    display: "flow-root",
    padding: "0px",
    position: "relative",
    inlineSize: "-webkit-fill-available",
  },
  cardActions: {
    verticalAlign: "baseline",
    position: "fixed",
  },
  actionArea: {
    maxHeight: "60vh",
    overflow: "auto",
  },
}));
