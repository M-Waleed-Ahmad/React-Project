import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupUser.css';

const SignupPage = () => {
    const [role, setRole] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true); // State to track whether passwords match
    const [emailExists, setEmailExists] = useState(false);
    const [emailCheckError, setEmailCheckError] = useState('');
    const navigate = useNavigate();

    const handleRoleSelection = (event) => {
        setRole(event.target.value);
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordsMatch(event.target.value === confirmPassword); 
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setPasswordsMatch(event.target.value === password); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Your form submission logic here
        if (!passwordsMatch) {
            alert('Passwords do not match!');
            return;
        }
        else if (emailExists) {
            alert('Email already exists!');
            return;
        }
        // Proceed with form submission
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role,
        };
        localStorage.setItem('formData', JSON.stringify(formData));

        if (role === 'patient') {
            navigate('/services/signup/patient');
        } else if (role === 'doctor') {
            navigate('/services/signup/doctor');
        }
    };

    useEffect(() => {
        const checkEmailExists = async (email) => {
            if (email) {
                try {
                    const response = await fetch(`http://localhost/api/check-email?email=${email}`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    setEmailExists(data.exists);
                    setEmailCheckError('');
                } catch (error) {
                    console.error('Error checking email:', error);
                    setEmailCheckError('Error checking email.');
                }
            } else {
                setEmailExists(false);
                setEmailCheckError('');
            }
        };

        const debounceCheckEmail = setTimeout(() => {
            checkEmailExists(email);
        }, 500);

        return () => clearTimeout(debounceCheckEmail);
    }, [email]);
    return (
        <div className="spu-container">
            <h1 className="spu-header">Sign Up</h1>
            <form className="spu-form"  onSubmit={handleSubmit}>
                <div className="spu-form-group">
                    <div className="spu-name-group">
                        <div className="spu-half">
                            <label htmlFor="firstname">First Name:</label>
                            <input type="text" value={firstName} onChange={handleFirstNameChange} />
                        </div>
                        <div className="spu-half">
                            <label htmlFor="lastname">Last Name:</label>
                            <input type="text" value={lastName} onChange={handleLastNameChange} />
                        </div>
                    </div>
                </div>

                <div className={`spu-form-group ${emailExists || emailCheckError ? 'highlight-error' : ''}`}>
                    <div className="spu-input-wrapper">
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                        {emailExists && <p className="error-message">Email already exists</p>}
                        {emailCheckError && <p className="error-message">{emailCheckError}</p>}
               
                    </div>
                </div>
                <div className={`spu-form-group ${!passwordsMatch ? 'highlight-error' : ''}`}>
                    <div className="spu-input-wrapper">
                        <label htmlFor="password">Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </div>
                </div>

                <div className={`spu-form-group ${!passwordsMatch ? 'highlight-error' : ''}`}>
                    <div className="spu-input-wrapper">
                        <label htmlFor="confirm_password">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                        />
                    </div>
                </div>
                {!passwordsMatch && <p className="error-message">Passwords do not match!</p>}

                
                <div className="spu-form-group">
                    <div className="spu-name-group">
                        <div className="spu-half">
                            <label htmlFor="gender">Gender:</label>
                            <select value={gender} onChange={handleGenderChange}>
                                <option value="">Choose Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                                <option value="rather_not_to_say">Rather not to say</option>
                            </select>
                        </div>
                        <div className="spu-half">
                            <label htmlFor="dob">Date of Birth:</label>
                            <input type="date" id="dob" name="dob" required />
                        </div>
                    </div>
                </div>

                <div className="spu-form-group">
                    <div className="spu-half">
                        <label htmlFor="role">Role:</label>
                        <select value={role} onChange={handleRoleSelection}>
                            <option value="">Select Role</option>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>
                </div>

                <button id="submit" type="submit" className="spu-submit-btn">
                    Next
                </button>
            </form>
            <p>
                Already have an account? <a href="/services/login">Log in</a>
            </p>
        </div>
    );
};

export default SignupPage;
