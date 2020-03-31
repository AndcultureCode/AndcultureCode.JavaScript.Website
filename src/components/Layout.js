import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './molecules/Header';
import Footer from './molecules/Footer';
import useSiteMetadata from './SiteMetadata';
import { withPrefix } from 'gatsby';

const TemplateWrapper = ({
  children,
  pageTitle,
  data,
  hideNavigation,
  scrollTop,
  pageClassName,
  showFooterDividerLine
}) => {
  let { title, description, socialDescription, socialImg } = useSiteMetadata();
  if (data) {
    title = data.metaTitle;
    description = data.metaDescription;
    description = data.metaDescription;
    socialDescription = data.socialDescription;
    socialImg = data.socialImg;
  }

  let containerClassName = pageClassName ? pageClassName : "";

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{ title }</title>
        <meta name = "description" content = { description } />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={ title } />
        <meta property="og:description" content={ socialDescription } />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.png" />
      </Helmet>
      <div className={containerClassName}>
        <Header
          pageTitle      = { pageTitle }
          hideNavigation = { hideNavigation }
          scrollTop      = { scrollTop } />
        {children}
        <Footer showDividerLine={showFooterDividerLine} />
      </div>
    </div>
  )
}

export default TemplateWrapper
