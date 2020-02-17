import React from 'react';
import ProjectForm from '../molecules/ProjectForm'
import InfoForm from '../molecules/InfoForm'
import JobForm from '../molecules/JobForm'
import CatamaranForm from '../molecules/CatamaranForm'


const ContactForm = class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            activeForm: '',
            formActive: false,
            percentComplete: 0,
            isSubmitted: false,
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
        this.setState({ formActive: false });
    }

    _activateForm(e) {
        e.preventDefault();
        this.setState({ formActive: true });
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
        if (this.state.activeForm === "project") {
            return (
                <ProjectForm
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted } />
            );
        }
        else if (this.state.activeForm === "quick-info") {
            return (
                <InfoForm
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted } />);
        }
        else if (this.state.activeForm === "join-team") {
            return (
                <JobForm
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted } />);
        }
        else if (this.state.activeForm === "start-ups") {
            return (
                <CatamaranForm
                    progressCallback    = { this._updateProgressBar }
                    isSubmittedCallback = { this._isSubmitted } />);
        } else {
            this.setState({
                activeForm: '',
                formActive: false,
            })
        }
    }

    render() {

        var progressBarWidth = {
            width: this.state.percentComplete + "%",
        };

        return (
            <div className = "o-contact-form__container">
                <div className = "o-contact-form__progress" style = { progressBarWidth }></div>
                <div className = "o-contact-form">
                    <div className = "o-rhythm__container">
                        <h6>Get In Touch</h6>
                    </div>
                    { // if
                        this.state.formActive === false &&
                        this.state.isSubmitted === false &&
                        <div className = "o-rhythm__container">
                            <div>
                                <header>what can we help you with today?</header>
                                <fieldset className = "-space">
                                    <input 
                                        onChange  = { this._onFormTypeChange }
                                        checked   = { this.state.activeForm === "project" }
                                        className = "a-radio" 
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
                                        className = "a-radio" 
                                        type      = "radio" 
                                        name      = "type" 
                                        value     = "quick-info" 
                                        id        = "quick-info"/>
                                    <label htmlFor="quick-info">get quick info</label>
                                </fieldset>
                                <fieldset className = "-space">
                                    <input 
                                        onChange  = { this._onFormTypeChange }
                                        checked   = { this.state.activeForm === "join-team" }
                                        className = "a-radio" 
                                        type      = "radio" 
                                        name      = "type" 
                                        value     = "join-team" 
                                        id        = "join-team"/>
                                    <label htmlFor="join-team">join the team</label>
                                </fieldset>
                                <fieldset className = "-space">
                                    <input 
                                        onChange  = { this._onFormTypeChange }
                                        checked   = { this.state.activeForm === "start-ups" }
                                        className = "a-radio" 
                                        type      = "radio" 
                                        name      = "type" 
                                        value     = "start-ups" 
                                        id        = "start-ups"/>
                                    <label htmlFor="start-ups">talk start-ups (catamaran)</label>
                                </fieldset>
                                <div className = "o-contact-form__buttons -space">
                                    <a 
                                        onClick = { this._deactiveForm }
                                        className = "a-button -disabled">
                                        Go Back
                                    </a>
                                    <a 
                                        onClick = { this._activateForm }
                                        className = "a-button">
                                        Next
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                    { // if
                        this.state.formActive === true &&
                        <div>
                            { this._returnForm() }
                        </div>
                    }
                    { // if
                        this.state.isSubmitted === true &&
                        <div className = "o-contact-form__submitted o-rhythm__container">
                            <h1>Thank you!</h1>
                            <p>We will get back to you as quickly as possible.</p>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default ContactForm;
