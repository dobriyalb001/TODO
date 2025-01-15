
import { use, useState } from "react";

function InputFun(props) {

    const[str,setStr]=useState("");
    const[mail,setMail]=useState("");

    const captureInp=(e)=>{
        setStr(e.target.value);
    }


    const captureEmail=(e)=>{
        setMail(e.target.value);
    }
    const clickHandler=(e)=>{
        
        props.addI(str,mail);
        setStr("");
        setMail("");
    }

    
  return(
    <div>
        {/* value k baar me pdna */}
        <lable for= "inp"></lable>
        <input type="text" id="inp" value={str} placeholder="Enter your todo" onChange={captureInp}/>
        <input type="email" id="email" value={mail} placeholder="Enter your email" onChange={captureEmail}/>
        {/* <input type="text" id="inp" value={str} placeholder="Enter your todo"/> */}
            <button onClick={clickHandler} >
                Click 
            </button>
    </div>
 )
}
export default InputFun;





        
        