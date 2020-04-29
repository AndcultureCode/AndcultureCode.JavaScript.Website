import React, { useEffect, useState } from 'react';
import { graphql }                    from 'gatsby';
import Layout                         from '../components/Layout';
import CaseStudyHero                  from '../components/molecules/CaseStudyHero';
import Pulse                          from '../../src/templates/case-studies/pulse';
import KidsDiscover                   from '../../src/templates/case-studies/kids-discover';
import CCA                            from '../../src/templates/case-studies/cca';
import Hackerone                      from '../../src/templates/case-studies/hackerone';
import PACareerLink                   from '../../src/templates/case-studies/pa-career-link';

export const CaseStudyTemplate = ({
  caseStudyContent,
}) => {
  return (
    <main aria-label="Main content">
      <CaseStudyHero
          partnerName   = { caseStudyContent.partnerName }
          color         = { caseStudyContent.color }
          title         = { caseStudyContent.title }
          featuredimage = { caseStudyContent.featuredimage }
          heroIntroCopy = { caseStudyContent.heroIntroCopy }
          tags          = { caseStudyContent.tags }/>
      { // if
        caseStudyContent.partnerName === 'Pulse' &&
        <Pulse />
      }
      { // if
        caseStudyContent.partnerName === 'Kids Discover' &&
        <KidsDiscover />
      }
      { // if
        caseStudyContent.partnerName === 'CCA' &&
        <CCA />
      }
      { // if
        caseStudyContent.partnerName === 'Hackerone' &&
        <Hackerone />
      }
      { // if
        caseStudyContent.partnerName === 'PA CareerLink®' &&
        <PACareerLink />
      }
    </main>
  )
}

const CaseStudy = ({ data }) => {
  const { markdownRemark: post } = data;

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
        pageTitle = { post.frontmatter.partnerName }
        data      = { post.frontmatter }
        scrollTop = { scrollTop }>
        <div className = "p-interior-page">
          <CaseStudyTemplate
            html = { post.html }
            caseStudyContent = { post.frontmatter }/>
        </div>
      </Layout>
  )
}

export default CaseStudy

export const pageQuery = graphql`
  query CaseStudyByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        partnerName
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        color
        tags
        heroIntroCopy
        seo {
          metaTitle
          metaDescription
          socialShareCopy
        }
      }
    }
  }
`
