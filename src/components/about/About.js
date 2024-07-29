import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About JK Logistics</h1>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-heading">Our Journey</h2>
          <p className="about-text">
            Founded in 2020 amidst the COVID-19 pandemic, JK Logistics has quickly become a trusted name in delivery services. We aim to bridge the gap between businesses and consumers, ensuring essential items are delivered safely and efficiently.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-heading">Our Vision</h2>
          <p className="about-text">
            We strive to provide a seamless and convenient delivery experience, making it effortless for households and businesses to send and receive parcels with speed and reliability.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-heading">What We Offer</h2>
          <p className="about-text">
            JK Logistics offers a variety of delivery options, including Express Delivery for urgent needs and Budget Delivery for cost-effective solutions, catering to diverse customer requirements.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-content">
          <h2 className="about-heading">Innovative Solutions</h2>
          <p className="about-text">
            Utilizing advanced technology, we provide both online and offline services with real-time tracking, ensuring transparency and reliability throughout the delivery process.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
