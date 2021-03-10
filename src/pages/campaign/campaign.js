import './campaign.css';
import { useState } from 'react'
function Campaign() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [message, setMessage] = useState("")

    function onSubmit() {
        fetch('http://graphwitty.com:3000/contact/send', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name:name,
                    email:email,
                    phoneNumber:phoneNumber,
                    message:message
                }
            ),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="campaign">

            <span className="campaign-main-copy">The Digital Landscape is <span className="campaign-main-copy-evolving">EVOLVING</span>. <br/>But are you?    </span>

            <div className="campaign-section1">
                <span className="campaign-section1-text">
                <span className="campaign-section1-text1">
                It is no more about the creative posts on social media platforms,
                </span>
                <span className="campaign-section1-text2">
                    It is more on how you can measure your marketing efforts.
                </span>
                    <a href="#campaign-register" className="campaign-register-button">Register</a>
                    <a href="#campaign-what" className="campaign-register-button">Learn More</a>
                </span>
                <img src="campaign-section1.png" className="campaign-section1-img"></img>
            </div>

            <div className="campaign-section2">
                <span className="campaign-section2-text1">
                With the information overload on the internet, and the demand from all industries to venture into the digital space, even experienced marketers are worried about their career.
                </span>
            </div>

            <div className="campaign-section3" id="campaign-what">
                <div className="campaign-section3-card">
                    <span className="campaign-section3-card-title">What?</span>
                    <span className="campaign-section3-card-text">
                        GraphWitty in collaboration with Measure Marketer offers a 7 day free marketing course to redefine marketing on the digital landscape.
                    </span>
                </div>
                <div className="campaign-section3-card">
                    <span className="campaign-section3-card-title">Who?</span>
                    <span className="campaign-section3-card-text">
                        If you're a fresh graduate or pursuing your last year of graduation and aspire to be the best marketer in the country, this is for you!
                    </span>
                </div>
                <div className="campaign-section3-card">
                    <span className="campaign-section3-card-title">When?</span>
                    <span className="campaign-section3-card-text">
                        First batch: 7-12 March<br />Timing: 10am - 4pm
                    </span>
                </div>
            </div>

            <div className="campaign-section6">
            <div className="campaign-section6-card">
                    <span className="campaign-section6-card-title">Measure Marketer</span>
                    <span className="campaign-section6-card-text">
                    Measuremarketer believes measurement is the heart of all marketing. Learn &amp; implement measurement strategies like a 10+ year experienced digital marketer.<br /><br/> You can't manage what you can't measure, or maybe more appropriately, you can't market what you can't measure.                    
                    </span>
                </div>
            <div className="campaign-section6-card">
                    <span className="campaign-section6-card-title">GraphWitty</span>
                    <span className="campaign-section6-card-text">
                    GraphWitty helps turn businesses into a brand in the digital space. We believe in evolving with the rapid pace of the digital evolution. And we strongly think it’s essential to train the youth of today into digital leaders of tomorrow.                    
                    </span>
                </div>
            </div>


            <span className="campaign-register-title">Limited Seats. Register Now!</span>
            <div id="campaign-register" className="campaign-section4">
                <input type="text" className="campaign-form-field" placeholder="Fullname" value={name} onChange={e=>{e.preventDefault();setName(e.target.value)}}/>
                <input type="text" className="campaign-form-field" placeholder="Email" value={email} onChange={e=>{e.preventDefault();setEmail(e.target.value)}}/>
                <input type="text" className="campaign-form-field" placeholder="Phone Number" value={phoneNumber} onChange={e=>{e.preventDefault();setPhoneNumber(e.target.value)}}/>
                <input type="text" className="campaign-form-field" placeholder="Highest Qualification" value={message} onChange={e=>{e.preventDefault();setMessage(e.target.value)}}/>
                <button className="campaign-form-button" onClick={e=>{e.preventDefault();onSubmit()}}>Register</button>
            </div>

            <div className="campaign-section5">
                <div className="campaign-logo-container">
                    <img className="campaign-gw-logo" src="gw-logo.png" />
                    <img className="campaign-mm-logo" src="mm-logo.png" />
                </div>
            </div>
        </div>
    );
}

export default Campaign;
