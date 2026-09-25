import React from 'react'

function ImdbCard({data}) {
  return (
    <>
    <div style={{backgroundColor:'solid green',height:'410px',width:'350px',marginLeft:'200px',padding:'20px',color:'blue'}}>
        
        <h1 style={{margin:'0'}}>IMDb</h1>
        <h2 style={{margin:'0'}}>BEST OF 2025</h2>

        <h2 style={{color:'pink'}}>MOST POPULAR MOVIES</h2>
        <p>As of 2026</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'15px'}}>
          {data.map((movie)=>(
            <div style={{display:'flex', alignItems:'center'}}>
              <h2>{movie.rank}</h2>
              <img src={movie.image} style={{width:'55px',height:'55px',borderRadius:'50%',objectFit:'cover',marginLeft:'8px'}}/>
              <p style={{marginLeft:'8px'}}>
                {movie.Name}
              </p>
              </div>

          ))}
        </div>
        
      
    </div>
    </>
  )
}
export default ImdbCard
