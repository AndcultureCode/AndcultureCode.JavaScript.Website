import React, { Fragment }   from 'react';
import IconSocialTwitter     from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn    from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook    from 'components/atoms/IconSocialFacebook';
import IconSocialDribbble    from 'components/atoms/IconSocialDribbble';
import IconSocialGithub      from 'components/atoms/IconSocialGithub';
import IconSocialInstagram   from 'components/atoms/IconSocialInstagram';


// Primary Component
// ------------------------------------

const BlogAuthor = (props) => {
    let className = "";

    if (props.mobileOnly) {
        className = "-mobile-only";
    }

    return (
        <div className={`m-blog-author ${className}`}>
            <div className="m-blog-author__image">
                {props.author.authorPhoto ?
                    <img
                        alt = { props.author.authorPhoto.description }
                        src = { props.author.authorPhoto.image.childImageSharp.fluid.src } />
                    :
                    <img
                        alt = "Scribble Image as Placeholder"
                        src = "/img/authors/author-scribble.png" />
                }
            </div>
            <div className="m-blog-author__details">
                <div
                    aria-label = { `Posted on ${props.postLongDate}` }
                    className  = "m-blog-author__date">
                    <div aria-hidden="true">
                        { props.postDate }
                    </div>
                </div>
                <div className="m-blog-author__divider">|</div>
                <div className="m-blog-author__name-position">
                    <div
                        className  = "m-blog-author__name"
                        aria-label = { `Written by ${props.author.name}, ${props.author.position}`}>
                        <div aria-hidden="true">
                            { props.author.name }
                        </div>
                    </div>
                    <div className="m-blog-author__divider">|</div>
                    <div className="m-blog-author__position" aria-hidden="true">
                        {props.author.position
                            ? props.author.position
                            : "alum"
                        }
                    </div>
                </div>
                {props.author.socialLinks &&
                    <Fragment>
                        <div className="m-blog-author__divider">|</div>
                        <div className="m-blog-author__links">
                            {props.author.socialLinks.map((link, index) => (
                                _getSocialIconLink(link, props.author.name, index)
                            ))}
                        </div>
                    </Fragment>
                }
            </div>
        </div>
    );
};

const _getSocialIconLink = (link, name, index) => {
    let icon = null;

    switch (link.platform.toLowerCase()) {
        case "dribbble":
            icon = <IconSocialDribbble />;
            break;
        case "facebook":
            icon = <IconSocialFacebook />;
            break;
        case "github":
            icon = <IconSocialGithub />;
            break;
        case "instagram":
            icon = <IconSocialInstagram />;
            break;
        case "linkedin":
            icon = <IconSocialLinkedIn />;
            break;
        case "twitter":
            icon = <IconSocialTwitter />;
            break;
    }

    return (
        <a
            aria-label = { `${link.platform} account for ${name}` }
            href       = { link.url }
            key        = { `social-link-${index}` }
            target     = "_blank"
            rel        = "noopener">{ icon }</a>
    );
};


// Exports
// ------------------------------------

export default BlogAuthor;