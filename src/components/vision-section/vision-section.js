import React from 'react';
import './vision-section.css';

function VisionSection() {

    function display1(e) {
        document.getElementById("hover-card4").style.display = "none";
        document.getElementById("hover-card3").style.display = "none";
        document.getElementById("hover-card1").style.display = "none";
        document.getElementById("hover-card2").style.display = "flex"
    }

    function display2(e) {
        document.getElementById("hover-card1").style.display = "flex";
        document.getElementById("hover-card2").style.display = "none";
        document.getElementById("hover-card4").style.display = "none";
        document.getElementById("hover-card3").style.display = "none";
    }


    function display3(e) {
        document.getElementById("hover-card3").style.display = "flex";
        document.getElementById("hover-card2").style.display = "none";
        document.getElementById("hover-card4").style.display = "none";
        document.getElementById("hover-card1").style.display = "none";
    }

    function display4(e) {
        document.getElementById("hover-card4").style.display = "flex";
        document.getElementById("hover-card2").style.display = "none";
        document.getElementById("hover-card1").style.display = "none";
        document.getElementById("hover-card3").style.display = "none";
    }

    function hide1(e) {
        document.getElementById("hover-card2").style.display = "none";
    }

    function hide2(e) {
        document.getElementById("hover-card1").style.display = "none";
    }

    function hide3(e) {
        document.getElementById("hover-card3").style.display = "none";
    }

    function hide4(e) {
        document.getElementById("hover-card4").style.display = "none";
    }

    return (
        <>
            <div className="vision-section" id="vision-section">
                <div className="vision-container">
                    <div className="vision-box">
                        <span className="vision-heading">WE BELIEVE IN</span>
                        <span className="vision-points" onMouseEnter={e => { e.preventDefault(); display1(e) }} onMouseLeave={e => { e.preventDefault(); hide1(e) }}>Co-Ownership as the highest form of loyalty</span>
                        <span className="vision-points" onMouseEnter={e => { e.preventDefault(); display2(e) }} onMouseLeave={e => { e.preventDefault(); hide2(e) }}>Upholding Highest Ethical Standards</span>
                        <span className="vision-points" onMouseEnter={e => { e.preventDefault(); display3(e) }} onMouseLeave={e => { e.preventDefault(); hide3(e) }}>Flexibility in combination with Dynamism</span>
                        <span className="vision-points" onMouseEnter={e => { e.preventDefault(); display4(e) }} onMouseLeave={e => { e.preventDefault(); hide4(e) }}>Perseverance with evolution on a continuous basis</span>
                    </div>
                </div>

                <div className="vision-container-mob">
                    <div className="vision-box">
                        <span className="vision-heading">WE BELIEVE IN</span>
                        <span className="vision-points" onClick={e => { e.preventDefault(); display1(e) }} >Co-Ownership as the highest form of loyalty</span>
                        <span className="vision-points" onClick={e => { e.preventDefault(); display2(e) }} >Upholding Highest Ethical Standards</span>
                        <span className="vision-points" onClick={e => { e.preventDefault(); display3(e) }} >Flexibility in combination with Dynamism</span>
                        <span className="vision-points" onClick={e => { e.preventDefault(); display4(e) }} >Perseverance with evolution on a continuous basis</span>
                    </div>
                </div>
                <div className="hover-card1" id="hover-card1">
                    <div className="hover-card-container">
                        <div className="close-icon-container">
                            <img src="/close-icon.svg" className="close-icon" onClick={e => { e.preventDefault(); hide2(e) }} />
                        </div>
                        <div className="hover-card">
                            <img src="/ethical.png" className="hover-card-image"></img>
                            <span className="hover-card-heading">Highest Ethical Standards</span>
                            <span className="hover-card-content">Defining ethics and upholding it in every task you complete is very critical to every business. Every professional at GraphWitty works with highest integrity and passion at every given moment to deliver highest quality of work. </span>
                        </div>
                    </div>
                    <div className="pointer-container">
                        <div className="arrow-right1"></div>
                    </div>
                </div>

                <div className="hover-card2" id="hover-card2">

                    <div className="pointer-container">
                        <div class="arrow-left1"></div>
                    </div>
                    <div className="hover-card-container">
                        <div className="close-icon-container">
                            <img src="/close-icon.svg" className="close-icon" onClick={e => { e.preventDefault(); hide1(e) }} />
                        </div>
                        <div className="hover-card">
                            <img src="/coownership.png" className="hover-card-image"></img>
                            <span className="hover-card-heading">Co-Ownership</span>
                            <span className="hover-card-content">We understand your business is like a baby to you. And when time comes to hand over a phase of it  like embarking on a digital journey to another individuals, it is certain you will be critical. When you approach us for our services, we consider it our own, understand your goals, check in with your regularly, track the progress and ultimately co-own it with you to make it a successful brand.</span>
                        </div>
                    </div>
                </div>

                <div className="hover-card3" id="hover-card3">
                    <div className="pointer-container">
                        <div class="arrow-left2"></div>
                    </div>
                    <div className="hover-card-container">
                        <div className="close-icon-container">
                            <img src="/close-icon.svg" className="close-icon" onClick={e => { e.preventDefault(); hide3(e) }} />
                        </div>
                        <div className="hover-card">
                            <img src="/coownership.png" className="hover-card-image"></img>
                            <span className="hover-card-heading">Flexibility</span>
                            <span className="hover-card-content">While some tasks can be planned and executed as per scheduled, there is always a room for unexpected tasks especially when each brand???s needs are dynamic. At GraphWitty, we understand the need for flexibility while working in every brand we are associated with. </span>
                        </div>
                    </div>
                </div>

                <div className="hover-card4" id="hover-card4">
                    <div className="hover-card-container">
                        <div className="close-icon-container">
                            <img src="/close-icon.svg" className="close-icon" onClick={e => { e.preventDefault(); hide4(e) }} />
                        </div>
                        <div className="hover-card">
                            <img src="/perseverence.png" className="hover-card-image"></img>
                            <span className="hover-card-heading">Perseverence</span>
                            <span className="hover-card-content">Evolution is always a time taking process and to for that it take a zillion moments of learning and unlearning. In the growing process, it is very essential to be perseverant. We, at GraphWitty are perseverant to hear a brand???s needs and goals and watch it evolve successfully as much as you do. </span>
                        </div>
                    </div>
                    <div className="pointer-container">
                        <div className="arrow-right2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VisionSection;