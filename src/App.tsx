import YellowBlob from "./assets/yellow_blob.svg";
import BlueBlob from "./assets/blue_blob.svg";
import Intro from "./components/Intro";
import Quiz from "./components/Quiz";
import { useAppSelector } from "./app/hooks.ts";

export default function App() {
  // const [isIntro, setIsIntro] = useState(true);

  // const startQuiz = () => {
  //   setIsIntro((prevState) => !prevState);
  // };

  const isIntro = useAppSelector((state) => state.start.atStart);

  return (
    <main className="flex min-h-screen bg-[#F5F7FB]">
      <img
        src={YellowBlob}
        alt="Yellow Blob"
        className="fixed z-0 top-0 right-0"
      />
      <div className="container mx-auto py-16 flex flex-col items-center justify-center z-50">
        {isIntro ? <Intro /> : <Quiz />}
      </div>
      <img
        src={BlueBlob}
        alt="Blue Blob"
        className="fixed z-0 bottom-0 left-0"
      />
    </main>
  );
}
