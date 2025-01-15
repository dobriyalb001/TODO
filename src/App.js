
import InputFun from './input';
import Inputlist from './inputlist';
import { useState } from 'react';
import './App.css';
import ListItem from './ListItem';


// let user={
//   name:"pancham",
//   age:14,
//   email:



// }

function App() {

const [arr,setArr]=useState([]);

const delArr=(index)=>{
  let arrDdel=[...arr];
  arrDdel.splice(index,1)
  setArr(arrDdel);
}

 const addItem=(Input,mail)=>{
  let arrNew=[...arr]
  arrNew.push( {name:Input,email:mail}) ;

  setArr(arrNew);
}

const edit=(index,details)=>{
  let change=[...arr];
  change[index]=details;
  setArr(change);



}

  return (
    <div className="App">
      <InputFun addI={addItem} />
      <Inputlist arrN={arr} delA={delArr} edit={edit}/> 
      {/* <ListItem delArr={delArr} arr={arr}/> */}
    </div>



  );
}

export default App;


// function App() {


//   const[tot,setTot]=useState(0);
//   const[inp1,setINP1]=useState(0);
//   const[inp2,setINP2]=useState(0);
  
//   const captureInp1=(e)=>{
//     setINP1(Number(e.target.value));
//   }

//   const captureInp2=(e)=>{
//     setINP2(Number(e.target.value));
//   }

//   return (
//     <div>
//         <label for="inp1">Enter digit 1</label>
//         <input type="number" placeholder="enter the req value" id="inp1" onChange={captureInp1} value={inp1}/>

//         <label for="inp2">Enter digit 1</label>
//         <input type="number" placeholder="enter the req value" id="inp2" onChange={captureInp2} value={inp2}/>

//         <div>
//         <button onClick={()=>setTot(inp1+inp2)}>Add</button>
//         <button onClick={()=>setTot(inp1-inp2)}>sub</button>
//         <button onClick={()=>setTot(inp1*inp2)}>mul</button>
//         <button onClick={()=>setTot(inp1%inp2)}>rem</button>
//         </div>

//         <div>Totoal is {tot}</div>0
//         {/* <button onClick={()=>{setTot(0); setINP1(0); setINP2(0);}}>reset</button> */}
//         <button onClick={()=>{setINP1(0); setINP2(0);setTot(0);}}>reset</button>
        


//     </div>
//   );
// }

// export default App