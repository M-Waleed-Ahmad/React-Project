// src/pages/CoverPage.js

import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import contactImage from '../assets/Contact.jpg';
import Footer from '../components/Footer';
import '../styles/CoverPage.css';
function CoverPage() {
  return (
    <>
    <Navbar />
    <section class="hero">
        <div class="container">
            <h1>Welcome to Nexus Medica</h1>
            <p>Your Health, Our Priority</p>
            <a href="/services" class="cta-button">Learn More</a>
        </div>
    </section>

    <section class="introduction">
        <div class="container">
            <p>At Nexus Medica, we provide top-notch medical services with a team of experienced professionals dedicated to your health and well-being.</p>
        </div>
    </section>

    <section class="testimonials">
        <div class="container">
            <h2>What Our Patients Say</h2>
            <div class="testimonial">
                <p>"Nexus Medica has transformed my life with their exceptional care!" - John Doe</p>
            </div>
        </div>
    </section>

    <Services />
    <section class="about-us">
        <div class="container">
            <h2>About Us</h2>
            <p>Nexus Medica was founded with the mission to provide high-quality medical care to our community.</p>
        </div>
    </section>

    <section className="contact-section">
            <div className="container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Need to Contact Us?</h2>
                        <p>If you have any questions or need assistance, feel free to get in touch with us.</p>
                        <button className="contact-button">Contact Us</button>
                    </div>
                    <div className="contact-image">
                        <img src={contactImage} alt="Contact Us" />
                    </div>
                </div>
            </div>
        </section>
    <Footer />
    </>
  );
}

export default CoverPage;
