/* eslint-disable react/jsx-no-bind */
import React from "react";
import Intro from "./Components/Intro";
import Quiz from "./Components/Quiz";
import "./style.css";

export default function App() {
  const [isIntro, setIsIntro] = React.useState(true);

  function startQuiz() {
    setIsIntro((prevState) => !prevState);
  }

  return (
    <main>
      {isIntro ? <Intro startQuiz={startQuiz}/> : <Quiz />}
    </main>
  );
}
