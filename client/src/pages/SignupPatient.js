import React, { useState } from 'react';
import '../styles/SignupPatient.css';

const PatientSignupPage = () => {
    const [medicalHistoryCount, setMedicalHistoryCount] = useState(1);

    const addMedicalHistoryField = () => {
        setMedicalHistoryCount(medicalHistoryCount + 1);
    };

    return (
        <div className="psp-container">
            <h1 className="psp-header">Your Basic Medical Information</h1>
            <form className="psp-form">
                <div className="psp-form-group">
                    <div className="psp-name-group">
                        <div className="psp-half">
                            <label htmlFor="age">Age:</label>
                            <select id="age" name="age" required>
                                <option value="yourage">Your age</option>
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
                            <input type="number" id="height" name="height" step="0.01" min="0.00" max="2.50" required />
                        </div>
                    </div>
                </div>

                <div className="psp-form-group">
                    <div className="psp-name-group">
                        <div className="psp-half">
                            <label htmlFor="weight">Weight (kg):</label>
                            <select id="weight" name="weight" required>
                                <option value="yourweight">Your weight</option>
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
                            <input type="text" id="allergies" name="allergies" required />
                        </div>
                    </div>
                </div>

                <div className="psp-form-group">
                    <label htmlFor="disease">Disease:</label>
                    <input type="text" id="disease" name="disease" required />
                </div>

                {[...Array(medicalHistoryCount)].map((_, index) => (
                    <div className="psp-form-group" key={index}>
                        <label htmlFor={`medicalHistory${index + 1}`}>Medical History {index + 1}:</label>
                        <textarea id={`medicalHistory${index + 1}`} name="medicalHistory" rows="4" required></textarea>
                        <label htmlFor={`treatment${index + 1}`}>Treatment:</label>
                        <input type="text" id={`treatment${index + 1}`} name="treatment" required />
                    </div>
                ))}

                <button type="button" onClick={addMedicalHistoryField} className="psp-add-more-btn">Add More</button>

                <h2 className="psp-subheader">Emergency Contact Information</h2>
                <div className="psp-form-group">
                    <label htmlFor="contactName">Contact Name:</label>
                    <input type="text" id="contactName" name="contactName" required />
                </div>
                <div className="psp-form-group">
                    <label htmlFor="contactPhoneNumber">Contact Phone Number:</label>
                    <input type="tel" id="contactPhoneNumber" name="contactPhoneNumber" required />
                </div>
                <div className="psp-form-group">
                    <label htmlFor="contactEmail">Contact Email:</label>
                    <input type="email" id="contactEmail" name="contactEmail" required />
                </div>

                <button type="submit" className="psp-submit-btn">Sign Up</button>
            </form>
            <p>Already have an account? <a href="/login">Log in</a></p>
        </div>
    );
};

export default PatientSignupPage;
