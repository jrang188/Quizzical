import Question from './Question';
import data from '../data.json';

export default function Quiz() {
  const questions = data.results.map((q) => {
    const answers = [q.correct_answer, ...q.incorrect_answers];
    return <Question question={q.question} answers={answers} />;
  });

  // console.log(data.results[0].question);

  return (
    <div className="w-5/6">
      {questions}
      <div className="flex flex-row items-center justify-center mt-5">
        <button
          type="button"
          className="w-32 h-9 bg-[#4D5B9E] rounded-xl font-inter font-semibold text-sm text-[#F5F7FB]"
        >
          Check Answers
        </button>
      </div>
    </div>
  );
}
