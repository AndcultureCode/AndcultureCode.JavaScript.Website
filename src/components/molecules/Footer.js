import React               from 'react';
import logo                from '../../../static/img/ac_footer_wordmark.svg';
import IconSocialTwitter   from 'components/atoms/IconSocialTwitter';
import IconSocialLinkedIn  from 'components/atoms/IconSocialLinkedIn';
import IconSocialFacebook  from 'components/atoms/IconSocialFacebook';
import IconSocialInstagram from 'components/atoms/IconSocialInstagram';
import IconSocialGithub    from 'components/atoms/IconSocialGithub';
import IconSocialDribbble  from 'components/atoms/IconSocialDribbble';

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
                <img src = { logo } alt = "" />
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
                <a href="https://www.instagram.com/andculture/" target="_blank" aria-label="Instagram account for andculture">
                  <IconSocialInstagram />
                </a>
                <a href="https://dribbble.com/andculture/" target="_blank" aria-label="Dribbble account for andculture">
                  <IconSocialDribbble />
                </a>
                <a href="https://www.linkedin.com/company/andculture/" target="_blank" aria-label="LinkedIn account for andculture">
                  <IconSocialLinkedIn />
                </a>
                <a href="https://twitter.com/andculture/" target="_blank" aria-label="Twitter account for andculture">
                  <IconSocialTwitter />
                </a>
                <a href="https://www.facebook.com/andculture/" target="_blank" aria-label="Facebook account for andculture">
                  <IconSocialFacebook />
                </a>
                <a href="https://github.com/AndcultureCode/" target="_blank" aria-label="GitHub account for andculture">
                  <IconSocialGithub />
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
