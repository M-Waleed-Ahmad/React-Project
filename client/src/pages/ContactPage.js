import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="contact-us">
                <div className="container">
                    <div className='box'>
                        <div className="contact-info">
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
                            <div className="contact-item">
                                <FontAwesomeIcon icon={faClock} className="icon" />
                                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                        <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5513466615735!2d74.30043917389776!3d31.481525749063223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f08ebc7e8b%3A0x47e934f4cd34790!2sFAST%20NUCES%20Lahore!5e0!3m2!1sen!2s!4v1716731606417!5m2!1sen!2s"
                             width="1000" height="350"  allowfullscreen="" loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className='box'>
                    <div>
                        <h3 id='contact-h3'>Frequently Asked Questions</h3>
                        <div className="faq">
                            <h4>How can I reach customer support?</h4>
                            <p>You can reach us via email at support@example.com or call us at +1234567890.</p>
                            <h4>What are your business hours?</h4>
                            <p>We are open from Monday to Friday, 9:00 AM - 6:00 PM.</p>
                        </div>
                    </div>
                    <div>
                        <h3 id='contact-h3'>Leave Us a Message</h3>
                        <form action="/contact" method="post">
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="message" placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactUs;
