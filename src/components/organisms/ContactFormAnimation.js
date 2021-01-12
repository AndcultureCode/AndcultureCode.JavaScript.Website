import React                         from 'react';
import { gsap }                      from 'gsap';
import { FORMVALUES }                from "./ContactForm";

const ContactFormAnimation = (props) => {
    const onSelectionClick = (value) => {
        const selectedOptionClass  = document.querySelector(`.form-button.-${value}`);
        const remainingOptionClass = document.querySelectorAll(`.form-button:not(.-${value})`);
        const formHeaderClass      = document.querySelector('.o-contact-form-header');
        const tl                   = gsap.timeline();

        // fly out selected form option
        tl.fromTo(
            selectedOptionClass,
            { opacity: 1, x: "0%" },
            {
                duration: 0.3,
                x:       '-10%',
                opacity: 0,
                ease:    "power1.inOut",
                delay: 0
            }
        );

        // fade out form header and remaining options
        tl.fromTo(
            [formHeaderClass, remainingOptionClass],
            { opacity: 1 },
            {
                duration: 0.3,
                opacity: 0,
                ease:    "power1.out"
            }
        );

        // render the form on enter or clicking Next
        setTimeout(() => props.onFormTypeChange(value), 700);
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