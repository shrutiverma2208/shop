import React from 'react'
import {useState} from 'react';


const AddDeduct = () => {

  const[number,setNumber]=useState(0)

 
  const handleAdd=()=>{
    setNumber(number+1)
  }
  const handleDeduct=()=>{
    if(number>0){
    setNumber(number-1)
  }
  }


  return (
    <div className='add-deduct'>
      <button style={{fontSize:'20px',padding:'0px 3px'}} onClick={handleAdd}>+</button>
     <h4 style={{fontSize:'20px',padding:'2px',fontWeight:'400'}}> {number} </h4> 
      <button style={{fontSize:'20px',padding:'0px 5px'}} onClick={handleDeduct}>-</button>
    </div>
  )
}

export default AddDeduct
