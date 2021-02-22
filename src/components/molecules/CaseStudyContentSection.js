import React from 'react';

const CaseStudyContentSection = (props) => (
    <div className = "o-rhythm__container">
        <div className = {`m-case-study-page-content__copy-section ${props.sectionClassName}`}>
            {props.header && props.header.length > 0 &&
                <div className = "content__header -mobile-and-sm-desktop-only">{ props.header }</div>
            }

            <header className = "-push-three">{ props.title }</header>
            <div className = "o-rhythm__row">
                {props.header && props.header.length > 0 &&
                    <div className = "content__header -desktop-only">{ props.header }</div>
                }
                <div className = "content__copy">
                    { props.children }
                </div>
            </div>
        </div>
    </div>
);

export default CaseStudyContentSection;