import Options from "../Options";

function Questions({ question, dispatch, answer, index }) {
  const indexNum = `${index < 10 ? `0${index + 1}` : index + 1}`;

  return (
    <div>
      <h4>
        {indexNum}:{question.question}
      </h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Questions;
