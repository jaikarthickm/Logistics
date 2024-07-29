import React from 'react';
import './Faq.css';

function FaqPage() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>

      <div className="faq-section">
        <div className="faq-question">
          <h3>What is LogistiCare?</h3>
          <div className="faq-answer">
            <ul>
              <li>LogistiCare is a comprehensive logistics management platform designed to streamline your business operations.</li>
              <li>Our tools help you manage shipments, track deliveries, and optimize your supply chain efficiently.</li>
            </ul>
          </div>
        </div>

        <div className="faq-question">
          <h3>How can I get started with LogistiCare?</h3>
          <div className="faq-answer">
            <ul>
              <li>Getting started is easy! Sign up on our website by clicking the "Get Started" button.</li>
              <li>Follow the prompts to create your account and set up your business profile.</li>
              <li>You can then access our suite of tools to begin managing your logistics.</li>
            </ul>
          </div>
        </div>

        <div className="faq-question">
          <h3>What features does LogistiCare offer?</h3>
          <div className="faq-answer">
            <ul>
              <li>Real-time shipment tracking</li>
              <li>Automated delivery scheduling</li>
              <li>Comprehensive reporting and analytics</li>
              <li>Seamless integration with existing systems</li>
            </ul>
          </div>
        </div>

        <div className="faq-question">
          <h3>Is there customer support available?</h3>
          <div className="faq-answer">
            <ul>
              <li>Yes, our customer support team is available 24/7 to assist you with any questions or issues.</li>
              <li>You can reach us via phone, email, or live chat on our website.</li>
            </ul>
          </div>
        </div>

        <div className="faq-question">
          <h3>Can I customize LogistiCare to suit my business needs?</h3>
          <div className="faq-answer">
            <ul>
              <li>Absolutely! LogistiCare is designed to be flexible and scalable.</li>
              <li>You can customize features and settings to match your specific logistics requirements.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
