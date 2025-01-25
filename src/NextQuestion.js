function NextQuestion({ dispatch, answer }) {
  if (answer === null) return null;
  return (
    <div>
      <p>timer</p>
      <button
        onClick={() => dispatch({ type: "nextQuestion" })}
        className="btn btn-ui"
      >
        Next
      </button>
    </div>
  );
}

export default NextQuestion;
