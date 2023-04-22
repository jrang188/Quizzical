import React from "react";
import { decode } from "html-entities";
import Answer from "./Answer";

export default function Question(props) {
  const answers = props.answers.map((ans) => <Answer answer={decode(ans)} />);

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">{decode(props.question)}</h2>
      <div className="quiz-answers">{answers}</div>
    </div>
  );
}
