import React, { useEffect,useState } from "react"
import "./landing-page.css"
import Footer from "../../components/footer/footer"
import ContactSection from "../../components/contact-section/contact-section"
import PortfolioSection from "../../components/portfolio-section/portfolio-section"
import AboutUsSection from "../../components/about-us-section/about-us-section"
import OurServicesSection from "../../components/our-services/our-services"
import VisionSection from "../../components/vision-section/vision-section"
import WelcomeSection from "../../components/welcome-section/welcome"

function LandingPage2() {

    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const onScroll = e => {
          setScrollTop(e.target.documentElement.scrollTop);
            console.log(e.target.documentElement.scrollTop)
            if(e.target.documentElement.scrollTop>1000){
                document.getElementById('vision-section').style.opacity="1"

            }
        };
        window.addEventListener("scroll", onScroll);
    
        return () => window.removeEventListener("scroll", onScroll);
      }, [scrollTop]);

    return (
        <div id="landing">
            <WelcomeSection />
            <VisionSection/>
            <OurServicesSection />
            <PortfolioSection />
            <AboutUsSection />
            <ContactSection />
        </div>
    )
}

export default LandingPage2;