import React, { useState, useEffect } from 'react';
import Ask from './Ask';
import logo from '../assets/logo.jpg';
import profile from '../assets/images/person.svg';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('http://localhost/api/check', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                 });
                if (response.status === 200) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                console.error('Error checking login status:', error);
                setIsLoggedIn(false);
            }
        };

        checkLoginStatus();
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
        document.querySelector('.Sidebar').classList.toggle('show');
    };

    const handleLoginSignupClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <>
            <div className="navbar">
                <div className="div1">
                    <img src={logo} alt="Logo" className="logo" height="50px" width="50px" />
                    <a href="/" className="website-name">Nexus Medica</a>
                </div>
                <div className="div2">
                    <div className="nav-links">
                        <a href="/about">About Us</a>
                        <a href="/services">Services</a>
                        <a href="/doctors">Doctors</a>
                        <a href="/contact">Contact Us</a>
                    </div>
                    <div className="div3">
                        {isLoggedIn ? (
                            <img src={profile} alt="Profile" className="profile-icon" />
                        ) : (
                            <button className="signup-logout" onClick={handleLoginSignupClick}>
                                Signup / Logout
                            </button>
                        )}
                        {showPopup && <Ask onClose={handleClosePopup} />}
                    </div>
                </div>
                <div className="hamburger-menu" onClick={toggleSidebar}>
                    <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
                    <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
                    <div className={`bar ${showSidebar ? 'open' : ''}`}></div>
                </div>
                <div className="Sidebar">
                    {isLoggedIn ? (
                        <>
                            <a href="/about">About Us</a>
                            <a href="/services">Services</a>
                            <a href="/doctors">Doctors</a>
                            <a href="/contact">Contact Us</a>
                            <div className="div3">
                                <button className="signup-logouts" onClick={handleLoginSignupClick}>
                                    Signup / Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <img src={profile} alt="Profile" className="profile-icon" />
                            <a href="/about">About Us</a>
                            <a href="/services">Services</a>
                            <a href="/doctors">Doctors</a>
                            <a href="/contact">Contact Us</a>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Navbar;
