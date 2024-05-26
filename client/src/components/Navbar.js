import React from 'react'
import { useState } from 'react';

import logo from '../assets/logo.jpg';
const Navbar =()=>  {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
      document.querySelector('.Sidebar').classList.toggle('show');
    };
return (
    <>
<div className="navbar">
    <div className="div1">
      <img src={logo} alt="Logo" className="logo" height="50px" width="50px"></img>
      <a href="/" className="website-name">Nexus Medica</a>
    </div>
    <div className="div2">
      <div className="nav-links">
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/doctors">Doctors</a>
        <a href="/contact">Contact Us</a>

      </div>

      <div className='div3'>
        <a href="/ask" className="signup-logout">Signup / Logout</a>
      </div>
    </div>
      {/* Hamburger menu */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
    </div> 
    <div className="Sidebar">
            <a href="/home">Home</a>
            <a href="/services">Services</a>
            <a href="/doctors">Doctors</a>
            <a href="/contact">Contact Us</a>
            <a href="/ask" className="signup-logouts">Signup / Logout</a>
    </div>
  </div>
  
    </>
)
}

export default Navbar