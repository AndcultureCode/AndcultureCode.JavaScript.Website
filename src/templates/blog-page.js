import React, { useEffect, useState, useRef } from 'react';
import { graphql }                            from 'gatsby';
import Layout                                 from 'components/Layout';
import BlogFeatured                           from 'components/molecules/BlogFeatured';
import BlogList                               from 'components/organisms/BlogList';
import useWindowDimensions                    from 'utils/windowDimensionsHook';
import useComponentSize                       from '@rehooks/component-size';
import {postFingerprint}                      from '../../lambda/fauna-create';
import Fingerprint2                           from '@fingerprintjs/fingerprintjs';
import 'resize-observer-polyfill';
import '../assets/scss/app.scss'

export const BlogPageTemplate = ({
    title,
    secondaryTitle,
    subTitle,
    scrollTop,
  }) => {
    let featuredRef        = useRef(null);
    let featuredSize       = useComponentSize(featuredRef);
    const windowDimensions = useWindowDimensions();
    const blogListStyle    = {};
    const tabletWidth      = 768;

    if (windowDimensions.width > tabletWidth) {
      blogListStyle.marginTop = `${featuredSize.height + 184}px`;
    }

    return (
      <main id="main-content">
        <BlogFeatured
          ref       = { featuredRef }
          scrollTop = { scrollTop } />
        <div className="p-blog__list" style={blogListStyle}>
          <div className="o-rhythm__container">
            <BlogList />
          </div>
        </div>
      </main>
    );
  }

  const BlogPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    const [scrollTop, setScrollTop] = useState(0);

    const [fingerprint, setFingerprint] = useState(false);


    useEffect(() => {
      const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
      };
      window.addEventListener("scroll", onScroll);
      if (window.requestIdleCallback && fingerprint === false) {
        requestIdleCallback(() => {
            Fingerprint2.get( (components) => {
              postFingerprint({
                visitHistory: [],
                userAgent: components[0].value,
                webdriver: components[1].value,
                language: components[2].value,
                screenRes: components[6].value,
                timezone: components[9].value,
                platform: components[16].value,
              }, 'blog-page');

              setFingerprint(true);
            });
        })
    } else {
        setTimeout( () => {
            Fingerprint2.get((components) => {
              console.log('set timeout fingerprint',components) // an array of components: {key: ..., value: ...}
            })
        }, 500)
    }
      return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    return (
      <Layout
        data                  = { frontmatter }
        pageClassName         = "p-blog"
        pageTitle             = "blog"
        scrollTop             = { scrollTop }
        showFooterDividerLine = { true }>
        <BlogPageTemplate
          scrollTop      = { scrollTop }
          title          = { frontmatter.title }
          secondaryTitle = { frontmatter.secondaryTitle }
          subTitle       = { frontmatter.subTitle } />
      </Layout>
    )
  }

export default BlogPage;

export const pageQuery = graphql`
  query BlogPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "blog-page" } }) {
      frontmatter {
        author
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