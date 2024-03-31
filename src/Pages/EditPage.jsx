import { data } from 'autoprefixer'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export const EditPage = () => {
    const {id} = useParams();
const [inputData,setInputData] = useState([])
const navigate = useNavigate();

useEffect(()=>{
    axios.get('http://localhost:3000/users/'+id)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
},[])
const handleSubmit = (event) =>{
    console.log("hhhh")
    event.preventDefault();
    axios.put('http://localhost:3000/users/'+id,inputData)
    .then(res => {
      alert("Data updated succecfully!")
    navigate('/')
  })
  
 }
  return (
    <div className='flex w-96 h-96  items-center '>
    <div>
        <form >
        <div>
                <label htmlFor="id">id:</label>
                <input type="text"  name='id' value={inputData.id} onChange={e => setInputData({ ...inputData, id: e.target.value })} />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' value={inputData.name} onChange={e => setInputData({ ...inputData, name: e.target.value })} />
            </div>
            <div>
                <label htmlFor="name">Email:</label>
                <input type="email" name='email' value={inputData.email} onChange={e => setInputData({ ...inputData, email: e.target.value })} />
            </div> <br />
            <button onClick={handleSubmit} type='submit'>Submit</button>

        </form>
    </div>
</div>
  )
}
