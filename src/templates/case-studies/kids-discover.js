import React              from 'react';
import teacherClassRoom   from '../../../static/img/case-studies/kids-discover/teacher-classroom.jpg';
import magazines          from '../../../static/img/case-studies/kids-discover/magazines.jpg';
import phone              from '../../../static/img/case-studies/kids-discover/phone.png';
import teacherStudents    from '../../../static/img/case-studies/kids-discover/teacher-students.jpg';
import applePencil        from '../../../static/img/case-studies/kids-discover/apple-pencil.png';
import homePageFeed       from '../../../static/img/case-studies/kids-discover/homepage-feed.jpg';
import dotGrid            from '../../../static/img/case-studies/kids-discover/dot-grid.png';
import studentHomework    from '../../../static/img/case-studies/kids-discover/student-homework.jpg';
import feedLockup         from '../../../static/img/case-studies/kids-discover/feed-lockup.png';
import discoverMap        from '../../../static/img/case-studies/kids-discover/discovermap.jpg';
import cubeDoodle         from '../../../static/img/case-studies/kids-discover/cube-doodle.png';
import editorScreens      from '../../../static/img/case-studies/kids-discover/editor_screens.png';
import siteHomePage       from '../../../static/img/case-studies/kids-discover/site-home-page.png';
import triangleDoodle     from '../../../static/img/case-studies/kids-discover/triangle_doodle.png';
import nextImg            from '../../../static/img/case-studies/hackerone/billboard.jpg';
import collageMaps        from '../../../static/img/case-studies/kids-discover/collage-mags.png';
import whiteBoardSketches from '../../../static/img/case-studies/kids-discover/sketches.png';
import { RouteUtils }     from '../../utils/routeUtils';


const KidsDiscover = class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNextCaseStudyClick = () => {
        RouteUtils.goToUrl("/case-studies/hackerone/");
    }

    render() {
        const nextImageBlockStyle = {
            background: "url('" + nextImg + "') no-repeat center center / cover"
        }

        return (
            <div class="m-case-study-page-content__wrapper">
                <div className = "m-case-study-page-content__image-container">
                    <div className = "m-case-study-page-content__image">
                        <img src = { teacherClassRoom } alt = "Teacher in a classroom" />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -body-intro">
                        <header>what was the broken reality with Kids Discover?</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__copy">
                                <p>In a word, magazines. None of the content was digital — it was all print. Kids Discover saw that the way to expand reach was through online subscriptions and content syndication. For obvious reasons, the current format was not going to support these growth opportunities. Kids Discover needed a partner to do a heavy lift — take all this offline content, organize it, architect both front- and back-end platforms and design user-friendly interfaces and then build it to support new business models in a scalable way. <span className = "easter-egg__right">Easy peasy.</span></p>
                            </div>
                            <div className = "content__easter-egg easter-egg">Not really. But we love a good challenge.</div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__section">
                    <div className = "m-case-study-page-content__image-container">
                        <div className = "m-case-study-page-content__image">
                            <div className = "kd-image -magazines">
                                <img src = { magazines } alt = "Teacher in a classroom" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <div className = "content__header -mobile-and-sm-desktop-only">Research</div>
                        <header className = "">okay, so how did andculture tackle the problem?</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__header -desktop-only">Research</div>
                            <div className = "content__copy">
                                <p>To dig into the education space, we held two teacher roundtable discussions, attended industry-related conferences, interviewed educational consultants and surveyed teachers across the country. We focus this qualitative and quantitative research on current and future states of education, access to technology in the modern classroom and other educational trends.</p>
                                <p>Once business needs were defined, we kicked off a second phase of research in 10 schools throughout the Northeastern U.S. Through observations and interviews, we learned how supplemental content is applied in the classroom and how students and teachers used and interacted with technology. With all of these findings, we were able to make informed product recommendations and start to write rules (e.g., “must make reading an active process”).</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__section -desktop-only">
                    <div className = "o-rhythm__row -flex-wrap__no-wrap">
                        <div className = "kd-image -phone">
                            <img src = { phone } alt = "Phone" />
                        </div>
                        <div className = "kd-image -teachers-students">
                            <img src = { teacherStudents } alt = "Teacher and students" />
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__image-container -mobile-only ">
                    <div className = "m-case-study-page-content__image">
                        <img className = "phone" src = { phone} alt = "Phone" />
                    </div>
                </div>
                <div className = "m-case-study-page-content__image-container -mobile-only ">
                    <div className = "m-case-study-page-content__image">
                        <img src = { teacherStudents } alt = "Teacher in a classroom" />
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <div className = "content__header -mobile-and-sm-desktop-only">Takeaway</div>
                        <header className = "">students needed to be at the center.</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__header -desktop-only">Takeaway</div>
                            <div className = "content__copy">
                                <p>We found that student research is a pillar in the modern classroom, and teachers were the gatekeepers in terms of accessing the K-12 market. The way teachers secured technology resources — both devices and software — varied greatly by school, but, clearly, teachers were the drivers. We needed to figure out how to target teachers individually and support them in sourcing and paying for our product, in order to drive adoption. Additionally, we needed to support a growing homeschooling population. We had to confirm that a student-centric version made sense to address both teachers and homeschoolers, in terms of user acquisition, value proposition and pricing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__section -kd-desktop-only -gradient">
                    <div className = "o-rhythm__row -flex-wrap__no-wrap">
                        <div className = "o-rhythm__col -justify-center">
                            <div className = "kd-image -home-page-feed">
                                <img src = { homePageFeed } alt = "Homepage feed" />
                            </div>
                            <div className = "kd-image -apple-pencil">
                                <img src = { applePencil } alt = "Tablet and pencil" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "-kd-mobile-only">
                    <div className = "m-case-study-page-content__image-container">
                        <div className = "m-case-study-page-content__image -apple-pencil">
                            <img src = { applePencil } alt = "Tablet and pencil" />
                        </div>
                    </div>
                    <div className = "m-case-study-page-content__image-container">
                        <div className = "m-case-study-page-content__image -border__bottom">
                            <img src = { homePageFeed } alt = "Homepage feed" />
                        </div>
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section -kd_data">
                        <div className = "content__header -mobile-and-sm-desktop-only">Synthesis</div>
                        <header className = "">turning data into a plan</header>
                        <div className = "o-rhythm__row">
                        <div className = "content__header -desktop-only">Synthesis</div>
                        <div className = "content__copy">
                            <p>We collected and visualized all of our research findings (also known as “the fun part”). Drawing on this consolidated data, we wireframed VIP screens of the platform and worked out user flows for each audience.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__mosaic -kd">
                    <div className = "mobile-group">
                        <div className = "grouped">
                            <img src = { collageMaps } className = "-collage-maps" alt = "Collage of maps" />
                            <div className = "-blue-banner"></div>
                        </div>
                        <img src = { whiteBoardSketches } className = "-white-board-sketches" alt = "Whiteboard sketches" />
                    </div>
                    <div className = "desktop-group">
                        <img src = { collageMaps } className = "-collage-maps" alt = "Collage of maps" />
                        <img src = { whiteBoardSketches } className = "-white-board-sketches" alt = "Whiteboard sketches" />
                        <div className = "-blue-banner"></div>
                    </div>
                </div>
                <div className = "o-rhythm__container">
                    <div className = "m-case-study-page-content__copy-section">
                        <div className = "content__header -mobile-and-sm-desktop-only">design &amp; development</div>
                        <header className = "">bringing magazines — and learning — to life</header>
                        <div className = "o-rhythm__row">
                            <div className = "content__header -desktop-only">design &amp; development</div>
                            <div className = "content__copy">
                                <p>At last, we were ready to design and develop the Kids Discover Online product from the ground up. In order to design a product that stayed true to Kids Discover print experience, we converted each magazine into a “unit” and each magazine spread into a “topic.” Using a custom (and super intuitive, of course) content management system, Kids Discover is able to create pages using its print content and assets. The back-end is configured to allow for three Lexile® levels for each content block, in an effort to meet kids where they are.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__section">
                    <div className = "o-rhythm__row">
                        <div className = "kd-image -dot-grid -desktop-only">
                            <img src = { dotGrid } alt = "Dot grid" aria-hidden = "true" />
                        </div>
                        <div className = "kd-image -student-homework">
                            <img src = { studentHomework } alt = "Student doing homework" />
                        </div>
                        <div className = "kd-image -feed-lockup">
                            <img src = { feedLockup } alt = "Multiple feeds" />
                        </div>
                    </div>
                </div>
                <div className = "o-rhythm__container -fluid">
                    <div className = "m-case-study-page-content__copy-section -kd_discover-map">
                        <div className = "o-rhythm__row -mobile-flex-direction__column-reverse">
                            <div className = "o-rhythm__col -image">
                                <div className = "kd-image">
                                    <img src = { discoverMap } alt = "Discover map" />
                                </div>
                            </div>
                            <div className = "o-rhythm__col -y-align-center -content">
                                <header className = "-no-push">the discover map encouraged exploration</header>
                                <div>
                                    <p>This engaging interactive map lets users dig into subject areas to discover related units and topics within the Kids Discover library. When a unit or topic is added to the CMS, it is assigned to related content and weighted based on relevancy. This back-end process determines where that particular unit or topic appears on the map.</p>
                                    <p>To optimize the experience for teachers, we added classrooms and desks. Accessible by teachers and students, “classrooms” serve as shared folders that teachers can curated for students. “Desks” act as personal folders for teachers to store content for later use.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__color-block -kd">
                    <div className = "o-rhythm__container -fluid">
                        <div className = "o-rhythm__row -space-between">
                            <div className = "o-rhythm__col -kd-color-block__first">
                                <div className = "m-case-study-page-content__copy-section">
                                    <div className = "content__header -mobile-and-sm-desktop-only">deployment &amp; testing</div>
                                    <header className = "">time for final exams</header>
                                    <div className = "o-rhythm__row">
                                        <div className = "content__header -desktop-only">deployment &amp; testing</div>
                                        <div className = "content__copy">
                                            <p>As soon as the beta product was ready, we took it to classrooms to test. We collected feedback from students and teachers, which helped us make final product adjustments and enhancements before going to market.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "o-rhythm__col">
                                <div className = "kd-image -cube-doodle">
                                    <img src = { cubeDoodle } alt = "Cube doodle" />
                                </div>
                            </div>
                        </div>
                        <div className = "m-case-study-page-content__section">
                            <div className = "o-rhythm__row">
                                <div className = "o-rhythm__col">
                                    <div className = "kd-image -triangle-doodle">
                                        <img src = { triangleDoodle } alt = "Triangle doodle" />
                                    </div>
                                </div>
                                <div className = "kd-image -editor-screens">
                                    <img src = { editorScreens } alt = "Editor screens" />
                                </div>
                            </div>
                        </div>
                        <div className = "o-rhythm__row -space-between">
                            <div className = "o-rhythm__col -kd-color-block__last">
                                <div className = "m-case-study-page-content__copy-section -with-image ">
                                    <header>checking back in</header>
                                    <div className = "o-rhythm__row">
                                        <div>
                                            <p>Soon after launch, we began a new engagement with Kids Discover to improve the platform based on user feedback. Some items on the road map included:</p>
                                            <ul>
                                                <li>Creating a frictionless onboarding experience</li>
                                                <li>Getting personal with notifications and targeted messages</li>
                                                <li>Overhauling payment processing, reminders and renewals</li>
                                                <li>Adding ability for teachers to create assessments and for students to take them</li>
                                                <li>Updating the payment structure to align with user expectations</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = "o-rhythm__col -kd-color-block__last-image">
                                <div className = "kd-image -site-home-page">
                                    <img src = { siteHomePage } alt = "Homepage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "m-case-study-page-content__next m-case-study -h1" onClick={ this.handleNextCaseStudyClick }>
                    <div className = "-background-image__container">
                        <div
                            style     = { nextImageBlockStyle }
                            className = "-background-image">
                        </div>
                    </div>
                    <div className = "-content">
                        <div className="m-case-study__header">Hackerone</div>
                        <p>hacking for good</p>
                        <a href = "/case-studies/hackerone/" className = "a-button">See Next Case Study</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default KidsDiscover;
