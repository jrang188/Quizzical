import { useState } from 'react';
import YellowBlob from './assets/yellow_blob.svg';
import BlueBlob from './assets/blue_blob.svg';
import Intro from './components/Intro';
import Quiz from './components/Quiz';

export default function App() {
  const [isIntro, setIsIntro] = useState(false);

  const startQuiz = () => {
    setIsIntro((prevState) => !prevState);
  };

  return (
    <main className="flex min-h-screen bg-[#F5F7FB]">
      <img src={YellowBlob} alt="Yellow Blob" className="fixed top-0 right-0" />
      <div className="container mx-auto flex flex-col items-center justify-center ">
        {isIntro ? <Intro startQuiz={startQuiz} /> : <Quiz />}
      </div>
      <img src={BlueBlob} alt="Blue Blob" className="fixed bottom-0 left-0" />
    </main>
  );
}
