import React, { useState } from 'react';
import  './Calender.css'

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className='calender-container'>
      <label htmlFor="date">Select a Date:</label>
      <input style={{fontSize:'20px'}}
        type="date"
        id="date"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </div>
  );
};

export default Calender;