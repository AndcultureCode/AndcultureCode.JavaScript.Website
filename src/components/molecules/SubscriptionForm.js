import React                   from 'react';
import Input                   from '../atoms/Input';
import Textarea                from '../atoms/Textarea';
import {submitLandingFormOne}  from '../../../lambda/fauna-create';

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

const SubscriptionForm = class extends React.Component {
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
console.log('from data', this.state.formData);
console.log('fingerprint', this.props.fingerprint);
        submitLandingFormOne(this.state.formData.email, this.props.fingerprint);
        this.setState({ submitted: true });
    }

    _validateFormData = () => {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (pattern.test(this.state.formData.email)) {
            this.setState({ formIsValid: true });
            return;
        }

        this.setState({ formIsValid: false });
    }

    _setInputValue = (name, value) => {
        console.log(name, value);
        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.formData !== prevState.formData) {
            this._validateFormData();
        }
    }

    render() {
        let formClass   = 'o-subscription-form';

        let buttonClass = 'a-button';
        buttonClass += this.props.lightTheme ? ' -light ' : '';
        buttonClass += this.state.formIsValid ? '' : " -disabled";

        const headerClass = this.props.lightTheme ? " -light " : "";

        return (
            <form className = { formClass } name={ this.props.formName } method="POST" data-netlify="true">
                <div className = "o-subscription-form__container">
                    <div className = "o-subscription-form__wrapper">
                        {
                            this.state.submitted &&
                            <React.Fragment>
                                <h2 className={ headerClass } aria-label="Subscription form header">thank you!</h2>
                                <p>Keep an eye on your inbox for updates.</p>
                            </React.Fragment>
                        }
                        {
                            !this.state.submitted &&
                            <React.Fragment>
                                <h2 className={ headerClass } aria-label="Subscription form header">{ this.props.header }</h2>
                                <p>{ this.props.subHeader }</p>
                                <input type = "hidden" data-netlify="true" />
                                <input type="hidden" name="form-name" value={ this.props.formName } />
                                <Input
                                    description        = { this.props.description }
                                    type               = "email"
                                    name               = "email"
                                    inputValueCallback = { this._setInputValue }
                                    isRequired         = { true }
                                    lightTheme         = { this.props.lightTheme }
                                    value              = { this.state.formData.name }
                                    id                 = "subscription-name" />
                                <div className = "o-subscription-form__buttons">
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

export default SubscriptionForm
