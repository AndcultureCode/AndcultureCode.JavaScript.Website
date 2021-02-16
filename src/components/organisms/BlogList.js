import React                    from 'react';
import BlogPost                 from "components/molecules/BlogPost"
import { graphql, StaticQuery } from 'gatsby'


// Primary Component
// ------------------------------------

const BlogList = (props) => {
    const { data }         = props;
    const { edges: posts } = data.allMarkdownRemark;
    const postCount        = posts.length;

    return (
        <div className={`o-rhythm__row o-blog-list`}>
            {posts &&
                posts.map(({ node: post }, index) => {
                    const blogPost = post.frontmatter;

                    return (
                        <BlogPost
                            imageOnLeft = { (index + 1) % 2 === 0 }
                            key         = { `blog-post-${index}` }
                            post        = { blogPost }
                            url         = { post.fields.slug }
                            zIndex      = { postCount - index } />
                    );
                })
            }
        </div>
    );
};


// Exports
// ------------------------------------

export default (props) => (
    <StaticQuery
      query={graphql`
        query BlogListQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "blog-post"}, featured: {eq: false}}},
                sort: {order: DESC, fields: frontmatter___date}
            ) {
                edges {
                  node {
                    id
                    frontmatter {
                      author
                      templateKey
                      title
                      date
                      featured
                      featuredImage {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1920, quality: 100) {
                                  ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                      tileImage {
                        description
                        image {
                            childImageSharp {
                                fluid(maxWidth: 1920, quality: 100) {
                                  ...GatsbyImageSharpFluid
                                }
                            }
                        }
                      }
                      postImage {
                        description
                        image {
                          childImageSharp {
                            fluid(maxWidth: 1920, quality: 100) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                      category
                      featuredColor
                    }
                    fields {
                      slug
                    }
                  }
                }
             }
          }
      `}
      render = {
        (data, count) =>
          <BlogList
            data      = { data }
            count     = { count } />
      }
    />
  )