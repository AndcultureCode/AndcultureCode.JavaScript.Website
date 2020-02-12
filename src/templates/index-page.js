import React from 'react'
import { graphql } from 'gatsby'
import TextLoop from "react-text-loop"
import Layout from '../components/Layout'
import '../assets/scss/app.scss'
import CaseStudyList from '../components/organisms/CaseStudyList'
import ContactForm from '../components/organisms/ContactForm'

export const IndexPageTemplate = ({
  title,
  secondaryTitle,
  subTitle,
}) => (
  <div className = "o-hero">
    <div className = "o-rhythm__container">
      <div className = "o-hero__titles">
        <TextLoop>
          <h1 className = "-after">{ title }</h1>
          <h1 className = "-before">{ secondaryTitle }</h1>
        </TextLoop>
        <h3>{ subTitle }</h3>
      </div>
      <h6>A Design Company</h6>
    </div>
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
