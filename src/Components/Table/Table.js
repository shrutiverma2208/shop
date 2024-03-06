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

  const handleSearch = (e, column) => {
    console.log('inside handle search')
    const value = e.target.value;
    switch (column) {
      case 'name':
        setSearchName(value);
        break;
      case 'id':
        setSearchId(value);
        break;
      case 'age':
        setSearchAge(value);
        break;
        case 'cgpa':
          setSearchCgpa(value);
          break;
      default:
        break;
    }
  };
  const handleName=(e)=>{
if(e.key==='Enter' && name.trim()!==''){
  setEnteredName(name.trim());
      setName('');
}
  }

    const handleKeyPress = (e) => {
      console.log('inside enter')
      if (e.key === 'Enter') {
        e.preventDefault();
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
            <div style={{fontSize:'20px',margin:'10px'}}>
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
                       value={searchId}
                       onChange={(e)=>handleSearch(e,'id')}
                       onKeyDown={handleKeyPress}/>
                </th>
                
                <th>Name
                    <br/>
                <input style={{fontSize:'17px'}}
                       type="text"
                       placeholder="Name"
                       value={searchName}
                       
                       onChange={(e)=>handleSearch(e,'name')}
                       onKeyDown={handleKeyPress}/>
                </th>
                
                <th>Age
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Age"
                       value={searchAge}
                       onChange={(e)=>handleSearch(e,'age')}
                       onKeyDown={handleKeyPress}/>
                </th>
               
                <th>Cgpa
                <br/>
                <input style={{fontSize:'17px'}}
                       type="number"
                       placeholder="Cgpa"
                       value={searchCgpa}
                       onChange={(e)=>handleSearch(e,'cgpa')}
                       onKeyDown={handleKeyPress}/>
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

            
