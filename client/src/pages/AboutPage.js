import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import missionImage from '../assets/images/mission.jpg';
import visionImage from '../assets/images/mission.jpg';
import historyImage from '../assets/images/history.jpg';
import teamImage from '../assets/images/team.jpg';
import '../styles/About.css';

const AboutUs = () => {
    return (
        <>
            <Navbar />
            <div className="about-page">
                <div className="about-hero">
                    <h1>About Us</h1>
                    <p>Learn more about our company, mission, vision, and team.</p>
                </div>
                
                <div className="about-container">
                    <section className="about-section about-mission">
                        <div className="about-image">
                            <img src={missionImage} alt="Our Mission" />
                        </div>
                        <div className="about-content">
                            <h2>Our Mission</h2>
                            <p>Our mission is to provide top-notch medical services with a team of experienced professionals dedicated to your health and well-being.</p>
                        </div>
                    </section>

                    <section className="about-section about-vision">
                        <div className="about-image">
                            <img src={visionImage} alt="Our Vision" />
                        </div>
                        <div className="about-content">
                            <h2>Our Vision</h2>
                            <p>We envision a world where everyone has access to the highest quality healthcare, delivered with compassion and excellence.</p>
                        </div>
                    </section>

                    <section className="about-section about-history">
                        <div className="about-image">
                            <img src={historyImage} alt="Our History" />
                        </div>
                        <div className="about-content">
                            <h2>Our History</h2>
                            <p>Founded in 2000, Nexus Medica has been at the forefront of healthcare innovation, constantly evolving to meet the needs of our patients.</p>
                        </div>
                    </section>

                    <section className="about-section about-team">
                        <div className="about-image">
                            <img src={teamImage} alt="Our Team" />
                        </div>
                        <div className="about-content">
                            <h2>Meet Our Team</h2>
                            <p>Our dedicated team of doctors, nurses, and support staff are committed to providing you with the best care possible.</p>
                        </div>
                    </section>

                    <section className="about-section about-values">
                        <div className="about-content">
                            <h2>Our Core Values</h2>
                            <ul>
                                <li>Compassion: We care deeply about our patients and strive to provide the most compassionate care.</li>
                                <li>Excellence: We are committed to excellence in everything we do.</li>
                                <li>Innovation: We embrace innovation to improve patient care.</li>
                                <li>Integrity: We act with integrity in all our interactions.</li>
                                <li>Collaboration: We believe in the power of teamwork and collaboration.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AboutUs;
