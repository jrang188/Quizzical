import React from "react";
import Question from "./Question";
import { ReactComponent as YellowBlob } from "../assets/yellow_blob.svg";
import { ReactComponent as BlueBlob } from "../assets/blue_blob.svg";
import data from "../data.json";

export default function Quiz() {
  const questions = data.results.map((q) => {
    const answers = [q.correct_answer, ...q.incorrect_answers];
    return <Question question={q.question} answers={answers} />;
  });

  return (
    <div className="quiz">
      <div className="yellow-blob quiz-yellow-blob quiz-blobs">
        <YellowBlob />
      </div>
      {questions}
      <div className="center">
        <button type="button" className="quiz-submit">
          Check Answers
        </button>
      </div>
      <div className="blue-blob quiz-blue-blob quiz-blobs">
        <BlueBlob />
      </div>
    </div>
  );
}
