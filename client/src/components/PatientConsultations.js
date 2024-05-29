import React, { useState } from 'react';
import '../styles/PatientInterface.css';

const ConsultationsPage = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    // Dummy data for demonstration
    const doctors = [
        { id: 1, name: 'Dr. John Smith' },
        { id: 2, name: 'Dr. Sarah Johnson' }
    ];

    const chatHistory = {
        1: [
            { sender: 'doctor', message: 'Hello, how are you feeling today?' },
            { sender: 'patient', message: 'I am feeling better, thank you!' }
        ],
        2: [
            { sender: 'doctor', message: 'Did you take your medication?' },
            { sender: 'patient', message: 'Yes, I did.' }
        ]
    };

    const handleSelectDoctor = (doctorId) => {
        setSelectedDoctor(doctorId);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const updatedChatHistory = { ...chatHistory };
            updatedChatHistory[selectedDoctor].push({ sender: 'patient', message: newMessage });
            setNewMessage('');
            // Update the chat history with the new message
            // In a real application, you would also send the message to the server here
        }
    };

    return (
        <div className="patientsp-consultations-page">
            <h2>Consultations</h2>
            <div className="new-doctor-message">
                To chat with a new doctor, please visit the <a href="/doctors">Doctors Page</a>.
            </div>
            <div className="patientsp-doctor-list">
                <h3>Doctors in Contact</h3>
                {doctors.map((doctor) => (
                    <div
                        key={doctor.id}
                        className={`patientsp-doctor-item ${selectedDoctor === doctor.id ? 'selected' : ''}`}
                        onClick={() => handleSelectDoctor(doctor.id)}
                    >
                        {doctor.name}
                    </div>
                ))}
            </div>

            {selectedDoctor && (
                <div className="patientsp-chat-container">
                    <h3>Chat with {doctors.find((doc) => doc.id === selectedDoctor).name}</h3>
                    <div className="patientsp-chat-history">
                        {chatHistory[selectedDoctor].map((chat, index) => (
                            <div
                                key={index}
                                className={`patientsp-chat-message ${chat.sender === 'patient' ? 'sent' : 'received'}`}
                            >
                                {chat.message}
                            </div>
                        ))}
                    </div>
                    <div className="patientsp-chat-input">
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="Type your message here..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConsultationsPage;
