import React from 'react';
import './contact-section.css';

function ContactSection() {
    return (
        <>
            <div className="contact-section">
                <div className="heading-container">
                    <span className="bg-opaque-heading"><i>Contact</i></span>
                </div>
                <div className="section-content">
                    <div className="content-container-sec">
                        <span className="contact-content">Have a question or need directions? We’re here to help you get to the right place.</span>
                    </div>
                </div>
                <div className="contact-section-title-container">
                    <span className="contact-section-title">Get in Touch</span>
                </div>
            </div>
        </>
    );
}

export default ContactSection;