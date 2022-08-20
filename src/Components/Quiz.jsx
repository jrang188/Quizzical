import React from "react";
import { ReactComponent as YellowBlob } from "../assets/yellow_blob.svg";
import { ReactComponent as BlueBlob } from "../assets/blue_blob.svg";

export default function Quiz() {
  return (
    <div className="quiz">
      <div className="intro-yellow-blob">
        <YellowBlob />
      </div>
      <div className="quiz-container">
        <h2 className="quiz-question">How would one say goodbye in spanish?</h2>
        <div className="quiz-answers">
          <button type="button" className="quiz-answer quiz-selected">
            Adiós
          </button>
          <button type="button" className="quiz-answer">
            Hola
          </button>
          <button type="button" className="quiz-answer">
            Au Revoir
          </button>
          <button type="button" className="quiz-answer">
            Salir
          </button>
        </div>
      </div>
      <button type="button" className="quiz-submit">
        Check Answers
      </button>
      <div className="intro-blue-blob">
        <BlueBlob />
      </div>
    </div>
  );
}
