import React,{useMemo, useState} from 'react'
import './Table.css'

const Table = ({ data }) => {
  console.log('rendering')
    const [searchId, setSearchId] =useState('');
    const [searchName, setSearchName] =useState('');
    const [searchAge, setSearchAge] =useState('');
    const [searchCgpa, setSearchCgpa] =useState('');
    const [searchCity, setSearchCity] =useState('');
    const [searchMobile, setSearchMobile] =useState('');
    const [name,setName]=useState('');
    const [enteredName,setEnteredName]=useState('')
    const [ageOperator,setAgeOperator]=useState('')
    
console.log(data)
const applyOperator = (value, operator, searchValue) => {
  if (!operator || !searchValue) {
    return true;
  }

  const intValue = parseInt(value);
  const searchIntValue = parseInt(searchValue);

  switch (operator) {
    case '<':
      return intValue < searchIntValue;
    case '>':
      return intValue > searchIntValue;
    case '=':
      return intValue === searchIntValue;
    default:
      return true; 
  }
}
  

    const filteredDataHandler = useMemo(()=>{
    return  data.filter(item => {
        
       const id1= item.id.toString().includes(searchId)
       const name1= item.name.toLowerCase().includes(searchName.toLowerCase()) 
       const age1= applyOperator(item.age, ageOperator,searchAge)
       const cgpa1= item.cgpa.toString().includes(searchCgpa.toLowerCase()) 
       const phone1= item.phone.toString().includes(searchMobile)
       const city1=item.city.toLowerCase().includes(searchCity.toLowerCase()) 

        return id1 && name1 && age1 && cgpa1 && phone1 && city1;
    
    });
  
  },[searchAge,searchCgpa,searchId,searchName,searchCity,searchMobile])

 
  
  const handleName=(e)=>{
if(e.key==='Enter' && name.trim()!==''){
  setEnteredName(name.trim());
      setName('');
}
  }

    const handleIdKeyPress = (e) => {
      console.log('inside enter')
      if (e.key === 'Enter') {
        setSearchId(e.target.value)
      }
    };
    const handleNameKeyPress = (e) => {
      console.log('inside enter')
      if (e.key === 'Enter') {
        setSearchName(e.target.value)
      }
    };
    const handleAgeKeyPress = (e) => {
      console.log('inside enter')
      if (e.key === 'Enter') {
        setSearchAge(e.target.value)
      }
    };
    const handleCgpaKeyPress = (e) => {
      console.log('inside enter')
      if (e.key === 'Enter') {
        setSearchCgpa(e.target.value)
      }
    };

    const handleCityKeyPress = (e) => {
      console.log('inside enter')
      if (e.key === 'Enter') {
        setSearchCity(e.target.value)
      }
    };

    const handleMobileKeyPress = (e) => {
      console.log('inside enter')
      if (e.key === 'Enter') {
        setSearchMobile(e.target.value)
      }
    };
        return (
            <div>
           
           <h3 style={{fontSize:'20px',margin:'23px'}}>Table</h3>
           <div>
           <input 
            style={{fontSize:'17px',borderRadius:'20px',padding:'7px',margin:'10px'}}
            type="text"
            placeholder='Enter your name...'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            onKeyDown={handleName}
            />
            <div style={{fontSize:'18px',margin:'10px'}}>
              User Name:  { enteredName}
              
              
            </div>
            </div>
          <table className='table-container'>
            
            <thead>
              <tr>
                <th>ID
                    <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="ID"
                      
                       onKeyDown={handleIdKeyPress}/>
                </th>
                
                <th>Name
                    <br/>
                <input style={{fontSize:'17px'}}
                       type="text"
                       placeholder="Name"
                       
                       onKeyDown={handleNameKeyPress}/>
                </th>
                
                <th>Age
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Age"
                       
                       onKeyDown={handleAgeKeyPress}/>
                <select style={{fontSize:'16px'}}
                value={ageOperator}
                onChange={(e) => setAgeOperator(e.target.value)}
                >
                  
                <option style={{fontSize:'16px'}} value="">Select Operator</option>
                <option style={{fontSize:'16px'}} value="<">Less than</option>
                <option style={{fontSize:'16px'}} value=">">Greater than</option>
                <option style={{fontSize:'16px'}} value="=">Equal to</option>
                
              </select>
                </th>
               
                <th>Cgpa
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Cgpa"
                      
                       onKeyDown={handleCgpaKeyPress}/>
                </th>
                <th>City
                <br/>
                <input style={{fontSize:'17px'}}
                       type="text"
                       placeholder="City"
                      
                       onKeyDown={handleCityKeyPress}/>
                </th>

                <th>Mobile Number
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Mobile number"
                      
                       onKeyDown={handleMobileKeyPress}/>
                </th>
              </tr>
            </thead>
            <tbody>
           
          
              {filteredDataHandler.map((item,index) => (
                
                 <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.cgpa}</td>
                  <td>{item.city}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          </div>
        );
              }
      export default Table;

            
