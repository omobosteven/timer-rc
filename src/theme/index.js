import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

import { ComponentOverrides } from "theme/overrides";
import { themeOptions } from "theme/themeOptions";

export const ThemeProvider = ({ children }) => {
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
