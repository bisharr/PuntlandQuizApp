function Progress({ points, numQuestions, index, question, answer }) {
  console.log(question);
  const totalPoints = question.reduce((prev, cur) => prev + cur.points, 0);
  console.log(totalPoints);

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
