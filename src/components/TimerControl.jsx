import { TimerInputs } from "./TimerInputs";
import { TimerActions } from "./TimerActions";
import { StyledTimerControl } from "./TimerControl.styles";

export const TimerControl = ({
  timerInput,
  handleChangeTimeField,
  handleRestart,
  handleStartTimer,
  handlePauseTimer,
  handleReset,
}) => {
  return (
    <StyledTimerControl>
      <TimerInputs
        timerInput={timerInput}
        handleChangeTimeField={handleChangeTimeField}
      />

      <TimerActions
        handleRestart={handleRestart}
        handleStartTimer={handleStartTimer}
        handlePauseTimer={handlePauseTimer}
        handleReset={handleReset}
      />
    </StyledTimerControl>
  );
};
