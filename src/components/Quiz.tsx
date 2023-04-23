import Question from "./Question";
import data from "../data.json";

export default function Quiz() {
  const questions = data.results.map((q) => {
    const answers = [q.correct_answer, ...q.incorrect_answers];
    return <Question question={q.question} answers={answers} />;
  });

  // console.log(data.results[0].question);

  return (
    <div className="w-5/6">
      {questions}
      <div className="">
        <button type="button" className="">
          Check Answers
        </button>
      </div>
    </div>
  );
}
