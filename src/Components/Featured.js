import React from 'react'
import buttonImg from './buttonImg.css';



const Featured = ({featuredMainImage,title,onClick}) => {
  return (
    <div className='featured-container'>
      <h3 style={{padding:'19px',fontSize:'19px'}}>Featured Merchants</h3>
        <button className='featured-image' onClick={onClick}>
        <img src={featuredMainImage} alt='main-img' style={{height:'23vh', width:'25vh', borderRadius:'22px'}}></img>
          
        </button>
        <div>
            <h4 style={{margin:'10px',fontSize:'15px'}}>{title}</h4>
          </div>
    </div>
  )
}

export default Featured