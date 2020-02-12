import React from 'react'; 
import logo from '../../../static/img/ac_Logo.svg'

const Header = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className = "m-header">
        <div className = "o-rhythm__container -fluid">
          <a 
            href      = "/" 
            className =  "m-header__logo">
            <img src = { logo } alt="andculture" />
          </a>
          <nav 
            className  = "m-header__navigation" 
            role       = "navigation" 
            aria-label = "main-navigation">
            <a href="">contact us</a>
          </nav>
        </div>
      </header>
     
    )
  }
}

export default Header
