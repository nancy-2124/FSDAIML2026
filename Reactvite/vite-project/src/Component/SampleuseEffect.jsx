import React, { useEffect } from 'react'
import { useState } from 'react';

function SampleuseEffect() {
  const[counter,setCounter]=useState(0);
  useEffect(()=>{
    //console.log("Hey ... using useEffect")})
    console.log("Counter="+counter)})

    function setCount(){
      setCounter(counter+5);
    }
  return (
    <div>
      <h2 style={{color:'red'}}> SampleUseEffect</h2>
      <h1>Counter Value={counter}</h1>
      <button onClick={setCount}>Counter</button>

    </div>
  )
}
export default SampleuseEffect