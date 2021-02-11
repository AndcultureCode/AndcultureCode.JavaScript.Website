import React from "react";

const BlogHomepagePost = (props) => (
    <div className="m-blog-homepage">
        <img
            alt={props.blogItem.frontmatter.tileImage.description}
            src={props.blogItem.frontmatter.tileImage.image.childImageSharp.fluid.src}
        />
        <p className="blog-category">{props.category}</p>
        <a href={props.url}>{props.linkText}</a>
        <p className="blog-author">by {props.author.join(", ")}</p>
    </div>
);

export default BlogHomepagePost;
