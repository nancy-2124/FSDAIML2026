import React from 'react'

function ImdbCard({data}) {
  return (
    <>
    <div style={{border:'20 px solid red',height:'410',width:'300px',marginLeft:'200px'}}>
        <h1>IMDb 2026</h1>
        <h2 style={{backgroundColor:'brown',color:'white'}}>Most Popular Movie</h2>

        <h3>Name:{data.Name}</h3>
        
      
    </div>
    </>
  )
}
export default ImdbCard
