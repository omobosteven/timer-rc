import { TimeField } from "./TimeField";

export const TimerInputs = ({ timerInput, handleChangeTimeField }) => {
  return (
    <>
      <TimeField
        label="Hours"
        value={timerInput.hours}
        name="hours"
        onChange={handleChangeTimeField}
        inputProps={{
          max: 99,
          min: 0,
        }}
      />
      <TimeField
        label="Min"
        value={timerInput.minutes}
        name="minutes"
        onChange={handleChangeTimeField}
        inputProps={{
          max: 99,
          min: 0,
        }}
      />
      <TimeField
        label="Sec"
        value={timerInput.seconds}
        name="seconds"
        onChange={handleChangeTimeField}
        inputProps={{
          max: 99,
          min: 0,
        }}
      />
    </>
  );
};
