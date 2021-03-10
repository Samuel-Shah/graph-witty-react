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
        </div>
    )
}

export default WelcomeSection