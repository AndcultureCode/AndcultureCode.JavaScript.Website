import React, { useEffect, useState }     from 'react';
import { graphql }                        from 'gatsby';
import Layout                             from 'components/Layout';
import heroDesktop                        from 'static/img/florida-creativity-conference/hero-desktop.jpg';
import heroMobile                         from 'static/img/florida-creativity-conference/hero-mobile.jpg';
import headshot                           from "static/img/florida-creativity-conference/stephanie-krell.png";
import FloridaCreativityConferenceContent from "../components/organisms/FloridaCreativityConference";
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
          pageClassName         = "p-landing-page"
          scrollTop             = { scrollTop }
          showFooterDividerLine = { false }>
        <article className = "p-landing-page__wrapper">
          <div className = "p-landing-page__bgImage">
            <div className = "o-rhythm__container">
              <img src = { heroMobile } className = "-poster -mobile-only" alt = "Poster" />
              <img src = { heroDesktop} className = "-poster -tablet-and-desktop-only" alt = "Poster" />
            </div>
          </div>
          <div className="p-landing-page__body o-rhythm__container">
            <div className = "p-landing-page__header">
              <div className="o-rhythm__row">
                <h1>
                  Stephanie Krell to speak at 2021 Florida Creativity Conference
                </h1>
              </div>
            </div>
            <div className="p-landing-page__intro">
              <div className="o-rhythm__row">
                <div className="o-hero__left">
                  <img src = { headshot } alt = "Headshot" />
                </div>
                <div className="o-hero__right">
                  <p>
                    Stephanie Krell is a Human-Centered Design specialist with a focus in Service Design,
                    Design Thinking, and Design Strategy. She has worked for Walt Disney and Universal Studios
                    theme parks designing hotel and entertainment experiences before moving on to both commercial
                    and federal consulting where she has focused on product, service, systems, and experience design
                    for brands across the globe.
                  </p>
                </div>
              </div>
            </div>
            <FloridaCreativityConferenceContent />
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
