import React from 'react'
import { useState } from 'react';

import Ask from './Ask'
import logo from '../assets/logo.jpg';
const Navbar =()=>  {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
      document.querySelector('.Sidebar').classList.toggle('show');
    };
    const [showPopup, setShowPopup] = useState(false);

    const handleLoginSignupClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    const handleSelect = (option) => {
        setShowPopup(false);
        // Handle login or signup logic here based on the selected option
        console.log(`Selected option: ${option}`);
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
        <button className="signup-logout" onClick={handleLoginSignupClick}>
      Signup / Logout
        </button> 
        {showPopup && <Ask onClose={handleClosePopup} onSelect={handleSelect} />}
      </div>
    </div>
      {/* Hamburger menu */}
      <div className="hamburger-menu" onClick={toggleSidebar}>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
            <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
    </div> 
    <div className="Sidebar">
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/doctors">Doctors</a>
            <a href="/contact">Contact Us</a>
            <div className='div3'>
              <button className="signup-logouts" onClick={handleLoginSignupClick}>
                Signup / Logout
              </button> 
            </div>
    </div>
  </div>
  
    </>
)
}

export default Navbar