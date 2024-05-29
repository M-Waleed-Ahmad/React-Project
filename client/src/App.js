import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';  
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Service from './pages/ServicesPage';
import Doctors from './pages/DoctorsPage';
import Login from './pages/LoginPage';
import Signup from './pages/SignUpUser'
import SignupPatient from './pages/SignupPatient'
import PatientInterface from './pages/PatientInterface'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services/login" element={<Login />} />
        <Route path="/services/signup" element={<Signup />} />
        <Route path="/services/signup/patient" element={<SignupPatient />} />
        <Route path="/patient" element={<PatientInterface />} />
      </Routes>
    </Router>
  );
};

export default App;
