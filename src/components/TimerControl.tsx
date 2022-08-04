import React from "react";
import { TimerInputs } from "components/TimerInputs";
import { TimerActions } from "./TimerActions";
import { styled } from "@mui/material";

export type TTimeInput = {
  hours: string;
  minutes: string;
  seconds: string;
};

interface TimerControlProps {
  timerInput: TTimeInput;
  handleChangeTimeField: React.ChangeEventHandler<HTMLInputElement>;
  handleStartTimer: () => void;
  handlePauseTimer: () => void;
  handleReset: () => void;
}

export const TimerControl = ({
  timerInput,
  handleChangeTimeField,
  handleStartTimer,
  handlePauseTimer,
  handleReset,
}: TimerControlProps) => {
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

const StyledTimerControl = styled("div")({
  gridArea: "input",
  justifySelf: "center",
  width: "100%",
  maxWidth: "480px",
  position: "absolute",
  bottom: 20,
});
