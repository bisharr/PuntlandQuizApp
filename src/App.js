import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./Main";
import StartScreen from "./components/StartScreen";
import Loader from "./components/Loader";
import Questions from "./components/Questions";
import Error from "./components/Error";
import NextQuestion from "./NextQuestion";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";

const initialState = {
  questions: [],
  // loading, active, start,finish,error
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "start":
      return { ...state, status: "active" };
    case "error":
      return { ...state, status: "error" };
    case "newAnswers":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctAnswer
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return { ...state, status: "finished" };
    case "restart":
      return { ...state, status: "ready", answer: null, index: 0, points: 0 };

    default:
      throw new Error("Unkown error");
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { index, status, questions, answer, points } = state;
  const questionsLength = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:9000/question");
        const data = await res.json();
        if (!res.ok) throw new Error("failed to fetch questions");
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "error" });
      }
    }
    fetchQuestions();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}

        {status === "ready" && (
          <StartScreen questionsLength={questionsLength} dispatch={dispatch} />
        )}
        {status === "error" && <Error />}
        {status === "active" && (
          <>
            <Progress
              points={points}
              question={questions}
              numQuestions={questions.length}
              index={index}
              answer={answer}
              totalPoints={totalPoints}
            />
            <Questions
              question={questions[index]}
              numQuestions={questions}
              dispatch={dispatch}
              answer={answer}
              index={index}
              points={points}
            />
            <NextQuestion
              dispatch={dispatch}
              answer={answer}
              numQuestions={questions.length}
              index={index}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            totalPoints={totalPoints}
            points={points}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
