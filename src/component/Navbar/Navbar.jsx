import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

 const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">.myBookings</span>
        <div className="navItems">
          <button className='button' onClick={() => navigate('/register')}>Register</button>
          <button className='button' onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
