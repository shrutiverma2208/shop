import React from 'react'

const BottomNavigation = ({image1,title1,image2,title2,image3,title3,image4,title4}) => {
  return (
    <div className='bottomNav-container'>
        <h3 style={{fontSize:'19px'}}>Bottom Navigation</h3>
        <div className='bottomNav-tile'>
      <div style={{margin:'14px'}} >  
        
       <img style={{height:'32px'}} src={image1} />
       <h3 style={{fontSize:'12px',fontWeight:'500'}}>{title1}</h3>
      </div>
      <div style={{margin:'14px'}}>  
       <img style={{height:'32px'}} src={image2} />
       <h3  style={{fontSize:'12px',fontWeight:'500'}}>{title2}</h3>
      </div>
      <div style={{margin:'14px'}}>  
       <img style={{height:'32px'}} src={image3} />
       <h3  style={{fontSize:'12px',fontWeight:'500'}}>{title3}</h3>
      </div>
      <div style={{margin:'14px'}}>  
       <img style={{height:'32px'}} src={image4} />
       <h3  style={{fontSize:'12px',fontWeight:'500'}}>{title4}</h3>
       
      </div>
      </div>
    </div>
  )
}

export default BottomNavigation