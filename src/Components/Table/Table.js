import React,{useMemo, useState} from 'react'
import './Table.css'

const Table = ({ data }) => {
  console.log('rendering')
    const [searchId, setSearchId] =useState('');
    const [searchName, setSearchName] =useState('');
    const [searchAge, setSearchAge] =useState('');
    const [searchCgpa, setSearchCgpa] =useState('');
    const [name,setName]=useState('');
    const [enteredName,setEnteredName]=useState('')
    

   console.log('outside filteredDataHandler')

    const filteredDataHandler = useMemo(()=>{
    return  data.filter(item => {
      console.log('inside  filteredDataHandler')
      return (
        
        item.id.toString().includes(searchId)&&
        item.name.toLowerCase().includes(searchName.toLowerCase()) &&
        item.age.toString().includes(searchAge) &&
        item.cgpa.toString().includes(searchCgpa.toLowerCase())
        
      );
    })
  
  },[searchAge,searchCgpa,searchId,searchName])

  
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
            <div style={{fontSize:'px',margin:'10px'}}>
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
                </th>
               
                <th>Cgpa
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Cgpa"
                      
                       onKeyDown={handleCgpaKeyPress}/>
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
                </tr>
              ))}
            </tbody>
          </table>
          
          </div>
        );
              }
      export default Table;

            
