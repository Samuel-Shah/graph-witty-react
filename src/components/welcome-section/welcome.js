import React from "react"
import "./welcome.css"

function WelcomeSection() {
    return (
        <div className="welcome-section">
            <div className="nav-container">
                <div className="logo-container">
                    <img src="/gw-logo.png" className="nav-logo" alt="GraphWitty Logo"></img>
                </div>
                <div className="nav-menu-container">
                    <span className="nav-menu-items">About</span>
                    <span className="nav-menu-items">Portfolio</span>
                    <span className="nav-menu-items">Work with us</span>
                </div>
            </div>

            <span className="welcome-text">Welcome</span>
            <span className="welcome-scroll-container">
                <img src="/arrow-down.gif" className="scroll-down-gif" />
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