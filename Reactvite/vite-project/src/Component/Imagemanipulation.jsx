import React from 'react'
import {useState} from 'react'
import cat from '../images/kitten.jpeg';
function Imagemanipulation() {
    const[catHeight, setCatHeight]=useState(200);
    const[catWidth, setCatWidth]=useState(200);
    const[catAngle,setCatAngle]=useState(60);
    const[left,setleft]=useState(20);

    
    function increaseHeight(){
        setCatHeight(catHeight+10);
    }
    function increaseWidth(){
        setCatWidth(catWidth+10);
    }
    function setAngle(){
        setCatAngle(catAngle+30);
    }
    function moveright(){
        setleft(left+20);
    }
    function moveleft(){
        setleft(left-20);
    }
  return (
    <div>
      <h2 style={{color:'red', backgroundColor:'black'}}>Imagemanipulation</h2>
      <div style={{border:'2px solid red',height:'400px', width:'400px', marginLeft:`${left}px`}}>
      <img src={cat} height={catHeight} width={catWidth} style={{transform:`rotate(${catAngle}deg)`}}></img>
    </div>
    <div>
        <button onClick={increaseHeight}>enhanceHeight</button>
        <button onClick={increaseWidth}>enhanceWidth</button> 
        <button onClick={setAngle}>enhanceangle</button>
        <button onClick={moveright}>Right</button>
        <button onClick={moveleft}>Left</button>
    </div>
    </div>
  )
}
export default Imagemanipulation