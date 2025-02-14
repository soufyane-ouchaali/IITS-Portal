import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <h2>About Us</h2>
                <p>
                    IITS IoT is a leading provider of IoT solutions, empowering businesses to transform their operations with connected devices and data-driven insights. Our mission is to democratize IoT by providing a powerful, intuitive, and secure platform for businesses of all sizes.
                </p>
                <div className="values-grid">
                    <div className="value">
                        <h3>Innovation</h3>
                        <p>We constantly push the boundaries of IoT technology to deliver cutting-edge solutions.</p>
                    </div>
                    <div className="value">
                        <h3>Simplicity</h3>
                        <p>We make IoT accessible to everyone with user-friendly tools and interfaces.</p>
                    </div>
                    <div className="value">
                        <h3>Security</h3>
                        <p>We prioritize the protection of your data with robust security measures.</p>
                    </div>
                    <div className="value">
                        <h3>Sustainability</h3>
                        <p>We are committed to using IoT to create a more sustainable future.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;