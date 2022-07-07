import { TimerInputs } from "./TimerInputs";
import { TimerActions } from "./TimerActions";
import { StyledTimerControl } from "./TimerControl.styles";

export const TimerControl = ({
  timerInput,
  handleChangeTimeField,
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
        handleStartTimer={handleStartTimer}
        handlePauseTimer={handlePauseTimer}
        handleReset={handleReset}
      />
    </StyledTimerControl>
  );
};
