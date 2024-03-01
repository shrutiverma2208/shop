import React from 'react'
import './Table.css'

const Table = ({ data }) => {
    
        return (
          <table className='table-container'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
              }
      
      export default Table;


