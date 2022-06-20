import { Container as MuiContainer, styled } from "@mui/material";

export const StyledContainer = styled(MuiContainer)({
  height: "100vh",
  backgroundColor: "#0d4a99",
  overflowY: "auto",
  display: "grid",
  gridTemplateAreas: `
  "title"
  "time-count"
  "input"
  `,
  justifyItems: "center",
  gridTemplateRows: "auto 1fr auto",
});
