// DoctorProfile.js

import React from 'react';
import '../styles/DoctorInterface.css';
import person from '../assets/images/person.svg';

const DoctorProfile = () => {
    const data = {
        FirstName: "Dr. John",
        Specialization: "Cardiologist",
        AdminsApproval: "Approved",
        Qualification: "MBBS, MD",
        Patients: [
            {
                FirstName: "John",
                LastName: "Doe",
                Age: 25,
                MedicalHistory: "Heart Attack",
                Treatment: "Medication"
            },
            {
                FirstName: "Jane",
                LastName: "Doe",
                Age: 25,
                MedicalHistory: "Heart Attack",
                Treatment: "Medication"
            }
        ]
    };

    return (
        <div className="di-profile-container">
            <div className='di-div'>
                <div className="di-profile">
                    <div className="di-profile-image-container">
                        <img src={person} alt="Profile Picture" className="di-profile-image" />
                    </div>
                    <div className="di-profile-info">
                        <h2 className="di-profile-name">{data.FirstName}</h2>
                        <p><strong>Specialization:</strong> {data.Specialization}</p>
                        <p><strong>Qualification:</strong> {data.Qualification}</p>
                        <p><strong>Approval:</strong> {data.AdminsApproval}</p>
                    </div>
                </div>
            </div>
            <div className="di-patients-container">
                <h2 className="di-patients-heading">Your Patients</h2>
                {data.Patients.length === 0 ? (
                    <p>You have no patients</p>
                ) : (
                    <div className="di-patients-list">
                        {data.Patients.map((patient, index) => (
                            <div key={index} className="di-patient">
                                <h3 className="di-patient-name">{patient.FirstName} {patient.LastName}</h3>
                                <p><strong>Age:</strong> {patient.Age}</p>
                                <p><strong>Medical History:</strong> {patient.MedicalHistory}</p>
                                <p><strong>Treatment:</strong> {patient.Treatment}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DoctorProfile;
