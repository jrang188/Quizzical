import React from "react";
import { ReactComponent as YellowBlob } from "../assets/yellow_blob.svg";
import { ReactComponent as BlueBlob } from "../assets/blue_blob.svg";

export default function Quiz() {
  return (
    <div className="quiz">
      <div className="yellow-blob quiz-yellow-blob quiz-blobs">
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
      <div className="quiz-container">
        <h2 className="quiz-question">Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?</h2>
        <div className="quiz-answers">
          <button type="button" className="quiz-answer quiz-selected">
            Cabbage Patch Kids
          </button>
          <button type="button" className="quiz-answer">
            Transformers
          </button>
          <button type="button" className="quiz-answer">
            Care Bears
          </button>
          <button type="button" className="quiz-answer">
            Rubik's Cube
          </button>
        </div>
      </div>
      <div className="quiz-container">
        <h2 className="quiz-question">What is the hottest planet in our Solar System?</h2>
        <div className="quiz-answers">
          <button type="button" className="quiz-answer quiz-selected">
            Mercury
          </button>
          <button type="button" className="quiz-answer">
            Venus
          </button>
          <button type="button" className="quiz-answer">
            Mars
          </button>
          <button type="button" className="quiz-answer">
            Saturn
          </button>
        </div>
      </div>
      <div className="quiz-container">
        <h2 className="quiz-question">In which country was the caesar salad invented?</h2>
        <div className="quiz-answers">
          <button type="button" className="quiz-answer quiz-selected">
            Italy
          </button>
          <button type="button" className="quiz-answer">
            Portugal
          </button>
          <button type="button" className="quiz-answer">
            Mexico
          </button>
          <button type="button" className="quiz-answer">
            France
          </button>
        </div>
      </div>
      <div className="quiz-container">
        <h2 className="quiz-question">How Many Hearts Does An Octopus Have?</h2>
        <div className="quiz-answers">
          <button type="button" className="quiz-answer quiz-selected">
            One
          </button>
          <button type="button" className="quiz-answer">
            Two
          </button>
          <button type="button" className="quiz-answer">
            Three
          </button>
          <button type="button" className="quiz-answer">
            Four
          </button>
        </div>
      </div>
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
