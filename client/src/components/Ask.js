import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Ask.css';

const LoginSignupPopup = ({ onClose, onSelect }) => {
    const popupRef = useRef();
    const navigate = useNavigate();
    const handleSelect = (path) => {
        navigate(path);
        onClose();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="ls-popup-overlay">
            <div className="ls-popup-container" ref={popupRef}>
                <button className="ls-popup-close-btn" onClick={onClose}>
                    <i className="bi bi-x"></i>
                </button>
                <h2 className="ls-popup-header">Would you like to login or signup</h2>
                <div className="ls-popup-buttons">
                    <button className="ls-popup-btn" onClick={() => handleSelect('login')}>Login</button>
                    <button className="ls-popup-btn" onClick={() => handleSelect('signup')}>Signup</button>
                </div>
            </div>
        </div>
    );
};

export default LoginSignupPopup;
