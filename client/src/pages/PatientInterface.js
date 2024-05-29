import React, { useState } from 'react';
import PatientAppointments from '../components/PatientAppointments';
import PatientPrescriptions from '../components/PatientPrescriptions';
import PatientProfile from '../components/PatientProfile';
import PatientConsultations from '../components/PatientConsultations';
import PatientSupportCommunity from '../components/PatientSupportCommmunity';
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
          <button onClick={() => setActiveFeature('supportCommunity')}>Support Community</button>
          <button onClick={() => console.log('Logging out')}>Logout</button>
        </nav>

        <div className="patient-content">
          {activeFeature === 'appointments' && (
            <div className="patient-feature">
              <PatientAppointments />
            </div>
          )}
          {activeFeature === 'prescriptions' && (
            <div className="patient-feature">
              <PatientPrescriptions />
            </div>
          )}
          {activeFeature === 'profile' && (
            <div className="patient-feature">
               <PatientProfile />
            </div>
          )}
          {activeFeature === 'consultations' && (
            <div className="patient-feature">
               <PatientConsultations />
            </div>
          )}
          {activeFeature === 'supportCommunity' && (
            <div className="patient-feature">
               <PatientSupportCommunity />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PatientDashboard;
