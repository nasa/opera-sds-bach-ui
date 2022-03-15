import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {},
  columnHeader: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  cell: {},
  row: {
    backgroundColor: theme.palette.background.paper,
  },
}));
