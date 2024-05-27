import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage'; // Example page components
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import Service from './pages/ServicesPage';
import Doctors from './pages/DoctorsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Service />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
    </Router>
  );
};

export default App;
