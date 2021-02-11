import React                   from 'react';
import CaseStudyContentSection from '../../components/molecules/CaseStudyContentSection';
import CaseStudyFullBleedImage from '../../components/molecules/CaseStudyFullBleedImage';
import scheduleImg             from '../../../static/img/case-studies/pulse/schedule.jpg';
import peopleImg               from '../../../static/img/case-studies/pulse/peopleroles.jpg';
import nurseImg                from '../../../static/img/case-studies/pulse/nurse_hallway.jpg';
import sketchImgOne            from '../../../static/img/case-studies/pulse/sketchbook1.png';
import sketchImgTwo            from '../../../static/img/case-studies/pulse/sketchbook2.png';
import stationImg              from '../../../static/img/case-studies/pulse/nurse_station.jpg';
import whiteSketches           from '../../../static/img/case-studies/pulse/white_sketches.png';
import safariImg               from '../../../static/img/case-studies/pulse/unit-workload-safari.png';
import doodleImg               from '../../../static/img/case-studies/pulse/pulse_block_doodle.jpg';
import dataImg                 from '../../../static/img/case-studies/pulse/data-leveling.png';
import nextImg                 from '../../../static/img/case-studies/edio/edio-hero.png';
import { RouteUtils }          from '../../utils/routeUtils';

const Pulse = class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNextCaseStudyClick = () => {
        RouteUtils.goToUrl("/case-studies/edio/");
    }

    render() {

        const nextImageBlockStyle = {
            background: "url('" + nextImg + "') no-repeat center center / cover"
        }

        return (
            <div>
                <div className="m-case-study-page-content__image-container">
                    <div className="m-case-study-page-content__image -half">
                        <img src={scheduleImg} alt="Schedule" />
                    </div>
                    <div className="m-case-study-page-content__image -half">
                        <img src={peopleImg} alt="People and Roles" />
                    </div>
                </div>
                <CaseStudyContentSection
                    header=""
                    title="so what was broken?">
                    <p>PinnacleHealth (now UPMC Pinnacle) needed a partner to turn static reports into a platform that could easily give nurse managers data to make scheduling their team second nature.</p>
                    <p>Nobody wants to walk into a hospital and realize they don’t have enough nurses. Having too many nurses around isn’t great for the bottom line, either. Without the 10,000-foot view of how adequate staffing has been in recent days and months, how could a nurse manager realistically fill up a schedule with any confidence? PinnacleHealth needed to be focused on providing excellent patient care, not scheduling staff. The right platform can help you schedule staff more effectively so you can provide excellent patient care.</p>
                </CaseStudyContentSection>
                <CaseStudyFullBleedImage
                    altText="Nurses"
                    image={nurseImg} />
                <CaseStudyContentSection
                    header="Research"
                    title="there’s a data side and a human side to this problem.">
                    <p>For data, we know a problem is easier to tackle if you can see it. We took what our partner provided and turned it into sketched concepts; we also input data into our visualization tools. Voila, now we could start to see shortcomings where before it was spreadsheets and hunches. </p>
                    <p>The human side led to interviewing each nurse manager. How do they schedule? What tools do they use to do that? <span className="easter-egg__right">What about their job drives them up a wall?</span></p>
                    <p>That’s not enough, though. So we met with people from other parts of the hospital system so we could get the full picture.</p>
                    <div className="easter-egg">”Is your job just like on ‘Grey’s Anatomy’?” likely is one.</div>
                </CaseStudyContentSection>
                <div className="o-rhythm__container -fluid">
                    <div className="m-case-study-page-content__section -pulse__sketches-container">
                        <div className="o-rhythm__row">
                            <div className="sketch -one">
                                <img src={sketchImgOne} alt="Notebook Sketch" />
                            </div>
                            <div className="sketch -two">
                                <img src={sketchImgTwo} alt="Notebook Sketch" />
                            </div>
                        </div>
                    </div>
                </div>
                <CaseStudyContentSection
                    header="Synthesis"
                    title="what’s the common thread we’re seeing?">
                    <p>What kind of issues do all of these nurse managers have? The Synthesis stage makes it clear what’s a shared pain and what’s an isolated incident.</p>
                    <p>We pinned interview profiles on a wall and highlighted answers that point to those shared pain points. At the same time, we mapped out PinnacleHealth’s processes, too, so it was a tangible system and not just a set of technical paragraphs in a dusty binder.</p>
                    <p>With all of that together, we went over our research and sketches to come up with guiding principles and design constraints — here’s what’s important, and here’s what we have to work with. Having a partnership approach helps immensely here to make sure there aren’t unrealistic expectations or missed goals.</p>
                </CaseStudyContentSection>
                <CaseStudyFullBleedImage
                    altText="Nurse Station"
                    image={stationImg} />
                <div className="m-case-study-page-content__color-block -pulse">
                    <div className="o-rhythm__container">
                        <div className="m-case-study-page-content__copy-section -with-image">
                            <div className="o-rhythm__row">
                                <div className="content__copy -left">
                                    <header>sketches become thumbnails. thumbnails become mockups.</header>
                                    <p>What was once a loose concept from PinnacleHealth to give nurse managers a powerful scheduling tool was turning into a beautifully designed healthcare management experience.</p>
                                    <p>Undoubtedly, healthcare’s regulations and incredible pace made this a unique challenge. But that only made us want to take even more care to ensure each detail was covered. We wanted to deliver a great experience, not just a scheduling tool. Well-designed experiences get used, day in and day out, even when things get hectic. And what hospital isn’t hectic?</p>
                                </div>
                                <div className="content__image -white-sketches">
                                    <img src={whiteSketches} alt="Whiteboard Sketches" />
                                </div>
                            </div>
                            <img className="-safari-img" src={safariImg} alt="Dashboard" />
                        </div>
                    </div>
                </div>
                <CaseStudyContentSection
                    header="User Testing"
                    title="one of the biggest challenges in designing an experience isn’t making the idea into a reality...">
                    <p>It’s getting people to use it! That’s why we gathered a small group of (brave?) initial users to try this new platform, something way out of the box compared to the static reports they had grown accustomed to. We needed to watch them use it, and they needed to see how we turned a bunch of spreadsheets into an accessible, chart-filled, problem-solving dashboard.</p>
                    <p>We observed. We interviewed. We met with nurse managers and administrators to discuss how they used the platform, and more importantly, what shortcomings it may have at this early stage. Was something confusing? Was a task more challenging to complete than we expected? </p>
                    <p>A tip: Work with companies that don’t assume the first version of what they produced is perfect. It should be about testing and evolving.</p>
                </CaseStudyContentSection>
                <CaseStudyFullBleedImage
                    altText="Doodle"
                    image={doodleImg} />
                <CaseStudyContentSection
                    header="Next Steps"
                    title="priorities and process moving forward the system to increase effectiveness">
                    <p>Can we be candid? It was pretty f’ing cool to see the positive reaction of hard-working nurse managers knowing their job was made easier. But we weren’t done yet. Beyond the initial feedback, we needed to understand what was a functional priority for continued effectiveness, and what was simply additional value.</p>
                    <p>We didn’t want to lose a single valuable suggestion — all of those interviews matter — as these help us explore future feature expansions. It’s an ongoing process.</p>
                    <p>We’re not just dropping something we created in your lap and saying “best of luck!” That’s not a partnership. That’s a mother-in-law.</p>
                </CaseStudyContentSection>
                <CaseStudyFullBleedImage
                    altText="Data"
                    image={dataImg} />
                <CaseStudyContentSection
                    header="Iteration"
                    title="evolving the system to increase effectiveness">
                    <p>We had initial user feedback, plus data, and now we could update the platform design. We tweaked how the info was presented and modified the navigation. Charts were added to make the experience more comprehensive; you really could get a sense of how the entire hospital operated.</p>
                    <p>We didn’t veer off our initial guiding principles. We just worked with our partner to evolve the system into an even more effective version to address their problem.</p>
                </CaseStudyContentSection>
                <div className="m-case-study-page-content__next m-case-study -edio" onClick={ this.handleNextCaseStudyClick }>
                    <div className="-background-image__container">
                        <div
                            style={nextImageBlockStyle}
                            className="-background-image">
                        </div>
                    </div>
                    <div className="-content">
                        <div className="m-case-study__header">edio</div>
                        <p>education that fits the student, not the system</p>
                        <a href="/case-studies/edio/" className="a-button">See Next Case Study</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pulse;
