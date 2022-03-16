import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  key: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  value: {
    backgroundColor: theme.palette.background.default,
  },
}));
