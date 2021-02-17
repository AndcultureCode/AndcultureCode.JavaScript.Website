import React, { useEffect, useState }     from 'react';
import { graphql }                        from 'gatsby';
import Layout                             from 'components/Layout';
import heroDesktop                        from 'static/img/florida-creativity-conference/hero-desktop.jpg';
import heroMobile                         from 'static/img/florida-creativity-conference/hero-mobile.jpg';
import headshot                           from "static/img/florida-creativity-conference/stephanie-krell.png";
import squiggleImage                      from "../../static/img/pink-squiggle.png";
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
      scrollTop             = { scrollTop }
      showFooterDividerLine = { false }>
        <div className = "p-landing-page">
          <div className = "p-landing-page__image">
            <img src = { heroMobile } className = "-poster -mobile-only" alt = "Poster" />
            <img src = { heroDesktop} className = "-poster -tablet-and-desktop-only" alt = "Poster" />
          </div>
          <div className = "p-landing-page__header o-rhythm__container">
            <div className="o-rhythm__row">
              <div className="p-landing-page__content">
                <h1>
                  Stephanie Krell to speak at 2021 Florida Creativity Conference
                </h1>
              </div>
            </div>
          </div>
          <div className="p-landing-page__intro o-rhythm__row">
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
          {/*<div className="o-landing-page__container">*/}
          {/*  <div className="o-rhythm__container">*/}
          {/*    <div className="o-landing-page__wrapper">*/}
          {/*      <div className="o-landing-page__image">*/}
          {/*        <img src = { headshot } alt = "Headshot" />*/}
          {/*      </div>*/}
          {/*      <div className="o-landing-page__intro">*/}
          {/*        <p>*/}
          {/*          Stephanie Krell is a Human-Centered Design specialist with a focus in Service Design,*/}
          {/*          Design Thinking, and Design Strategy. She has worked for Walt Disney and Universal Studios*/}
          {/*          theme parks designing hotel and entertainment experiences before moving on to both commercial*/}
          {/*          and federal consulting where she has focused on product, service, systems, and experience design*/}
          {/*          for brands across the globe.*/}
          {/*        </p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
          <FloridaCreativityConferenceContent />
        </div>
    </Layout>
  )
}

export default FloridaCreativityConferencePage;

export const pageQuery = graphql`
  query FloridaCreativityConferencePage {
    markdownRemark(frontmatter: { templateKey: { eq: "2021-florida-creativity-conference-page" } }) {
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
