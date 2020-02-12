import React from 'react'; 

const Header = class extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="m-header">
        <nav role="navigation" aria-label="main-navigation">
          <a href="">contact us</a>
        </nav>
      </header>
     
    )
  }
}

export default Header
