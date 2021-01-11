import React                   from 'react';
import { TimelineMax, Power1 } from 'gsap';
import { FORMVALUES }          from "./ContactForm";

const ContactFormAnimation = (props) => {
    const onSelectionClick = (value) => {
        const selectedOptionClass  = document.querySelector(`.form-button.-${value}`);
        const remainingOptionClass = document.querySelectorAll(`.form-button:not(.-${value})`);
        const formHeaderClass      = document.querySelector('.o-contact-form-header');
        const timeline             = new TimelineMax();

        // set original state of header and form options
        timeline.set(selectedOptionClass, { opacity : 1, x: "0%" })
        timeline.set(formHeaderClass, { opacity: 1 })
        timeline.set(remainingOptionClass, { opacity: 1 })

        // fly in selected form option
        timeline.to(selectedOptionClass, 0.2, {
            x:       '-10%',
            opacity: 0,
            ease:    Power1.easeInOut,
            delay: 0
        })

        // fade out form header and remaining options
        timeline.to(formHeaderClass, 0.2, {
            opacity: 0,
            ease:    Power1.easeOut
        }, 0.5)

        timeline.to(remainingOptionClass, 0.2, {
            opacity: 0,
            ease:    Power1.easeOut
        }, 0.5)

        // render the form on enter or clicking Next
        setTimeout(() => props.onFormTypeChange(value), 900);
    }

    return (
        <div className = "o-rhythm__container">
            <div className = "o-contact-form__wrapper">
                <header
                    aria-label = "Contact form header"
                    className  = { props.headerClass }>
                    what can we help you with?
                </header>
                <fieldset className = "-space">
                    <legend>what can we help you with?</legend>
                    <button
                        className = { `${props.buttonClass} -${FORMVALUES.Project}`  }
                        onClick   = { () => onSelectionClick(FORMVALUES.Project) }>
                        start a project together
                    </button>
                    <br/>
                    <button
                        className = { `${props.buttonClass} -${FORMVALUES.QuickInfo}` }
                        onClick   = { () => onSelectionClick(FORMVALUES.QuickInfo) }>
                        get quick info
                    </button>
                    <br/>
                    <button
                        className = { `${props.buttonClass} -${FORMVALUES.StartUps}` }
                        onClick   = { () => onSelectionClick(FORMVALUES.StartUps) }>
                        talk start-ups (catamaran)
                    </button>
                </fieldset>
            </div>
        </div>
    )
}

export default ContactFormAnimation;