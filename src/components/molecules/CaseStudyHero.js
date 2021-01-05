import React from 'react';

const CaseStudyHero = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const backgroundStyle = {
      background: this.props.color,
    }

    let caseStudyClassName = ""

    if (this.props.partnerName === 'PA CareerLink®') {
      caseStudyClassName = "-spaced";
    }

    return (
      <div className = { `o-hero -case-study ${caseStudyClassName}`}>
        <div className = "o-rhythm__container">
          <div className = "o-rhythm__row">
            <div className = "o-hero__title">
              <h1>{ this.props.title }</h1>
            </div>
            <div className = "o-hero__image">
              { this.props.featuredimage ? (
                <img src = { this.props.featuredimage.childImageSharp.fluid.src } alt = { this.props.title } />
              ) : null }
            </div>
          </div>
        </div>
        <div className = "o-hero__meta" style = { backgroundStyle }>
          <div className = "o-rhythm__container">
            <div className = "o-rhythm__row">
              <div className = "o-hero__copy-container">
                { this.props.heroIntroCopy }
              </div>
              {this.props.tags && this.props.tags.length ? (
                <div className = "o-hero__list-container">
                  <div className="o-hero__meta__title">Services</div>
                  <ul className = "o-hero__list">
                    {this.props.tags.map(tag => (
                      <li key={tag + `tag`}>{tag}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default CaseStudyHero;
