import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import { ComponentOverrides } from "./overrides";

export const ThemeProvider = ({ children }) => {
  const themeOptions = {};

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
