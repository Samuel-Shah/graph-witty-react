import React from "react";
import { useState, useEffect } from "react";

import "./contact-page.css";

function ContactPage() {

    const [name, setName] = useState('');
    const [contact, setContact] = useState(0);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function submitContactForm() {
        alert('Thank you for your submission')
        fetch('http://graphwitty.com:3000/contact-form/send', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name: name,
                    email: email,
                    contact: contact,
                    message: message
                }
            ),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="contact-page">
            <div className="portfolio-logos-container">
                <img id="gw-logo" className="gw-logo" src="gw-logo.png" />
                <img id="gw-logo" className="gp-logo" src="/google-partner.png" />
            </div>
            <div className="contact-page-inner">
                <div className="contact-page-card">
                    <div className="contact-page-card-heading">Get In Touch!</div>
                    <br />
                    <input className="contact-page-card-input" placeholder="Name" onChange={e => { e.preventDefault(); setName(e.target.value) }} />
                    <br />
                    <div className="contact-page-card-dual-row">
                        <input className="contact-page-card-input-dual" placeholder="Contact Number" onChange={e => { e.preventDefault(); setContact(e.target.value) }} />
                        <input className="contact-page-card-input-dual" placeholder="Email Address" onChange={e => { e.preventDefault(); setEmail(e.target.value) }} />
                    </div>
                    <textarea className="contact-page-card-text-area" placeholder="Your Message" onChange={e => { e.preventDefault(); setMessage(e.target.value) }} />
                    <div className="contact-page-card-button-container">
                        <button className="contact-page-submit-button" onClick={submitContactForm}>SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>)
}

export default ContactPage;