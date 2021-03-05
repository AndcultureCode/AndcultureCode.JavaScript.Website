import React                        from 'react';
import EventRegistrationForm        from 'components/molecules/EventRegistrationForm';

const FloridaCreativityConferencePageContent = (props) => {
  return (
      <div className="o-rhythm__row">
        <section className="p-marketing-page__content" aria-label="Article content">
          <div className = "-sub-header -extra-space">
            <p>
              On March 19th, we invite you to join Stephanie at
              the <a href = "https://www.flcreativity.com/" target="_blank" rel = "noopener noreferrer">Florida Creativity Conference</a>,
              as she hosts a virtual workshop on “Creating a Human-Centric Business Culture”.
            </p>
          </div>
          <h2>
            About the Workshop
          </h2>
          <p>
            Do you think you know what’s best for your customers, employees, or stakeholders?
            Now be honest… have you actually asked them about their needs, obstacles, or motivators?
            Do you know what will make their lives better, or whether  your solutions will be seamlessly adopted?
          </p>
          <p>
            Using a human-centered approach, business leaders will engage in a workshop focused on how to assess
            challenges and areas for innovation using a people first lens. A series of facilitated activities
            will show participants how to use human-centered design thinking to improve company performance,
            innovate the customer experience, and shift from a mindset of ME to a culture of WE.
          </p>
          <h2>
            Human-Centered Design at andculture
          </h2>
          <p>
            At andculture, we apply a human-centered design (HCD) lens to everything we create.
            From custom development projects and large system implementations, to brand initiatives and
            organizational operations, we work with companies to design solutions that connect and engage.
            Our strategic design transformation services help companies map out future state evolutions
            of products, services, systems, and experiences.
          </p>
          <p>
            When organizations are human-centric, they focus on the needs, desires and abilities
            of the users being impacted. Decisions are made based on how people want to perform tasks
            and access information rather than expecting customers and employees to adjust their behaviors
            to accommodate functionality.
          </p>
          <h2>
            How can a Human-Centered Design approach help your business?
          </h2>
          <div className = "-sub-header">
            <p>
              Understand the <strong>needs, motivators and obstacles</strong> that affect <strong>engagement, satisfaction and advocacy.</strong>
            </p>
          </div>
          <ul>
            <li>Improve productivity, retention and operational performance</li>
            <li>Deliver better service quality to enhance customer conversions</li>
            <li>Learn valuable insights that drive solutions and strategies</li>
            <li>Increase internal engagement and collaboration</li>
            <li>Promote adoption of change</li>
            <li>Empower employees to deliver an exceptional customer experience</li>
          </ul>
        </section>
        <section className="p-marketing-page__form" aria-label = "Article Registration Form">
          <EventRegistrationForm
              formKey     = { process.env.GATSBY_HUBSPOT_FLORIDA_CREATIVITY_CONFERENCE_REGISTRATION_FORM_KEY }
              formName    = "user-registration-form"
              header      = "want to learn more?"
              lightTheme  = { true }
              subHeader   = "Complete the form below to receive more information about how HCD can help your organization." />
        </section>
      </div>
  );
};

export default FloridaCreativityConferencePageContent;
