import Answer from './Answer';

interface QuestionProps {
  question: string;
  answers: string[];
}

const Question = ({ question, answers }: QuestionProps) => {
  const answersComponent = answers.map((ans, i) => <Answer answer={ans} key={i} />);

  return (
    <>
      <h2 className="font-karla font-bold text-base leading-tight mt-0 mb-1 text-[#293264]">
        {question}
      </h2>
      <div className="flex flex-wrap gap-2 mt-0 mb-2">{answersComponent}</div>
      <div className="border-[#DBDEF0] border-solid border-[0.05rem] my-1" />
    </>
  );
};

export default Question;
