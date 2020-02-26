import React                   from 'react';
import Input                   from '../atoms/Input';
import Textarea                from '../atoms/Textarea';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const ProjectForm = class extends React.Component {
    constructor(props) {
        super(props); 

        this.state = {
            activeQuestion:  1,
            totalQuestions:  6,
            formData:        {},
        }

        this._onNextClick       = this._onNextClick.bind(this);
        this._onBackClick       = this._onBackClick.bind(this);
        this._onSubmitClick     = this._onSubmitClick.bind(this);
        this._caclulateProgress = this._caclulateProgress.bind(this);
        this._setInputValue     = this._setInputValue.bind(this);
    }

    _onNextClick() {
        if (this.state.activeQuestion === this.state.totalQuestions) {
            this._caclulateProgress(1);
            return;
        }

        this.setState({
            activeQuestion:  this.state.activeQuestion + 1,
        }, this._caclulateProgress(1));
    }

    _onBackClick() {
        if (this.state.activeQuestion === 1) {
            this._caclulateProgress(0);
            return;
        }

        this.setState({
            activeQuestion:  this.state.activeQuestion  - 1,
        }, this._caclulateProgress(0));
    }

    _onSubmitClick(e) {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact-project", ...this.state.formData })
        })
            .then(() =>
                this._caclulateProgress(1)
            )
            .catch(error => alert(error));

        e.preventDefault();
    }

    _validateFormData() {
        if (this.state.activeQuestion === 1 && this.state.formData.name && this.state.formData.name !== "") {
            return false;
        }

        if (this.state.activeQuestion === 2 && this.state.formData.email && this.state.formData.email !== "") {
            return false;
        }

        if (this.state.activeQuestion === 3 && this.state.formData.phone && this.state.formData.phone !== "") {
            return false;
        }
        
        return true;
    }

    _caclulateProgress(direction) {
        let percentComplete = this.state.activeQuestion / this.state.totalQuestions * 100;
        if (this.state.activeQuestion === this.state.totalQuestions && direction === 1) {
            this.props.isSubmittedCallback(true);
        }

        if (this.state.activeQuestion === 1 && direction === 0) {
            this.props.isSubmittedCallback(false);
        }

        if (direction === 0) {
            percentComplete = (this.state.activeQuestion - 2) / this.state.totalQuestions * 100;
        }

        this._sendData(percentComplete);
    }

    _sendData(percentComplete) {
        this.props.progressCallback(percentComplete);
    }

    _setInputValue(name, value) {
        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    render() {
        let nextButtonClass = 'a-button';
        let formClass   = 'o-contact-form'; 
        let buttonClass = 'a-button';
        formClass += this.props.isActive ? ' -active' : '';

        if (this.state.activeQuestion === this.state.totalQuestions) {
            buttonClass += ' -active'
        }

        if (this._validateFormData()) {
            nextButtonClass += ' -disabled'
        }

        return (
            <form className = { formClass }  name="contact-project" method="POST" data-netlify="true">
                <div className = "o-rhythm__container">
                    <header>start a project together</header>
                    <input type = "hidden" data-netlify="true" />
                    <input type="hidden" name="form-name" value="contact-project" />
                    <Input 
                        className          = { this.state.activeQuestion === 1 ? '-active': '' }
                        type               = "text"
                        name               = "name" 
                        inputValueCallback = { this._setInputValue } 
                        isRequired         = { true }
                        value              = { this.state.formData.name } />
                    <Input 
                        className          = { this.state.activeQuestion === 2 ? '-active': '' }
                        type               = "email"
                        name               = "email" 
                        inputValueCallback = { this._setInputValue } 
                        isRequired         = { true }
                        value              = { this.state.formData.email } />
                    <Input 
                        className          = { this.state.activeQuestion === 3 ? '-active': '' }
                        type               = "number"
                        name               = "phone" 
                        inputValueCallback = { this._setInputValue } 
                        isRequired         = { true }
                        value              = { this.state.formData.phone } />
                    <Input 
                        className          = { this.state.activeQuestion === 4 ? '-active': '' }
                        type               = "text"
                        name               = "industry" 
                        inputValueCallback = { this._setInputValue } 
                        value              = { this.state.formData.industry } />
                    <Input 
                        className          = { this.state.activeQuestion === 5 ? '-active': '' }
                        type               = "text"
                        name               = "job_title" 
                        inputValueCallback = { this._setInputValue } 
                        value              = { this.state.formData.job_title } />
                    <Textarea 
                        className          = { this.state.activeQuestion === 6 ? '-active': '' }
                        name               = "message" 
                        inputValueCallback = { this._setInputValue } 
                        value              = { this.state.formData.message } />
                    <div className = "o-contact-form__buttons">
                        <a
                            onClick   = { this._onBackClick }
                            className = "a-button">
                            Go Back
                        </a>
                        {  // if
                            this.state.activeQuestion !== this.state.totalQuestions &&
                            <a
                                onClick   = { this._onNextClick }
                                className = { nextButtonClass }>
                                Next
                            </a>
                        }
                        <button
                            type      = "submit"
                            onClick   = { this._onSubmitClick }
                            className = {  buttonClass }>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default ProjectForm
