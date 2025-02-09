import React from 'react';
import { Link } from 'react-router-dom'; // For routing if needed

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-heading">Take Action for a Better Future in Genetic Oncology</h2>
        <p className="cta-description">
          Genetic research is rapidly evolving. Join the movement to support innovative research and
          make a difference in cancer treatment and prevention.
        </p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-button primary-button">
            Contact Us
          </Link>
          <Link to="/research" className="cta-button secondary-button">
            Explore Our Research
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
