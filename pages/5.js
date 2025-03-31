import React, {useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
export default function useStateHook() {
    const [count, setCount] = useState("");
    const router = useRouter();
   
    return(
        <div className="bg-white w-full h-screen text-black">
              <button
                          className="  border border-black m-3 p-2 text-black " 
                          onClick={() => { router.push("main"); }}
                          aria-label="Go push"
                        >
                         Back
                          
                        </button>
                        <div>
            <button className="border border-black m-3 p-2 text-black " onClick={() => setCount("Hello")}>enen der dar</button>
            <button className="border border-black m-3 p-2 text-black " onClick={() => setCount("")}>enen dr bas dar</button>
            <p className="ml-3">{count}</p></div>
            
            
        </div>
        
        
    )
};
