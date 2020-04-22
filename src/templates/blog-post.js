import React, { useEffect, useState, useRef } from 'react';
import { graphql, Link }                      from 'gatsby';
import Layout                                 from 'components/Layout';
import IconSocialTwitter                      from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn                     from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook                     from 'components/atoms/IconSocialFacebook';
import IconSocialMail                         from 'components/atoms/IconSocialMail';
import BlogAuthor                             from 'components/organisms/BlogAuthor';
import useWindowDimensions                    from 'utils/windowDimensionsHook';
import useComponentSize                       from '@rehooks/component-size'
import 'resize-observer-polyfill';

export const BlogPostTemplate = (props) => {
  const properties                                      = props.properties;
  const contentRef                                      = useRef();
  const headerRef                                       = useRef();
  const backgroundRef                                   = useRef();
  const encodedUrl                                      = `https://www.andculture.com${encodeURI(props.url)}`;
  const encodedSummary                                  = encodeURI(properties.seo.socialShareCopy);
  const encodedSubject                                  = encodeURI(`Check out the blog post ${properties.title} by andculture`);
  const encodedBody                                     = encodeURI(`Hello! I just read ${properties.title} by andculture and thought you’d love it! You can read it at ${encodedUrl}. I hope you enjoy it!`);
  const windowDimensions                                = useWindowDimensions();
  const contentStyle                                    = {};
  let headerSize                                        = useComponentSize(headerRef);

  // Set the background image for the blog post background
  const postBackgroundStyle = {
      background: "url('" + properties.postImage.image.childImageSharp.fluid.src + "') no-repeat left top / cover"
  };

  // Manipulating the page based on the current scroll position
  // in order to create smooth transitions.
  let contentClassName = "";

  if (props.scrollTop >= 1) {
    contentClassName = "-opaque";
  }

  let contentPosition = 0;

  if (headerRef && headerRef.current && contentRef && contentRef.current) {
    contentPosition  = windowDimensions.height - headerSize.height;

    if (windowDimensions.width > 768) {
      contentStyle.top = `${contentPosition}px`;
    }

    if (props.scrollTop >= contentRef.current.offsetTop) {
      postBackgroundStyle.position = "absolute";
      postBackgroundStyle.top      = windowDimensions.width > 768 ? contentPosition : contentRef.current.offsetTop;
    } else {
      postBackgroundStyle.position = "fixed";
      postBackgroundStyle.top      = 0;
    }
  }

  if (backgroundRef && backgroundRef.current) {
    if (props.scrollTop >= contentRef.current.offsetTop + backgroundRef.current.offsetHeight) {
      props.onInvertChange(true);
    } else {
      props.onInvertChange(false);
    }
  }

  return (
    <article className="p-blog__background">
        <div
          className   = "p-blog__background__gradient"
          aria-hidden = "true"
          ref         = { backgroundRef }
          style       = { postBackgroundStyle }>
          <div className="p-blog__background__gradient__top"></div>
          <div className="p-blog__background__gradient__bottom"></div>
        </div>
        <div
          className = {`p-blog__background__wrapper ${contentClassName} o-rhythm__container`} 
          ref       = {contentRef}
          style     = { contentStyle } >
          <header ref={headerRef} className="o-rhythm__row">
            <section>
              <p>{ properties.category }</p>
              <h1>{ properties.title }</h1>
              <BlogAuthor
                author   = { props.author }
                postDate = { properties.date } />
              {properties.headline &&
                <h2>{ properties.headline }</h2>
              }
            </section>
          </header>
          <main className="o-rhythm__row">
            <section
              dangerouslySetInnerHTML={{
                __html: props.html
              }}>
            </section>
          </main>
          <footer className="o-rhythm__row">
            <section>
              <a
                href       = {`mailto:?to=&body=${encodedBody}&subject=${encodedSubject}`}
                target     = "_blank"
                aria-label = "Share via Email"
                rel        = "noopener">
                <IconSocialMail />
              </a>
              <a
                href       = {`https://twitter.com/intent/tweet?text=${encodedSummary}%20${encodedUrl}&via=andculture`}
                target     = "_blank"
                aria-label = "Share on Twitter"
                rel        = "noopener">
                <IconSocialTwitter />
              </a>
              <a
                href       = {`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`} 
                target     = "_blank"
                aria-label = "Share on LinkedIn"
                rel        = "noopener">
                <IconSocialLinkedIn />
              </a>
              <a
                href       = {`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target     = "_blank"
                aria-label = "Share on Facebook"
                rel        = "noopener">
                <IconSocialFacebook />
              </a>
            </section>
            <nav>
              <Link to="/blog/">Back to blog</Link>
              <Link to={ props.nextPostUrl }>next article</Link>
            </nav>
          </footer>
        </div>
    </article>
  );
}

const BlogPost = ({ data }) => {
  const postHtml                  = data.post.html;
  const postProperties            = data.post.frontmatter;
  const [scrollTop, setScrollTop] = useState(0);
  const [pageClass, setPageClass] = useState("");

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // Update the inverted class for the header colors outside
  // of the background image's positioning so it is not white
  // on white.
  const onInvertChange = (invert) => {
    setPageClass(`${invert ? "-inverted" : ""}`)
  };

  return (
    <Layout
      data                  = { postProperties }
      pageClassName         = { `p-blog -post ${pageClass}` }
      pageTitle             = ""
      scrollTop             = { scrollTop }
      showFooterDividerLine = { true }>
      <BlogPostTemplate
        author         = { _getAuthor(data.authors, postProperties.author) }
        html           = { postHtml }
        nextPostUrl    = { _getNextPostUrl(data.posts, data.post.id) }
        onInvertChange = { onInvertChange }
        properties     = { postProperties }
        scrollTop      = { scrollTop }
        url            = { data.post.fields.slug } />
    </Layout>
  )
}


// Private Methods
// --------------------------------------------------------

const _getAuthor = (authors, authorName) => {
  const author = authors.edges
                  .find(author => author.node.frontmatter.name === authorName);

  if (!author) {
    return null;
  }

  return author.node.frontmatter;
};

const _getNextPostUrl = (posts, blogPostId) => {
  // Get the next Url
  let nextPostUrl   = "";
  const currentPost = posts.edges.find(blogPost => blogPost.node.id === blogPostId);

  if (currentPost) {
    nextPostUrl = currentPost.next ? currentPost.next.fields.slug : posts.edges[0].node.fields.slug;
  }

  return nextPostUrl;
};


// Exports
// --------------------------------------------------------

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    posts: allMarkdownRemark(
      filter: {frontmatter: {templateKey: {eq: "blog-post"}}},
      sort: {order: DESC, fields: frontmatter___date}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            author
            category
            headline
            title
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
            date
            featuredColor
            seo {
              metaDescription
              metaTitle
              socialShareCopy
            }
          }
          fields {
            slug
          }
        }
        previous {
          fields {
            slug
          }
        }
        next {
          fields {
            slug
          }
        }
      }
    }
    post: markdownRemark(id: {eq: $id}) {
      id
      html
      frontmatter {
        author
        category
        headline
        title
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
        date(formatString: "M.DD.YY")
        featuredColor
        seo {
          metaDescription
          metaTitle
          socialShareCopy
        }
      }
      fields {
        slug
      }
    }
    authors: allMarkdownRemark (
      filter: {frontmatter: {createPage: {eq: false}}}
    ) {
      edges {
        node {
          id
          frontmatter {
            position
            name
            easterEgg
            socialLinks {
              platform
              url
            }
            authorPhoto {
              description
              image {
                childImageSharp {
                  fluid(maxWidth: 1920, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`