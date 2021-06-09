import React, { useState, useEffect }  from 'react';
import scrollTo                        from 'gatsby-plugin-smoothscroll';
import { Helmet }                      from 'react-helmet';
import Header                          from './molecules/Header';
import Footer                          from './molecules/Footer';
import useSiteMetadata                 from './SiteMetadata';
import Menu                            from './organisms/Menu';
import { withPrefix }                  from 'gatsby';

const TemplateWrapper = ({
  children,
  pageTitle,
  data,
  hideNavigation,
  scrollTop,
  pageClassName,
  showFooterDividerLine
}) => {
  let { title, description, socialDescription } = useSiteMetadata();
  const [menuToggled, setMenuToggled]           = useState(false);
  const [menuOpen, setMenuOpen]                 = useState(false);
  let modalMenuButton                           = null;
  let canonicalUrl                              = data?.canonicalUrl != null ? data.canonicalUrl : "/";

  // Set all of the SEO information needed for the page.
  if (data && data.seo) {
    title             = data.seo.metaTitle;
    description       = data.seo.metaDescription;
    description       = data.seo.metaDescription;
    socialDescription = data.seo.socialShareCopy;
  }

  // After the menu has been toggled and closed, we need
  // to set the focus back on the menu toggle button (hamburger)
  // for accessibility.
  useEffect(() => {
    if (menuToggled && !menuOpen && modalMenuButton) {
      modalMenuButton.focus();
    }
  }, [menuOpen, menuToggled])

  // Open and close events for the menu
  const onMenuClose = () => {
    setMenuOpen(false);
  };

  const onMenuOpen = () => {
    setMenuOpen(true);
    setMenuToggled(true);
  };

  const scrollToMainContent = (e) => {
    e.preventDefault();
    scrollTo("#main-content");
  };

  return (
    <div>
      <Helmet>
        <html lang="en" className={menuOpen ? "-menu-open" : ""} />
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
        <meta property="og:url" content={ canonicalUrl } />
        <meta property="og:image" content="/img/og-image.png" />
      </Helmet>
      <div className={pageClassName ? pageClassName : ""} aria-hidden={menuOpen}>
        <a
          className = "a-skip-link"
          onClick   = { (e) => scrollToMainContent(e) }
          tabIndex  = "1"
          href      = "#main-content">
          Skip<span> to Main Content</span>
        </a>
        <Header
          onMenuOpen     = { onMenuOpen }
          pageTitle      = { pageTitle }
          menuButtonRef  = { n => modalMenuButton = n }
          hideNavigation = { hideNavigation }
          scrollTop      = { scrollTop } />
        {children}
        <Footer showDividerLine={showFooterDividerLine} />
      </div>
      <Menu
        onClose = { onMenuClose }
        open    = { menuOpen } />
    </div>
  )
}

export default TemplateWrapper
