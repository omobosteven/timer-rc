import { GlobalStyles } from "./GlobalStyles";

export const ComponentOverrides = (theme) => {
  return {
    ...GlobalStyles(theme),
  };
};
