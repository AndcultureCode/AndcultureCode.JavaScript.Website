import React                    from 'react';
import { graphql, StaticQuery } from 'gatsby'


// Primary Component
// ------------------------------------

const BlogFeatured = React.forwardRef((props, ref) => {
    const { data }         = props;
    const { edges: posts } = data.allMarkdownRemark;
    const postCount        = posts.length;
    let featuredPost       =  {};
    let featuredPostUrl    = "";
    let className          = "m-blog-featured ";

    if (postCount === 1) {
        featuredPost    =  posts[0].node.frontmatter;
        featuredPostUrl =  posts[0].node.fields.slug;
        className       += featuredPost.featuredColor;
    }

    if (props.scrollTop > 160) {
        className += " -fade";
    }


    return (
        <a
            aria-label = { `Go to article ${featuredPost.title}` }
            className  = { className }
            href       = { featuredPostUrl }
            ref        = { ref }>
            <div className="m-blog-featured__image">
                <img
                    src = { featuredPost.featuredImage.image.childImageSharp.fluid.src }
                    alt = { featuredPost.featuredImage.description } />
            </div>
            <div className="m-blog-featured__title">
                <h1><span>{ featuredPost.title }</span></h1>
                <div className="m-blog-featured__title__author">
                    by { featuredPost.author.join(" & ") }
                </div>
            </div>
        </a>
    );
});


// Exports
// ------------------------------------

export default React.forwardRef((props, ref) => (
    <StaticQuery
      query={graphql`
        query BlogFeaturedQuery {
            allMarkdownRemark(
                filter: {frontmatter: {templateKey: {eq: "blog-post"}, featured: {eq: true}}},
                sort: {order: DESC, fields: frontmatter___date},
                limit: 1
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            author
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
                            featuredColor
                            title
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
          data =>
            <BlogFeatured
                data      = { data }
                ref       = { ref }
                scrollTop = { props.scrollTop } />
      }
    />
  ));