import React, { useEffect, useState } from "react";
import { add, getTime } from "date-fns";
import { useCountdown } from "hooks/useCountdown";
import { TimerCount } from "components/TimerCount";
import { Container } from "reusables/Contianer";
import { LogoTitle } from "components/LogoTitle";
import { TimerControl } from "components/TimerControl";

function App() {
  const [targetTime, setTargetTime] = useState(() => getTime(new Date()));
  const [timerInput, setTimerInput] = useState({
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [pausedTime, setPausedTime] = useState(0);

  const timer = useCountdown(targetTime);
  const {
    hours,
    minutes,
    seconds,
    handlePause,
    handleStart,
    handleReset: reset,
  } = timer;

  useEffect(() => {
    setTargetTime(
      getTime(
        add(new Date(), {
          hours: +timerInput.hours,
          minutes: +timerInput.minutes,
          seconds: +timerInput.seconds,
        })
      )
    );
  }, [timerInput]);

  const handleChangeTimeField: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ): void => {
    let { name, value } = e.target;
    value = +value > 99 ? "99" : value;

    setTimerInput({ ...timerInput, [name]: value });
  };

  const handleReset = () => {
    setTimerInput({
      hours: "",
      minutes: "",
      seconds: "",
    });
    setTargetTime(getTime(new Date()));
    reset();
  };

  const handlePauseTimer = () => {
    setPausedTime(getTime(new Date()) - targetTime);
    handlePause();
  };

  const handleStartTimer = () => {
    setTargetTime(
      pausedTime
        ? getTime(new Date()) - pausedTime
        : getTime(
            add(new Date(), {
              hours: +timerInput.hours,
              minutes: +timerInput.minutes,
              seconds: +timerInput.seconds,
            })
          )
    );
    setPausedTime(0);
    handleStart();
  };

  return (
    <Container maxWidth={false}>
      <LogoTitle component="h1">tMr</LogoTitle>

      <TimerCount hours={hours} minutes={minutes} seconds={seconds} />

      <TimerControl
        timerInput={timerInput}
        handleChangeTimeField={handleChangeTimeField}
        handleStartTimer={handleStartTimer}
        handlePauseTimer={handlePauseTimer}
        handleReset={handleReset}
      />
    </Container>
  );
}

export default App;
