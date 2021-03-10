import React from "react"
import "./landing-page.css"
import Footer from "../../components/footer/footer"
import ContactSection from "../../components/contact-section/contact-section"
import PortfolioSection from "../../components/portfolio-section/portfolio-section"
import AboutUsSection from "../../components/about-us-section/about-us-section"
import OurServicesSection from "../../components/our-services/our-services"
import VisionSection from "../../components/vision-section/vision-section"
import WelcomeSection from "../../components/welcome-section/welcome"

function LandingPage2() {
    return (
        <>
            <WelcomeSection />
            <VisionSection />
            <OurServicesSection />
            <PortfolioSection />
            <AboutUsSection />
            <ContactSection />
        </>
    )
}

export default LandingPage2;