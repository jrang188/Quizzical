import { useState, useEffect, useCallback } from 'react';
import { Spinner } from '@chakra-ui/react';
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
  quizOptions: { category: string; difficulty: string; type: string };
  handleQuizOptionsChange: (key: string, value: string) => void;
}

const Quiz = ({
  startQuiz,
  quizOptions,
  handleQuizOptionsChange,
}: QuizProps) => {
  const [quizDone, setQuizDone] = useState(false);
  const [data, setData] = useState<DataProps[]>([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  const checkAnswers = () => {
    setQuizDone((prevState) => !prevState);
  };

  const increaseScore = useCallback(() => {
    setScore((score) => score + 1);
  }, []);

  const resetQuiz = () => {
    startQuiz();
    setScore(() => 0);
    handleQuizOptionsChange('category', '');
    handleQuizOptionsChange('difficulty', '');
    handleQuizOptionsChange('type', '');
  };

  useEffect(() => {
    let alreadyCalled = false;
    const client = axios.create({
      baseURL: 'https://opentdb.com/api.php',
    });

    const getQuestions = async () => {
      const res = await client.get('', {
        params: {
          amount: 5,
          ...quizOptions,
        },
      });
      if (!alreadyCalled) {
        setData(res.data?.results);
        setLoading((loading) => !loading);
      }
    };
    getQuestions().catch((error) => console.log(error));

    return () => {
      alreadyCalled = true;
    };
  }, []);

  const questions = data.map((q, i) => {
    const answers = [q.correct_answer, ...q.incorrect_answers];
    return (
      <Question
        key={i}
        question={q.question}
        answers={answers}
        correctAnswer={q.correct_answer}
        quizDone={quizDone}
        increaseScore={increaseScore}
      />
    );
  });

  return (
    <div className="w-5/6">
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </div>
      ) : (
        <>
          {questions}
          <Submit
            quizDone={quizDone}
            resetQuiz={resetQuiz}
            checkAnswers={checkAnswers}
            score={score}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;
