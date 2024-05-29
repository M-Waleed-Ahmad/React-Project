import React from 'react';
import profileImage from '../assets/images/person.svg';  
import arrow from '../assets/images/arrow-up-right-square.svg';
import '../styles/PatientInterface.css';

const PatientProfile = () => {
    // Dummy data for demonstration
    const profileData = {
        name: 'John Doe',
        age: 30,
        weight: '70 kg',
        height: '175 cm',
        allergies: 'Peanuts, Pollen',
        diseases: 'Hypertension, Diabetes',
        medicalHistory: [
            { history: '2018 - Appendectomy', treatment: 'Surgery' },
            { history: '2015 - Flu', treatment: 'Medication' }
        ],
        emergencyContact: {
            name: 'Jane Doe',
            phoneNumber: '+1234567890',
            email: 'jane@example.com'
        }
    };

    return (
        <div className='pip-main-container'>
                 <div className="patient-profile-container">
            <h1 id='Prof'>Patient Profile</h1>
            <div className="profile-info">
                <div className="profile-image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
                <div className="info-details">
                    <div className='basic-btn'>
                        <h2>Basic Information</h2>
                        <button> <img className='upd' src={arrow} ></img></button>
                    </div>
                    <div className="info-item">
                        <label>Name:</label>
                        <span>{profileData.name}</span>
                    </div>
                    <div className="info-item">
                        <label>Age:</label>
                        <span>{profileData.age}</span>
                    </div>
                    <div className="info-item">
                        <label>Weight:</label>
                        <span>{profileData.weight}</span>
                    </div>
                    <div className="info-item">
                        <label>Height:</label>
                        <span>{profileData.height}</span>
                    </div>
                    <div className="info-item">
                        <label>Allergies:</label>
                        <span>{profileData.allergies}</span>
                    </div>
                    <div className="info-item">
                        <label>Diseases:</label>
                        <span>{profileData.diseases}</span>
                    </div>
                </div>
            </div>

            <div className="medical-history">
                    <div className='basic-btn'>
                        <h2>Medical Information</h2>
                        <button> <img className='upd' src={arrow} ></img></button>
                    </div>
                    <ul className="history-list">
                    {profileData.medicalHistory.map((record, index) => (
                        <li key={index} className="history-item">
                            <div>
                                <span className="history-date">{record.history}</span>
                            </div>
                            <div>
                                <span className="history-treatment">{record.treatment}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="emergency-contact">
                        <div className='basic-btn'>
                        <h2>Emergency Contact Information</h2>
                        <button> <img className='upd' src={arrow} ></img></button>
                    </div>
                    <div className="info-item">
                    <label>Contact Name:</label>
                    <span>{profileData.emergencyContact.name}</span>
                </div>
                <div className="info-item">
                    <label>Contact Phone Number:</label>
                    <span>{profileData.emergencyContact.phoneNumber}</span>
                </div>
                <div className="info-item">
                    <label>Contact Email:</label>
                    <span>{profileData.emergencyContact.email}</span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PatientProfile;
