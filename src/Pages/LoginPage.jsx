import { Password } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
export const LoginPage = () => {
    const [email,seteEmail] = useState('')
    const [pass,setPass] = useState('')
    const handleSummit = () => {
       e.preventDefelt();
       console.log(email)
    }
    const handleLogin = () => {
       if(email === 'admin' && Password === Password) 
       {
        const {form} = location.state || {
            form:{
                pathname:"/"
            }
        };
        history.replace(from);
       }else{
        alert('No user found')
       }
    } 
  return (
    <>
    
    <form className='flex flex-col' onSubmit={handleSummit}>
    <input value={email} onChange={(e)=>seteEmail(e.target.value)} type="email" placeholder="imran@gmail.com" id="email" name="email"/>
    <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="******" id="password" name="password"/>
    <button onClick={handleLogin} type='submit'>Login</button>
</form>
<button>Don't have any account ? Register here.</button>
</>
  )
}
