import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; 2023 IITS IoT Platform. All rights reserved.</p>
                <div className="social-links">
                    <a href="#">LinkedIn</a>
                    <a href="#">Twitter</a>
                    <a href="#">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;