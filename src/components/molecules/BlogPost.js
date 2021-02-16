import React, { Fragment } from 'react';


// Primary Component
// ------------------------------------

const BlogPost = (props) => {
    let className = "";

    if (!props.imageOnLeft) {
        className = "-right";
    }

    const post = props.post;

    return (
        <a
            aria-label = { `Read more about ${post.title}` }
            className  = {`o-rhythm__row m-blog-post ${className}`}
            href       = { props.url }>
            {props.imageOnLeft &&
                <Fragment>
                    <BlogPostImage post = { post } />
                    <div className="m-blog-post__details">
                        <h2>{ post.category }</h2>
                        <h3><span>{ post.title }</span></h3>
                        <p>by { post.author.join(" & ") }</p>
                    </div>
                </Fragment>
            }

            {!props.imageOnLeft &&
                <Fragment>
                    <div className="m-blog-post__details -tablet-and-desktop-only">
                        <h2>{ post.category }</h2>
                        <h3><span>{ post.title }</span></h3>
                        <p>by { post.author.join(" & ") }</p>
                    </div>
                    <BlogPostImage post = { post } />
                    <div className="m-blog-post__details -phone-only">
                        <h2>{ post.category }</h2>
                        <h3><span>{ post.title }</span></h3>
                        <p>by { post.author.join(" & ") }</p>
                    </div>
                </Fragment>
            }
        </a>
    );
};


// Secondary Components
// ------------------------------------

const BlogPostImage = (props) => (
    <div className="m-blog-post__image">
        <img
            src = { props.post.tileImage.image.childImageSharp.fluid.src }
            alt = { props.post.tileImage.description } />
    </div>
);


// Exports
// ------------------------------------

export default BlogPost;