import { Button } from "@mui/material";

export const TimerActions = ({
  handleRestart,
  handleStartTimer,
  handlePauseTimer,
  handleReset,
}) => {
  return (
    <div>
      <Button variant="contained" onClick={handleRestart}>
        Restart
      </Button>
      <Button variant="contained" onClick={handleStartTimer}>
        Start
      </Button>
      <Button variant="contained" onClick={handlePauseTimer}>
        Pause
      </Button>
      <Button variant="contained" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
};
