interface AnswerProps {
  answer: string;
}

const Answer = ({ answer }: AnswerProps) => {
  return (
    <button
      type="button"
      className="border-[#4D5B9E] border-solid border rounded-md min-w-[66px] px-1.5"
    >
      <div className="font-inter font-medium text-sm text-[#293264]">
        {answer}
      </div>
    </button>
  );
};

export default Answer;
