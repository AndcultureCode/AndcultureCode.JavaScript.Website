import React                     from 'react';
import Input                     from '../atoms/Input';
import Textarea                  from '../atoms/Textarea';
import { submitLandingFormOne }  from '../../../lambda/fauna-create';

// hubspotFormUrl is built using https://api.hsforms.com/submissions/v3/integration/submit/portalId/formId
const hubspotFormUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.GATSBY_HUBSPOT_PORTAL_KEY}/${process.env.GATSBY_HUBSPOT_FORM_KEY}`;

const SubscriptionForm = class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            formData:    {},
            formIsValid: false,
            submitted:   false,
        }
    }

    _submitUserFingerprint = (email, fingerprint, pageName) => {
        const userData = { email: email, fingerprint: fingerprint };

        return fetch("/.netlify/functions/submit-landing-form",
        {
            method: 'POST',
            body: JSON.stringify({ data: userData, page: pageName })
        });
    }

    _submitContactForm = (email, pageUri, pageName) => {
        const pageContext = { pageUri: pageUri, pageName: pageName };
        const requestBody = {
            skipValidation: true,
            fields: [
                {
                    name: "email",
                    value: email,
                }
            ],
            context: pageContext,
        };

        return fetch(hubspotFormUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(requestBody)
        });
    }

    _onSubmitClick = (e) => {
        e.preventDefault();

        if (!this.state.formIsValid) {
            return;
        }
/*---- fingerprinting has been disabled for now ----
        this._submitUserFingerprint(this.state.formData.email, this.props.fingerprint, "about-page");
*/
        this._submitContactForm(this.state.formData.email, window.location.href, document.title);

       // submitLandingFormOne(this.state.formData.email, this.props.fingerprint);
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
