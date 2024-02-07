import React from 'react'
import {useState} from 'react';



const AddDeduct = () => {

  const[number,setNumber]=useState(1)
  const[toggle,setToggle]=useState(true)

 
  const handleAdd=()=>{
    setNumber(number+1)
  }
  const handleDeduct=()=>{
    if(number>=0){
    setNumber(number-1)
  }
  if(number==1){
    setToggle(!toggle)
  }
  }
   const isToggle=()=>{
    setToggle(!toggle)
  }


  return (
    <>
    {toggle?<button style={{fontSize:'14px',padding:'7px 15px',borderRadius:'8px',color:'white',backgroundColor:'black'}} onClick={isToggle}>ADD +</button>:
    <div className='add-deduct'>
    <button style={{fontSize:'20px',padding:'0px 3px'}} onClick={handleDeduct}>-</button>
   <h4 style={{fontSize:'20px',padding:'2px',fontWeight:'400'}}> {number} </h4> 
    <button style={{fontSize:'20px',padding:'0px 5px'}} onClick={handleAdd}>+</button>
  </div>
  }
    
    </> 
    
  )
}

export default AddDeduct
