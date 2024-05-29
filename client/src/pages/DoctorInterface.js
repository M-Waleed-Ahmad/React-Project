import React, { useState } from 'react';
import DoctorAppointments from '../components/DoctorAppointments';
import DoctorPrescriptions from '../components/DoctorPrescriptions';
import DoctorProfile from '../components/DoctorProfile';
import DoctorConsultations from '../components/DoctorConsultations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/PatientInterface.css';

const PatientDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('appointments');

  return (
    <>
      <Navbar />
      <div className="patient-dashboard">
        <nav className="patient-nav">
          <button onClick={() => setActiveFeature('appointments')}>Appointments</button>
          <button onClick={() => setActiveFeature('prescriptions')}>Prescriptions</button>
          <button onClick={() => setActiveFeature('profile')}>Profile</button>
          <button onClick={() => setActiveFeature('consultations')}>Consultations</button>
           <button onClick={() => console.log('Logging out')}>Logout</button>
        </nav>

        <div className="patient-content">
          {activeFeature === 'appointments' && (
            <div className="patient-feature">
              <DoctorAppointments />
            </div>
          )}
          {activeFeature === 'prescriptions' && (
            <div className="patient-feature">
              <DoctorPrescriptions />
            </div>
          )}
          {activeFeature === 'profile' && (
            <div className="patient-feature">
               <DoctorProfile />
            </div>
          )}
          {activeFeature === 'consultations' && (
            <div className="patient-feature">
               <DoctorConsultations />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientDashboard;
