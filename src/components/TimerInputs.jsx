import { TimeField } from "./TimeField";
import { StyledTimerInputs } from "components/TimerInputs.styles";

export const TimerInputs = ({ timerInput, handleChangeTimeField }) => {
  return (
    <StyledTimerInputs>
      <TimeField
        label="Hours"
        value={timerInput.hours}
        name="hours"
        onChange={handleChangeTimeField}
        inputProps={{
          max: 99,
          min: 0,
        }}
        variant="outlined"
      />
      <TimeField
        label="Minutes"
        value={timerInput.minutes}
        name="minutes"
        onChange={handleChangeTimeField}
        inputProps={{
          max: 99,
          min: 0,
        }}
      />
      <TimeField
        label="Seconds"
        value={timerInput.seconds}
        name="seconds"
        onChange={handleChangeTimeField}
        inputProps={{
          max: 99,
          min: 0,
        }}
      />
    </StyledTimerInputs>
  );
};
