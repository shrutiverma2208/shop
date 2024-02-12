import React from 'react'
import {useState} from 'react';



const AddDeduct = () => {

  const[number,setNumber]=useState(1)
  const[toggle,setToggle]=useState(true)

 
  const handleAdd=()=>{
    setNumber(number+1)
  }
  const handleDeduct=()=>{
    if(number>0){
    setNumber(number-1)
  }
  if(number==1){
    setToggle(!toggle)
  }
  }
   const isToggle=()=>{
    setToggle(!toggle)
    setNumber(1)
  }


  return (
    <>
    {toggle?<button style={{fontSize:'14px',padding:'4px 12px',borderRadius:'8px',color:'white',backgroundColor:'black',marginTop:'-2px',marginRight:'-157px'}} onClick={isToggle}>ADD +</button>:
    <div className='add-deduct'>
    <div style={{fontSize:'14px',padding:'0px 7px',border:'none',cursor:'pointer'}} onClick={handleDeduct}>-</div>
   <h4 style={{fontSize:'14px',padding:'2px',fontWeight:'400',width:'14px'}}> {number} </h4> 
    <div style={{fontSize:'14px',padding:'0px 5px',border:'none',cursor:'pointer'}} onClick={handleAdd}>+</div>
  </div>
  }
    
    </> 
    
  )
}

export default AddDeduct
