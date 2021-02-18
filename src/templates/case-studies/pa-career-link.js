import React                   from 'react';
import CaseStudyFullBleedImage from 'components/molecules/CaseStudyFullBleedImage';
import CaseStudyContentSection from 'components/molecules/CaseStudyContentSection';
import imgJobSearch            from 'static/img/case-studies/career-link/jobsearch.jpg';
import imgPACapitol            from 'static/img/case-studies/career-link/pa_capitol.jpg';
import imgResourceCenter       from 'static/img/case-studies/career-link/resource_center.jpg';
import imgPennsylvania         from 'static/img/case-studies/career-link/pennsylvania.png';
import imgWhiteboard           from 'static/img/case-studies/career-link/whiteboard.png';
import imgWomaniPad            from 'static/img/case-studies/career-link/woman_iPad.jpg';
import imgDotGrid              from 'static/img/case-studies/career-link/dot_grid.png';
import nextImg                 from 'static/img/case-studies/kids-discover/student-homework.png';
import { RouteUtils }          from '../../utils/routeUtils';


const PACareerLink = class extends React.Component {
    constructor(props) {
        super(props);
    }

    handleNextCaseStudyClick = () => {
        RouteUtils.goToUrl("/case-studies/kids-discover/");
    }

    render() {

        const nextImageBlockStyle = {
            background: "url('" + nextImg + "') no-repeat center center / cover"
        }

        return (
            <div class="m-case-study-page-content__wrapper">
                <CaseStudyFullBleedImage
                    altText="Job Search"
                    image={imgJobSearch} />
                <CaseStudyContentSection
                    header={["The current ", <br className="-desktop-only" />, "situation"]}
                    title="what is the current reality?">
                    <p>It's a probable (and broken) reality that the near future holds a 15-30% unemployment rate. Current systems, state governments and processes are unequipped for an influx of job seekers and consumers who need support during uncertain times. </p>
                    <p>This reality isn't new to us. It brings us back to an engagement with Pennsylvania (PA) CareerLink&reg;, the Commonwealth's workforce development system.</p>
                </CaseStudyContentSection>
                <div className="o-rhythm__container m-case-study-collage">
                    <p>
                        <img src={imgResourceCenter} alt="Resource Center" />
                    </p>
                    <p>
                        PA CareerLink&reg; center locations in Pennsylvania
                    </p>
                    <p>
                        <img src={imgPennsylvania} alt="Pennsylvania" />
                    </p>
                </div>
                <CaseStudyContentSection
                    header="The reality"
                    sectionClassName="-no-top-padding"
                    title="what was our partner's reality?">
                    <p>PA CareerLink&reg; centers provide a wealth of job support services. In addition to the government-funded
                    services offered as programs, there is a softer side of support that comes from the center staff and
                    the empathy they have for their clients. PA CareerLink&reg; services are provided with the job seeker’s
                    best interests in mind. Individually each service may be excellent, but challenges arise at the points
                            of transition and coordination.</p>
                </CaseStudyContentSection>
                <CaseStudyFullBleedImage
                    altText="PA Capitol"
                    image={imgPACapitol} />
                <CaseStudyContentSection
                    header="The problem"
                    title="so what's the problem?">
                    <p>The job search is not only professional, but personal. We went into the project knowing that as an agency, but more importantly as people. We knew that ethnographic and personal research could help us understand the human experience behind the broken reality of job seeking.</p>

                    <p>In the Capitol region PA CareerLink&reg; office, we explored the services by assuming the role of a job seeker new to the area, who had lost his job in the move and was interested in exploring training opportunities. As a job seeker, we hoped to speak with someone about our particular interests, available training, and any alternatives that might be a good fit. Our expectations were not met.</p>

                    <p>We found that an absence of program awareness, transportation difficulties, a lack of empowered leadership, spatial challenges that lead to privacy concerns, and other barriers led to a less than ideal experience for all involved. Consumers loved the programs, information, and assistance that PA CareerLink&reg; provided them, but found confusion with the experiences along the way.</p>

                    <p>These are likely universal problems that seem like they need coordination from many different entities to become efficient. PA CareerLink&reg; itself can't adjust public transportation schedules or create new stops closer to its physical building.</p>

                    <p>Instead we need to ask ourselves how we can make these services more accessible to users without needing to jump through hoops. And how we can innovate and implement now.</p>
                </CaseStudyContentSection>
                <div className="o-rhythm__container">
                    <img src={imgWhiteboard} alt="Whiteboard" />
                </div>
                <CaseStudyContentSection
                    header="The strategy"
                    title="what needed to happen?">
                    <p>Before stepping into a PA CareerLink&reg; center, we asked ourselves key questions like, “How can a brick and mortar uniquely
                    serve job seekers?”, “What are the internal relationships within PA CareerLink&reg;?”, and “What is the overall experience
                    for job seeker?” Guided by these questions, we identified five opportunities for innovation, which we call the “5 ways
                            forward.” They address areas vital to the PA CareerLink&reg; process that can be improved through comprehensive actionable steps.</p>
                    <ol>
                        <li>Cultivate employee cohesiveness and morale </li>
                        <li>Improve ways of protecting and sharing information</li>
                        <li>Provide support for overcoming personal barriers</li>
                        <li>Develop tools for managing client expectations </li>
                        <li>Expand community outreach</li>
                    </ol>
                </CaseStudyContentSection>
                <div className="m-case-study-image-swatch">
                    <img src={imgDotGrid} alt="Dot Grid" aria-hidden="true" />
                    <img src={imgWomaniPad} alt="Woman with iPad" />
                </div>
                <div className="full-width-background -career-link">
                    <CaseStudyContentSection
                        header="The future"
                        title="what now?">
                        <p>While these ways forward are still where changes need to occur, timeliness is even more important. Now more than ever we need innovators to stand in the gap and provide a speedy reinvention of these processes and programs run by government agencies that are facing changing circumstances in the coming 18 months. These changes are fundamental and dive deep into existing structures.</p>
                        <p>We believe we are a part of that team of innovators. We've got the background knowledge, the human touch, and the passion for solving realities that just aren't working anymore.</p>
                        <p>Another value we have at andculture is optimism. And while the present outlook is trending negative, we're optimistic that, together, we can build a future that's better. Better prepared. Better crafted. Better for all. </p>
                    </CaseStudyContentSection>
                </div>
                <div className="m-case-study-page-content__next m-case-study -kd" onClick={ this.handleNextCaseStudyClick }>
                    <div className="-background-image__container">
                        <div
                            style={nextImageBlockStyle}
                            className="-background-image">
                        </div>
                    </div>
                    <div className="-content">
                        <div className="m-case-study__header">Kids Discover</div>
                        <p>changing the face of education</p>
                        <a href="/case-studies/kids-discover/" className="a-button">See Next Case Study</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PACareerLink;
