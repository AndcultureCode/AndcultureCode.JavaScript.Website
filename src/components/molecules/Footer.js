import React from 'react';
import logo from '../../../static/img/ac_footer_wordmark.svg'; 
import dribble from '../../../static/img/dribble.svg'; 
import twitter from '../../../static/img/twitter.svg'; 
import instagram from '../../../static/img/instagram.svg'; 
import linkedin from '../../../static/img/linkedin.svg'; 
import facebook from '../../../static/img/facebook.svg'; 
import github from '../../../static/img/github.svg'; 

const Footer = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className = "m-footer">
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "m-footer__left o-rhythm__col -span-six">
              <img src = { logo } alt = "andculture" />
            </div>
            <div className = "m-footer__right o-rhythm__col -span-six">
              <div className = "m-footer__contact">
                <a href="tel:7172332881">717.233.2881</a>
              </div>
              <div className = "m-footer__social">
                <a href="">
                  <img src = { dribble } />
                </a>
                <a href="">
                  <img src = { twitter } />
                </a>
                <a href="">
                  <img src = { instagram } />
                </a>
                <a href="">
                  <img src = { facebook } />
                </a>
                <a href="">
                  <img src = { linkedin } />
                </a>
                <a href="">
                  <img src = { github } />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
