import React from 'react';
import './PricingSection.css';

const PricingSection = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2>Pricing Plans</h2>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h3>Free</h3>
                        <p>Perfect for small projects and testing.</p>
                        <ul>
                            <li>5 devices included</li>
                            <li>1 user</li>
                            <li>30-day data retention</li>
                        </ul>
                        <button className="btn btn-outline-primary">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3>Standard</h3>
                        <p>Ideal for small to medium businesses.</p>
                        <ul>
                            <li>25 devices included</li>
                            <li>5 users</li>
                            <li>12-month data retention</li>
                        </ul>
                        <button className="btn btn-outline-primary">Choose Plan</button>
                    </div>
                    <div className="pricing-card">
                        <h3>Pro</h3>
                        <p>For growing businesses and advanced IoT projects.</p>
                        <ul>
                            <li>100 devices included</li>
                            <li>20 users</li>
                            <li>24-month data retention</li>
                        </ul>
                        <button className="btn btn-outline-primary">Choose Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;