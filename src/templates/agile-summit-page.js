import React, { useEffect, useState }     from 'react';
import { graphql }                        from 'gatsby';
import Layout                             from 'components/Layout';
import heroDesktop                        from 'static/img/agile-summit/hero-desktop.jpg';
import heroMobile                         from 'static/img/agile-summit/hero-mobile.jpg';
import headshot                           from 'static/img/agile-summit/nic-easton.png';
import AgileSummitPageContent             from "../components/organisms/AgileSummitPageContent";
import '../assets/scss/app.scss';

const AgileSummitPage = ({ data }) => {
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
          pageClassName         = "__agile-summit p-marketing-page"
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
                  Thanks for attending the Paul College 2021 Agile Summit
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
                    Nic Easton is the Executive Director, Agility at andculture in Harrisburg, Pennsylvania.
                    He has a demonstrated history of enabling and enacting change and takes an outcome based
                    approach to delivering, measuring, and maximizing value. Promotion of a culture of continuous
                    improvement through empiricism and experimentation is the foundation on which he helps teams
                    and organizations. His background and experiences include healthcare, nuclear power plant
                    simulation, and human centered design.
                  </p>
                </div>
              </div>
            </div>
            <AgileSummitPageContent />
          </div>
        </article>
      </Layout>
  )
}

export default AgileSummitPage;

export const pageQuery = graphql`
  query AgileSummitPage {
    markdownRemark(frontmatter: { templateKey: { eq: "agile-summit-page" } }) {
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
