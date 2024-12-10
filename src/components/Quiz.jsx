import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState, useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } = useContext(GameStateContext);

  // Function to handle choosing an option
  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  // Function to proceed to the next question
  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen(""); // Reset the chosen option
  };

  // Function to finish the quiz
  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          className={optionChosen === "optionA" ? "selected" : ""}
          onClick={() => chooseOption("optionA")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={optionChosen === "optionB" ? "selected" : ""}
          onClick={() => chooseOption("optionB")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={optionChosen === "optionC" ? "selected" : ""}
          onClick={() => chooseOption("optionC")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={optionChosen === "optionD" ? "selected" : ""}
          onClick={() => chooseOption("optionD")}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="finishQuiz">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
