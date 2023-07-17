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
    <div className="app">
<h1>Counter</h1>
<div className="counter-value">
  <strong>{count}</strong>
</div>
<div className="buttons">
  <div>
  <button onClick={()=>increase()}>increase</button>
  </div>
  <div>
  <button onClick={()=>decrease()}>decrease</button>
  </div>
  <div>
  <button onClick={()=>reset()}>reset</button>
  </div>
</div>
</div>
  
  )
  
}

export default Timer


