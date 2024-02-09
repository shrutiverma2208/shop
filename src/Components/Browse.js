import React from 'react'

const Browse = ({BrowserImage,BrowserName,onClick}) => {
  return (
    <div className='browser-container'>
         <h3 style={{padding:'19px',fontSize:'19px'}}>Browse Categories</h3>
    <div className='browser-tile' onClick={onClick}>
        <img style={{height:'14vh', width:'14vh', borderRadius:'110px',cursor:'pointer'}} src={BrowserImage}></img>
        <div style={{fontSize:'16px',fontWeight:'500',padding:'5px'}}>{BrowserName}</div>
    </div>
    </div>
  )
}

export default Browse