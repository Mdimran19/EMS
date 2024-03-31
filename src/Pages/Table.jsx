import axios from 'axios'
import user from '../Models/User'
import React, {useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export const Table = () => {
const [data, setData] = useState([])


  useEffect(() => {
   // const fetchData = async () => {
    // const response = await fetch('http://localhost:3000/users')
    //const jsonData = await response.json()
   //  setData(jsonData)
   // };
    // fetchData()
   axios.get('http://localhost:3000/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []
  )
  //}
  //////////////////ijjjj////
  // }
  // axios.get('http://localhost:3001/users')
  //.than(res => setData(res.data))
  //  .catch(er => console.log(er));
  /////

  //location.reload() )
 
  function  handleDelete(id,index) {
    window.confirm("would you like to Delete?");
    if(confirm){
      axios.delete('http://localhost:3000/users/' +id)
    .then(res =>{
      document.querySelector('.user-'+index).remove();
      alert("Record Delete!");
     
    })
     
  }
    }



  return (

    <div>
      <Link to="/create" className='px-3 py-1 rounded-xl bg-orange-500 '>Create</Link>
   
      <table className='border-2 border-y-2 border-separate mt-5 w-full  '>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
           { data.map((user, index) => (
              <tr className={'user-'+index} key={index}>
               <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.position}</td>
               <td>
               <Link className='bg-green-300 p-2 rounded-md mr-3' to={`/edit/${user.id}`}>Edit</Link>
               <button  className='bg-green-300 p-2 rounded-md' onClick={e => handleDelete(user.id,index)}>Delete</button>
              

               </td> 
               </tr>
             ))}
              </tbody> 
            </table>
    
</div>

  
  )}
