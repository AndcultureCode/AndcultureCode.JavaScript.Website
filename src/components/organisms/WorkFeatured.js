import React from "react";
import { graphql, StaticQuery } from "gatsby";

const WorkFeatured = React.forwardRef((props, ref) => {
    const { data } = props;
    const { edges: list } = data.allMarkdownRemark;
    const featuredWorkCount = list.length;
    let featuredWork = {};
    let featuredWorkUrl = "";

    if (featuredWorkCount === 1) {
        featuredWork = list[0].node.frontmatter;
        featuredWorkUrl = list[0].node.fields.slug;
    }

    return (
        <div className="o-work-featured__container">
            <div className="o-rhythm__container">
                <div className="o-work-featured__image-container">
                    <img src={featuredWork.featuredimage.childImageSharp.fluid.src} alt="" />
                </div>
                <div className="o-work-featured__content">
                    <h2 className="featured-work-partner-name">FEATURED WORK: {featuredWork.partnerName}</h2>
                    <p className="featured-work-title">{featuredWork.title}</p>
                    <div className="featured-work-links">
                        <a href={featuredWorkUrl}>VIEW CASE STUDY</a>
                        <a href="/work/">SEE ALL WORK</a>
                    </div>
                </div>
            </div>
        </div>
    );
});

// Exports
// ------------------------------------

export default React.forwardRef((props, ref) => (
    <StaticQuery
        query={graphql`
            query WorkFeaturedQuery {
                allMarkdownRemark(
                    filter: { frontmatter: { templateKey: { eq: "case-studies" }, featuredpost: { eq: true } } }
                    sort: { order: DESC, fields: frontmatter___date }
                    limit: 1
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                author
                                featuredimage {
                                    childImageSharp {
                                        fluid(maxWidth: 1920, quality: 100) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                partnerName
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
        render={(data) => <WorkFeatured data={data} ref={ref} />}
    />
));
