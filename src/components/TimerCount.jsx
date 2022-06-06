export const TimerCount = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <h1>
        {days}:{hours}:{minutes}:{seconds}
      </h1>
    </div>
  );
};
