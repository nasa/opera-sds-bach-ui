import React from "react";

import AdapterMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

import Routes from "@bach/pages/Routes";

import Contexts from "@bach/contexts";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#10B0AB",
      dark: "#069995",
    },
    secondary: {
      main: "#EEEEEE",
    },
  },
});

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={defaultTheme}>
        <Contexts>
          <Routes />
        </Contexts>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default App;
