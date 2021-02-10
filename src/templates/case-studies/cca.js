import React         from 'react';
import CustomSlider  from 'components/molecules/CustomSlider';
import timelineImg   from 'static/img/case-studies/cca/timeline.jpg';
import studentImg    from 'static/img/case-studies/cca/girl_laptop.png';
import laptopImg     from 'static/img/case-studies/cca/Macbook_CCA.png';
import backgroundImg from 'static/img/case-studies/cca/background.jpg';
import rainbow       from 'static/img/case-studies/cca/rainbow_doodle.png';
import traingle      from 'static/img/case-studies/cca/doodle_triangle.png';
import dots          from 'static/img/case-studies/cca/yellow_dots.png';
import block         from 'static/img/case-studies/cca/doodle_block.png';
import dotsTwo       from 'static/img/case-studies/cca/yellow_dots.png';
import dotsSmall     from 'static/img/case-studies/cca/dotted_area.png';
import sliderImage1  from 'static/img/case-studies/cca/gallery_CCA_mtg.jpg';
import sliderImage2  from 'static/img/case-studies/cca/gallery_exercise.jpg';
import sliderImage3  from 'static/img/case-studies/cca/gallery_homeschool.jpg';
import sliderImage4  from 'static/img/case-studies/cca/gallery_look_feel_cards.jpg';
import sliderImage5  from 'static/img/case-studies/cca/gallery_tele_teaching.jpg';
import sliderImage6  from 'static/img/case-studies/cca/gallery_wireframe.jpg';
import studyImg      from 'static/img/case-studies/cca/studying.jpg';
import ipadLargeImg  from 'static/img/case-studies/cca/cca_ipad_large.jpg';
import nextImg       from 'static/img/case-studies/pulse/nurse_hallway.png';


const CCA = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sliderImages = [
            { image: sliderImage1, alt: "Strategy session on look and feel cards that describe the website" },
            { image: sliderImage2, alt: "Identifying areas of interest to help perscribe the website direction" },
            { image: sliderImage3, alt: "Mother and child working on school work at home" },
            { image: sliderImage4, alt: "Identified look and feel cards from the collaboration session" },
            { image: sliderImage5, alt: "Virtual instruction delivered by a CCA staff member" },
            { image: sliderImage6, alt: "Wireframes created from all of the research and ideation sessions" },
        ];

        const nextImageBlockStyle = {
            background: "url('" + nextImg + "') no-repeat center center / cover"
        }

        return (
            <div>
                <div className="m-case-study-page-content__image">
                    <img src = { studyImg } alt = "Studying" />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -body-intro -cca">
                        <div className = "o-rhythm__row">
                            <div className = "content__copy">
                                <header>what was CCA’s reality?</header>
                                <p>Their website didn’t improve their chances to enroll students or strengthen the bond with current families. How do we get prospective families to know and trust us, and current families to better partner with us? </p>
                            </div>
                        </div>
                    </div>
                    <img className = "ipad-img" src = { ipadLargeImg } alt = "Ipad" />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <div className = "content__header -mobile-only">Research</div>
                        <header className = "-push-three">we don’t work solo.</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__header -desktop-only">Research</div>
                            <div className = "content__copy">
                                <p><span className = "easter-egg__right">We did this thing together.</span>  CCA staff joined us for a group breakdown 
                                of their website. What worked, but could use improvements? What likely caused more than one family to say, 
                                “Uh, no thanks.” How smooth was the enrollment process, and what messages were being sent, both literally and 
                                figuratively, to people clicking through? It’s not rocket science, but there is a science to it, and we know 
                                how to ask the right questions to get to the right solutions.</p>
                            </div>
                        </div>
                        <div className = "o-rhythm__row">
                            <div className = "content__header -desktop-only">Takeaway</div>
                            <div className = "content__copy">
                                <p>andculture &amp; CCA took the time necessary to understand the shortcomings of their website, opportunities to improve and what goals we had.</p>
                                <div className = "easter-egg">We could say “brought in various stakeholders to evaluate the end-user experience” but that makes puppies cry.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <CustomSlider images = { sliderImages } />
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -image-right -cca-synthesis">
                        <div className = "content__header -mobile-only">Synthesis</div>
                        <header className = "-push-three">we pulled all of that sweet research together and made a plan.</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__header -desktop-only">Synthesis</div>
                            <div className = "content__copy">
                                <p>We agreed to have a preliminary splash page at first, then a basic site with space for events and media, and then, for the coup de grâce, a fully functioning site with content management capabilities. </p>
                                <p>Here’s what’s amazing: Because we listened to what families and staff needed and wanted, we could move forward with confidence as we prioritized and refined potential features. User flows (how you click through the site) were evaluated so we could be confident in the enrollment process. No charter school should lose a potential enrollment because your site hits a dead end or ends up being more trouble than it’s worth. This is where our partnership style shines through. We’re not just plugging things out and churning out the next step. We want to help you solve a problem.</p>
                            </div>
                            <img src = { timelineImg } alt = "Timeline" />
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__mosaic">
                    <div className = "-with-border">
                        <img src = { studentImg } alt = "Student" />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <div className = "content__header -mobile-only">Design &amp; Development</div>
                        <header className = "-push-three">our client partner loves the design phase because they can start seeing the whole picture.</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__header -desktop-only">Design &amp; Development</div>
                            <div className = "content__copy">
                                <p>We wireframe (sketch out a rough draft) the main site based on everything we’ve agreed on, and create a design kit with CCA’s newly approved brand, like an emperor with new clothes. VIP pages were custom designed after getting CCA’s approval (noticing a pattern here? Nothing happens with us in a vacuum. You’re right here with us.) </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-case-study-page-content__image">
                    <img src = { backgroundImg } alt = "Background" />
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <header className = "-push-three -cca-section-header">getting the word out</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__copy">
                                <p>In the meantime, we launched a preliminary website to help Commonwealth Charter Academy shout from the rooftops that they’ve got a new name but the same incredible mission of innovative education for students throughout the state. Even as a preliminary site, we still made sure to include the basic info, media information and upcoming events to make this media friendly (gotta get that buzz going in the news).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__color-block -cca">
                    <img src = { rainbow } className = "-background-texture -rainbow" alt = "Rainbow" aria-hidden="true" />
                    <img src = { dotsTwo } className = "-background-texture -dots-two" alt = "Dots" aria-hidden="true" />
                    <img src = { dotsSmall } className = "-background-texture -dots-small" alt = "Small dots" aria-hidden="true" />
                    <div className = "o-rhythm__container">
                        <img src = { laptopImg } className = "-front" alt = "Laptop" />
                    </div>
                    <div className = "m-case-study-page-content__copy-section">
                        <img src = { traingle } className = "-background-texture -triangle" alt = "Triangle" aria-hidden="true" />
                        <img src = { dots } className = "-background-texture -dots" alt = "Dots" aria-hidden="true" />
                        <img src = { block } className = "-background-texture -block" alt = "Block" aria-hidden="true" />
                        <div className = "o-rhythm__container">
                            <div className = "content__header -mobile-only">Deployment &amp; Testing</div>
                            <header className = "-push-three">launch...and it doesn’t end there.</header>
                            <div className = "o-rhythm__row">
                                <div className = "content__header -desktop-only">Deployment &amp; Testing</div>
                                <div className = "content__copy">
                                    <p>Together with our partner, we launched CCA’s full website in May 2016. This included an integrated development platform so CCA can manage content and build new pieces — the keys to the coupe. We decked the platform out with customized features and integrations because that’s what CCA needs to stay current.</p>
                                    <p>What else?</p>
                                    <ul>
                                        <li>Mobile-responsive</li>
                                        <li>Interactive course catalog</li>
                                        <li>Success stories</li>
                                        <li>Stats from parent surveys</li>
                                        <li>Upcoming events</li>
                                        <li>Digitized enrollment process, from the initial info request through actual enrollment</li>
                                    </ul>
                                    <p>Everything they need to thrive…because we listened to what our partners needed to solve their problem, and offered an experience to address it. That’s the beauty of design.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__next m-case-study -pulse">
                    <div className = "-background-image__container">
                        <div
                            style     = { nextImageBlockStyle }
                            className = "-background-image">
                        </div>
                    </div>
                    <div className = "-content">
                        <div className="m-case-study__header">Pulse</div>
                        <p>rearchitecting nurse workflows</p>
                        <a href = "/case-studies/pulse/" className = "a-button">See Next Case Study</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CCA;
