import parse from 'html-react-parser';
import { useState } from 'react';

interface AnswerProps {
  answer: string;
}

const Answer = ({ answer }: AnswerProps) => {
  const [selected, setSelected] = useState(false);

  return (
    <button
      type="button"
      className={`rounded-md min-w-[66px] px-1.5 ${
        selected ? 'bg-[#D6DBF5]' : 'border-[#4D5B9E] border-solid border'
      }`}
    >
      <div className="font-inter font-medium text-sm text-[#293264]">
        {parse(answer)}
      </div>
    </button>
  );
};

export default Answer;
