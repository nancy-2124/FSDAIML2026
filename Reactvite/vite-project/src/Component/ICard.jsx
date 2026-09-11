import React from 'react'
import pic from '../images/blue.jpeg';
function ICard(props){
    return(
        <>
        <div style={{border:'10px solid red',height:'410px',width:'300px',marginLeft:'200px'}}>
            {/* <img src={pic} height="150px" width="120px"/> */}
            <h2 style={{backgroundColor:'brown',color:'white'}}>ABES Engineering College</h2>
            <h2 style={{color:'red'}}>Welcome to React</h2>
            {/* <h3 style={{color:'white'}}>Name:Nancy Pal</h3>
            <h3 style={{color:'white'}}>Roll no.:2400321530131</h3>
            <h3 style={{color:'white'}}>Branch:AIML</h3> */}
            {/* <h3 style={{color:'white'}}>Section:C</h3>
            <h3 style={{color:'white'}}>Add.:Ghaziabad</h3> */}

            {/* We use 'props' for it makes a component dynamic/reusable.  */}
            <img src={props.pic} height={200} width={200}></img>
            <h3>Roll:{props.roll}</h3>
            <h3>Name:{props.name}</h3>   
            <h3>Branch:{props.branch}</h3>
        </div>
        {/* <div style={{border:'20px solid brown',height:'450px',width:'350p,',marginLeft:'100px'}}>
            <h3>Brand:{props.brand}</h3>
            <h3>Tag:{props.tag}</h3>
            <h3>Fame:{props.fame}</h3>
        </div> */}
        </>
    )
}
export default ICard