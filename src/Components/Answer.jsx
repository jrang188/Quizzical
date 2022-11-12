import React from "react";

export default function Answer({answer}) {
  return (
    <button type="button" className="quiz-answer">
      {answer}
    </button>
  );
}
