import React, { useEffect, useState }         from 'react';
import { graphql }                            from 'gatsby';
import Layout                                 from 'components/Layout';
import heroDesktop                            from 'static/img/florida-creativity-conference/hero-desktop.jpg';
import heroMobile                             from 'static/img/florida-creativity-conference/hero-mobile.jpg';
import headshot                               from "static/img/florida-creativity-conference/stephanie-krell.png";
import FloridaCreativityConferencePageContent from "../components/organisms/FloridaCreativityConferencePageContent";
import '../assets/scss/app.scss';

const FloridaCreativityConferencePage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
      <Layout
          data                  = { frontmatter }
          pageClassName         = "__florida-creativity-conference-page p-marketing-page"
          scrollTop             = { scrollTop }
          showFooterDividerLine = { true }>
        <article className = "p-marketing-page__wrapper">
          <div className = "p-marketing-page__bgImage">
            <div className = "o-rhythm__container">
              <img src = { heroMobile } className = "-poster -mobile-only" alt = "Poster" />
              <img src = { heroDesktop} className = "-poster -tablet-and-desktop-only" alt = "Poster" />
            </div>
          </div>
          <div className="p-marketing-page__body o-rhythm__container">
            <div className = "p-marketing-page__header">
              <div className="o-rhythm__row">
                <h1>
                  andculture’s Stephanie Krell to speak at 2021 Florida Creativity Conference
                </h1>
              </div>
            </div>
            <div className="p-marketing-page__intro">
              <div className="o-rhythm__row">
                <div className="o-hero__left">
                  <img src = { headshot } alt = "Headshot" />
                </div>
                <div className="o-hero__right">
                  <p>
                    Stephanie Krell is a Human-Centered Design (HCD) expert  with a focus in Service Design,
                    Design Thinking, and Design Strategy. Currently, she is Executive Director of Strategy
                    and HCD at andculture after having worked for Walt Disney and Universal Studios theme parks
                    designing hotel and entertainment experiences. Her background includes extensive commercial
                    and federal consulting experience where she has focused on product, service, systems,
                    and experience design for brands across the globe.
                  </p>
                </div>
              </div>
            </div>
            <FloridaCreativityConferencePageContent />
          </div>
        </article>
      </Layout>
  )
}

export default FloridaCreativityConferencePage;

export const pageQuery = graphql`
  query FloridaCreativityConferencePage {
    markdownRemark(frontmatter: { templateKey: { eq: "florida-creativity-conference-page" } }) {
      html
      frontmatter {
        title
        secondaryTitle
        subTitle
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
