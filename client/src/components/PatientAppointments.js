import React from 'react';
import '../styles/PatientInterface.css';

const PatientAppointments = () => {
    // Dummy data for demonstration
    const appointments = [
        {
            doctorName: 'Dr. Smith',
            case: 'Regular Checkup',
            date: '2024-06-10',
            time: '10:00 AM',
            location: 'Clinic A',
            confirmed: false
        },
        {
            doctorName: 'Dr. Johnson',
            case: 'Dental Cleaning',
            date: '2024-06-15',
            time: '02:30 PM',
            location: 'Dental Clinic',
            confirmed: true
        }
    ];

    const handleConfirm = (index) => {
        // Logic to confirm appointment
    };

    const handleCancel = (index) => {
        // Logic to cancel appointment
    };

    return (
        <div className="PiA-appointments-container">
            <h2>Appointments</h2>
            <div className="PiA-appointment-list">
                {appointments.map((appointment, index) => (
                    <div key={index} className={`PiA-appointment-item ${appointment.confirmed ? 'confirmed' : 'pending'}`}>
                        <div className="PiA-info">
                            <div>
                                <strong>Doctor:</strong> {appointment.doctorName}
                            </div>
                            <div>
                                <strong>Case:</strong> {appointment.case}
                            </div>
                            <div>
                                <strong>Date:</strong> {appointment.date}
                            </div>
                            <div>
                                <strong>Time:</strong> {appointment.time}
                            </div>
                            <div>
                                <strong>Location:</strong> {appointment.location}
                            </div>
                        </div>
                        <div className="PiA-actions">
                            {appointment.confirmed ? (
                                <button className="PiA-cancel-btn" onClick={() => handleCancel(index)}>Cancel</button>
                            ) : (
                                <button className="PiA-confirm-btn" onClick={() => handleConfirm(index)}>Confirm</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientAppointments;
