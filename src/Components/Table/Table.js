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
    
    const applyOperator = (value, searchValue) => {
      if ( !searchValue) {
        return true;
      }
    
      const operatorIndex = searchValue.search(/[<>=]/);
      if (operatorIndex !== -1) {
        const operator = searchValue[operatorIndex];
        const searchIntValue = parseInt(searchValue.slice(operatorIndex + 1));
    
    
      switch (operator) {
        case '<':
          return parseInt(value) < searchIntValue;
        case '>':
          return parseInt(value) > searchIntValue;
        case '=':
          return parseInt(value) === searchIntValue;
          case '<=':
            return parseInt(value) <= searchIntValue;
          case '>=':
            return parseInt(value) >= searchIntValue;
        default:
          return true; 
      }
    }
      return parseInt(value) === parseInt(searchValue)
    }


    const filteredDataHandler = useMemo(()=>{
    return  data.filter(item => {
        return(
      ( searchId === ''|| item.id.toString().includes(searchId)) &&
       (searchName===''|| item.name.toLowerCase().includes(searchName.toLowerCase()) )&&
       (searchAge===''|| applyOperator(item.age, searchAge))&&
       (searchCgpa===''|| applyOperator(item.cgpa,searchCgpa)) &&
       (searchMobile===''|| item.phone.toString().includes(searchMobile))&&
       (searchCity===''||item.city.toLowerCase().includes(searchCity.toLowerCase()) )

        
        )
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
            onKeyUp={handleName}
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
                       type="text"
                       placeholder="Age(<30,>30)"
                       
                       onKeyDown={handleAgeKeyPress}/>
                
                </th>
               
                <th>Cgpa
                <br/>
                <input style={{fontSize:'17px'}}
                       type="text"
                       placeholder="Cgpa(<5,>5)"
                      
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

            
