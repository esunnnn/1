import React, {useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function useStateHook() {
  const router = useRouter();
  const [name, setName] = useState("");
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white ">
       <button
                          className="  border border-black m-3 p-2 text-black " 
                          onClick={() => {router.push("/"); }}
                          aria-label="Go push"
                        >
                         Back
                          
                        </button>
     <p className="mr-5 text-black">Ner:</p>
     <input type="text" className="border border-black text-black rounded p-2 " size="10" onChange={(e)=>setName(e.target.value)}/>
     <p className="ml-3 text-black">hi 11v, cool</p>
     {name==("") ? (<><p className="text-black ml-2">Suragch</p></>): <p className="text-pink-500 ml-2">{name}</p>}
    </div>
  );
}