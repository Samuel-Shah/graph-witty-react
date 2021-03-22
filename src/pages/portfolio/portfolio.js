import { useEffect, useState, useWindowSize } from 'react';
import './portfolio.css';
import { TweenMax, Expo } from 'gsap'

function Portfolio() {

    // const [offset, setOffset] = useState(0);
    // const size = useWindowSize()

    // function useWindowSize() {
    //     // Initialize state with undefined width/height so server and client renders match
    //     // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    //     const [windowSize, setWindowSize] = useState({
    //       width: undefined,
    //       height: undefined,
    //     });
      
    //     useEffect(() => {
    //       // Handler to call on window resize
    //       function handleResize() {
    //         // Set window width/height to state
    //         setWindowSize({
    //           width: window.innerWidth,
    //           height: window.innerHeight,
    //         });
    //       }
          
    //       // Add event listener
    //       window.addEventListener("resize", handleResize);
          
    //       // Call handler right away so state gets updated with initial window size
    //       handleResize();
          
    //       // Remove event listener on cleanup
    //       return () => window.removeEventListener("resize", handleResize);
    //     }, []); // Empty array ensures that effect is only run on mount
      
    //     return windowSize;
    //   }
    //         useEffect(() => {
    //             window.onscroll = () => {
    //                 setOffset(window.pageYOffset)
    //             }
    //         }, []);


            // if (offset > 200) {
            //     document.getElementById('gw-logo').style.width = "180px"
            //     document.getElementById('gw-logo').style.position = "fixed"
            //     document.getElementById('gw-logo').style.margin = "20px 0 0 20px"
            // }

            //     panel = document.getElementsByClassName('portfolio-section-inner')[0],
            function initTilt(e) {
                TweenMax.set([e.target], { transformStyle: "preserve-3d" })
                if (!navigator.platform.match(/Linux arm/) && navigator.platform != "iPhone") {
                    tilt(e.pageX, e.pageY)
                }
                else {
                    return
                }
            }


            function tilt(cx, cy) {
                // var sxPos = cx / $panel.width() * 100 - 100;
                // var syPos = cy / $panel.height() * 100 - 100;
                console.log(cx - window.pageXOffset)
                var sxPos = ((window.innerWidth) / 2 - (cx - window.pageXOffset)) / 15
                var syPos = (window.innerHeight / 2 - cy) / 15
                console.log(document.getElementsByClassName('portfolio-image'))
                TweenMax.to('.portfolio-image', 2, {
                    transform: `rotateY(${sxPos}deg) rotateX(${syPos}deg`,
                    transformPerspective: 0,
                    ease: Expo.easeOut
                });
            }

            useEffect(() => {
                if (window.innerHeight < window.innerWidth) {
                    document.getElementById('portfolio').addEventListener('mousewheel', function (e) {
                        if (e.wheelDelta < 0) {
                            //scroll down
                            console.log('Down');
                            window.scrollBy(20, 0)
                        } else {
                            //scroll up
                            console.log('Up');
                            window.scrollBy(-20, 0)
                        }

                        //prevent page fom scrolling
                        return false;
                    });
                }

            }, [])

            

    //         if (window.innerHeight > window.innerWidth) {
    //             return (<div>
    //                 rotate your screen
    //    </div>)
           
            
                return (
                    <div id="portfolio" className="portfolio">
                        <img id="gw-logo" className="gw-logo" src="gw-logo.png" />

                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">NColdpressed has a range of sugar, water and preservative free natural juices that does wonders to your health. We helped this brand reach their target audience by creating a digital presence via website and social media marketing.
                    </span>
                                </div>
                                <img className="portfolio-image" src="ncp.jpg" />
                                <span className="portfolio-title">N Coldpressed</span>
                                <span className="portfolio-description">Digital Marketing, Website</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="https://www.facebook.com/Ncoldpressed/" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/ncoldpressed/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>
                            </div>

                        </div>
                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">FitMap is a premium wellness gym in Hyderabad, determined to make fitness a lifestyle. Providing their services to top celebrities and health conscious individual, we help them to reach out to their audience, educating and inspiring people to commit to a fit lifestyle through creative social media campaigns.
                    </span>
                                </div>
                                <img className="portfolio-image" src="fitmap.jpg" />
                                <span className="portfolio-title">FitMap</span>
                                <span className="portfolio-description">Digital Marketing</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="https://m.facebook.com/FitmapIndia/" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/fitmap.in/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>
                            </div>

                        </div>
                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">With an experience of over two decades, Voila!F9 gourmet crafts corporate dining experiences, manage events, banqueting and much more to leading national and multinational companies.While Voila!F9, curates food for all their clientele, Graphwitty curates a persona for VoilaF9 on Social media.
                    </span>
                                </div>
                                <img className="portfolio-image" src="f9.jpg" />
                                <span className="portfolio-title">Voila F9</span>
                                <span className="portfolio-description">Digital Marketing</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="https://www.facebook.com/f9signature/" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/f9_signature_banqueting/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>
                            </div>

                        </div>

                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">
                                        Ratan Singh Namkeenwala is one of the most innovative brands that has brought unique flavors to the regular and traditional Indian snacks. You can expect to find these delicious packets of murukkus, almonds, cashews and makhnas stacked in the shelves of supermarkets. With creative online marketing, RSN is now one of the upcoming favorite snack brands of Hyderabad.
                    </span>
                                </div>
                                <img className="portfolio-image" src="rsn.jpg" />
                                <span className="portfolio-title">Ratan Singh Namkeenwala</span>
                                <span className="portfolio-description">Digital Marketing, Website</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="https://www.facebook.com/Ratansinghnamkeenwalahyderabad/" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/ratansinghnamkeenwala/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>
                            </div>

                        </div>
                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>

                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">
                                        Moksha by NColdpressed is a brand of detox juices that cleanses the body from within, using minerals and enzymes. Considering the rising trend of health conscious enthusiasts in Hyderabad and their willingness to detox often, we've made the brand accessible to them by creative Social Media marketing. Our campaigns educate them about the benefits of these juices and we've made online ordering a simple 3 step process via a user-friendly website.
                    </span>
                                </div>
                                <img className="portfolio-image" src="moksha.jpg" />
                                <span className="portfolio-title">Moksha</span>
                                <span className="portfolio-description">Digital Marketing</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="https://www.facebook.com/Moksha-105446831545055/" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/mokshabyncp/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>

                            </div>
                        </div>

                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">
                                        The Glass Onion is a fine dine luxury restaurant overlooking the breathtaking golf course in Gachibowli, Hyderabad. While the brand by Voila was already popular among Hyderabadis, we helped them communicate their brand digitally, engage their current clientele and make important announcements like offers and discounts through visually innovative designs and posts on social media.
        
                    </span>
                                </div>
                                <img className="portfolio-image" src="tgo.jpg" />
                                <span className="portfolio-title">The Glass Onion</span>
                                <span className="portfolio-description">Digital Marketing</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/theglassonionhyd/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>

                            </div>
                        </div>

                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">
                                        Future Kids School offers world-class education to their students, moulding the children of today into leaders of tomorrow. We helped this school portray to parents across the city how they're the differentiator in the education space through a creative and informative website.
                    </span>
                                </div>
                                <img className="portfolio-image" src="fks.JPG" />
                                <span className="portfolio-title">Future Kids School</span>
                                <span className="portfolio-description">Website</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>

                            </div>

                        </div>

                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">The Culinary Lounge is a pioneer in corporate cook-offs as a team bonding activity, hand holding classes led by expert chefs and premium experiential dining. We support this brand to market their exclusive services on social media channels to a varied range of target audience.
                    </span>
                                </div>
                                <img className="portfolio-image" src="TCL.jpg" />
                                <span className="portfolio-title">The Culinary Lounge</span>
                                <span className="portfolio-description">Digital Marketing</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="https://www.facebook.com/TheCulinaryLounge" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/theculinarylounge/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>
                            </div>

                        </div>

                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">Tamanna Rooz is one of the best in country make up artists with her niche in bridal and celebrity makeovers. With a good audience on her social media platforms, we help with responsible marketing campaigns to talk about her best practices, her work and engage the audience with her take on various brands of cosmetics.
                    </span>
                                </div>
                                <img className="portfolio-image" src="tms.jpg" />
                                <span className="portfolio-title">Tamanna Make Up Studio & Academy</span>
                                <span className="portfolio-description">Digital Marketing</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="https://www.instagram.com/makeupartisttamanna/" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>
                            </div>

                        </div>

                        <div className="portfolio-section" onMouseMove={e => { initTilt(e) }} onMouseLeave={tilt(window.innerWidth / 2, window.innweHeight / 2)}>
                            <div className="portfolio-section-inner">
                                <div className="portfolio-section-about">
                                    <span className="portfolio-section-text">Being from an industry that cannot be easily marketed on social media, we create campaigns for this medical distributor on social media. Since the beginning of the campaigns, the business has started receiving more enquiries and leads
                    </span>
                                </div>
                                <img className="portfolio-image" src="/goel.jpg" />
                                <span className="portfolio-title">Goel Distributors</span>
                                <span className="portfolio-description">Digital Marketing</span>
                                <div className="social-links">
                                    <div class="vertical-line-one"></div>
                                    <div class="vertical-line-two"></div>
                                    <a href="https://www.facebook.com/goeldistributors" target="_blank"><img class="facebook-logo" src="fb.png" alt="" /></a>
                                    <a href="" target="_blank"><img class="instagram-logo" src="ig.png" alt="" /></a>
                                    {/* <img class="linkedin-logo" src="li.png" alt="" /> */}
                                </div>
                            </div>

                        </div>

                    </div>
                );
        }

export default Portfolio;