import React from 'react';
import Input from '../atoms/Input';

const RegistrationForm = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData:    {},
            formIsValid: false,
            submitted:   false,
        }
    }

    _onSubmitClick = (e) => {
        e.preventDefault();

        if (!this.state.formIsValid) {
            return;
        }
console.log(this.state)
        this.setState({ submitted: true });
    }

    _validateFormData = () => {
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailPattern.test(this.state.formData.email)) {
            this.setState({ formIsValid: true });
            return;
        }

        this.setState({ formIsValid: false });
    }

    _setInputValue = (name, value) => {
        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.formData !== prevState.formData) {
            this._validateFormData();
        }
    }

    render() {
        let formClass   = 'o-registration-form';

        let buttonClass = 'a-button';
        buttonClass += this.props.lightTheme ? ' -light ' : '';
        buttonClass += this.state.formIsValid ? '' : " -disabled";

        const headerClass = this.props.lightTheme ? " -light " : "";

        return (
            <form className = { formClass } name={ this.props.formName } method="POST" data-netlify="true">
                <div className = { `${formClass}__container` }>
                    <div className = { `${formClass}__wrapper` }>
                        {
                            this.state.submitted &&
                            <React.Fragment>
                                <h2 className = { headerClass } aria-label="Registration form header">thank you!</h2>
                                <p>Keep an eye on your inbox for updates.</p>
                            </React.Fragment>
                        }
                        {
                            !this.state.submitted &&
                            <React.Fragment>
                                <h2 className = { headerClass } aria-label="Registration form header">{ this.props.header }</h2>
                                <p>{ this.props.subHeader }</p>
                                <div className = { `${formClass}__input-container` }>
                                    <div className= "-left">
                                        <Input
                                            type               = "text"
                                            name               = "name"
                                            id                 = "registration_form_name_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { true }
                                            lightTheme         = { this.props.lightTheme }
                                            value              = { this.state.formData.name }/>
                                        <Input
                                            type               = "text"
                                            name               = "title"
                                            id                 = "registration_form_title_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { false }
                                            lightTheme         = { this.props.lightTheme }
                                            value              = { this.state.formData.title }/>
                                        <Input
                                            type               = "text"
                                            name               = "companyName"
                                            id                 = "registration_form_company_name_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { false }
                                            lightTheme         = { this.props.lightTheme }
                                            placeholder        = "company name"
                                            value              = { this.state.formData.companyName }/>
                                    </div>
                                    <div className = "-right">
                                        <Input
                                            type               = "email"
                                            name               = "email"
                                            id                 = "registration_form_email_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { true }
                                            lightTheme         = { this.props.lightTheme }
                                            value              = { this.state.formData.email }/>
                                        <Input
                                            type               = "number"
                                            name               = "phoneNumber"
                                            id                 = "registration_form_phone_number_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { false }
                                            lightTheme         = { this.props.lightTheme }
                                            placeholder        = "phone number"
                                            value              = { this.state.formData.phoneNumber }/>
                                    </div>
                                </div>
                                <div className = "o-registration-form__buttons">
                                    <button
                                        type      = "submit"
                                        onClick   = { this._onSubmitClick }
                                        className = { buttonClass }>
                                        Submit
                                    </button>
                                </div>
                            </React.Fragment>
                        }
                    </div>
                </div>
            </form>
        )
    }
}

export default RegistrationForm
