import Image from "next/image";
import { useRouter } from "next/router";

export default function Task6() {
  const router = useRouter();
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center">
      <h1 className="text-5xl font-bold text-black mt-20">11 v yesui</h1>
      <div className="w-full max-w-4xl h-auto bg-gray-300 shadow-2xl mt-10 rounded-3xl flex flex-wrap justify-around items-center p-4">
        <div className="mb-4 sm:mb-0">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("lab1"); }}
            aria-label="Go to Hiceel1"
          >
           1
          </button>
        </div>
        <div className="mb-4 sm:mb-0">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("2"); }}
            aria-label="Go to Hiceel2"
          >
            2
          </button>
        </div>
        <div className="mb-4 sm:mb-0">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("3"); }}
            aria-label="Go to Hiceel3"
          >
           3
          </button>
        </div>
        <div className="mb-4 sm:mb-0">
          <button
            className="bg-white shadow-lg w-full sm:w-[150px] h-[50px] pl-1 rounded-xl text-gray-700 font-semibold"
            onClick={() => { router.push("5"); }}
            aria-label="Go to Hiceel4"
          >
            4
          </button>
        </div>
      </div>
    </div>
  );
}