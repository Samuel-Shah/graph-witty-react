import React from "react"
import { useState, useEffect } from "react"
import "./footer.css"

function Footer() {
    useEffect(() => {
        const existingScript = document.getElementById("googleMaps");

        if (!existingScript) {
            const script = document.createElement("script");
            script.src =
                "https://maps.googleapis.com/maps/api/js?key=AIzaSyCr7Xc7zyE1sOBe3GmLouPlp6P1_KrI9so&libraries=places";
            script.id = "googleMaps";
            script.async = true;

            document.body.appendChild(script);

            script.onload = () => {
                initMap();
            };
        }

        if (existingScript) initMap();
    }, []);

    function initMap() {
        var google = window.google;
        const myLatLng = { lat: 17.427989, lng: 78.446455 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: myLatLng
        });
        new google.maps.Marker({
            position: myLatLng,
            map,
            title: "Hello World!"
        });
    }

    return (
        <>
            <div className="footer-container">
                <div className="footer-area">
                    <div className="footer-area-1">
                        <span className="footer-area-title">Company</span>
                        <span className="footer-area-item">Blog</span>
                        <span className="footer-area-item">Careers</span>
                        <span className="footer-area-item">Contact Us</span>
                    </div>
                    <div className="footer-area-2">
                        <span className="footer-area-title">Support</span>
                        <span className="footer-area-item">Help Center</span>
                        <span className="footer-area-item">Safety Center</span>
                        <span className="footer-area-item">Community Guidelines</span>
                    </div>
                    <div className="footer-area-3">
                        <span className="footer-area-title">Legal</span>
                        <span className="footer-area-item">Cookies Policy</span>
                        <span className="footer-area-item">Privacy Policy</span>
                        <span className="footer-area-item">Terms of Service</span>
                        <span className="footer-area-item">Law Enforcement</span>
                    </div>
                    <div className="footer-area-4">
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer