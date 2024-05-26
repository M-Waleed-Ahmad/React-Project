import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-column">
                        <h3>Services</h3>
                        <hr />
                        <ul>
                            <li>Service 1</li>
                            <li>Service 2</li>
                            <li>Service 3</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Features</h3>
                        <hr />
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 2</li>
                            <li>Feature 3</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Platforms</h3>
                        <hr />
                        <ul>
                            <li>Platform 1</li>
                            <li>Platform 2</li>
                            <li>Platform 3</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <hr />
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} className="icon" />
                            <span>info@example.com</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faPhone} className="icon" />
                            <span>+1234567890</span>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                            <span>123 Street, City, Country</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-social">
                <h3>Follow Us</h3>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faFacebookF} className="icon" />
                    <FontAwesomeIcon icon={faTwitter} className="icon" />
                    <FontAwesomeIcon icon={faInstagram} className="icon" />
                </div>
                <div className="footer-bottom">
                   <p>&copy; 2024 Nexus Medica. All Rights Reserved.</p>
                  </div>
            </div>
       
        </>
    );
}

export default Footer;
