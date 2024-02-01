import React from 'react'
import img1 from '../images/img1.avif';
import logo1 from '../images/logo1.jpeg';
import buttonImg from './buttonImg.css'

const Button = () => {
  return (
    <div>
        <button className='button-full'>
            <img src={img1} alt='button-img' style={{height:'32vh', width:'36vh', borderRadius:'25px'}}></img>
            <div className='bottom-button'> 
                <img src={logo1} style={{height:'40px',width:'40px',borderRadius:'60px'}}></img>
                <h3 style={{margin:'10px'}}>Title</h3>
                <h4 style={{margin:'10px'}}>Title 2</h4>
                </div>
           
        </button>
        <button className='button-full'>
            <img src={img1} alt='button-img' style={{height:'32vh', width:'36vh', borderRadius:'25px'}}></img>
            <div className='bottom-button'> 
                <img src={logo1} style={{height:'40px',width:'40px',borderRadius:'60px'}}></img>
                <h3 style={{margin:'10px'}}>Title</h3>
                <h4 style={{margin:'10px'}}>Title 2</h4>
                </div>
           
        </button>
    </div>
  )
}

export default Button