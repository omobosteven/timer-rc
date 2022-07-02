import { useEffect, useState, useRef } from "react";
import { getTime } from "date-fns";

export const useCountdown = (targetDate) => {
  const [countDown, setCountDown] = useState(
    () => targetDate - getTime(new Date())
  );
  const [isPaused, setIsPaused] = useState(true);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const diffTime = targetDate - getTime(new Date());

      if (!isPaused) {
        setCountDown(
          diffTime > 0 ? diffTime : getTime(new Date()) - targetDate
        );
      } else {
        clearTimer();
      }
    }, 1000);
    return () => clearTimer();
  }, [targetDate, isPaused]);

  const clearTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  return {
    ...getReturnValues(countDown),
    handlePause,
    handleStart: () => setIsPaused(false),
  };
};

const getReturnValues = (countDown) => {
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);


  return {
    hours: hours < 0 ? "00" : hours.toString().padStart(2, "0"),
    minutes: minutes < 0 ? "00" : minutes.toString().padStart(2, "0"),
    seconds: seconds < 0 ? "00" : seconds.toString().padStart(2, "0"),
  };
};
