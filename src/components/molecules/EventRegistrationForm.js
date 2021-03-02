import React           from "react";
import {
    EMAILPATTERN,
    PHONEEXTENSIONPATTERN,
    PHONEPATTERN
}                      from "../../constants/data-validation-patterns";
import Input           from "../atoms/Input";
import { StringUtils } from '../../utils/stringUtils';

const EventRegistrationForm = class extends React.Component {
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
        this._submitRegistrationForm(this.state.formData, window.location.href, document.title);
        this.setState({ submitted: true });
    }

    _submitRegistrationForm = (formData, pageUri, pageName) => {
        const pageContext = { pageUri: pageUri, pageName: pageName };
        const portalId    = process.env.GATSBY_HUBSPOT_PORTAL_KEY;
        const formId      = process.env[this.props.formKey];

        // hubspotFormUrl is built using https://api.hsforms.com/submissions/v3/integration/submit/portalId/formId
        const hubspotFormUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;



        const requestBody = {
            skipValidation: true,
            fields: [
                {
                    name: "name",
                    value: formData.name ?? "",
                },
                {
                    name: "email",
                    value: formData.email ?? "",
                },
                {
                    name: "jobtitle",
                    value: formData.title ?? "",
                },
                {
                    name: "phone",
                    value: formData.phone ?? "",
                },
                {
                    name: "extension",
                    value: formData.extension ?? "",
                },
                {
                    name: "company",
                    value: formData.companyName ?? "",
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

    _validateFormData = () => {
        const { formData } = this.state;

        const isNameValid      = StringUtils.hasValue(formData.name);
        const isPhoneValid     = StringUtils.isEmpty(formData.phone) || PHONEPATTERN.test(formData.phone);
        const isExtensionValid = StringUtils.isEmpty(formData.extension) || PHONEEXTENSIONPATTERN.test(formData.extension);
        const isEmailValid     = EMAILPATTERN.test(formData.email);

        const isDataValid = isNameValid && isPhoneValid && isExtensionValid && isEmailValid;

        this.setState({ formIsValid: isDataValid });
    }

    _setInputValue = (name, value) => {
        // clear phone extension when phone field is empty
        if (name.toString() === "phone" && StringUtils.isEmpty(value)) {
            this.setState({
                formData: {...this.state.formData,
                    phone:     "",
                    extension: ""
                }});
            return;
        }

        this.setState({ formData: {...this.state.formData, [name]: value }});
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.formData !== prevState.formData) {
            this._validateFormData();
        }
    }

    render() {
        const formClass      = "o-registration-form";
        const { formData }   = this.state;
        const { lightTheme } = this.props;

        let buttonClass = "a-button";
        buttonClass += lightTheme ? " -light " : "";
        buttonClass += this.state.formIsValid ? "" : " -disabled";

        const headerClass = lightTheme ? " -light " : "";


        return (
            <form className = { formClass }
                name         = { this.props.formName }
                method       = "POST"
                data-netlify = "true">
                <div className = { `${ formClass }__container` }>
                    <div className = { `${ formClass }__wrapper` }>
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
                                <div className = { `${ formClass }__input-container` }>
                                    <div className= "-left">
                                        <Input
                                            id                 = "registration_form_name_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { true }
                                            lightTheme         = { lightTheme }
                                            name               = "name"
                                            type               = "text"
                                            value              = { formData.name }/>
                                        <Input
                                            id                 = "registration_form_title_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { false }
                                            lightTheme         = { lightTheme }
                                            name               = "title"
                                            type               = "text"
                                            value              = { formData.title }/>
                                        <Input
                                            id                 = "registration_form_company_name_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { false }
                                            lightTheme         = { lightTheme }
                                            name               = "companyName"
                                            placeholder        = "company name"
                                            type               = "text"
                                            value              = { formData.companyName }/>
                                    </div>
                                    <div className = "-right">
                                        <Input
                                            id                 = "registration_form_email_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { true }
                                            lightTheme         = { lightTheme }
                                            name               = "email"
                                            type               = "email"
                                            value              = { formData.email }/>
                                        <Input
                                            id                 = "registration_form_phone_number_input"
                                            inputValueCallback = { this._setInputValue }
                                            isRequired         = { false }
                                            lightTheme         = { lightTheme }
                                            name               = "phone"
                                            placeholder        = "phone number"
                                            type               = "text"
                                            value              = { formData.phone }/>
                                        <Input
                                            id                 = "registration_form_phone_extension_input"
                                            inputValueCallback = { this._setInputValue }
                                            isDisabled         = { StringUtils.isEmpty(formData.phone) }
                                            isRequired         = { false }
                                            lightTheme         = { lightTheme }
                                            name               = "extension"
                                            type               = "text"
                                            value              = { formData.extension }/>
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

export default EventRegistrationForm
