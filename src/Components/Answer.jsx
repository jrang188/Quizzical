import React from "react";

export default function Answer(props) {
  return (
    <button type="button" className="quiz-answer">
      {props.answer}
    </button>
  );
}
