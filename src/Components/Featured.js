import React from 'react'
import buttonImg from './buttonImg.css';



const Featured = ({featuredMainImage,title,onClick}) => {
  return (
    <div className='featured-container'>
      <h3 style={{padding:'7px',fontSize:'16px'}}>Featured Merchants</h3>
        <div className='featured-image' onClick={onClick}>
        <img src={featuredMainImage} alt='main-img' style={{height:'23vh', width:'25vh', borderRadius:'22px'}}></img>
          
        </div>
        <div>
            <h4 style={{margin:'10px',fontSize:'13px'}}>{title}</h4>
          </div>
    </div>
  )
}

export default Featured