import React from 'react'
import AddDeduct from './AddDeduct'

const Beverage = ({onClick,beverage,price,image,subText}) => {
  return (
    <div style={{alignItem:'center',justifyContent:'center'}}>
  <h1 style={{fontSize:'20px',marginTop:'35px'}}>Beverage</h1>

    <div className='beverage-container'>
        <div className='beverage-tile' onClick={onClick}>
          <h2 style={{fontSize:'17px',marginTop:'20px'}}>{beverage}</h2>
          <h3 style={{fontSize:'12px',color:'grey'}}>{subText}</h3>
          <h3 style={{fontSize:'17px'}} className='price'>{price}</h3>
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