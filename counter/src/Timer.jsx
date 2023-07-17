import React,{useState}from 'react'

function Timer() {

 const[count,setCount]=useState(0);

 function increase(){
    setCount(count+1);
  }
  function decrease(){
    if(count>0)
    setCount(count-1);
  }

  function reset(){
    setCount(0);
  }

  

  return (
    <div>
        <h1>Counter</h1>
         {count}
         <button onClick={()=>increase()}>increase</button>
     
      <button onClick={()=>decrease()}>decrease</button>
      <button onClick={()=>reset()}>reset</button>


    </div>
  )
  
}

export default Timer