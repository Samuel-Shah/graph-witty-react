import React from 'react';
import { Link } from 'react-router-dom'
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
                <div className="contact-button-container">
                    <Link className="contact-button">Contact Us<svg className="contact-button-left-arrow" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9068 0.488281L20.9127 9.49399M20.9127 9.49399L11.9068 18.4999M20.9127 9.49399H0.495117" stroke="black" />
                    </svg>
                    </Link>
                </div>
                <div className="contact-section-title-container">
                    <span className="contact-section-title">Get in Touch</span>
                </div>
            </div>
        </>
    );
}

export default ContactSection;