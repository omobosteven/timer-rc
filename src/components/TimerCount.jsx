import { StyledTimerCount } from "./TimerCount.styles";
import { Typography } from "reusables/Typography";

export const TimerCount = ({ days, hours, minutes, seconds }) => {
  return (
    <StyledTimerCount>
      <Typography component="p">
        {days}:{hours}:{minutes}:{seconds}
      </Typography>
    </StyledTimerCount>
  );
};
