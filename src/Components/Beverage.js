import React from 'react'
import AddDeduct from './AddDeduct'

const Beverage = ({onClick,beverage,price,image,subText}) => {
  return (
    <div className='beverage'>
  <h3 style={{fontSize:'19px',padding:'19px'}}>Beverage</h3>

    <div className='beverage-container'>
        <div className='beverage-tile' onClick={onClick}>
          <h2 style={{fontSize:'16px',marginTop:'20px'}}>{beverage}</h2>
          <h3 style={{fontSize:'11px',color:'grey'}}>{subText}</h3>
          <h3 style={{fontSize:'16px'}} className='price'>{price}</h3>
        </div>
        <div className='beverage-image'>
            <img src={image}></img>
            <div>
                <AddDeduct/>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Beverage