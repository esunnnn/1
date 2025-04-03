import Image from "next/image";
import { useRouter } from "next/router";

export default function Task6() {
  const router = useRouter();

  return (
    <div className="w-full h-screen bg-white flex flex-col bg-zinc-900 items-center justify-center px-4">
      <div className="w-40 h-40 sm:w-56 sm:h-56 mb-6 flex justify-center items-center">
        <Image
src="https://nhs.edu.mn/_next/static/media/ahlah.b9653a38.svg"          width={260} 
          height={60} 
          className="rounded-full border-4 border-zinc-600 shadow-xl"
        />
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-500 text-center mb-10">
        11 v yesui
      </h1>

    
    
      <div className="w-full xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mt-5 rounded-3xl flex flex-wrap justify-center items-center p-4">
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
          <button
            className="bg-zinc-600 shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-300 font-semibold text-center"
            onClick={() => {
              router.push("lab1");
            }}
            aria-label="Go to Hiceel1"
          >
            1
          </button>
        </div>
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
          <button
            className="bg-zinc-600 shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-300 font-semibold text-center"
            onClick={() => {
              router.push("2");
            }}
            aria-label="Go to Hiceel2"
          >
            2
          </button>
        </div>
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
          <button
            className="bg-zinc-600 shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-300 font-semibold text-center"
            onClick={() => {
              router.push("3");
            }}
            aria-label="Go to Hiceel3"
          >
            3
          </button>
        </div>
        <div className="mb-4 sm:mb-0 w-full sm:w-auto">
          <button
            className="bg-zinc-600 shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-300 font-semibold text-center"
            onClick={() => {
              router.push("5");
            }}
            aria-label="Go to Hiceel4"
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
}
