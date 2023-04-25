import { useState } from 'react';
import parse from 'html-react-parser';
import Answer from './Answer';
import shuffleArray from '../functions/shuffleArray';

interface QuestionProps {
  question: string;
  answers: string[];
  correctAnswer: string;
}

const Question = ({ question, answers }: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSelectedAnswer = (ans: string) => {
    setSelectedAnswer(ans);
  };

  const shuffledAnswers = answers.length == 2 ? shuffleArray(answers) : answers;

  const answersComponent = shuffledAnswers.map((ans, i) => (
    <Answer
      answer={ans}
      key={i}
      selected={selectedAnswer == ans}
      handleSelectedAnswer={() => handleSelectedAnswer(ans)}
    />
  ));

  return (
    <>
      <h2 className="font-karla font-bold text-base leading-tight mt-0 mb-1 text-[#293264]">
        {parse(question)}
      </h2>
      <div className="flex flex-wrap gap-2 mt-0 mb-2">{answersComponent}</div>
      <div className="border-[#DBDEF0] border-solid border-[0.05rem] my-1" />
    </>
  );
};

export default Question;
