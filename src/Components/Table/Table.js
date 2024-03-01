import React,{useState} from 'react'
import './Table.css'

const Table = ({ data }) => {
    const [searchId, setSearchId] =useState('');
    const [searchName, setSearchName] =useState('');
    const [searchAge, setSearchAge] =useState('');
    const [searchCgpa, setSearchCgpa] =useState('');
    const handleId=(e)=>{
        setSearchId(e.target.value)
    }
    const handleName=(e)=>{
        setSearchName(e.target.value)
    }
    const handleAge=(e)=>{
        setSearchAge(e.target.value)
    }
    const handleCgpa=(e)=>{
        setSearchCgpa(e.target.value)
    }
    
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
                       onChange={handleId}/>
                </th>
                
                <th>Name
                    <br/>
                <input style={{fontSize:'17px'}}
                       type="text"
                       placeholder="Name"
                       value={searchName}
                       onChange={handleName}/>
                </th>
                
                <th>Age
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Age"
                       value={searchAge}
                       onChange={handleAge}/>
                </th>
               
                <th>Cgpa
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Cgpa"
                       value={searchCgpa}
                       onChange={handleCgpa}/>
                </th>
              </tr>
            </thead>
            <tbody>
           
          
              {data.map((item) => (
             
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


