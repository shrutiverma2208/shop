import React from 'react'

const Browse = ({BrowserImage,BrowserName,onClick}) => {
  return (
    <div className='browser-container'>
    <div className='browser-tile' onClick={onClick}>
        <img style={{height:'18vh', width:'18vh', borderRadius:'110px',cursor:'pointer'}} src={BrowserImage}></img>
        <div style={{fontSize:'18px',fontWeight:'500',padding:'5px'}}>{BrowserName}</div>
    </div>
    </div>
  )
}

export default Browse