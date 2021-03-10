import React from "react"
import "./landing-page.css"
import Footer from "../../components/footer/footer"
import Nav from "../../components/nav/nav"
import ContactSection from "../../components/contact-section/contact-section"
import PortfolioSection from "../../components/portfolio-section/portfolio-section"
import AboutUsSection from "../../components/about-us-section/about-us-section"
import OurServicesSection from "../../components/our-services/our-services"
import VisionSection from "../../components/vision-section/vision-section"

function LandingPage2() {
    return (
        <>
            <Nav />
            <VisionSection />
            <PortfolioSection />
            <OurServicesSection />
            <AboutUsSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default LandingPage2