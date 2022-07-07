import { StyledTimerCount } from "./TimerCount.styles";
import { Typography } from "reusables/Typography";

export const TimerCount = ({ hours, minutes, seconds }) => {
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
