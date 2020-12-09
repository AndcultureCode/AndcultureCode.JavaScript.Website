import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import AboutHero from 'components/molecules/AboutHero';
import DepartmentList from 'components/organisms/DepartmentList';
import TeamSliderContainer from 'components/organisms/TeamSliderContainer';
import { postFingerprint } from '../../lambda/fauna-create';
import Fingerprint2 from '@fingerprintjs/fingerprintjs';

import '../assets/scss/app.scss';

// import IPData from 'ipdata';
// const ipdata = new IPData('8ed5ac6c21f6b51557bdb60c5ec26f2d371856cc1b674913c106c475');
const ipdataUrl = `https://api.ipdata.co?api-key=8ed5ac6c21f6b51557bdb60c5ec26f2d371856cc1b674913c106c475`;

const json = () => {
  return fetch(ipdataUrl).then(res => res.json());
}
const AboutPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  const [fingerprint, setFingerprint] = useState(false);

  useEffect(() => {
    if (window.requestIdleCallback && fingerprint === false) {
        requestIdleCallback(() => {
          json().then(data => {
  Fingerprint2.get( (components) => {
    fetch("/.netlify/functions/post-fingerprint",
    {
      method: 'POST',
      body: JSON.stringify({data: {
        visitHistory: [],
        userAgent: components[0].value,
        webdriver: components[1].value,
        language: components[2].value,
        screenRes: components[6].value,
        timezone: components[9].value,
        platform: components[16].value,
        ip:       data.ip,
        city:     data.city,
        state:    data.region_code,
        postal:   data.postal,
        isp:      data.asn.name,
        country:  data.continent_name,

      }, page: 'about-page'})
    })
    .then(response => response.json())
    .then(console.log);

    // postFingerprint({
    //   visitHistory: [],
    //   userAgent: components[0].value,
    //   webdriver: components[1].value,
    //   language: components[2].value,
    //   screenRes: components[6].value,
    //   timezone: components[9].value,
    //   platform: components[16].value,
    //   ip:       data.ip,
    //   city:     data.city,
    //   state:    data.region_code,
    //   postal:   data.postal,
    //   isp:      data.asn.name,
    //   country:  data.continent_name,

    // }, 'about-page');

    setFingerprint(true);
  });
});

        })
    } else {
        setTimeout( () => {
            Fingerprint2.get((components) => {
             // console.log('set timeout fingerprint',components) // an array of components: {key: ..., value: ...}
            })
        }, 500)
    }

  }, []);
  return (
    <Layout
      pageTitle="About"
      data={pageData}
      pageClassName="p-about"
      showFooterDividerLine={false}
    >
      <main className="p-interior-page p-about">
        <AboutHero
          title={pageData.title}
          subTitle={pageData.secondaryTitle}
          introTextOne={pageData.introTextOne}
          introTextTwo={pageData.introTextTwo}
          image={pageData.heroImage.childImageSharp.fluid.src}
          modifier={""}
        />
        <DepartmentList />
        <TeamSliderContainer />
      </main>
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        secondaryTitle
        introTextOne
        introTextTwo
        heroImage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
