import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import Home from './components/Home'; // Home component for your landing page
import About from './components/About'; // About page
import CaseStudies from './components/CaseStudies'; // Case Studies page
import Research from './components/Research'; // Research page
import Contact from './components/Contact'; // Contact page
import Hero from './components/Hero'; // Hero section for homepage
import FeaturedResearch from './components/FeaturedResearch'; // Featured Research section
import Testimonials from './components/Testimonials'; // Testimonials section
import CallToAction from './components/CallToAction'; // Call to Action section

const App = () => {
  return (
    <Router>
      {/* Navbar Section */}
      <Navbar />

      {/* Main content area where Routes are rendered */}
      <div className="content">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <FeaturedResearch />
                <Testimonials />
                <CallToAction />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <Footer />
    </Router>
  );
};

export default App;
