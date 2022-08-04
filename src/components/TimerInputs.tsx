import React from "react";
import { TimeField } from "components/TimeField";
import { styled } from "@mui/material";
import { TTimeInput } from "components/TimerControl";

interface TimerInputsProps {
  timerInput: TTimeInput;
  handleChangeTimeField: React.ChangeEventHandler<HTMLInputElement>;
}

export const TimerInputs = ({
  timerInput,
  handleChangeTimeField,
}: TimerInputsProps) => {
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

const StyledTimerInputs = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  columnGap: "20px",
  rowGap: "20px",
  marginBottom: "20px",

  "& .MuiTextField-root": {
    flex: "1 1 auto",
    minWidth: "100px",

    "& .MuiInputBase-root": {
      color: "#fff",
    },

    "& .MuiInputLabel-root": {
      color: "#fff",
    },

    "& .MuiOutlinedInput-notchedOutline, & .MuiOutlinedInput-notchedOutline:focus, & .MuiOutlinedInput-notchedOutline:focus":
      {
        borderWidth: "1px",
        borderColor: "#fff",
      },
  },
});
