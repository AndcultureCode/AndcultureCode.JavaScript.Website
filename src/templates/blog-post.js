import React, { useEffect, useState, useRef } from 'react';
import { graphql, Link }                      from 'gatsby';
import Layout                                 from 'components/Layout';
import IconSocialTwitter                      from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn                     from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook                     from 'components/atoms/IconSocialFacebook';
import IconSocialMail                         from 'components/atoms/IconSocialMail';
import BlogAuthor                             from 'components/organisms/BlogAuthor';
import SubscriptionForm                       from 'components/molecules/SubscriptionForm';
import useWindowDimensions                    from 'utils/windowDimensionsHook';
import useComponentSize                       from '@rehooks/component-size';
import { postFingerprint }                    from '../../lambda/fauna-create';
import Fingerprint2                           from '@fingerprintjs/fingerprintjs';
import 'resize-observer-polyfill';
// import IPData from 'ipdata';
// const ipdata = new IPData('8ed5ac6c21f6b51557bdb60c5ec26f2d371856cc1b674913c106c475');
const ipdataUrl = `https://api.ipdata.co?api-key=8ed5ac6c21f6b51557bdb60c5ec26f2d371856cc1b674913c106c475`;

const json = () => {
  return fetch(ipdataUrl).then(res => res.json());
}

export const BlogPostTemplate = (props) => {
  const properties                                      = props.properties;
  const fbp                                             = props.fingerprintObj;
  const contentRef                                      = useRef();
  const headerRef                                       = useRef();
  const backgroundRef                                   = useRef();
  const encodedUrl                                      = `https://www.andculture.com${encodeURI(props.url)}`;
  const encodedSummary                                  = encodeURI(properties.seo.socialShareCopy);
  const encodedSubject                                  = encodeURI(`Check out the blog post ${properties.title} by andculture`);
  const encodedBody                                     = encodeURI(`Hello! I just read ${properties.title} by andculture and thought you’d love it! You can read it at ${encodedUrl}. I hope you enjoy it!`);
  const windowDimensions                                = useWindowDimensions();
  const contentStyle                                    = {};
  const mobileBackgroundOffset                          = 80;
  const tabletWidth                                     = 768;
  const articlePaddingStyle                             = {};
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

    if (windowDimensions.width > tabletWidth) {
      contentStyle.top = `${contentPosition}px`;
    }

    // Calculate the positioning of the background section. The 80 value
    // for the mobile background offset is the initial top value on mobile devices.
    if (props.scrollTop >= contentRef.current.offsetTop) {
      const topPosition = windowDimensions.width > tabletWidth ? contentPosition : contentRef.current.offsetTop + mobileBackgroundOffset;

      postBackgroundStyle.position      = "absolute";
      postBackgroundStyle.top           = topPosition;
      articlePaddingStyle.paddingBottom = topPosition;
    } else {
      const topPosition = windowDimensions.width <= tabletWidth ? mobileBackgroundOffset : 0;

      postBackgroundStyle.position      = "fixed";
      postBackgroundStyle.top           = topPosition;
      articlePaddingStyle.paddingBottom = topPosition;
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
    <article className="p-blog__background" style={articlePaddingStyle}>
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
          id        = "main-content"
          ref       = {contentRef}
          style     = { contentStyle } >
          <header ref={headerRef} className="o-rhythm__row p-blog__header" aria-label="Blog post header">
            <section>
              <p aria-label = { `Blog post under the category of ${properties.category}` }>
                <span aria-hidden="true">{ properties.category }</span>
              </p>
              <h1>{ properties.title }</h1>
              <div aria-label={ `Posted on ${ properties.longDate }` } className="m-blog-post__date">
                <div aria-hidden="true">{ properties.date }</div>
              </div>
              {
                props.authors.map((author) => (
                  <BlogAuthor author={ author } />
                ))
              }
              {properties.headline &&
                <h2>{ properties.headline }</h2>
              }
            </section>
          </header>
          <section className="o-rhythm__row p-blog__main" aria-label="Blog post article content">
            <div
              dangerouslySetInnerHTML={{
                __html: props.html
              }}>
            </div>
          </section>
          <section className="o-rhythm__row p-blog__subscribe" aria-label="Blog post subscription form">
              <div>
                <SubscriptionForm
                    formName    = "blog-subscription-form"
                    fingerprint = { fbp }
                    header      = "there's more in the works"
                    lightTheme  = { true }
                    subHeader   = "Enter your email below and be the first to know when we drop a new blog post." />
              </div>
          </section>
          <footer className="o-rhythm__row" aria-label="Blog post footer">
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
            <nav aria-label="Blog post navigation">
              <Link to="/blog/">Back to blog</Link>
              <Link to={ props.nextPostUrl }>next article</Link>
            </nav>
          </footer>
        </div>
    </article>
  );
}

const BlogPost = ({ data }) => {
  const postHtml                                  = data.post.html;
  const postProperties                            = data.post.frontmatter;
  const [scrollTop, setScrollTop]                 = useState(0);
  const [pageClass, setPageClass]                 = useState("");
  const [fingerprint, setFingerprint]             = useState(false);
  const [fingerprintObject, setFingerprintObject] = useState({});
  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop);
    };

    if (window.requestIdleCallback && fingerprint === false) {
      requestIdleCallback(() => {
        json().then(data => {

          Fingerprint2.get( (components) => {

            const obj = {
              visitHistory: [],
              userAgent:    components[0].value,
              webdriver:    components[1].value,
              language:     components[2].value,
              screenRes:    components[6].value,
              timezone:     components[9].value,
              platform:     components[16].value,
              ip:           data.ip,
              city:         data.city,
              state:        data.region_code,
              postal:       data.postal,
              isp:          data.asn.name,
              country:      data.continent_name,
            };
            fetch("/.netlify/functions/post-fingerprint",
    {
      method: 'POST',
      body: JSON.stringify({data: obj, page: 'specific blog'})
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else if(response.status === 404) {
        return Promise.reject('Netlify was not found')
      } else {
        return Promise.reject('Netlify error: ' + response.status)
      }
    })
    .then(console.log);
           // postFingerprint(obj, 'specific blog');
            setFingerprintObject(obj)
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

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  // Update the inverted class for the header colors outside
  // of the background image's positioning so it is not white
  // on white.
  const onInvertChange = (invert) => {
    setPageClass(`${invert ? "-inverted" : ""}`)
  };

  const authorNames = [];
  if (postProperties.author) {
    authorNames.push(postProperties.author);
  }
  if (postProperties.authors) {
    postProperties.authors.map((author) => {
      authorNames.push(author.author);
    });
  }

  return (
    <Layout
      data                  = { postProperties }
      pageClassName         = { `p-blog -post ${pageClass}` }
      pageTitle             = ""
      scrollTop             = { scrollTop }
      showFooterDividerLine = { true }>
      <main aria-label="Main content">
        <BlogPostTemplate
          authors        = { _getAuthors(data.authors, authorNames) }
          fingerprintObj = { fingerprintObject }
          html           = { postHtml }
          nextPostUrl    = { _getNextPostUrl(data.posts, data.post.id) }
          onInvertChange = { onInvertChange }
          properties     = { postProperties }
          scrollTop      = { scrollTop }
          url            = { data.post.fields.slug } />
      </main>
    </Layout>
  )
}


// Private Methods
// --------------------------------------------------------

const _getAuthors = (authors, authorNames) => {
  var results = [];

  authorNames.forEach(authorName => {
    var author = authors.edges.find(author => author.node.frontmatter.name === authorName);
    if (author) {
      results.push(author.node.frontmatter);
    }
  });

  return results;
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
        authors {
          author
        }
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
        longDate: date(formatString: "MMMM Do, YYYY")
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