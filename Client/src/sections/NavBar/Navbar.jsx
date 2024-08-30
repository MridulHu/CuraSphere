import React from 'react'


import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <header className="navbar-container">
      
      <div className= "navbar-hero-container">
        <NavLink to='/'>
          <img src = {logo} className='navbar-hero-icon'/>
        </NavLink>
          <h3 className='navbar-hero-title'>CuraSphere</h3>
      </div>
      

      <div className="navbar">
        
        <div className='navbar-buttons'>
          <div className='navbar-buttons-home'>
            <NavLink to='/' className='navlinkText'>
              <button className='navbar-button'>Home</button>
            </NavLink>
          </div>
          <div className='navbar-buttons-services'>
            <NavLink to='/patientPage' className='navlinkText'>
              <button className='navbar-button'>Patient Page</button>
            </NavLink>
          </div>
          <div className='navbar-buttons-services'>
            <NavLink to='/doctorPage' className='navlinkText'>
              <button className='navbar-button'>Doctor Page</button>
            </NavLink>
          </div>
          
        </div>
        
        <div>
          <button className='contact-btn'>Contact Us</button>
        </div>
        
        
      </div>
      
    </header>
  )
}

export default Navbar