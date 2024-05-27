import React, { useState } from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="lp-container">
            <div className="lp-form-container">
                <h2 className="lp-header">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="lp-input-group">
                        <label className="lp-label" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="lp-input" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="lp-input-group">
                        <label className="lp-label" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            className="lp-input" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit" className="lp-submit-btn">Login</button>
                </form>
                <div className="lp-footer">
                    <p>Don't have an account? <a href="/services/signup" className="lp-signup-link">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
