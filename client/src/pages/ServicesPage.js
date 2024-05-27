import React, { useState } from 'react';
import '../styles/ServicesPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import image1 from "../assets/images/2.jpg";
import image2 from "../assets/images/3.jpg";
import image3 from "../assets/images/4.jpg";
import image4 from "../assets/images/5.png";
import image5 from "../assets/images/6.jpg";
import image6 from "../assets/images/7.jpeg";
import image7 from "../assets/images/8.jpeg";
import image8 from "../assets/images/9.jpeg";
import image9 from "../assets/images/10.jpeg";
import image10 from "../assets/images/11.jpeg";

const ServicesPage = () => {
  const servicesData = [
    { id: 1, title: 'Service 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imageUrl: image1, details: 'Detailed view for Service 1' },
    { id: 2, title: 'Service 2', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image2, details: 'Detailed view for Service 2' },
    { id: 3, title: 'Service 3', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image3, details: 'Detailed view for Service 3' },
    { id: 4, title: 'Service 4', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image4, details: 'Detailed view for Service 4' },
    { id: 5, title: 'Service 5', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image5, details: 'Detailed view for Service 5' },
    { id: 6, title: 'Service 6', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image6, details: 'Detailed view for Service 6' },
    { id: 7, title: 'Service 7', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image7, details: 'Detailed view for Service 7' },
    { id: 8, title: 'Service 8', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image8, details: 'Detailed view for Service 8' },
    { id: 9, title: 'Service 9', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image9, details: 'Detailed view for Service 9' },
    { id: 10, title: 'Service 10', description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.', imageUrl: image10, details: 'Detailed view for Service 10' },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openPopup = (service) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedService(null);
    setIsPopupOpen(false);
  };

  return (
    <>
    <Navbar />
    <div className="sp-container">
      <h1 className="sp-header">Our Services</h1>
      <div className="sp-grid">
        {servicesData.map(service => (
          <div key={service.id} className="sp-card">
            <img src={service.imageUrl} alt={service.title} className="sp-image" />
            <div className="sp-content">
              <h2 className="sp-title">{service.title}</h2>
              <p className="sp-description">{service.description}</p>
              <button className="sp-cta-button" onClick={() => openPopup(service)}>Learn More</button>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <div className="sp-popup">
          <div className="sp-popup-content">
            <button className="sp-close-button" onClick={closePopup}>
            <i class="bi bi-x">x</i>
            </button>
            <h2 className="sp-popup-title">{selectedService.title}</h2>
            <p className="sp-popup-details">{selectedService.details}</p>
            <img src={selectedService.imageUrl} alt={selectedService.title} className="sp-popup-image" />
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default ServicesPage;
