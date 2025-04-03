import React, {useState} from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const useStateTask=() =>{
    const [color, setColor]=useState("white");
    const router = useRouter();
    return (
      
        <div className={` h-screen  w-screen bg-${color}-800`}>
          <button
                          className="  border border-black bg-white m-3 p-2 text-black " 
                          onClick={() => { router.push("/"); }}
                          aria-label="Go push"
                        >
                         Back
                          
                        </button>
          {color == "red" ? (
            <> 
            <button
              className="border bg-red-800 h-1/2 w-[200px]"
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button className="border bg-slate-500 h-1/2 w-[200px]" onClick={() => setColor("white")}>
            Clear
            </button>
             </>
          ) : color == "green" ? (
            <><button
              className="border bg-green-800 w-[200px] h-1/2"
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button className="border bg-slate-500 w-[200px] h-1/2" onClick={() => setColor("white")}>
            Clear
            </button></>
          ):color == "blue" ? (
            <><button
              className="border bg-blue-800 w-[200px] h-1/2"
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button className="border bg-slate-500  w-[200px] h-1/2" onClick={() => setColor("white")}>
            clear
            </button></>
          ):(
            <><button
                className="border bg-red-800 w-[200px] h-1/2"
                onClick={() => setColor("red")}
              >
                Red
              </button><button
                className="border bg-green-800 w-[200px] h-1/2"
                onClick={() => setColor("green")}
              >
                 Green
                </button><button
                  className="border bg-blue-800 w-[200px] h-1/2"
                  onClick={() => setColor("blue")}
                >
                  Blue
                </button></>
          )}
           
        </div>
      );
    };
export default useStateTask;