import React from "react";

import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Routes from "@bach/pages/Routes";

import Contexts from "@bach/contexts";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#007DFF",
    },
    secondary: {
      main: "#EEEEEE",
    },
    background: {
      main: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={defaultTheme}>
        <Contexts>
          <Routes />
        </Contexts>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}

export default App;
