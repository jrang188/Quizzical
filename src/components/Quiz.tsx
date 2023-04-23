import { useState, useEffect } from 'react';
import Question from './Question';
import axios from 'axios';

interface DataProps {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const Quiz = () => {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const client = axios.create({
      baseURL: 'https://opentdb.com/api.php',
    });

    const getQuestions = async () => {
      const res = await client.get('?amount=5');
      setData(res.data?.results);
    };
    getQuestions();
  },[]);

  const questions = data.map((q, i) => {
    const answers = [q.correct_answer, ...q.incorrect_answers];
    return <Question key={i} question={q.question} answers={answers} corrrectAnswer={q.correct_answer}/>;
  });

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
};

export default Quiz;