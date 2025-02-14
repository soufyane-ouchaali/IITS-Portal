import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
    return (
        <section className="features-section">
            <div className="container">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3>Universal Connectivity</h3>
                        <p>Support for multiple IoT protocols like LoRaWAN, MQTT, and HTTP.</p>
                    </div>
                    <div className="feature">
                        <h3>Customizable Dashboards</h3>
                        <p>Create interactive dashboards with drag-and-drop widgets.</p>
                    </div>
                    <div className="feature">
                        <h3>Advanced Analytics</h3>
                        <p>Predictive analytics and machine learning for actionable insights.</p>
                    </div>
                    <div className="feature">
                        <h3>Alerts & Notifications</h3>
                        <p>Configure alerts based on thresholds or complex conditions.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;