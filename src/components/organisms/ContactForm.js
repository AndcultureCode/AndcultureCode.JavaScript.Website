import * as React           from 'react';
import ProjectForm          from '../molecules/ProjectForm';
import InfoForm             from '../molecules/InfoForm';
import CatamaranForm        from '../molecules/CatamaranForm';
import ContactFormAnimation from "./contactFormAnimation";

export const FORMVALUES = {
    Project:   "project",
    QuickInfo: "quick-info",
    StartUps:  "start-ups",
}

const ContactForm = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeForm:      '',
            formActive:      false,
            isSubmitted:     false,
            percentComplete: 0,
        }

        this._onFormTypeChange  = this._onFormTypeChange.bind(this);
        this._returnForm        = this._returnForm.bind(this);
        this._updateProgressBar = this._updateProgressBar.bind(this);
        this._isSubmitted       = this._isSubmitted.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        // set focus on the next input field when user presses enter or clicks on next
        const nextInputField    = document.querySelector(".o-contact-form.-active fieldset.-active input");
        const nextTextareaField = document.querySelector(".o-contact-form.-active fieldset.-active textarea");

        if (nextInputField != null) {
            nextInputField.focus();
        }
        if (nextTextareaField != null) {
            nextTextareaField.focus();
        }
    }

    _onFormTypeChange(value) {
        this.setState({
            activeForm: value,
            formActive: true
        });
    }

    _updateProgressBar(percentComplete) {
        this.setState({ percentComplete: percentComplete });
    }

    _isSubmitted(isSubmitted) {
        if (isSubmitted === true) {
            this.setState({
                isSubmitted: isSubmitted,
                formActive: false,
            });
        }

        if (isSubmitted === false) {
            this.setState({
                isSubmitted: isSubmitted,
                formActive: false,
                percentComplete: 0,
                activeForm: '',
            });
        }
    }

    _returnForm() {
        return (
            <div>
                <ProjectForm
                    isActive            = { this.state.activeForm === FORMVALUES.Project }
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted }
                    lightTheme          = { this.props.lightTheme } />
                <InfoForm
                    isActive            = { this.state.activeForm === FORMVALUES.QuickInfo }
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted }
                    lightTheme          = { this.props.lightTheme } />
                <CatamaranForm
                    isActive            = { this.state.activeForm === FORMVALUES.StartUps }
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted }
                    lightTheme          = { this.props.lightTheme } />
            </div>
        );
    }

    render() {
        let formContainerClass = "o-contact-form__container";
        formContainerClass += this.state.formActive ? " -active " : "";
        formContainerClass += this.props.lightTheme ? " -light " : "";

        let buttonClass = "form-button";
        buttonClass += this.props.lightTheme ? " -light " : "";
        buttonClass += this.state.formActive ? "-active " : "";

        const progressBarWidth = {
            width: this.state.percentComplete + "%",
        };

        let headerClass = "o-contact-form-header";
        headerClass += this.props.lightTheme ? " -light " : "";

        return (
            <div className = { formContainerClass }>
                <div className = "o-contact-form__progress" style = { progressBarWidth }></div>
                <div className = "o-rhythm__container">
                    <div className = "o-contact-form__wrapper">
                        <div className="o-contact-form__wrapper__heading">Get In Touch</div>
                    </div>
                </div>
                <div className = "o-contact-form -initial">
                    { // if
                        this.state.formActive === false &&
                        this.state.isSubmitted === false &&
                        <ContactFormAnimation
                            buttonClass      = { buttonClass }
                            headerClass      = { headerClass }
                            onFormTypeChange = { this._onFormTypeChange }/>
                    }
                </div>
                <div className = { this.state.formActive ? 'o-contact-form__forms -active' : 'o-contact-form__forms' }>
                    { this._returnForm() }
                </div>
                { // if
                    this.state.isSubmitted === true &&
                    <div className = "o-contact-form__submitted o-rhythm__container">
                        <h1>Thank you!</h1>
                        <p>We will get back to you as quickly as possible.</p>
                    </div>
                }
            </div>
        )
    }
}

export default ContactForm;