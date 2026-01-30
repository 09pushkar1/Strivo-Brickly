import React from 'react';
import Navbar from '../Components/NavBar';
import Hero from '../Components/Hero';
import TrustedBy from '../Components/TrustedBy';
import Problems from '../Components/Problems';
import Features from '../Components/Features';
import HowItWorks from '../Components/HowItWorks';
import WhyChooseUs from '../Components/WhyChooseUs';
import Testimonials from '../Components/Testimonials';
import CTA from '../Components/Cta.jsx';
import Footer from '../Components/Footer.jsx';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Problems />
      <Features />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;