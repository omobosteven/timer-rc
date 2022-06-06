import { useEffect, useState } from "react";
import { useCountdown } from "./hooks/useCountdown";
import { TimerActions } from "./components/TimerActions";
import { TimerCount } from "./components/TimerCount";
import { TimerInputs } from "./components/TimerInputs";
import { add, getTime } from "date-fns";
import "./App.css";

function App() {
  const [targetTime, setTargetTime] = useState(() => getTime(new Date()));
  const [timerInput, setTimerInput] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });
  const [pausedTime, setPausedTime] = useState(0);

  const timer = useCountdown(targetTime);
  const { days, hours, minutes, seconds, handlePause, handleStart } = timer;

  useEffect(() => {
    setTargetTime(
      getTime(
        add(new Date(), {
          days: +timerInput.days,
          hours: +timerInput.hours,
          minutes: timerInput.minutes,
          seconds: +timerInput.seconds,
        })
      )
    );
  }, [timerInput]);

  const handleChangeTimeField = (e) => {
    let { name, value } = e.target;

    if (["seconds", "minutes", "hours"].includes(name)) {
      value = +value > 99 ? "99" : value;
    }

    if ("days" === name) {
      value = +value > 365 ? "365" : value;
    }

    setTimerInput({ ...timerInput, [name]: value });
  };

  const handleReset = () => {
    setTimerInput({
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    });
    setTargetTime(getTime(new Date()));
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
              days: +timerInput.days,
              hours: +timerInput.hours,
              minutes: timerInput.minutes,
              seconds: +timerInput.seconds,
            })
          )
    );
    setPausedTime(0);
    handleStart();
  };

  const handleRestart = () => {
    setTargetTime(
      getTime(
        add(new Date(), {
          days: +timerInput.days,
          hours: +timerInput.hours,
          minutes: timerInput.minutes,
          seconds: +timerInput.seconds,
        })
      )
    );
  };

  return (
    <div className="App">
      <h1>Timer</h1>
      <br />
      <div>
        <TimerInputs
          timerInput={timerInput}
          handleChangeTimeField={handleChangeTimeField}
        />

        <br />
        <br />

        <TimerActions
          handleRestart={handleRestart}
          handleStartTimer={handleStartTimer}
          handlePauseTimer={handlePauseTimer}
          handleReset={handleReset}
        />
      </div>
      <br />
      <TimerCount
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}

export default App;
