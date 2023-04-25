import parse from 'html-react-parser';

interface AnswerProps {
  answer: string;
  selected: boolean;
  handleSelectedAnswer: () => void;
  correct: boolean;
  quizDone: boolean;
}

const Answer = ({
  answer,
  selected,
  correct,
  quizDone,
  handleSelectedAnswer,
}: AnswerProps) => {
  return (
    <button
      type="button"
      className={`rounded-md min-w-[66px] px-1.5 ${
        quizDone
          ? correct
            ? 'bg-[#94D7A2]'
            : selected
            ? 'bg-[#F8BCBC] opacity-50'
            : 'border-[#4D5B9E] border-solid border opacity-50'
          : selected
          ? 'bg-[#D6DBF5]'
          : 'border-[#4D5B9E] border-solid border'
      }`}
      onClick={handleSelectedAnswer}
    >
      <div className="font-inter font-medium text-sm text-[#293264]">
        {parse(answer)}
      </div>
    </button>
  );
};

export default Answer;