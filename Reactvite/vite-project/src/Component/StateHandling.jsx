
import React, {useState} from 'react'

export default function StateHandling() {
    const [counter,setCounter]=useState(20);
    const [red,setRed]=useState(0);
    const [green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);
    function increment(){
        setCounter(counter+10);
    }
    function changeBGColor(){
        setRed(Math.random()*255);
        setGreen(Math.random()*255);
        setBlue(Math.random()*255);
    }
  return (
    <div style={{border:'5px solid green',height:'300px',width:'300px',backgroundColor:`rgb(${red},${green},${blue})`}}>
    <h2 style={{color:'blue'}}>Counter App</h2>
      <h3>Counter={counter}</h3>
      <button onClick={increment}>increaseCounter</button>
      <button onClick={()=>setCounter(counter-5)}>decreaseCounter</button>
      <button onClick={changeBGColor}>changeBGColor</button>
    </div>
  )
}
