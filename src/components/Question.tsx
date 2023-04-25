import { useState } from 'react';
import parse from 'html-react-parser';
import Answer from './Answer';

interface QuestionProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  quizDone: boolean;
}

const Question = ({
  question,
  answers,
  correctAnswer,
  quizDone,
}: QuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleSelectedAnswer = (ans: string) => {
    setSelectedAnswer(ans);
  };

  const answersComponent = answers.map((ans, i) => (
    <Answer
      answer={ans}
      key={i}
      selected={selectedAnswer == ans}
      handleSelectedAnswer={() => handleSelectedAnswer(ans)}
      quizDone={quizDone}
      correct={ans == correctAnswer}
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
