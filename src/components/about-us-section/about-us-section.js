import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./about-us-section.css"
import AboutCarousel from "../about-carousel/about-carousel";

function AboutUsSection() {
    return (
        <>
            <div className="about-us-section">
                <div className="about-heading-container">
                    <span className="about-bg-opaque-heading"><i>About Us</i></span>
                </div>
                <div className="about-container">
                    <div className="about-inner-container">
                        <div className="about-inner-container-left">
                            <div className="carousel-container">
                                <AboutCarousel />
                            </div>
                        </div>
                        <div className="about-inner-container-right">
                            <div className="about-right-card">
                                <span className="about-card-heading">About Us</span>
                                <span className="about-card-sub-heading"><b>We're bringing more to you at GraphWitty.</b> </span>
                                <span className="about-card-content">
                                    The ones who break through the digital noise are those who make the real difference. At GraphWitty, we are the bridge between the brand and the audience.  We're not just doing digital marketing, we're building the digital divide. We are dedicated to our clients and they will always remain at the core of our business.</span>
                                <div className="more-link-container">
                                    <Link to="" className="more-link">More  &nbsp;<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.26161 0.777588L15.8127 7.32861M15.8127 7.32861L9.26161 13.8797M15.8127 7.32861H0.960388" stroke="black" />
                                    </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsSection;