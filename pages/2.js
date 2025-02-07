import React, {useState} from "react"; 

const useStateTask=() =>{
    const [color, setColor]=useState("");
    return(
        <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
            <p> ungu solih</p>
            <div>
            <button className="border bg-red-800 py-4 px-6" onClick={()=>{setColor("red");}}>ul</button>
            {color=="red" && <div className="bg-red-800"></div>  }
            </div>
            <div>
            <button className="border bg-blue-800 py-4 px-6" onClick={()=>{setColor("blue");}}>ol</button>
            {color=="blue" && <div className="bg-blue-800"></div>  }
            </div>
            <div>
            <button className="border bg-green-800 py-4 px-6" onClick={()=>{setColor("red");}}>al</button>
            {color=="green" && <div className="bg-green-800"></div>  }
            </div>
        </div>
    );
};
export default useStateTask;    