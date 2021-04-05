import React from 'react';
import './our-services.css';

function OurServicesSection() {

    function displayWebDes(e) {
        document.getElementById("web-design-bg").style.backgroundColor = "#000"
        document.getElementById("web-design").style.display = "none"
        document.getElementById("web-design-hover").style.display = "grid"
    }

    function hideWebDes(e) {
        document.getElementById("web-design-bg").style.backgroundColor = "#FFF"
        document.getElementById("web-design").style.display = "grid"
        document.getElementById("web-design-hover").style.display = "none"
    }

    function displayWebDev(e) {
        document.getElementById("web-dev-bg").style.backgroundColor = "#000"
        document.getElementById("web-dev").style.display = "none"
        document.getElementById("web-dev-hover").style.display = "grid"
    }

    function hideWebDev(e) {
        document.getElementById("web-dev-bg").style.backgroundColor = "#FFF"
        document.getElementById("web-dev").style.display = "grid"
        document.getElementById("web-dev-hover").style.display = "none"
    }

    function displaySmm(e) {
        document.getElementById("smm-bg").style.backgroundColor = "#000"
        document.getElementById("smm").style.display = "none"
        document.getElementById("smm-hover").style.display = "grid"
    }

    function hideSmm(e) {
        document.getElementById("smm-bg").style.backgroundColor = "#FFF"
        document.getElementById("smm").style.display = "grid"
        document.getElementById("smm-hover").style.display = "none"
    }

    function displaySmMan(e) {
        document.getElementById("smman-bg").style.backgroundColor = "#000"
        document.getElementById("smman").style.display = "none"
        document.getElementById("smman-hover").style.display = "grid"
    }

    function hideSmMan(e) {
        document.getElementById("smman-bg").style.backgroundColor = "#FFF"
        document.getElementById("smman").style.display = "grid"
        document.getElementById("smman-hover").style.display = "none"
    }

    return (
        <>
            <div className="our-services-section">
                <div className="our-services-heading-container">
                    <span className="bg-opaque-heading"><i>What We do</i></span>
                </div>
                <div className="services-section-title-container">
                    <span className="services-section-title">Our Services</span>
                </div>
                <div className="services-cards-container">
                    <div className="services-cards-inner-container">
                        <div className="services-cards-row" >
                            <div className="services-card" id="web-design-bg" onMouseEnter={e => { e.preventDefault(); displayWebDes(e) }} onMouseLeave={e => { e.preventDefault(); hideWebDes(e) }}>
                                <div className="services-content" id="web-design">
                                    <img src="/webDesign.png" className="services-image"></img>
                                    <span className="services-title">Web Design</span>
                                </div>
                                <div className="services-content-hover" id="web-design-hover">
                                    <span className="services-title-hover">Web Design</span>
                                    <span className="services-description">We have a team of experts who can create innovative and impactful websites that can become the face of your brand.</span>
                                </div>
                            </div>
                            <div className="services-card" id="web-dev-bg" onMouseEnter={e => { e.preventDefault(); displayWebDev(e) }} onMouseLeave={e => { e.preventDefault(); hideWebDev(e) }}>
                                <div className="services-content" id="web-dev">
                                    <img src="/webDev.png" className="services-image"></img>
                                    <span className="services-title">Web Development</span>
                                </div>
                                <div className="services-content-hover" id="web-dev-hover">
                                    <span className="services-title-hover">Web Development</span>
                                    <span className="services-description">We deliver highly functional, interactive and visually engaging websites and apps that gives your brand’s customers a lasting first impression.</span>
                                </div>
                            </div>
                        </div>
                        <div className="services-cards-row">
                            <div className="services-card" id="smm-bg" onMouseEnter={e => { e.preventDefault(); displaySmm(e) }} onMouseLeave={e => { e.preventDefault(); hideSmm(e) }}>
                                <div className="services-content" id="smm">
                                    <img src="/smm.png" className="services-image"></img>
                                    <span className="services-title">Social Media Marketing</span>
                                </div>
                                <div className="services-content-hover" id="smm-hover">
                                    <span className="services-title-hover">Social Media Marketing</span>
                                    <span className="services-description">Our highly experienced teams understand your brand and it’s need to have the perfect digital presence through campaigns, innovative strategies, posts and ads for social media platforms.</span>
                                </div>
                            </div>
                            <div className="services-card" id="smman-bg" onMouseEnter={e => { e.preventDefault(); displaySmMan(e) }} onMouseLeave={e => { e.preventDefault(); hideSmMan(e) }}>
                                <div className="services-content" id="smman">
                                    <img src="/smman.png" className="services-image"></img>
                                    <span className="services-title">Design</span>
                                </div>
                                <div className="services-content-hover" id="smman-hover">
                                    <span className="services-title-hover">Design</span>
                                    <span className="services-description">We have a team of the best creative designers who can create a beautiful piece of art from a blank canvas, in line with the marketing strategy and positioning of your brand.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className="services-hover-card1" id="services-hover-card1">
                    <div className="services-hover-card-container">
                        <div className="close-icon-container">
                            <img src="/close-icon.svg" className="close-icon" />
                        </div>
                        <div className="services-hover-card">
                            <img src="/ethical.png" className="hover-card-image"></img>
                            <span className="hover-card-heading">Highest Ethical Standards</span>
                            <span className="hover-card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus risus vitae eget blandit imperdiet. Faucibus elit at tristique vitae neque, ipsum suspendisse. Non suspendisse nibh condimentum </span>
                        </div>
                    </div>
                    <div className="pointer-container">
                        <div className="arrow-right1"></div>
                    </div>
                </div> */}

            </div>
        </>
    );
}

export default OurServicesSection;