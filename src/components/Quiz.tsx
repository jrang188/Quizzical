import { useState, useEffect } from 'react';
import Question from './Question';
import Submit from './Submit';
import axios from 'axios';

interface DataProps {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
interface QuizProps {
  startQuiz: () => void;
}

const Quiz = ({ startQuiz }: QuizProps) => {
  const [quizDone, setQuizDone] = useState(false);

  const checkAnswers = () => {
    setQuizDone((prevState) => !prevState);
  };

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
  }, []);

  const questions = data.map((q, i) => {
    const answers = [q.correct_answer, ...q.incorrect_answers];
    return (
      <Question
        key={i}
        question={q.question}
        answers={answers}
        corrrectAnswer={q.correct_answer}
      />
    );
  });

  return (
    <div className="w-5/6">
      {questions}
      <Submit
        quizDone={quizDone}
        startQuiz={startQuiz}
        checkAnswers={checkAnswers}
      />
    </div>
  );
};

export default Quiz;