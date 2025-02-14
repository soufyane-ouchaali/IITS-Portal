import React from 'react';
import './ResourcesSection.css';
import { FaBook, FaCode, FaVideo, FaChalkboardTeacher } from 'react-icons/fa'; // Icons for each resource

const ResourcesSection = () => {
    return (
        <section className="resources-section">
            <div className="container">
                <h2>Resources</h2>
                <div className="resources-grid">
                    <div className="resource-card">
                        <div className="resource-icon">
                            <FaBook size={40} />
                        </div>
                        <h3>Documentation</h3>
                        <p>Comprehensive guides and manuals to help you get started.</p>
                        <button className="btn btn-outline-primary">View Docs</button>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">
                            <FaCode size={40} />
                        </div>
                        <h3>API</h3>
                        <p>Integrate IITS IoT Platform with your existing systems using our powerful APIs.</p>
                        <button className="btn btn-outline-primary">Explore API</button>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">
                            <FaVideo size={40} />
                        </div>
                        <h3>Tutorials</h3>
                        <p>Step-by-step video tutorials to master the platform.</p>
                        <button className="btn btn-outline-primary">Watch Tutorials</button>
                    </div>
                    <div className="resource-card">
                        <div className="resource-icon">
                            <FaChalkboardTeacher size={40} />
                        </div>
                        <h3>Webinars</h3>
                        <p>Join live sessions with our experts to learn more about IoT solutions.</p>
                        <button className="btn btn-outline-primary">Register Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;