function StartScreen({ questionsLength, dispatch, secs }) {
  return (
    <div className="start">
      <h2>Welcome a Quick Quiz</h2>
      <h3>{questionsLength} question to test your Puntland State Knowledge</h3>
      <p className="rules">
        <strong>Rules: </strong>
        You have one try with {secs / 60} minutes and every correct answer is 10
        Points
      </p>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        let's Start
      </button>
    </div>
  );
}

export default StartScreen;
