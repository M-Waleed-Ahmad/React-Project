import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/DoctorsPage.css';
import imag1 from '../assets/Contact.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DoctorsPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get('http://localhost/api/doctors');
                setDoctors(response.data.doctors);
                setCount(response.data.count[0].ApprovedDoctorsCount);
            } catch (error) {
                console.error('Error fetching the doctors data:', error);
            }
        };

        fetchDoctors();
    }, []);

    return (
        <>
            <Navbar />
            <div className="dp-container">
                <h1 className="dp-header">Our Doctors</h1>
                <h2 className="dp-count">Total Approved Doctors: {count}</h2>
                <p className="dp-intro">Meet our team of highly qualified doctors. We are here to provide you with the best medical care.</p>
                <div className="dp-grid">
                    {doctors.map(doctor => (
                        <div key={doctor.DoctorId} className="dp-card">
                            <img src={imag1} alt={doctor.DoctorId} className="dp-image" />
                            <div className="dp-content">
                                <h2 className="dp-name">{doctor.FirstName + " " + doctor.LastName}</h2>
                                <p className="dp-specialty"><strong>Specialization:</strong> {doctor.Specialization}</p>
                                <p className="dp-qualification"><strong>Qualification:</strong> {doctor.Qualification}</p>
                                <p className="dp-license"><strong>License No:</strong> {doctor.LicenseNo}</p>
                                <p className="dp-institute"><strong>Institute:</strong> {doctor.Institute}</p>
                                <p className="dp-experience"><strong>Experience:</strong> {doctor.Experience} years</p>
                                <p className="dp-language"><strong>Language:</strong> {doctor.Language}</p>
                                <div className='cons'>
                                <button className="dp-cons-button">Consult</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DoctorsPage;
