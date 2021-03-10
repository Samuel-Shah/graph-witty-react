import React from 'react';
import './portfolio-section.css';

function PortfolioSection() {
    return (
        <>
            <div className="portfolio-section" id="portfolio">
                <div className="heading-container">
                    <span className="bg-opaque-heading"><i>Portfolio</i></span>
                </div>
                <div className="portfolio-images-container">
                    <img className="portfolio-preview-image" src="/ncp.jpg"></img>
                    <img className="portfolio-preview-image" src="/rsn.jpg"></img>
                </div>
                <br></br>
                <div className="portfolio-images-container">
                    <img className="portfolio-preview-image" src="/fitmap.jpg"></img>
                    <img className="portfolio-preview-image" src="/tgo.jpg"></img>
                </div>
                <div className="portfolio-section-title-container">
                    <span className="portfolio-section-title">Explore Projects</span>
                </div>
            </div>
        </>
    );
}

export default PortfolioSection;