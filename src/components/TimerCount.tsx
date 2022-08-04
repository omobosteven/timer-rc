import { Typography } from "reusables/Typography";
import { styled } from "@mui/material";

interface TimerCountProps {
  hours: string;
  minutes: string;
  seconds: string;
}

export const TimerCount = ({ hours, minutes, seconds }: TimerCountProps) => {
  return (
    <StyledTimerCount>
      <Typography component="p" className="counter">
        {hours !== "00" && (
          <>
            {hours}
            <span className="separator">:</span>
          </>
        )}
        {minutes}
        <span className="separator">:</span>
        {seconds}
      </Typography>
    </StyledTimerCount>
  );
};

const StyledTimerCount = styled("div")({
  gridArea: "time-count",
  alignSelf: "center",

  "& .counter": {
    fontSize: "20vw",
    color: "#fff",
    transform: "scale(1.25)",
    lineHeight: "1",
    marginTop: "-94px",
    fontWeight: "500",
  },

  "& .separator": {
    verticalAlign: "5%",
  },
});
