import React from 'react'
import { render } from "@testing-library/react";
import Contexts from "@bach/contexts";
import AdapterMoment from "@mui/lab/AdapterMoment";

import { LocalizationProvider } from '@mui/lab';
import { createTheme, ThemeProvider} from "@mui/material/styles";
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders = ({children}) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme()}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Contexts>{children}</Contexts>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
);

const AllTheProvidersWithRouter = ({children}) => (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={createTheme()}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <Contexts>
              <BrowserRouter>
                {children}
              </BrowserRouter>
            </Contexts>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
);


const customRender = (ui, options) => render(ui, {wrapper: AllTheProviders, ...options});

const customRenderWithRouter = (ui, options, { route = "/" } = {}) => {
      window.history.pushState({}, "Test page", route);
    return render(ui, {wrapper: AllTheProvidersWithRouter, ...options});
};

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render};
export {customRenderWithRouter as renderWithRouter};
