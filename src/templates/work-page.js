import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import InteriorHero from 'components/molecules/InteriorHero';
import WorkList from 'components/organisms/WorkList';
import ClientList from 'components/organisms/ClientList';
import ImageHero from 'static/img/careers/work_header_image.png';
import WorkCta from '../components/organisms/WorkCta';

const WorkPage = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter;

  return (
      <Layout pageTitle="work" data={pageData} pageClassName="p-work" showFooterDividerLine={true}>
          <main className="p-interior-page">
              <InteriorHero
                  image={ImageHero}
                  title={pageData.title}
                  subTitle={pageData.subTitle}
                  modifier={"-work -interior"}
              />
              <div className="o-rhythm__container">
                  <WorkList />
                  <div className="p-work__friends o-rhythm__row">
                      <div className="p-work__friends__section">
                          <h2>some of our other friends</h2>
                          <p>
                              Below are a few of our many multi-year client partnerships aligned around driving
                              performance through design — far and wide in both geography and impact.
                          </p>
                      </div>
                  </div>
                  <ClientList />
              </div>
              <WorkCta />
          </main>
      </Layout>
  );
}

export default WorkPage;

export const pageQuery = graphql`
  query WorkPage {
    markdownRemark(frontmatter: { templateKey: { eq: "work-page" } }) {
      frontmatter {
        title
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
