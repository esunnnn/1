import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState("");
  return (
    <div>
      <button
        className="border border-black m-3"
        onClick={() => setCount("ysui")}
      >
        Enen Deer Dar
      </button>
      <button
        className="border border-black m-3"
        onClick={() => setCount("")}
      >
        Enen Deer Bas Dar
      </button>
      <p>  {count}</p>
      
     
    </div>
  );
}
