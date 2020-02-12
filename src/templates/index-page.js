import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import '../assets/scss/app.scss'
import CaseStudyList from '../components/organisms/CaseStudyList'
import ContactForm from '../components/organisms/ContactForm'

export const IndexPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
  <div>
    <div>
      <h1>{ title }</h1>
      <h2>{ title }</h2>
      <h3>{ title }</h3>
      <h4>{ title }</h4>
      <h5>{ title }</h5>
      <h6>{ title }</h6>
    </div>
    <div>
      { secondaryTitle }
    </div>
    { subTitle }
  </div>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title          = { frontmatter.title }
        secondaryTitle = { frontmatter.secondaryTitle }
        subTitle       = { frontmatter.subTitle }
      />
      <CaseStudyList/>
      <ContactForm/>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        secondaryTitle
        subTitle
      }
    }
  }
`
