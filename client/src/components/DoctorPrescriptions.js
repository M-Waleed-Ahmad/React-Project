// DoctorPrescriptions.js

import React from 'react';
import '../styles/DoctorInterface.css';

const DoctorPrescriptions = () => {
    const prescriptions = [
        {
            id: 1,
            patientName: 'John Doe',
            medication: 'Aspirin',
            dosage: '100mg',
            frequency: 'Twice daily',
            duration: '7 days',
            notes: 'Take with food'
        },
        {
            id: 2,
            patientName: 'Jane Doe',
            medication: 'Paracetamol',
            dosage: '500mg',
            frequency: 'Once daily',
            duration: '5 days',
            notes: 'Take on an empty stomach'
        }
    ];

    return (
        <div className="di-prescriptions-container">
            <h2 className="di-prescriptions-heading">Prescriptions</h2>
            <div className="di-prescriptions-list">
                {prescriptions.map(prescription => (
                    <div key={prescription.id} className="di-prescription">
                        <p><strong>Patient Name:</strong> {prescription.patientName}</p>
                        <p><strong>Medication:</strong> {prescription.medication}</p>
                        <p><strong>Dosage:</strong> {prescription.dosage}</p>
                        <p><strong>Frequency:</strong> {prescription.frequency}</p>
                        <p><strong>Duration:</strong> {prescription.duration}</p>
                        <p><strong>Notes:</strong> {prescription.notes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorPrescriptions;
