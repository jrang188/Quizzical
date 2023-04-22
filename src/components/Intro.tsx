export default function Intro() {
  return (
    <div className="flex flex-col justify-center items-center text-[#293264] gap-y-4">
      <h1 className="font-karla font-bold text-5xl ">
        Quizzical
      </h1>
      <h2 className="font-inter font-normal text-2xl">Some description if needed</h2>
      <button className="w-48 h-16 bg-[#4D5B9E] rounded-2xl font-inter font-medium text-[#F5F7FB]" type="button">
        Start quiz
      </button>
    </div>
  );
}
