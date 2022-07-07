import { styled } from "@mui/material";

export const StyledTimerCount = styled("div")({
  gridArea: "time-count",
  alignSelf: "center",

  "& .counter": {
    fontSize: "20vw",
    color: "#fff",
    transform: "scale(1.25)",
    lineHeight: "1",
    marginTop: "-94px",
    fontWeight: "500",
  },

  "& .separator": {
    verticalAlign: "5%",
  },
});
