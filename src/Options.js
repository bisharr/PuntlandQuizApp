function Options({ question, dispatch, answer }) {
  const hasAnswer = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={hasAnswer}
          onClick={() => dispatch({ type: "newAnswers", payload: index })}
          className={`btn btn-option ${answer === index ? "answer" : ""} ${
            hasAnswer
              ? index === question.correctAnswer
                ? "correct"
                : "wrong"
              : ""
          } `}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
