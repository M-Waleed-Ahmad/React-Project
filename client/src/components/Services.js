import React from "react";
import { useState } from "react";
import "../styles/Services.css";

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

const Services = () => { 

    const servicesData = [
        {
          id: 1,
          title: 'Service 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          imageUrl: image1,
        },
        {
          id: 2,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image2,
        },
        {
          id: 3,
          title: 'Service 3',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image3,
        },
        {
          id: 4,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image4,
        },
        {
          id: 5,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image5,
        },
        {
          id: 6,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image6,
        },
        {
          id: 7,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image7,
        },
        {
          id: 8,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image8,
        },
        {
          id: 9,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image9,
        },
        {
          id: 10,
          title: 'Service 2',
          description: 'Suspendisse commodo urna eu nisl aliquam, a fringilla arcu gravida.',
          imageUrl: image10,
        },
        // Add more services as needed
      ];
    
      const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
    
      const goToPreviousService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === 0 ? servicesData.length - 1 : prevIndex - 1));
      };
    
      const goToNextService = () => {
        setCurrentServiceIndex((prevIndex) => (prevIndex === servicesData.length - 1 ? 0 : prevIndex + 1));
      };
    
      return (
        <>
        <h2 id="h">Our Services</h2>
        <div className="service">
          <div className="ct1">
            <h2>{servicesData[currentServiceIndex].title}</h2>
            <p>{servicesData[currentServiceIndex].description}</p>
            <a href="/services.html" class="cta-button">Learn More</a>
          </div>
          <img src={servicesData[currentServiceIndex].imageUrl} alt={servicesData[currentServiceIndex].title} />
        </div>
        <div className='btn-container'>
         <button onClick={goToPreviousService}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
          </svg>
         </button>
         <a href="/services.html" class="cta-button">View All Services</a>
         <button onClick={goToNextService}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
          </svg>
         </button>
        </div>
        
        </>
      );
    };
    
    export default Services;