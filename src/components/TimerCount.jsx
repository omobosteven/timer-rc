import { StyledTimerCount } from "./TimerCount.styles";
import { Typography } from "reusables/Typography";

export const TimerCount = ({ hours, minutes, seconds }) => {
  return (
    <StyledTimerCount>
      <Typography component="p">
        {hours}:{minutes}:{seconds}
      </Typography>
    </StyledTimerCount>
  );
};
