import React           from "react";
import { StringUtils } from '../../utils/stringUtils';

const BlogHomepagePost = (props) => (
    <div className="m-blog-homepage">
        <img
            alt={props.blogItem.frontmatter.tileImage.description}
            src={props.blogItem.frontmatter.tileImage.image.childImageSharp.fluid.src}
        />
        <p className="blog-category">{props.category}</p>
        <a href={props.url}>{props.linkText}</a>
        <p className="blog-author">by {StringUtils.concatenate(props.author)}</p>
    </div>
);

export default BlogHomepagePost;
