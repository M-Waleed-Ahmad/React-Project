import React, { useState } from 'react';
import '../styles/DoctorInterface.css';

const DoctorConsultationsPage = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [newMessage, setNewMessage] = useState('');

    // Dummy data for demonstration
    const patients = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' }
    ];

    const chatHistory = {
        1: [
            { sender: 'patient', message: 'Hello, Doctor.' },
            { sender: 'doctor', message: 'Hi John! How can I assist you today?' }
        ],
        2: [
            { sender: 'patient', message: 'Good morning, Doctor.' },
            { sender: 'doctor', message: 'Good morning, Jane. How are you feeling today?' }
        ]
    };

    const handleSelectPatient = (patientId) => {
        setSelectedPatient(patientId);
    };

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const updatedChatHistory = { ...chatHistory };
            updatedChatHistory[selectedPatient].push({ sender: 'doctor', message: newMessage });
            setNewMessage('');
            // Update the chat history with the new message
            // In a real application, you would also send the message to the server here
        }
    };

    return (
        <div className="di-consultations-page">
            <h2>Consultations</h2>
            <div className="di-patient-list">
                <h3>Patients in Contact</h3>
                {patients.map((patient) => (
                    <div
                        key={patient.id}
                        className={`di-patient-item ${selectedPatient === patient.id ? 'selected' : ''}`}
                        onClick={() => handleSelectPatient(patient.id)}
                    >
                        {patient.name}
                    </div>
                ))}
            </div>

            {selectedPatient && (
                <div className="di-chat-container">
                    <h3>Chat with {patients.find((pat) => pat.id === selectedPatient).name}</h3>
                    <div className="di-chat-history">
                        {chatHistory[selectedPatient].map((chat, index) => (
                            <div
                                key={index}
                                className={`di-chat-message ${chat.sender}`}
                            >
                                {chat.message}
                            </div>
                        ))}
                    </div>
                    <div className="di-chat-input">
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

export default DoctorConsultationsPage;
