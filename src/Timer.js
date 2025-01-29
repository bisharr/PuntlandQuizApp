import { useEffect } from "react";

function Timer({ timeRemaining, dispatch }) {
  const minutes = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "timer" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className={`timer ${timeRemaining <= 30 ? "timeFinish" : ""}`}>
      <p>{`${minutes <= 9 ? `0${minutes}` : minutes}:${
        timeRemaining <= 9 ? `0${secs}` : secs
      }`}</p>
    </div>
  );
}

export default Timer;
