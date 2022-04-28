import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  key: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
  value: {
    backgroundColor: theme.palette.background.default,
  },
}));
