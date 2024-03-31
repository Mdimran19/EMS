
import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className='flex justify-between bg-lime-700 h-10 text-center rounded-md mb-4'>
        <div className='ml-4 mt-2'><Link to='/'>EMS IMRAN</Link></div>
        <div className='flex justify-between gap-4 mt-2'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/connect'>Connect</Link> 
        
           
        </div>
     <div>
      <Link to='/search'>Search</Link>
     </div>
        <button className='mr-4 bg-neutral-500 rounded-md h-6 mt-2'> <Link to='/signup'>SignUp</Link></button>
        <button className='mr-4 bg-neutral-500 rounded-md h-6 mt-2'> <Link to='/login'>Login</Link></button>
    </div>
  )
}

export default NavBar;