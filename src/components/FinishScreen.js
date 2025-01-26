function FinishScreen({ dispatch, totalPoints, points }) {
  const Percentage = (points / totalPoints) * 100;
  return (
    <div className="">
      <p className="result">
        You Scored {points} out of
        <strong> {totalPoints} </strong>
        Points ({Math.ceil(Percentage)}%)
      </p>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishScreen;
