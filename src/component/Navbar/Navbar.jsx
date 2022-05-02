import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">.myBookings</span>
        <div className="navItems">
          <button className='button'>Register</button>
          <button className='button'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
