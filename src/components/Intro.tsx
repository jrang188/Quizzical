import { Select } from "@chakra-ui/react";
import { useAppDispatch } from "../app/hooks";
import { setCategory, setDifficulty, setType } from "../app/optionsSlice";
interface Category {
  id: number;
  name: string;
}

interface IntroProps {
  startQuiz: () => void;
}

const categories: Category[] = [
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Entertainment: Books" },
  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },
  { id: 13, name: "Entertainment: Musicals & Theatres" },
  { id: 14, name: "Entertainment: Television" },
  { id: 15, name: "Entertainment: Video Games" },
  { id: 16, name: "Entertainment: Board Games" },
  { id: 17, name: "Science & Nature" },
  { id: 18, name: "Science: Computers" },
  { id: 19, name: "Science: Mathematics" },
  { id: 20, name: "Mythology" },
  { id: 21, name: "Sports" },
  { id: 22, name: "Geography" },
  { id: 23, name: "History" },
  { id: 24, name: "Politics" },
  { id: 25, name: "Art" },
  { id: 26, name: "Celebrities" },
  { id: 27, name: "Animals" },
  { id: 28, name: "Vehicles" },
  { id: 29, name: "Entertainment: Comics" },
  { id: 30, name: "Science: Gadgets" },
  { id: 31, name: "Entertainment: Japanese Anime & Manga" },
  { id: 32, name: "Entertainment: Cartoon & Animations" },
];

const Intro = ({ startQuiz }: IntroProps) => {
  const dispatch = useAppDispatch();

  const categoryOptions = categories.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  return (
    <div className="flex flex-col justify-center items-center text-[#293264] gap-y-4">
      <h1 className="font-karla font-bold text-5xl md:text-6xl">Quizzical</h1>
      <h2 className="font-inter font-normal text-2xl md:text-3xl">
        Leave blank for random
      </h2>
      <div className="flex flex-col justify-center items-center gap-y-2">
        <Select
          variant="outline"
          size="md"
          placeholder="Category"
          onChange={(s) => dispatch(setCategory(s.target.value))}
        >
          {categoryOptions.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        <Select
          variant="outline"
          size="md"
          placeholder="Difficulty"
          onChange={(s) => dispatch(setDifficulty(s.target.value))}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
        <Select
          variant="outline"
          size="md"
          placeholder="Type"
          onChange={(s) => dispatch(setType(s.target.value))}
        >
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </Select>
      </div>
      <button
        className="w-48 h-16 bg-[#4D5B9E] rounded-2xl font-inter font-medium md:text-2xl text-[#F5F7FB]"
        type="button"
        onClick={startQuiz}
      >
        Start quiz
      </button>
    </div>
  );
};

export default Intro;
