import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <h2>Contact Us</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <p>117 Angle rue de ROME et Bd 2 Mars, Casablanca, Maroc</p>
                        <p>Phone: +212 661 25 71 74</p>
                        <p>Email: contact@internationalits.com</p>
                    </div>
                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;