import React from "react";
import {ReactComponent as YellowBlob} from "../assets/yellow_blob.svg";
import {ReactComponent as BlueBlob} from "../assets/blue_blob.svg";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-yellow-blob">
        <YellowBlob />
      </div>
      <h1 className="intro-title">Quizzical</h1>
      <h2 className="intro-desc">Some description if needed</h2>
      <button className="intro-btn" type="button">
        Start quiz
      </button>
      <div className="intro-blue-blob">
        <BlueBlob />
      </div>
    </div>
  );
}
