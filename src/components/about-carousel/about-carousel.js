import React from "react"
import { useState, useEffect } from "react";

import "./about-carousel.css"

function AboutCarousel() {
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        document.getElementsByClassName('carousel-item')[selected].style.display = "block";
    }, [])

    function carouselNext() {
        for (var i = 0; i < document.getElementsByClassName('carousel-item').length; i++) {
            if (selected == 3) {
                break;
            }
            document.getElementsByClassName('carousel-item')[selected].style.display = "none";
            document.getElementsByClassName('carousel-item')[selected + 1].style.display = "block";
            setSelected(selected + 1)

        }
    }

    function carouselPrev() {
        for (var i = 0; i < document.getElementsByClassName('carousel-item').length; i++) {
            if (selected == 0) {
                break;
            }
            document.getElementsByClassName('carousel-item')[selected].style.display = "none";
            document.getElementsByClassName('carousel-item')[selected - 1].style.display = "block";
            setSelected(selected - 1)

        }
    }

    return (
        <div className="carousel">
            <div className="carousel-button-container">
                <img src="/previous.png" className="carousel-prev" onClick={e => { e.preventDefault(); carouselPrev() }}></img>
                <img src="/next.png" className="carousel-next" onClick={e => { e.preventDefault(); carouselNext() }}></img>
            </div>
            <div className="carousel-item">
                <img src="/carousel1.png" className="carousel-image" />
            </div>
            <div className="carousel-item">
                <img src="/f9.jpg" className="carousel-image" />
            </div>

        </div>)
}

export default AboutCarousel;