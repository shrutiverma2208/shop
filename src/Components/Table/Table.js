import React,{useState} from 'react'
import './Table.css'

const Table = ({ data }) => {
    const [searchItem, setSearchItem] =useState('');
    const handleSearch=(e)=>{
        setSearchItem(e.target.value)
    }
    
        return (
            <>
           
          <table className='table-container'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
            <input style={{fontSize:'20px'}}
            type="text"
            placeholder="Search"
            value={searchItem}
            onChange={handleSearch}
          />
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </>
        );
              }
      
      export default Table;


