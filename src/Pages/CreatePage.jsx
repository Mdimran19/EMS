import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import user from '../Models/User';

 export const CreatePage = () => {
  //const [column, setColumn] = useState('');
  //const [email, setEmail] = useState('');
//useEffect(() => {
  //axios.get('http://localhost:3000/users')
//  .then(res=> {
//setColumn(Object.keys(res.data[0]))
//setInputData(res.data)
  //})
//})
 // const handleSubmit = async (e) => {
  //  e.preventDefault();

    //const newEmployee = { name, email };

   // try {
     // const response = await fetch('http://localhost:3000/users', {
      //  method: 'POST',
       // headers: {
    //      'Content-Type': 'application/json',
      //  },
       // body: JSON.stringify(newEmployee),
    //  });

     // if (!response.ok) {
    //    throw new Error('Failed to add employee');
     // }

     // console.log('Employee added successfully');
      // Optionally, you can reset the form fields here
   // } catch (error) {
   //   console.error('Error adding employee:', error.message);
  //  }
 // };

   // const [name,setName] = useState('')
 //   const [email,setEmail] = useState('')
    const [inputData, setInputData] = useState({
        id: '',
        name: '',
        email: '',
        position: ''
    })
  
    
////const handleSubmit = (event) => {
//    console.log(name,email)
  //  console.log({name,email})
    //axios.post('http://localhost:3000/users',{
      //  metdod:"POST",
        //headers:{
          //  "accpt": "application/json",
            //"content-type": "application/json"
 //       }
        
  //  })
//}
    const navigate = useNavigate();
     const handleSubmit = (event) =>{
       event.preventDefault();
        axios.post('http://localhost:3000/users' , inputData)
        .then(res => {
          alert("Data Posted succecfully!");
       navigate('/')
     })
      
    }
   // const handleSubmit = async (event) => {
     //   event.preventDefault();
     //   try {
 //           const response = await axios.post('http://localhost:3000/users', inputData)
  //          console.log("Data posted succesfully", response.data);
   //     } catch (error) {
  //          console.error("Data do not post", error)
  //      }
   // }
  
  
    return (
        <div className='flex w-96 h-96  items-center ml-44 border-2 border-black'>
            <div className='ml-20 gap-6'>
                <from onSubmit={handleSubmit}>
                  <div className='mb-5'>
                    <lebel htmlFor="id">ENter id</lebel>
                  <input type="number" name='id' value={inputData.id} onChange={e=> setInputData({...inputData,id:e.target.value})} placeholder="Enter ID" /> 
                  </div>
                    <div className='mb-5'>
                       
                        <lebel htmlFor="name">Name:</lebel>
                        <input type="text" name='name' value={inputData.name} onChange={e => setInputData({...inputData, name: e.target.value})} />
                    </div>
                    <div className='mb-5'>
                        <lebel htmlFor="name">Email:</lebel>
                        <input type="email" name='email' value={inputData.email} onChange={e => setInputData({...inputData, email: e.target.value})} />
                    </div>
                    <div>               <lebel htmlFor="name">Position:</lebel>
                        <input type="text" name='position' value={inputData.position} onChange={e => setInputData({...inputData, position: e.target.value})} /></div> <br />
                    <button  onClick={handleSubmit} type='submit' className='border-2 bg-amber-600 py-1 px-2 rounded-sm'>Submit</button>

                </from>
            </div>
        </div>
    )
}

