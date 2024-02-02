import React from 'react'

import buttonImg from './buttonImg.css'

const Button = ({mainImage,iconImage, mainText, subText, onClick }) => {
  return (
    <div className='container'>
        <button className='tiles-full' onClick={onClick}>
            <img src={mainImage} alt='tiles-img' style={{height:'37vh', width:'39vh', borderRadius:'15px'}}></img>
            <div className='tiles-bottom'> 
                <img src={iconImage} style={{height:'4.5vh',width:'4.5vh',borderRadius:'10px'}}></img>
                <div className='icon-text'>
                  <h3 style={{margin:'3px'}}>{mainText}</h3>
                  <h4 style={{margin:'3px'}}>{subText}</h4>
                </div>
               
                </div>
           
        </button>
       
    </div>
  )
}

export default Button