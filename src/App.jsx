import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import SolutionsSection from './components/SolutionsSection';
import ResourcesSection from './components/ResourcesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <SolutionsSection />
      <ResourcesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;