import * as React    from 'react';
import ProjectForm   from '../molecules/ProjectForm';
import InfoForm      from '../molecules/InfoForm';
import CatamaranForm from '../molecules/CatamaranForm';


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
        this._deactiveFormBack  = this._deactiveForm.bind(this);
        this._activateForm      = this._activateForm.bind(this);
        this._returnForm        = this._returnForm.bind(this);
        this._updateProgressBar = this._updateProgressBar.bind(this);
        this._isSubmitted       = this._isSubmitted.bind(this);
    }

    _onFormTypeChange(e) {
        this.setState({ activeForm: e.target.value });
    }

    _deactiveForm(e) {
        e.preventDefault();
        this.setState({
            formActive: false,
            activeForm: '',
        });
    }

    _activateForm(e) {
        e.preventDefault();
        if (this.state.activeForm) {
            this.setState({
                formActive: true,
            });
        }
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
            });
        }
    }

    _returnForm() {
        return (
            <div>
                <ProjectForm
                    isActive            = { this.state.activeForm === "project" }
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted }
                    lightTheme          = { this.props.lightTheme } />
                <InfoForm
                    isActive            = { this.state.activeForm === "quick-info" }
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted }
                    lightTheme          = { this.props.lightTheme } />
                <CatamaranForm
                    isActive            = { this.state.activeForm === "start-ups" }
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

        let radioInputClass = "a-radio";
        radioInputClass += this.props.lightTheme ? " -light " : "";

        let buttonClass = "a-button";
        buttonClass += this.props.lightTheme ? " -light " : "";
        buttonClass += this.state.activeForm === "" ? " -disabled" : "";

        const progressBarWidth = {
            width: this.state.percentComplete + "%",
        };

        let headerClass = this.props.lightTheme ? " -light " : "";

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
                        <div className = "o-rhythm__container">
                            <div className = "o-contact-form__wrapper">
                                <header className = {headerClass} aria-label="Contact form header">what can we help you with?</header>
                                <fieldset className = "-space">
                                    <input
                                        onChange  = { this._onFormTypeChange }
                                        checked   = { this.state.activeForm === "project" }
                                        className = { radioInputClass }
                                        type      = "radio"
                                        name      = "type"
                                        value     = "project"
                                        id        = "project"/>
                                    <label htmlFor="project">start a project together</label>
                                </fieldset>
                                <fieldset className = "-space">
                                    <input
                                        onChange  = { this._onFormTypeChange }
                                        checked   = { this.state.activeForm === "quick-info" }
                                        className = { radioInputClass }
                                        type      = "radio"
                                        name      = "type"
                                        value     = "quick-info"
                                        id        = "quick-info"/>
                                    <label htmlFor="quick-info">get quick info</label>
                                </fieldset>
                                <fieldset className = "-space">
                                    <input
                                        onChange  = { this._onFormTypeChange }
                                        checked   = { this.state.activeForm === "start-ups" }
                                        className = { radioInputClass }
                                        type      = "radio"
                                        name      = "type"
                                        value     = "start-ups"
                                        id        = "start-ups"/>
                                    <label htmlFor="start-ups">talk start-ups (catamaran)</label>
                                </fieldset>
                                <div className = "o-contact-form__buttons -space">
                                    <a
                                        onClick   = { this._deactiveForm }
                                        className = { `${buttonClass} -disabled` }>
                                        Go Back
                                    </a>
                                    <a
                                        onClick   = { this._activateForm }
                                        className = { buttonClass} >
                                        Next
                                    </a>
                                </div>
                            </div>
                        </div>
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
