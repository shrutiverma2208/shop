import React from 'react'

import buttonImg from './buttonImg.css'

const Button = ({mainImage,iconImage, mainText, subText,distance, onClick }) => {
  return (
    <div className='container'>
      <h3 style={{padding:'19px',fontSize:'19px'}}>Nearby Merchants</h3>
        <div className='tiles-full' onClick={onClick}>
            <img src={mainImage} alt='tiles-img' style={{height:'36vh', width:'39vh', borderRadius:'6px 6px 0px 0px'}}></img>
            <div className='tiles-bottom'> 
                <img src={iconImage} style={{height:'4.5vh',width:'4.5vh',marginLeft:'6px',borderRadius:'10px'}}></img>
                <div className='icon-text'>
                  <h3 style={{fontSize:'15px',fontFamily:'sans-serif'}}>{mainText}</h3>
                  <h4 style={{fontSize:'12px',color:'#8f8585',fontWeight:'600',padding:'2px'}}>{subText} . {distance}</h4>
                </div>
               
                </div>
           
        </div>
       
    </div>
  )
}

export default Button