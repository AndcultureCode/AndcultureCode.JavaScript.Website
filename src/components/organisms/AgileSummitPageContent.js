import React                        from 'react';
import EventRegistrationForm        from 'components/molecules/EventRegistrationForm';
import { EventRegistrationFormKey } from "../../constants/event-registration-form-key";


const AgileSummitPageContent = (props) => {
  const blogPostLink = "/blog/the-agile-project-methodology-at-andculture/";
  const mediumLink   = "https://medium.com/and-next/the-surprising-power-of-liberating-structures-to-unleash-team-potential-601e1abae3f7";

  return (
      <div className="o-rhythm__row">
        <section className="p-marketing-page__content" aria-label="Article content">
          <h2>
            Human-Centered Agility at andculture
          </h2>
          <p>
            Working in an agile way allows us to accept that being in a professional environment does not excuse us
            from the reality of also being humans working with and for other humans. Much like being human in
            other areas of our lives—parenthood, relationships, siblings—flexibility allows us to be more efficient,
            forgiving and realistic in our roles, while embracing changing realities.
          </p>
          <p>
            Our client partners can embrace the flexibility that agility gives them, while keeping their vision
            of the product as the north star. With regular reviews of work, clients can shape the work more closely,
            more feedback, ensure it is providing value and play an active role in prioritizing work. Ultimately,
            for clients, an agile workflow means early and often delivery, efficient work and more collaboration
            and control on the final product.
          </p>
          <h2>
            Check out some of Nic's blog posts:
          </h2>
          <ul>
            <li>
              <a href = { blogPostLink } target="_blank">Agile as a Methodology for Getting Work Done and Being Human</a>
            </li>
            <li>
              <a href = { mediumLink } target="_blank" rel = "noopener noreferrer">The Surprising Power of Liberating Structures to Unleash Team Potential</a>
            </li>
          </ul>
        </section>
        <section className="p-marketing-page__form" aria-label = "Article Registration Form">
          <EventRegistrationForm
              formKey     = { EventRegistrationFormKey.agileSummit }
              formName    = "user-registration-form"
              header      = "want to learn more?"
              lightTheme  = { true }
              subHeader   = "Complete the form below to find out how we use agile to solve complex problems." />
        </section>
      </div>
  );
};

export default AgileSummitPageContent;
