/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as YellowBlob } from "../assets/yellow_blob.svg";
import { ReactComponent as BlueBlob } from "../assets/blue_blob.svg";

function Intro({ startQuiz }) {
  return (
    <div className="intro">
      <div className="intro-yellow-blob">
        <YellowBlob />
      </div>
      <h1 className="intro-title">Quizzical</h1>
      <h2 className="intro-desc">Some description if needed</h2>
      <button className="intro-btn" type="button" onClick={startQuiz}>
        Start quiz
      </button>
      <div className="intro-blue-blob">
        <BlueBlob />
      </div>
    </div>
  );
}

Intro.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Intro;