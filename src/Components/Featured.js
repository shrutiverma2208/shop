import React from 'react'
import buttonImg from './buttonImg.css';


const Featured = ({featuredMainImage,title,onClick}) => {
  return (
    <div className='featured-container'>
      <h3 style={{margin:'12px'}}>Featured Merchants</h3>
        <button className='featured-image' onClick={onClick}>
        <img src={featuredMainImage} alt='main-img' style={{height:'30vh', width:'30vh', borderRadius:'15px'}}></img>
          
        </button>
        <div>
            <h4 style={{margin:'10px'}}>{title}</h4>
          </div>
    </div>
  )
}

export default Featured