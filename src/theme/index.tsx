import React from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import { ComponentOverrides } from "theme/overrides";
import { themeOptions } from "theme/themeOptions";

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProps) => {
  const theme = createTheme(themeOptions);
  theme.components = ComponentOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};
