import React,{useState} from 'react'
import './Table.css'

const Table = ({ data }) => {
    const [searchId, setSearchId] =useState('');
    const [searchName, setSearchName] =useState('');
    const [searchAge, setSearchAge] =useState('');
    const [searchCgpa, setSearchCgpa] =useState('');

    const filteredData = data.filter(item => {
      return (
        item.id.toString().includes(searchId)&&
        item.name.toLowerCase().includes(searchName.toLowerCase()) &&
        item.age.toString().includes(searchAge) &&
        item.cgpa.toString().includes(searchCgpa.toLowerCase())
      );
    });

    const handleNameSearch =(e)=> {
      if (e.key === 'Enter'){
       setSearchName(e.target.value);
      }
      
    };
    const handleIdSearch =(e)=> {
      if (e.key === 'Enter'){
       setSearchId(e.target.value);
      }
      
    };
    const handleAgeSearch =(e)=> {
      if (e.key === 'Enter'){
       setSearchAge(e.target.value);
      }
      
    };
    const handleCgpaSearch =(e)=> {
      if (e.key === 'Enter'){
       setSearchCgpa(e.target.value);
      }
      
    };
  
   
    
        return (
            <>
           <h3 style={{fontSize:'20px',margin:'23px'}}>Table</h3>
          <table className='table-container'>
            <thead>
              <tr>
                <th>ID
                    <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="ID"
                       value={searchId}
                       onChange={(e)=>setSearchId(e.target.value)}
                       onKeyUp={handleIdSearch}/>
                </th>
                
                <th>Name
                    <br/>
                <input style={{fontSize:'17px'}}
                       type="text"
                       placeholder="Name"
                       value={searchName}
                       
                       onChange={(e)=>setSearchName(e.target.value)}
                       onKeyUp={handleNameSearch}/>
                </th>
                
                <th>Age
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Age"
                       value={searchAge}
                       onChange={(e)=>setSearchAge(e.target.value)}
                       onKeyUp={handleAgeSearch}/>
                </th>
               
                <th>Cgpa
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Cgpa"
                       value={searchCgpa}
                       onChange={(e)=>setSearchCgpa(e.target.value)}
                       onKeyUp={handleCgpaSearch}/>
                </th>
              </tr>
            </thead>
            <tbody>
           
          
              {filteredData.map((item) => (
             
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.cgpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </>
        );
              }
      
      export default Table;


