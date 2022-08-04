import { GlobalStyles } from "theme/overrides/GlobalStyles";
import { Theme } from "@mui/material";

export const ComponentOverrides = (theme: Theme) => {
  return {
    ...GlobalStyles(theme),
  };
};
