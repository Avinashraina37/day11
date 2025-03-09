import { useState } from 'react'
function App() {
let[val1,setVal1]= useState(0);

let[val2,setVal2]= useState(0);

let[res,setRes]= useState(0);

return(


  <div>
  <input type="number"
   value={val1}
   onChange={(avinash)=>setVal1(Number(avinash.target.value))}
   />
  <input type="number"
   value={val2}
   onChange={(avinash)=>setVal2(Number(avinash.target.value))}
   />
   <button onClick={()=>setRes(val1+val2)}>Add</button>
   <p>Result: {res}</p>
   </div> 
   
)
}
   export default App
