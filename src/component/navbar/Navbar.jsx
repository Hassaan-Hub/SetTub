import React from 'react'
import Logo from '../../assets/logo.png'
import Dotdot from '../../assets/icon.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='flex text-lg bg-black text-white font-semibold justify-between items-center px-10 py-3'>
      <div>
        <img src={Logo} alt="image" />
      </div>
      <div>
         <input className='border-2 px-10 py-2 rounded' type="text" placeholder='Search' />
      </div>
      <div className='flex gap-7 items-center'>
        <img src={Dotdot} alt="" />
        <button>Login</button>
        <button className='signup px-3 text-black'>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar