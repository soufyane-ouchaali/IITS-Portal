import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <h1>Transform Your IoT Data into Actionable Insights</h1>
                <p>IITS IoT Platform is a comprehensive solution for managing sensors, smart meters, and connected devices. Monitor, analyze, and optimize your IoT infrastructure with ease.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </section>
    );
};

export default HeroSection;