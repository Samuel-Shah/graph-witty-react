import React from 'react';
import { Link } from 'react-router-dom'
import './portfolio-section.css';

function PortfolioSection() {
    return (
        <>
            <div className="landing-portfolio-section" id="portfolio">
                <div className="portfolio-section-heading-container">
                    <span className="portfolio-bg-opaque-heading"><i>Portfolio</i></span>
                </div>
                <div className="portfolio-inner-container">
                    <div className="portfolio-images-container">
                        <img className="portfolio-preview-image" src="/ncp.jpg"></img>
                        <img className="portfolio-preview-image" src="/rsn.jpg"></img>
                    </div>
                    <br></br>
                    <div className="portfolio-images-container closer-portfolio">
                        <img className="portfolio-preview-image" src="/fitmap.jpg"></img>
                        <img className="portfolio-preview-image" src="/tgo.jpg"></img>
                    </div>
                    <div className="portfolio-button-container">
                        <Link to="/portfolio" className="portfolio-button">View Portfolio<svg className="contact-button-left-arrow" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9068 0.488281L20.9127 9.49399M20.9127 9.49399L11.9068 18.4999M20.9127 9.49399H0.495117" stroke="black" />
                        </svg>
                        </Link>
                    </div>
                </div>

                <div className="portfolio-section-title-container">
                    <span className="portfolio-section-title">Explore Projects</span>
                </div>
            </div>
        </>
    );
}

export default PortfolioSection;