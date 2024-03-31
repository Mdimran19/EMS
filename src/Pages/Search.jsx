import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Search = ( ) => {
    const [data, setData] = useState([])
    const [record,setRecord] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/users')
    .then(res => {
        setData(res.data)
        setRecord(res.data);
    })
        .catch(err => console.log(err))
    }, []
    )
 //const Filter = (event) =>{
 //       setRecord(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
   //    } 
   const handleFilter = (value) => {
    const res = record.filter(f => f.name.toLowerCase().includes(value))
    setData(res);
   }  
  return (
    <div>
        <label >Search</label>
        <input type="text" onChange={e => handleFilter(e.target.value)} placeholder='Name' />
  <table>
  <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>position</th>
            
          </tr>
        </thead>
        <tbody>
           { data.map((user, index) => (
              <tr key={index}>
               <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.position}</td>
               </tr>
             ))}
              </tbody> 
            </table>
    </div>

)
}





  

  
    
     
     
