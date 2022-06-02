import { useEffect, useState } from "react";
import { useCountdown } from "./hooks/useCountdown";
import { TimeField } from "./components/TimeField";
import { add, getTime } from "date-fns";
import { Button } from "@mui/material";
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
        <TimeField
          label="Days"
          value={timerInput.days}
          name="days"
          onChange={handleChangeTimeField}
          inputProps={{
            max: 365,
            min: 0,
          }}
        />
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

        <br />
        <br />

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
      </div>
      <br />
      <div>
        <h1>
          {days}:{hours}:{minutes}:{seconds}
        </h1>
      </div>
    </div>
  );
}

export default App;
