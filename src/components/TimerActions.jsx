import { Button } from "@mui/material";
import { StyledTimerActions } from "components/TimerActions.styles";

export const TimerActions = ({
  handleRestart,
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
