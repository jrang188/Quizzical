interface SubmitProps {
  startQuiz: () => void;
  checkAnswers: () => void;
  quizDone: boolean;
}

const Submit = ({ quizDone, startQuiz, checkAnswers }: SubmitProps) => {
  return (
    <div className="mt-5">
      {quizDone ? (
        <div className="flex flex-col items-center justify-center gap-y-2">
          <h2 className="font-inter font-bold text-lg text-[#293264]">
            You scored 3/5 correct answers!
          </h2>
          <button
            type="button"
            className="w-32 h-9 bg-[#4D5B9E] rounded-xl font-inter font-semibold text-sm text-[#F5F7FB]"
            onClick={startQuiz}
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <button
            type="button"
            className="w-32 h-9 bg-[#4D5B9E] rounded-xl font-inter font-semibold text-sm text-[#F5F7FB]"
            onClick={checkAnswers}
          >
            Check Answers
          </button>
        </div>
      )}
    </div>
  );
};

export default Submit;
