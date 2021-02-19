import React                   from 'react';
import CustomSlider            from 'components/molecules/CustomSlider';
import PullScroller            from 'components/molecules/PullScroller';
import CaseStudyBodyIntro      from 'components/molecules/CaseStudyBodyIntro';
import CaseStudyContentSection from 'components/molecules/CaseStudyContentSection';
import billboardImg            from 'static/img/case-studies/hackerone/billboard.jpg';
import cardsImg                from 'static/img/case-studies/hackerone/social_cards.jpg';
import collageImg              from 'static/img/case-studies/hackerone/h1_collage.png';
import dotTexture              from 'static/img/case-studies/hackerone/dot_grid_copy.png';
import hackerImg               from 'static/img/case-studies/hackerone/rainbow_shirt.jpg';
import nextImg                 from 'static/img/case-studies/cca/studying.jpg';
import skateboardImg           from 'static/img/case-studies/hackerone/skateboard.png';
import stickerOne              from 'static/img/case-studies/hackerone/H1-213_sticker.png';
import stickerTwo              from 'static/img/case-studies/hackerone/h1_was_here_sticker.png';
import sliderImage1            from 'static/img/case-studies/hackerone/Security1.jpg';
import sliderImage2            from 'static/img/case-studies/hackerone/Security2.jpg';
import sliderImage3            from 'static/img/case-studies/hackerone/Security3.jpg';
import sliderImage4            from 'static/img/case-studies/hackerone/Security4.jpg';
import sliderImage5            from 'static/img/case-studies/hackerone/Security5.jpg';
import sliderImage6            from 'static/img/case-studies/hackerone/Security6.jpg';
import sliderImage7            from 'static/img/case-studies/hackerone/Security7.jpg';
import sliderImage8            from 'static/img/case-studies/hackerone/Security8.jpg';
import sliderImage9            from 'static/img/case-studies/hackerone/Security11.jpg';
import sliderImage10           from 'static/img/case-studies/hackerone/Security12.jpg';
import sliderImage11           from 'static/img/case-studies/hackerone/Security16.jpg';
import sliderImage12           from 'static/img/case-studies/hackerone/Security21.jpg';
import sliderImage13           from 'static/img/case-studies/hackerone/Security25.jpg';
import { RouteUtils }          from '../../utils/routeUtils';

const Hackerone = class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNextCaseStudyClick = () => {
        RouteUtils.goToUrl("/case-studies/cca/");
    }

    render() {
        const sliderImages = [
            { image: sliderImage1, alt: "Presentation at Security@" },
            { image: sliderImage2, alt: "HackerOne branding at the Security@ conference" },
            { image: sliderImage3, alt: "View of the branding and setup for HackerOne at the Security@ conference" },
            { image: sliderImage4, alt: "Socializing at the Security@ conference" },
            { image: sliderImage5, alt: "Panel of speakers at the Security@ conference" },
            { image: sliderImage6, alt: "Name and titles of the panel of speakers at the Security@ conference" },
            { image: sliderImage7, alt: "Showing the setup and branding of the Security@ sign at the Security@ conference" },
            { image: sliderImage8, alt: "Socialization and collaboration at the Security@ conference" },
            { image: sliderImage9, alt: "Key speaker at the Security@ conference" },
            { image: sliderImage10, alt: "Taking pictures at the Security@ conference" },
            { image: sliderImage11, alt: "More socialization at the Security@ conference" },
            { image: sliderImage12, alt: "Branded sign displayed at the Security@ conference" },
            { image: sliderImage13, alt: "Large branded sign at the Security@ conference" },
        ];

        const nextImageBlockStyle = {
            background: "url('" + nextImg + "') no-repeat center center / cover"
        }

        return (
            <div class="m-case-study-page-content__wrapper">
                <div className="m-case-study-page-content__image">
                    <img src = { billboardImg } alt = "Billboard" />
                </div>
                <CaseStudyBodyIntro
                    copy            = "To that end, they put a lot of energy into being “the” community for hackers, in order to be the best platform for hiring hacker-powered security. Hackers live on the bleeding edge, fueled by different motivations, coming to HackerOne both for money and for the challenge. How does HackerOne stay fresh, continue to engage and keep the best coming back for more?"
                    copyEasterEgg   = "Not surprisingly, HackerOne wants to work with the best hackers, wherever they are."
                    easterEgg       = "Turns out that’s a pretty broad geography — 170 countries and counting."
                    title           = "what was HackerOne's reality?" />
                <div className = "m-case-study-page-content__pull-scroll">
                    <PullScroller />
                </div>
                <CaseStudyContentSection
                    header = "Research"
                    title  = "how did we tackle it?">
                        <p>Each event is unique. We take inspiration from the type of challenge, the geography and, well, bugs. Because really it’s all about finding critical vulnerabilities, which in hacker lingo are bugs. Capturing the intense energy, collaborative spirit and competitive nature of the events is part of the equation. It’s also no small task to try to stay as relevant and cool as hackers are.</p>
                </CaseStudyContentSection>
                <div className = "m-case-study-page-content__mosaic -hackerone -collage-container">
                    <img src = { collageImg } className = "-collage" alt = "Poster" />
                    <img src = { dotTexture } className = "-dots -left" alt = "Dots" />
                </div>
                <CaseStudyContentSection
                    header = "Event Branding"
                    title  = "a world of possibilities">
                        <p>From HackerOne’s own annual Security@ conference to live hacking events for some of the world’s top organizations like the U.S. Department of Defense and Verizon Media, we create logos and design assets that speak to hackers and security leaders alike. Live hacking events take place all over the world, and our illustrative visual identities take inspiration from these locales. You will see hackers wearing these logos on hats, t-shirts and even prize belts, should they be so talented to win one.</p>
                </CaseStudyContentSection>
                <CustomSlider images = { sliderImages } />
                <CaseStudyContentSection
                    header           = "Design"
                    sectionClassName = "-mobile-padding__top-none"
                    title            = "social media graphics">
                        <p>We help HackerOne promote all live hacking events, Security@ conference and their presence at many other trade shows, including InfoSecurity, GES, Black Hat, Money 20/20, Gartner Security &amp; Risk Management and DEFCON, on social media.</p>
                </CaseStudyContentSection>
                <div className = "m-case-study-page-content__image">
                    <img src = { cardsImg } alt = "Cards" />
                </div>
                <CaseStudyContentSection
                    header           = "Swag"
                    sectionClassName = "-hackerone-gear-cred"
                    title            = "gear cred">
                        <p>No event is complete without lots of amazing freebies for attendees. Hackers especially love to collect live hacking swag, because only the top hackers are invited to many events. The more HackerOne gear you have, the more cred you’ve earned. Some of the many items include:</p>
                        <ul>
                            <li>Shirts &amp; hats</li>
                            <li>Stickers</li>
                            <li>Coins</li>
                            <li>Prize belts &amp; trophies</li>
                            <li>Backpacks</li>
                            <li>Posters</li>
                            <li>Pillows</li>
                            <li>Skateboards</li>
                        </ul>
                </CaseStudyContentSection>
                <div className = "m-case-study-page-content__mosaic -hackerone -beer-stickers">
                    <div className = "o-rhythm__container">
                        <img src = { hackerImg } className = "-desktop-only" alt = "Hacker Sticker" />
                        <img src = { stickerTwo } className = "-sticker-two" alt = "Hacker Sticker" />
                    </div>
                    <img src = { hackerImg } className = "-mobile-only" alt = "Hacker Sticker" />
                    <img src = { dotTexture } className = "-dots" alt = "Dots" />
                    <img src = { stickerOne } className = "-sticker-one" alt = "Sticker One" />
                    <img src = { skateboardImg } className = "-skateboard" alt = "Skateboard" />
                </div>
                <CaseStudyContentSection
                    header           = "Mission"
                    sectionClassName = "-mobile-padding__top-none"
                    title            = "why we love HackerOne">
                        <p>HackerOne believes everyone is a hacker. We love the modesty, but mostly we love the mission to &quot;empower the world to build a safer internet,&quot; keeping our software secure and personal information, well, personal.</p>
                </CaseStudyContentSection>
                <div className = "m-case-study-page-content__next m-case-study -cca" onClick={ this.handleNextCaseStudyClick }>
                    <div className = "-background-image__container">
                        <div
                            style     = { nextImageBlockStyle }
                            className = "-background-image">
                        </div>
                    </div>
                    <div className = "-content">
                        <div className="m-case-study__header">CCA</div>
                        <p>redefining what cyber education can do</p>
                        <a href = "/case-studies/cca/" className = "a-button">See Next Case Study</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hackerone;
