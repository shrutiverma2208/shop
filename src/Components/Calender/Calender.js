import React, { useState } from 'react';
import  './Calender.css'

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='calender-container'>
        <h3 style={{fontSize:'20px'}}>Calender</h3>
      <label htmlFor="date">Select a Date:</label>
      <input style={{fontSize:'17px',margin:'44px',color: '#5a5151'}}
        type="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Calender;