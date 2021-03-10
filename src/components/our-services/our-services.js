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
                                    <span className="services-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo interdum cursus mi et varius ac diam volutpat, enim. Velit facilisis facilisis diam porta. Aliquet viverra iaculis id sagittis massa in vitae, tempor nunc. Dignissim morbi egestas tempus eu. </span>
                                </div>
                            </div>
                            <div className="services-card" id="web-dev-bg" onMouseEnter={e => { e.preventDefault(); displayWebDev(e) }} onMouseLeave={e => { e.preventDefault(); hideWebDev(e) }}>
                                <div className="services-content" id="web-dev">
                                    <img src="/webDev.png" className="services-image"></img>
                                    <span className="services-title">Web Development</span>
                                </div>
                                <div className="services-content-hover" id="web-dev-hover">
                                    <span className="services-title-hover">Web Development</span>
                                    <span className="services-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo interdum cursus mi et varius ac diam volutpat, enim. Velit facilisis facilisis diam porta. Aliquet viverra iaculis id sagittis massa in vitae, tempor nunc. Dignissim morbi egestas tempus eu. </span>
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
                                    <span className="services-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo interdum cursus mi et varius ac diam volutpat, enim. Velit facilisis facilisis diam porta. Aliquet viverra iaculis id sagittis massa in vitae, tempor nunc. Dignissim morbi egestas tempus eu. </span>
                                </div>
                            </div>
                            <div className="services-card" id="smman-bg" onMouseEnter={e => { e.preventDefault(); displaySmMan(e) }} onMouseLeave={e => { e.preventDefault(); hideSmMan(e) }}>
                                <div className="services-content" id="smman">
                                    <img src="/smman.png" className="services-image"></img>
                                    <span className="services-title">Social Media Management</span>
                                </div>
                                <div className="services-content-hover" id="smman-hover">
                                    <span className="services-title-hover">Social Media Management</span>
                                    <span className="services-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo interdum cursus mi et varius ac diam volutpat, enim. Velit facilisis facilisis diam porta. Aliquet viverra iaculis id sagittis massa in vitae, tempor nunc. Dignissim morbi egestas tempus eu. </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default OurServicesSection;