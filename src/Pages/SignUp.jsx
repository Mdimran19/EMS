import React from 'react'
import { useState } from 'react'
import { LoginPage } from './LoginPage'
import { useNavigate } from 'react-router-dom'

export const SignUp = () => {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [nsme,setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  
  }
  return (
   <>
   
  
    <form onSubmit={handleSubmit}>
        
        <input value={nsme} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name" id="name" name="name"/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="imran@gmail.com" id="email" name="email"/>
        <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
        <button type='submit'>signup</button>
        <button>Already have any account ? Login here.</button>
    </form>
  
    </>
  )
}
