import React from 'react';
import CustomSlider from 'components/molecules/CustomSlider';
import CaseStudyContentSection from 'components/molecules/CaseStudyContentSection';
import imgCarousel1 from 'static/img/case-studies/edio/edio-carousel-1.jpg';
import imgCarousel2 from 'static/img/case-studies/edio/edio-carousel-2.jpg';
import imgCarousel3 from 'static/img/case-studies/edio/edio-carousel-3.jpg';
import rainbow from 'static/img/case-studies/cca/rainbow_doodle.png';
import traingle from 'static/img/case-studies/cca/doodle_triangle.png';
import dotsSmall from 'static/img/case-studies/cca/dotted_area.png';
import artifactsPlant from 'static/img/case-studies/edio/edio-artifact-plant.png';
import imgCalendar from 'static/img/case-studies/edio/edio-calendar.jpg';
import imgCollage from 'static/img/case-studies/edio/edio-collage-1.jpg';
import imgDiagram from 'static/img/case-studies/edio/edio-diagram.jpg';
import imgStudentTeacher from 'static/img/case-studies/edio/edio-student-teacher.jpg';

import studyImg from 'static/img/case-studies/cca/studying.jpg';
import nextImg from 'static/img/case-studies/career-link/woman_iPad.jpg';


const Edio = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const sliderImages = [
            { image: imgCarousel1, alt: "edio carousel collage 1" },
            { image: imgCarousel2, alt: "edio carousel collage 2" },
            { image: imgCarousel3, alt: "edio carousel collage 3" }
        ];

        const nextImageBlockStyle = {
            background: "url('" + nextImg + "') no-repeat center center / cover"
        }

        return (
            <div>
                <div className="m-case-study-page-content__image">
                    <img src={imgCalendar} alt="edio calendar" />
                </div>
                <div className="o-rhythm__container">
                    <div className="m-case-study-page-content__copy-section -body-intro">
                        <header>what was CCA’s reality?</header>
                        <div className="o-rhythm__row">
                            <div className="content__copy">
                                <p>After working with CCA on improving their website to provide a better cyber school experience (see our previous work), they saw the need to bring together families, students, and educators in a learning community. They realized the only way to successfully engage with their community was to replace their existing learning platform. CCA needed us to work our magic and develop a new platform designed with the student at the center: edio. Our partnership marked the beginning of an amazing journey towards redefining education, one experience at a time.<span className="easter-egg__right"></span></p>
                            </div>
                            <div className="content__easter-egg easter-egg">fun fact: edio stands for Education for Individualized Outcomes</div>
                        </div>
                    </div>
                </div>
                <div className="m-case-study-page-content__image">
                    <img src={imgStudentTeacher} alt="edio student teacher" />
                </div>
                <CaseStudyContentSection
                    header=""
                    title="okay, so how did we tackle the problem?">
                    <p>Education in many ways is a broken reality, a product molded by policy and decisions that idealize an unrealistic version of students and teachers that couldn't be further from reality.  We utilized human-centered design as a way to know the real people, the everyday struggles of students, teachers, and parents, empathizing with them and building solutions with each of them at the center. </p>
                    <p>Allow us to take you through two years of work, hundreds of miles, and thousands upon thousands of hours.</p>
                </CaseStudyContentSection>
                <div className="m-case-study-page-content__image">
                    <img src={imgCollage} alt="edio image collage" />
                </div>
                <CaseStudyContentSection
                    header="Research"
                    sectionClassName="-no-bottom-padding"
                    title="">
                    <p>To fully understand how to create the right platform, we started with a discovery phase. We wanted to ask the right questions and let them guide our way. We traveled the state and visited seven sites. We learned the stories of the student, the parent, the teacher, and the administrator and immersed ourselves in their world. We held co-creative workshops with CCA staff members and did a deep competitive analysis of product features. We created personas and defined roles. And, we created affinity maps through way too many sticky notes that tied the features to these personas. It was fun, we promise. </p>
                </CaseStudyContentSection>
                <CaseStudyContentSection
                    header="Synthesis"
                    sectionClassName="-no-top-padding -no-bottom-padding"
                    title="">
                    <p>We then synthesized all this extensive research. We started the process of mapping user journey flows and we outlined what those product flows would look like. We defined through diagrams what the roles of users and systems were in how they process data and what integrations were the most valuable. We tested how other systems would integrate with edio. FYI, edio has over 30 third party content integrations that seamlessly allow for creating hybrid courses incorporating external resources. Impressive, we know! </p>
                </CaseStudyContentSection>
                <CaseStudyContentSection
                    header="Design"
                    sectionClassName="-no-top-padding -no-bottom-padding"
                    title="">
                    <p>Once we knew what we needed, the visual design process began. There were hundreds of rough sketches; we aren't kidding. Simultaneously, we did style explorations to hone in the right visual language and identity for the platform. Because, you know, it’s all in the little details.</p>
                </CaseStudyContentSection>
                <CaseStudyContentSection
                    header="User Testing"
                    sectionClassName="-no-top-padding"
                    title="">
                    <p>Then, we started the development process of writing the code to build the product. And, we tested our work again and again. We received feedback, categorized it and used it to inform changes.</p>
                </CaseStudyContentSection>
                <CustomSlider images={sliderImages} />
                <CaseStudyContentSection
                    header="mission"
                    title="we’ve crafted a platform from the ground up that is designed around the needs of the student">
                    <p>Our number one priority was to deliver an experience with the flexibility to customize each student’s curriculum to maximize learning. Understanding that each student learns differently was crucial in developing a learning platform that would allow teachers to accommodate unique learning styles on a case-by-case basis.</p>
                    <p>We found that key relationships between teachers, parents, and administrators are important to a student’s success and we wanted to make sure that was a big part of it. edio’s platform ensures that the student’s support system is accompanying them through the learning journey.</p>
                </CaseStudyContentSection>
                <div className="o-rhythm__container">
                    <div className="o-rhythm__row">
                        <img src={imgDiagram} alt="edio full diagram" />
                    </div>
                </div>
                <CaseStudyContentSection
                    header="features"
                    title="here’s how we guarantee education success ">
                    <p>By utilizing edio, you’ll achieve successful educational outcomes for each and every student. edio’s relationship management system allows for:</p>
                    <ul>
                        <li>Customizable curriculum at the student level</li>
                        <li>Flexible structure to learning that is easily understood</li>
                        <li>Content authoring and third-party integrations</li>
                        <li>Transparency for parents</li>
                        <li>Access to course materials so parents can learn and help their students</li>
                        <li>Relationships and easy access to teachers and staff</li>
                        <li>Multiple communication channels to keep both students and parents informed and engaged</li>
                    </ul>
                </CaseStudyContentSection>
                <div className="m-case-study-page-content__color-block -edio">
                    <img src={artifactsPlant} className="-background-texture -plant" alt="Plant" aria-hidden="true" />
                    <img src={dotsSmall} className="-background-texture -dots-small" alt="Small dots" aria-hidden="true" />
                    <img src={traingle} className="-background-texture -triangle" alt="Triangle" aria-hidden="true" />
                    <div className="m-case-study-page-content__copy-section">
                        <div className="o-rhythm__container">
                            <header className="-push-three">don’t take our word for it, see the numbers</header>
                            <div className="o-rhythm__row">
                                <div className="content__header -edio">
                                    <ul>
                                        <li>10,000+</li>
                                        <li>0</li>
                                        <li>51</li>
                                        <li>2,799,688</li>
                                        <li>4,381,686</li>
                                        <li>22,235,556</li>
                                        <li>218,046</li>
                                    </ul>
                                </div>
                                <div className="content__copy">
                                    <p>edio has demonstrated a high level of success in two full school years and summer school sessions. </p>
                                    <ul className="-no-bullets">
                                        <li><span className="edio-numbers">10,000</span>students who actively used the system</li>
                                        <li><span className="edio-numbers">0</span>minutes of system downtime</li>
                                        <li><span className="edio-numbers">51</span>external content providers integrated</li>
                                        <li><span className="edio-numbers">2,799,688</span>chat messages sent</li>
                                        <li><span className="edio-numbers">4,381,686</span>entities synced between edio and PowerSchool SIS</li>
                                        <li><span className="edio-numbers">22,235,556</span>gradebook entries</li>
                                        <li><span className="edio-numbers">218,046</span>Zoom meetings registered, rostered and conducted through edio</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-case-study-page-content__next m-case-study -career-link">
                    <div className="-background-image__container">
                        <div
                            style={nextImageBlockStyle}
                            className="-background-image">
                        </div>
                    </div>
                    <div className="-content">
                        <div className="m-case-study__header">PA CareerLink®</div>
                        <p>designing for optimism in uncertain times</p>
                        <a href="/case-studies/pa-career-link/" className="a-button">See Next Case Study</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Edio;
