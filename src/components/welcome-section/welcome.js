import React from "react"
import "./welcome.css"

function WelcomeSection() {
    return (
        <div className="welcome-section">
            <div className="nav-container">
                <div className="logo-container">
                    <img src="/gw-logo.png" className="nav-logo" alt="GraphWitty Logo"></img>
                    <img src="/google-partner.png" className="nav-logo1" alt="Google Partner Logo"></img>
                </div>
                <div className="nav-menu-container">
                    <a href="#about-section" className="nav-menu-items">About</a>
                    <a href="#landing-portfolio-section" className="nav-menu-items">Portfolio</a>
                    <a href="#contact-us" className="nav-menu-items">Work with us</a>
                </div>
            </div>

            <span className="welcome-text">Welcome</span>
            <span className="welcome-scroll-container">

                <img src="/arrow-down.gif" className="scroll-down-gif" />
                <label className="welcome-scroll-text">SWIPE UP</label>
            </span>
            <div className="static-contact-button-container">
                <a href="/contact" className="static-contact-button-bg">
                    <img src="/message.svg" className="static-contact-button" />
                </a>
            </div>
        </div>
    )
}

export default WelcomeSection