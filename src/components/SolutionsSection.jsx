import React from 'react';
import './SolutionsSection.css';
import { FaIndustry, FaCity, FaSeedling, FaSolarPanel } from 'react-icons/fa'; // Icons for each solution

const SolutionsSection = () => {
    return (
        <section className="solutions-section">
            <div className="container">
                <h2>Industry-Specific Solutions</h2>
                <div className="solutions-grid">
                    {/* Row 1 */}
                    <div className="solution-row">
                        <div className="solution-card">
                            <div className="solution-icon">
                                <FaIndustry size={40} />
                            </div>
                            <h3>Industry 4.0</h3>
                            <p>Transform your factory into a smart, connected facility with real-time monitoring and predictive maintenance.</p>
                            <button className="btn btn-outline-primary">Learn More</button>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">
                                <FaCity size={40} />
                            </div>
                            <h3>Smart Cities</h3>
                            <p>Create smarter, sustainable cities with intelligent traffic management and optimized public services.</p>
                            <button className="btn btn-outline-primary">Learn More</button>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="solution-row">
                        <div className="solution-card">
                            <div className="solution-icon">
                                <FaSeedling size={40} />
                            </div>
                            <h3>Agriculture</h3>
                            <p>Optimize your crops with precision farming and data-driven decision-making.</p>
                            <button className="btn btn-outline-primary">Learn More</button>
                        </div>
                        <div className="solution-card">
                            <div className="solution-icon">
                                <FaSolarPanel size={40} />
                            </div>
                            <h3>Energy Management</h3>
                            <p>Reduce energy costs and improve efficiency with real-time monitoring and smart building solutions.</p>
                            <button className="btn btn-outline-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;