import parse from 'html-react-parser';
import Answer from './Answer';

interface QuestionProps {
  question: string;
  answers: string[];
  corrrectAnswer: string;
}

const shuffleArray = (array: string[]) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const Question = ({ question, answers }: QuestionProps) => {
  const shuffledAnswers = answers.length == 2 ? shuffleArray(answers) : answers;

  const answersComponent = shuffledAnswers.map((ans, i) => (
    <Answer answer={ans} key={i} />
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
