import React               from 'react';
import logo                from '../../../static/img/ac_footer_wordmark.svg';
import IconSocialTwitter   from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn  from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook  from 'components/atoms/IconSocialFacebook';
import IconSocialInstagram from 'components/atoms/IconSocialInstagram';
import IconSocialGithub    from 'components/atoms/IconSocialGithub';
import IconSocialDribbble  from 'components/atoms/IconSocialDribbble';
import IconSocialVimeo     from 'components/atoms/IconSocialVimeo'

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let footerClassName = this.props.showDividerLine ? "-divider" : "";

    return (
      <footer className = {`m-footer ${footerClassName}`} aria-label="Page footer">
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "m-footer__left">
              <a
                aria-label = "Go to home page"
                href       = "/">
                <img src = { logo } alt = "Go to home page" />
              </a>
            </div>
            <div className = "m-footer__center">
              <a href="/contact/">contact us</a>
              <a
                aria-label = "Phone 7 1 7. 2 3 3. 2 8 8 1."
                href       = "tel:7172332881">717.233.2881</a>
              <a href="/privacy-policy/">privacy policy</a>
            </div>
            <div className = "m-footer__right">
              <div className = "m-footer__social">
                <a href="https://www.instagram.com/andculture/" target="_blank" aria-label="Instagram account for andculture" rel="noopener noreferrer">
                  <IconSocialInstagram />
                </a>
                <a href="https://dribbble.com/andculture/" target="_blank" aria-label="Dribbble account for andculture" rel="noopener noreferrer">
                  <IconSocialDribbble />
                </a>
                <a href="https://www.linkedin.com/company/andculture/" target="_blank" aria-label="LinkedIn account for andculture" rel="noopener noreferrer">
                  <IconSocialLinkedIn />
                </a>
                <a href="https://twitter.com/andculture/" target="_blank" aria-label="Twitter account for andculture" rel="noopener noreferrer">
                  <IconSocialTwitter />
                </a>
                <a href="https://www.facebook.com/andculture/" target="_blank" aria-label="Facebook account for andculture" rel="noopener noreferrer">
                  <IconSocialFacebook />
                </a>
                <a href="https://github.com/AndcultureCode/" target="_blank" aria-label="GitHub account for andculture" rel="noopener noreferrer">
                  <IconSocialGithub />
                </a>
                <a href="https://vimeo.com/andculturedesigns/" target="_blank" aria-label="Vimeo account for andculture" rel="noopener noreferrer">
                  <IconSocialVimeo />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
