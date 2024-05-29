// DoctorAppointments.js

import React, { useState } from 'react';
import '../styles/DoctorInterface.css';

const DoctorAppointments = () => {
    const [appointments, setAppointments] = useState([
        { id: 1, patient: 'John Doe', date: '2024-06-01', time: '10:00 AM', caseDescription: 'Regular checkup' },
        { id: 2, patient: 'Jane Doe', date: '2024-06-02', time: '11:30 AM', caseDescription: 'Follow-up appointment' }
    ]);

    const [showCreateForm, setShowCreateForm] = useState(false);

    const handleCreateAppointment = () => {
        setShowCreateForm(true);
    };

    const handleCancelAppointment = (id) => {
        setAppointments(appointments.filter(appointment => appointment.id !== id));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission and add new appointment
        console.log('Form submitted');
        // Dummy implementation: Add a new appointment to the state
        setAppointments([
            ...appointments,
            {
                id: appointments.length + 1,
                patient: e.target.patient.value,
                date: e.target.date.value,
                time: e.target.time.value,
                caseDescription: e.target.case.value
            }
        ]);
        setShowCreateForm(false);
    };

    return (
        <div className="di-appointments-container">
            <h2 className="di-appointments-heading">Appointments</h2>
            <button className="di-create-appointment-btn" onClick={handleCreateAppointment}>Create Appointment</button>
            {showCreateForm && (
                <form className="di-appointment-form" onSubmit={handleFormSubmit}>
                    <label htmlFor="patient">Patient:</label>
                    <input type="text" id="patient" name="patient" required />
                    <label htmlFor="time">Time:</label>
                    <input type="time" id="time" name="time" required />
                    <label htmlFor="case">Case Description:</label>
                    <input type="text" id="case" name="case" required />
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" required />
                    <button type="submit">Add Appointment</button>
                </form>
            )}
            <div className="di-appointments-list">
                {appointments.length === 0 ? (
                    <p>No appointments scheduled</p>
                ) : (
                    appointments.map((appointment) => (
                        <div key={appointment.id} className="di-appointment">
                            <p><strong>Patient:</strong> {appointment.patient}</p>
                            <p><strong>Date:</strong> {appointment.date}</p>
                            <p><strong>Time:</strong> {appointment.time}</p>
                            <p><strong>Case Description:</strong> {appointment.caseDescription}</p>
                            <button onClick={() => handleCancelAppointment(appointment.id)}>Cancel</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DoctorAppointments;
