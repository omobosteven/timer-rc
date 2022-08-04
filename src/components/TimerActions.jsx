import { Button, styled } from "@mui/material";

export const TimerActions = ({
  handleStartTimer,
  handlePauseTimer,
  handleReset,
}) => {
  return (
    <StyledTimerActions>
      <Button variant="contained" onClick={handleStartTimer}>
        Start
      </Button>
      <Button variant="contained" onClick={handlePauseTimer}>
        Pause
      </Button>
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>
    </StyledTimerActions>
  );
};

const StyledTimerActions = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  columnGap: "20px",
  rowGap: "20px",
});
