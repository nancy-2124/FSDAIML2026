import React from 'react'
import pic from '../images/blue.jpeg';
function ICard(){
    return(
        <>
        <div style={{border:'10px solid red',height:'410px',width:'300px',marginLeft:'200px'}}>
            <img src={pic} height="150px" width="120px"/>
            <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
            <h2 style={{color:'red'}}>Welcome to React</h2>
            <h3 style={{color:'white'}}>Name:Nancy Pal</h3>
            <h3 style={{color:'white'}}>Roll no.:2400321530131</h3>
            <h3 style={{color:'white'}}>Branch:AIML</h3>
            <h3 style={{color:'white'}}>Section:C</h3>

        </div>
        </>
    )
}
export default ICard