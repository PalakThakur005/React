import React from 'react'
import { useState } from 'react';

function Counter() {

  const [count, setCount] = useState(0);

  

 const increase=()=>{
  setCount(count+1);
 }
 
const decrease=()=>{
  setCount(count-1);
 }

const reset= ()=>{
  setCount(0);
 }
  return (
    <div>
      
      <p style={{ color: 'darkblue', fontSize: '20px' }}>Counter:{count}</p>
      <div style={{ display: 'flex',
    gap: '12px',
     }}>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease} >Decrement</button>
      <button onClick={reset}>Reset </button>
      </div>
      </div>
   
  )
}

export default Counter;
