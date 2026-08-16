import React from 'react'
import Logo from '../assets/logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='flex text-lg bg-black text-white justify-between items-center px-10 py-3'>
      <div>
        <img src={Logo} alt="image" />
      </div>
      <div>
        {/* <RiSearchLine /> */}
         <input className='border-2 px-10 py-2 rounded' type="text" placeholder='Search' />
      </div>
      <div className='flex gap-5 items-center'>
        <button>Login</button>
        <button className='signup px-3 rounded'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar