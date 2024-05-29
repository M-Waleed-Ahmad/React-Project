import React, {  useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/SignupPatient.css';

const PatientSignupPage = () => {
    const [medicalHistory, setMedicalHistory] = useState([{ history: '', treatment: '' }]);
    const [contactName, setContactName] = useState('');
    const [contactPhoneNumber, setContactPhoneNumber] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [allergies, setAllergies] = useState('');
    const [disease, setDisease] = useState('');
    const Navigate=useNavigate();

    const handlecontactName = (event) => setContactName(event.target.value);
    const handlecontactPhoneNumber = (event) => setContactPhoneNumber(event.target.value);
    const handlecontactEmail = (event) => setContactEmail(event.target.value);
    const handleAge = (event) => setAge(event.target.value);
    const handleHeight = (event) => setHeight(event.target.value);
    const handleWeight = (event) => setWeight(event.target.value);
    const handleAllergies = (event) => setAllergies(event.target.value);
    const handleDisease = (event) => setDisease(event.target.value);

    const handleMedicalHistoryChange = (index, field, value) => {
        const updatedMedicalHistory = medicalHistory.map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        );
        setMedicalHistory(updatedMedicalHistory);
    };

    const addMedicalHistoryField = () => {
        setMedicalHistory([...medicalHistory, { history: '', treatment: '' }]);
    };

    const handlePatient = (event) => {
        event.preventDefault();
        const formData = localStorage.getItem('formData');
        const parsedFormData = JSON.parse(formData);

        const medicalData = {
            age,
            height,
            weight,
            allergies,
            disease,
            medicalHistory,
            contactName,
            contactPhoneNumber,
            contactEmail
        };

        submitData({ ...parsedFormData, ...medicalData });
        localStorage.removeItem('formData');
        console.log('Form submitted');
    };

    const submitData = async (data) => {
        try {
            const response = await fetch('http://localhost/api/patient/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else if(response.status === 200) {
                Navigate('/patient');
            }
        } catch (error) {
            console.error('Error signing up:', error);
        }
    };

    return (
        <div className="psp-container">
            <h1 className="psp-header">Your Basic Medical Information</h1>
            <form className="psp-form" onSubmit={handlePatient}>
                <div className="psp-form-group">
                    <div className="psp-name-group">
                        <div className="psp-half">
                            <label htmlFor="age">Age:</label>
                            <select value={age} onChange={handleAge} required>
                                <option value="">Your age</option>
                                <option value="infant">Infant</option>
                                <option value="onetoten">1-10</option>
                                <option value="evltotwn">11-20</option>
                                <option value="twn1tothir">21-30</option>
                                <option value="thir1tofor">31-40</option>
                                <option value="for1tofif">41-50</option>
                                <option value="fif1tosixt">51-60</option>
                                <option value="six1tosevn">61-70</option>
                                <option value="aboveseventy">70 above</option>
                            </select>
                        </div>
                        <div className="psp-half">
                            <label htmlFor="height">Height (meters):</label>
                            <input type="number" value={height} onChange={handleHeight} step="0.01" min="0.00" max="2.50" required />
                        </div>
                    </div>
                </div>

                <div className="psp-form-group">
                    <div className="psp-name-group">
                        <div className="psp-half">
                            <label htmlFor="weight">Weight (kg):</label>
                            <select value={weight} onChange={handleWeight} required>
                                <option value="">Your weight</option>
                                <option value="onetoten">1-10</option>
                                <option value="evltotwn">11-20</option>
                                <option value="twn1tothir">21-30</option>
                                <option value="thir1tofor">31-40</option>
                                <option value="for1tofif">41-50</option>
                                <option value="fif1tosixt">51-60</option>
                                <option value="six1tosevn">61-70</option>
                                <option value="sevn1toeig">71-80</option>
                                <option value="eig1tonin">81-90</option>
                                <option value="nin1tohun">91-100</option>
                                <option value="abovehun">100 above</option>
                            </select>
                        </div>
                        <div className="psp-half">
                            <label htmlFor="allergies">Allergies:</label>
                            <input type="text" value={allergies} onChange={handleAllergies} required />
                        </div>
                    </div>
                </div>

                <div className="psp-form-group">
                    <label htmlFor="disease">Disease:</label>
                    <input type="text" value={disease} onChange={handleDisease} required />
                </div>

                {medicalHistory.map((item, index) => (
                    <div className="psp-form-group" key={index}>
                        <label htmlFor={`medicalHistory${index + 1}`}>Medical History {index + 1}:</label>
                        <textarea
                            id={`medicalHistory${index + 1}`}
                            name="medicalHistory"
                            rows="4"
                            value={item.history}
                            onChange={(e) => handleMedicalHistoryChange(index, 'history', e.target.value)}
                            required
                        ></textarea>
                        <label htmlFor={`treatment${index + 1}`}>Treatment:</label>
                        <input
                            type="text"
                            id={`treatment${index + 1}`}
                            name="treatment"
                            value={item.treatment}
                            onChange={(e) => handleMedicalHistoryChange(index, 'treatment', e.target.value)}
                            required
                        />
                    </div>
                ))}

                <button type="button" onClick={addMedicalHistoryField} className="psp-add-more-btn">Add More</button>

                <h2 className="psp-subheader">Emergency Contact Information</h2>
                <div className="psp-form-group">
                    <label htmlFor="contactName">Contact Name:</label>
                    <input type="text" value={contactName} onChange={handlecontactName} required />
                </div>
                <div className="psp-form-group">
                    <label htmlFor="contactPhoneNumber">Contact Phone Number:</label>
                    <input type="tel" value={contactPhoneNumber} onChange={handlecontactPhoneNumber} required />
                </div>
                <div className="psp-form-group">
                    <label htmlFor="contactEmail">Contact Email:</label>
                    <input type="email" value={contactEmail} onChange={handlecontactEmail} required />
                </div>

                <button type="submit" className="psp-submit-btn">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    );
};

export default PatientSignupPage;
