function Progress({
  points,
  numQuestions,
  index,
  question,
  answer,
  totalPoints,
}) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Questions <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        Points {points}/{totalPoints}
      </p>
    </header>
  );
}

export default Progress;
