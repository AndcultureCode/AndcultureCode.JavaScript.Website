import React                 from 'react';
import EventRegistrationForm from 'components/molecules/EventRegistrationForm';


const FloridaCreativityConferenceContent = (props) => {
  return (
      <article>
        <div className="p-landing-page__wrapper o-rhythm__container">
          <div className="o-rhythm__row">
            <section aria-label="Article content">
              <div className="p-landing-page__content">
                <h2>
                  Creating a Human-Centric Business Culture
                </h2>
                <p>
                  Do you think you know what’s best for your customers? For your employees?
                  For your stakeholders? Now be honest… have you actually asked them about their needs,
                  obstacles, or motivators? Do you have enough context to not only make assumptions about
                  what would make their lives better, but to also validate that your ideas will be adopted
                  without friction into workflows, products, and customer experiences?
                </p>
                <p>
                  Using a human-centered approach, we will engage in a workshop focused at helping businesses
                  learn the skills necessary to begin looking at challenges and areas for innovation through
                  internal performance and customer’s adoption lens.
                </p>
                <p>
                  We will work to shift a mindset of ‘ME’ to a culture of ‘WE’.
                  A series of facilitated activities will guide participants to understand and apply human-centered
                  design thinking to improving your company’s performance, how the customer experience can be improved
                  or innovated through a HCD lens for a frictionless experience, and how participants can work through
                  several real-time examples within their own departments to provide immediate value back to the organization.
                </p>
                <p>
                  This culture shift will have three outcomes: Increasing internal management and team collaboration
                  and consideration, devising better services/products/experiences that will drive increased customer consumption,
                  and helping employees understand customer needs in order to deliver a better customer experience.
                </p>
                <h2>
                  What:
                </h2>
                <p className='-bold-text'>
                  What 3 things might your participants learn or experience as a result of your workshop?
                </p>
                <ul>
                  <li>How to validate assumptions and create adoptable solutions.</li>
                  <li>Active Listening skills.</li>
                  <li>Activating Mindfulness and Being Present.</li>
                </ul>
                <h2>
                  So What:
                </h2>
                <p className='-bold-text'>
                  What might be 3 ways that the content of your workshop changes your attendees' perceptions,
                  habits, ways of working, or view of the world?
                </p>
                <ul>
                  <li>Empathy for internal stakeholders/external customers.</li>
                  <li>Collaborative ideation.</li>
                  <li>Shifting to a people-centric approach.</li>
                </ul>
                <h2>
                  Now What:
                </h2>
                <p className='-bold-text'>
                  What are 3 ways your attendees might apply what they learn in your workshop?
                </p>
                <ul>
                  <li>Building internal collaboration and consideration of each other.</li>
                  <li>Management shifting to a customer/user centric approach to new services/products.</li>
                  <li>Employees understand the customers better in order to deliver better customer experiences.</li>
                </ul>
              </div>
            </section>
            <section className = "-article-form" aria-label = "Article Registration Form">
              <div className="p-landing-page__form">
                <EventRegistrationForm
                    formName    = "user-registration-form"
                    header      = "join the event"
                    lightTheme  = { true }
                    subHeader   = "Enter your information below and we'll get back to you with more details." />
              </div>
            </section>
          </div>
        </div>
      </article>
  );
};

export default FloridaCreativityConferenceContent;
